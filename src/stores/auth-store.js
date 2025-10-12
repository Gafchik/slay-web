import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios'
import { useAppStore } from 'src/stores/app-store'
import Cookies from 'js-cookie'

export const useAuthStore = defineStore('useAuthStore', () => {
  const appStore = useAppStore()
  const { showLoading, hideLoading, notifyError } = appStore

  const accessToken = ref(Cookies.get('access_token') || null)
  const user = ref(null)

  const isLoggedIn = computed(() => !!accessToken.value)

  /** Получить пользователя по токену */
  const getUserData = async () => {
    if (!accessToken.value) return
    showLoading()
    try {
      const { data } = await api.post('/user')
      user.value = data
    } finally {
      hideLoading()
    }
  }

  /** Регистрация */
  const registerRequest = async (userData) => {
    showLoading()
    try {
      const { data } = await api.post('/register', userData)
      if (data?.access_token) {
        setAccessToken(data.access_token)
        user.value = data.user
        return { success: true, data }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ошибка регистрации'
      notifyError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      hideLoading()
    }
  }

  /** Логин */
  const loginRequest = async (email, password) => {
    showLoading()
    try {
      const { data } = await api.post('/login', { email, password })
      if (data?.access_token) {
        setAccessToken(data.access_token)
        user.value = data.user
        return { success: true, data }
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ошибка входа'
      notifyError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      hideLoading()
    }
  }

  /** Логаут */
  const logoutRequest = async () => {
    // Очищаем токен и данные пользователя
    Cookies.remove('access_token')
    accessToken.value = null
    user.value = null
    
    // Очищаем axios headers
    delete api.defaults.headers.common['Authorization']
    
    return { success: true }
  }

  /** Установить токен в cookie и axios */
  const setAccessToken = (token) => {
    accessToken.value = token
    Cookies.set('access_token', token, { expires: 7 }) // 7 дней, можно поменять
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  /** Проверка и установка токена при старте приложения */
  const initAuth = () => {
    const token = Cookies.get('access_token')
    if (token) {
      setAccessToken(token)
    }
  }

  /** Проверка авторизации для роутов */
  const checkAuth = async () => {
    // Если есть токен, но нет данных пользователя, загружаем их
    if (accessToken.value && !user.value) {
      await getUserData()
    }
    return isLoggedIn.value
  }

  return {
    accessToken,
    user,
    isLoggedIn,
    getUserData,
    registerRequest,
    loginRequest,
    logoutRequest,
    initAuth,
    checkAuth,
  }
})
