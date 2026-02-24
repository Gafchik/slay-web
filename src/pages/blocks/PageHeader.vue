<script setup>
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'

import { useAuthStore } from 'stores/auth-store.js'

import Logotype from 'assets/Logotype.png'

const { t } = useI18n()

const authStore = useAuthStore()
const { isLoggedIn } = storeToRefs(authStore)
const { logoutRequest } = authStore

const handleLogout = async () => {
  const result = await logoutRequest()
  if (result?.success) {
    window.location.href = '/'
  }
}
</script>

<template>
  <q-header class="glass q-py-sm text-primary">
    <q-toolbar class="q-py-none q-px-md">
      <q-toolbar-title>
        <router-link class="flex" :to="{ name: 'home' }">
          <img :src="Logotype" alt="" title="" height="125" width="451"/>
        </router-link>
      </q-toolbar-title>
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
</template>

<style scoped lang="scss">
  img {
    width: auto;
    height: 36px;
  }

  .q-header,
  .q-header .q-layout__shadow {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .q-header .q-layout__shadow {
    border-radius: 18px;
  }
</style>
