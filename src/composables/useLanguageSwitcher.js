import { useRoute, useRouter } from 'vue-router'
import {
  DEFAULT_LOCALE,
  LOCALES,
  getLocaleByUrl,
  getLocaleKeyByI18n,
  getRouteKeyFromName
} from 'src/i18n/locales'

const LOCALE_STORAGE_KEY = 'app-locale'

export function useLanguageSwitcher() {
  const route = useRoute()
  const router = useRouter()

  const switchLanguage = async (targetLocaleKey) => {
    const targetLocale = LOCALES[targetLocaleKey]

    if (!targetLocale) return

    const currentLocale = getLocaleByUrl(route.path)

    if (currentLocale === targetLocale.i18n) return

    const routeKey = getRouteKeyFromName(route.name)

    const targetRouteName = `${targetLocale.routePrefix}${routeKey}`

    if (!process.env.SERVER) {
      localStorage.setItem(LOCALE_STORAGE_KEY, targetLocale.i18n)
    }

    await router.push({
      name: targetRouteName,
      params: route.params,
      query: route.query,
      hash: route.hash,
    })
  }

  const currentLocaleKey = () => {
    const currentLocale = getLocaleByUrl(route.path)
    return getLocaleKeyByI18n(currentLocale)
  }

  return {
    switchLanguage,
    currentLocaleKey,
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
  }
}
