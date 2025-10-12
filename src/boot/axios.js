import { defineBoot } from '#q-app/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api',
})

api.defaults.headers.common['Content-Type'] = 'application/json'
api.defaults.headers.common['Accept'] = 'application/json'

export default defineBoot(({ app, router }) => {
  const notifySuccess = (message) => {
    Notify.create({
      message,
      color: 'positive',
      icon: 'check_circle',
      position: 'top',
      timeout: 1000,
      actions: [{ icon: 'close', color: 'white' }]
    })
  }

  const notifyError = (message) => {
    Notify.create({
      message,
      color: 'negative',
      icon: 'error',
      position: 'top',
      timeout: 1000,
      actions: [{ icon: 'close', color: 'white' }]
    })
  }

  api.interceptors.response.use(
    (response) => {
      if (response.data?.message) {
        notifySuccess(response.data.message)
      }
      return response
    },
    (error) => {
      if (error.response) {
        const { status, data } = error.response

        if (status === 401) {
          notifyError('Session expired. Please log in again.')
          router.push({ name: 'login' })
        } else {
          notifyError(data?.message || 'Unknown error')
        }
      } else {
        notifyError('No connection to the server')
      }
      return Promise.reject(error)
    }
  )

  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
