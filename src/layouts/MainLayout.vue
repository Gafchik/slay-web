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

</script>

<template>
  <q-layout view="lHh Lpr lFf" class="bg">
    <div class="waves">
      <div class="wave layer1"></div>
      <div class="wave layer2"></div>
      <div class="wave layer3"></div>
    </div>
    <q-header elevated bordered class="glass q-py-md text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <router-link class="text-link gradient-text" :to="{ name: 'home' }">
            <!-- Для больших экранов - полный слоган -->
            <span class="gt-sm">{{ t('header.title') }}</span>

            <!-- Для средних экранов - сокращенная версия -->
            <span class="lt-md gt-xs">{{ t('header.short_title') }}</span>

            <!-- Для маленьких экранов - короткая версия -->
            <span class="lt-sm">{{ t('header.short_title') }}</span>
          </router-link>
        </q-toolbar-title>
        <q-space />
        <q-btn :to="{ name: 'download' }"  icon="download" flat rounded class="q-mx-sm button glass">
          <q-tooltip
            transition-show="rotate"
            transition-hide="rotate"
            class="glass text-body2 text-primary gradient-text"
            anchor="bottom left"
            self="top middle">
            {{ t('header.auth.download') }}
          </q-tooltip>
        </q-btn>
        <div v-if="isLoggedIn">
          <q-btn :to="{ name: 'profile' }" icon="account_circle" flat rounded class="q-mx-sm button glass">
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary gradient-text"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.profile') }}
            </q-tooltip>
          </q-btn>
          <q-btn @click="handleLogout" icon="logout" flat rounded class="q-mx-sm button glass">
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary gradient-text"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.logout') }}
            </q-tooltip>
          </q-btn>
        </div>
        <div v-if="!isLoggedIn">
          <q-btn :to="{ name: 'login' }"  icon="login" flat rounded class="q-mx-sm button glass">
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary gradient-text"
              anchor="bottom left"
              self="top middle">
              {{ t('header.auth.login') }}
            </q-tooltip>
          </q-btn>
          <q-btn :to="{ name: 'registration' }" icon="person_add" flat rounded class="q-mx-sm button glass">
            <q-tooltip
              transition-show="rotate"
              transition-hide="rotate"
              class="glass text-body2 text-primary gradient-text"
              anchor="bottom left"
              self="top middle">
              {{  t('header.auth.registration') }}
            </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="">
      <router-view />
    </q-page-container>
    <footer class="footer q-pt-md glass">
      <div class="container">
        <p class="text-primary text-center">© 2025 Slay. All rights reserved.</p>
      </div>
    </footer>
  </q-layout>
</template>
