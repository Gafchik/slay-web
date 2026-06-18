import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { useAppStore } from 'stores/app-store'

export const useWebLoginStore = defineStore('useWebLoginStore', () => {
  const appStore = useAppStore()
  const { showLoading, hideLoading, notifyError } = appStore

  const openDesktopApp = async () => {
    showLoading()

    try {
      const { data } = await api.post('/web-login/ticket')

      if (data?.deep_link) {
        window.location.href = data.deep_link
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Cannot open Slay app'
      notifyError(errorMessage)
    } finally {
      hideLoading()
    }
  }

  return {
    openDesktopApp,
  }
})
