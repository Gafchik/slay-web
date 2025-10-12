import { defineRouter } from '#q-app/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth-store'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  // Guard для проверки авторизации
  Router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    
    // Сначала проверяем авторизацию для получения актуального статуса
    const isAuthenticated = await authStore.checkAuth()
    
    // Если пользователь авторизован и пытается зайти на страницы логина/регистрации
    if ((to.name === 'login' || to.name === 'registration') && isAuthenticated) {
      next({ name: 'home' })
      return
    }
    
    // Проверяем, требует ли роут авторизации
    if (to.meta.requiresAuth && !isAuthenticated) {
      // Если не авторизован, перенаправляем на страницу логина
      next({ name: 'login' })
      return
    }
    
    next()
  })

  return Router
})
