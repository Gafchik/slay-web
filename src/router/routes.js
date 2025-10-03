const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/faq',
        name: 'faq',
        component: () => import('pages/faq/FaqPage.vue')
      },
      {
        path: '/download',
        name: 'download',
        component: () => import('pages/download/DownloadPage.vue')
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
        path: '/membership',
        name: 'membership',
        component: () => import('pages/membership/MembershipPage.vue')
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
