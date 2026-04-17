import { LOCALES, DEFAULT_LOCALE } from 'src/i18n/locales'

const makeChildren = (prefix = '') => [
  {
    path: '',
    name: `${prefix}home`,
    component: () => import('pages/home/HomePage.vue')
  },
  {
    path: 'login',
    name: `${prefix}login`,
    component: () => import('pages/Auth/LoginPage.vue'),
  },
  {
    path: 'registration',
    name: `${prefix}registration`,
    component: () => import('pages/Auth/RegistrationPage.vue'),
  },
  {
    path: 'faq',
    name: `${prefix}faq`,
    component: () => import('pages/info/FaqPage.vue')
  },
  {
    path: 'download',
    name: `${prefix}download`,
    component: () => import('pages/download/DownloadPage.vue'),
  },
  {
    path: 'contact-us',
    name: `${prefix}contact_us`,
    component: () => import('pages/contact-us/ContactUsPage.vue')
  },
  {
    path: 'terms-of-services',
    name: `${prefix}terms_of_services`,
    component: () => import('pages/info/TermsOfService.vue')
  },
  {
    path: 'privacy-policy',
    name: `${prefix}privacy_policy`,
    component: () => import('pages/info/PrivacyPolicy.vue')
  },
  {
    path: 'pricing',
    name: `${prefix}pricing`,
    component: () => import('pages/pricing/PricingPage.vue')
  },
  {
    path: 'profile',
    name: `${prefix}profile`,
    component: () => import('pages/profile/ProfilePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: 'auth/callback',
    name: `${prefix}auth_callback`,
    component: () => import('components/AuthCallbackGoogle.vue')
  },
]

const localizedRoutes = Object.values(LOCALES).map((locale) => {
  const isDefaultLocale = locale.i18n === DEFAULT_LOCALE

  return {
    path: isDefaultLocale ? '/' : `/${locale.url}`,
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      locale: locale.i18n,
      urlLocale: locale.url || 'en'
    },
    children: makeChildren(locale.routePrefix),
  }
})

const routes = [
  ...localizedRoutes,

  {
    path: '/en/:pathMatch(.*)*',
    redirect: (to) => {
      const rest = Array.isArray(to.params.pathMatch)
        ? to.params.pathMatch.join('/')
        : to.params.pathMatch || ''

      return rest ? `/${rest}` : '/'
    }
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
