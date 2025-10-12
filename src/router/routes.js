const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/home/HomePage.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('pages/Auth/LoginPage.vue'),
      },
      {
        path: '/registration',
        name: 'registration',
        component: () => import('pages/Auth/RegistrationPage.vue'),
      },
      {
        path: '/faq',
        name: 'faq',
        component: () => import('pages/faq/FaqPage.vue')
      },
      {
        path: '/download',
        name: 'download',
        component: () => import('pages/download/DownloadPage.vue'),
        meta: { requiresAuth: true } // only auth route
      },
      {
        path: '/contact-us',
        name: 'contact_us',
        component: () => import('pages/contact-us/ContactUsPage.vue')
      },
      {
        path: '/terms-privacy',
        name: 'terms_privacy',
        component: () => import('pages/terms-privacy/TermsPrivacyPage.vue')
      },
      {
        path: '/pricing',
        name: 'pricing',
        component: () => import('pages/pricing/PricingPage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
