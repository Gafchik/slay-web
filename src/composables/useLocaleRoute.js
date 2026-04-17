import { useRoute } from 'vue-router'
import { getRouteNameByPath } from 'src/i18n/locales'

export function useLocaleRoute() {
  const route = useRoute()

  const localeRouteName = (routeKey) => {
    return getRouteNameByPath(route.path, routeKey)
  }

  const localeTo = (routeKey, extra = {}) => {
    return {
      name: localeRouteName(routeKey),
      ...extra,
    }
  }

  return {
    localeRouteName,
    localeTo,
  }
}
