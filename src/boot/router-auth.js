import { boot } from 'quasar/wrappers'
import { useAuthStore } from 'src/stores/auth-store'

export default boot(() => {
  // Инициализируем auth store при загрузке приложения
  const authStore = useAuthStore()
  authStore.initAuth()
})
