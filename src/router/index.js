import { defineRouter } from '#q-app/wrappers'
import {
  DEFAULT_LOCALE,
  getLocaleByUrl,
  getRoutePrefixByPath,
  detectBrowserLocale,
  getUrlByI18nLocale
} from 'src/i18n/locales'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'src/stores/auth-store'
import { i18n } from 'boot/i18n'

const LOCALE_STORAGE_KEY = 'app-locale'

export default defineRouter(function () {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })

  Router.beforeEach(async (to, from, next) => {
    const currentLocale = getLocaleByUrl(to.path)
    const localePrefix = getRoutePrefixByPath(to.path)

    i18n.global.locale.value = currentLocale

    if (!process.env.SERVER) {
      const cameFromExplicitEnglishUrl =
        to.redirectedFrom?.path === '/en' ||
        to.redirectedFrom?.path?.startsWith('/en/')

      if (cameFromExplicitEnglishUrl) {
        localStorage.setItem(LOCALE_STORAGE_KEY, DEFAULT_LOCALE)
      } else {
        localStorage.setItem(LOCALE_STORAGE_KEY, currentLocale)
      }

      if (to.path === '/') {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY)

        if (savedLocale && savedLocale !== DEFAULT_LOCALE) {
          const savedLocaleUrl = getUrlByI18nLocale(savedLocale)

          if (savedLocaleUrl) {
            next(`/${savedLocaleUrl}`)
            return
          }
        }

        if (!savedLocale) {
          const browserLocale = detectBrowserLocale()

          if (browserLocale !== DEFAULT_LOCALE) {
            const localeUrl = getUrlByI18nLocale(browserLocale)

            if (localeUrl) {
              next(`/${localeUrl}`)
              return
            }
          }
        }
      }
    }

    const authStore = useAuthStore()
    const isAuthenticated = await authStore.checkAuth()

    if (
      (to.name === `${localePrefix}login` ||
        to.name === `${localePrefix}registration`) &&
      isAuthenticated
    ) {
      next({ name: `${localePrefix}home` })
      return
    }

    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: `${localePrefix}login` })
      return
    }

    next()
  })

  return Router
})
