<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useAuthStore } from 'stores/auth-store.js'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()

const { isLoggedIn } = storeToRefs(authStore)
const { logoutRequest } = authStore

const handleLogout = async () => {
  const result = await logoutRequest()
  if (result?.success) {
    // Редирект на главную страницу после логаута
    window.location.href = '/'
  }
}

// const linksList = [
//   {
//     title: t('routes.download'),
//     icon: 'list',
//     route_name: 'download',
//   },
//   {
//     title: t('routes.pricing'),
//     icon: 'list',
//     route_name: 'pricing',
//   },
//   {
//     title: t('routes.faq'),
//     icon: 'list',
//     route_name: 'faq',
//   },
//   {
//     title: t('routes.contact_us'),
//     icon: 'list',
//     route_name: 'contact_us',
//   },
//   {
//     title: t('routes.terms_privacy'),
//     icon: 'list',
//     route_name: 'terms_privacy',
//   },
// ]

// const leftDrawerOpen = ref(false)

// function toggleLeftDrawer() {
//   leftDrawerOpen.value = !leftDrawerOpen.value
// }
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated bordered class="glass q-py-md text-primary">
      <q-toolbar>
        <!--        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />-->
        <!--        <q-avatar>-->
        <!--          <img src="~assets/3.png">-->
        <!--        </q-avatar>-->

        <!--        <q-toolbar-title style="white-space: normal; word-wrap: break-word;">-->
        <!--          <router-link class="text-link" :to="{ name: 'home' }">{{t('header.title')}}</router-link>-->
        <!--        </q-toolbar-title>-->
        <q-toolbar-title>
          <router-link class="text-link" :to="{ name: 'home' }">
            <!-- Для больших экранов - полный слоган -->
            <span class="gt-sm">{{ t('header.title') }}</span>

            <!-- Для средних экранов - сокращенная версия -->
            <span class="lt-md gt-xs">{{ t('header.short_title') }}</span>

            <!-- Для маленьких экранов - короткая версия -->
            <span class="lt-sm">{{ t('header.short_title') }}</span>
          </router-link>
        </q-toolbar-title>

        <!--        <div>-->
        <!--          <router-link class="text-link text-h5 q-px-sm" :to="{ name: 'download' }">{{t('routes.download')}}</router-link>-->
        <!--        </div>-->

        <q-space />
        <q-btn :to="{ name: 'download' }"  icon="download" flat rounded>
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="glass text-body2 text-primary"
            anchor="bottom left"
            self="top middle">
            {{ t('header.auth.download') }}
          </q-tooltip>
        </q-btn>
        <div v-if="isLoggedIn">
          <q-btn :to="{ name: 'profile' }" icon="account_circle" flat rounded>
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.profile') }}
            </q-tooltip>
          </q-btn>
          <q-btn @click="handleLogout" icon="logout" flat rounded>
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.logout') }}
            </q-tooltip>
          </q-btn>
        </div>
        <div v-if="!isLoggedIn">
          <q-btn :to="{ name: 'login' }"  icon="login" flat rounded>
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.login') }}
            </q-tooltip>
          </q-btn>
          <q-btn :to="{ name: 'registration' }" icon="person_add" flat rounded>
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary"
              anchor="bottom left"
              self="top middle">
              {{  t('header.auth.registration') }}
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg">
      <router-view />
    </q-page-container>
  </q-layout>
</template>
