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
        component: () => import('pages/info/FaqPage.vue')
      },
      {
        path: '/download',
        name: 'download',
        component: () => import('pages/download/DownloadPage.vue'),
      },
      {
        path: '/contact-us',
        name: 'contact_us',
        component: () => import('pages/contact-us/ContactUsPage.vue')
      },
      {
        path: '/terms-of-services',
        name: 'terms_of_services',
        component: () => import('pages/info/TermsOfService.vue')
      },
      {
        path: '/privacy-policy',
        name: 'privacy_policy',
        component: () => import('pages/info/PrivacyPolicy.vue')
      },
      {
        path: '/pricing',
        name: 'pricing',
        component: () => import('pages/pricing/PricingPage.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/profile/ProfilePage.vue'),
        meta: { requiresAuth: true } // only auth route
      },
      {
        path: '/auth/callback',
        name: 'auth_callback',
        component: () => import('components/AuthCallbackGoogle.vue')
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
