export const DEFAULT_LOCALE = 'en-US'

export const LOCALES = {
  en: {
    i18n: 'en',
    url: '',
    routePrefix: 'en_',
    label: 'English',
  },
  ru: {
    i18n: 'ru',
    url: 'ru',
    routePrefix: 'ru_',
    label: 'Русский',
  },
  uk: {
    i18n: 'ua',
    url: 'ua', // если хочешь URL именно /ua
    routePrefix: 'uk_',
    label: 'Українська',
  },
  it: {
    i18n: 'it',
    url: 'it',
    routePrefix: 'it_',
    label: 'Italiano',
  }
}

export const getLocaleByUrl = (path) => {
  const firstSegment = path.split('/').filter(Boolean)[0]

  const matched = Object.values(LOCALES).find(
    (locale) => locale.url && locale.url === firstSegment
  )

  return matched ? matched.i18n : DEFAULT_LOCALE
}

export const getRoutePrefixByPath = (path) => {
  const locale = getLocaleByUrl(path)

  const matched = Object.values(LOCALES).find(
    (item) => item.i18n === locale
  )

  return matched?.routePrefix || LOCALES.en.routePrefix
}

export const detectBrowserLocale = () => {
  const browserLocale = navigator.language?.toLowerCase() || ''

  if (browserLocale.startsWith('ru')) return 'ru'
  if (browserLocale.startsWith('uk')) return 'ua'
  if (browserLocale.startsWith('it')) return 'it'

  return DEFAULT_LOCALE
}

export const getUrlByI18nLocale = (locale) => {
  const matched = Object.values(LOCALES).find(
    (item) => item.i18n === locale
  )

  return matched?.url || ''
}

export const getRouteNameByPath = (path, routeKey) => {
  const routePrefix = getRoutePrefixByPath(path)
  return `${routePrefix}${routeKey}`
}

export const getLocaleKeyByI18n = (locale) => {
  const matched = Object.entries(LOCALES).find(
    ([, item]) => item.i18n === locale
  )

  return matched?.[0] || 'en'
}

export const getRouteKeyFromName = (routeName = '') => {
  if (!routeName || typeof routeName !== 'string') return ''

  const matchedPrefix = Object.values(LOCALES).find(
    (locale) => routeName.startsWith(locale.routePrefix)
  )

  if (!matchedPrefix) return routeName

  return routeName.replace(matchedPrefix.routePrefix, '')
}
