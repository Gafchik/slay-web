<script setup>
  import { ref, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { storeToRefs } from 'pinia'

  import { useAuthStore } from 'stores/auth-store.js'

  import Logotype from 'assets/Logotype.png'

  const { t } = useI18n()

  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)
  const { logoutRequest } = authStore

  const showButton = ref(true)
  const route = useRoute()

  const handleLogout = async () => {
    const result = await logoutRequest()
    if (result?.success) {
      window.location.href = '/'
    }
  }

  const updateVisibility = () => {
    const elements = document.querySelectorAll('.btn-download')

    const anyVisible = Array.from(elements).some(el => {
      const rect = el.getBoundingClientRect()

      return (
        rect.bottom > 0 &&
        rect.top < window.innerHeight
      )
    })

    showButton.value = !anyVisible
  }

  onMounted(async () => {
    await nextTick()

    updateVisibility()

    window.addEventListener('scroll', updateVisibility, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateVisibility)
  })

  watch(() => route.fullPath, async () => {
    showButton.value = true

    await nextTick()
    updateVisibility()
  })
</script>

<template>
  <q-header class="glass q-py-sm text-primary">
    <q-toolbar class="q-py-none q-px-md">
      <q-toolbar-title>
        <router-link class="flex" :to="{ name: 'home' }">
          <img :src="Logotype" alt="" title="" height="125" width="451"/>
        </router-link>
      </q-toolbar-title>
      <div class="flex items-center">
        <transition name="fade-btn" v-if="route.name === 'home'">
          <q-btn :to="{ name: 'download' }"
                 v-show="showButton"
                 flat
                 dense
                 class="q-mx-sm btn-link">
            {{t('buttons.download')}}
          </q-btn>
        </transition>
        <div v-if="isLoggedIn">
          <q-btn :to="{ name: 'profile' }"
                 v-if="route.name !== 'profile'"
                 flat
                 dense
                 rounded
                 class="q-mx-sm btn-link">
            {{t('buttons.profile')}}
          </q-btn>
          <q-btn @click="handleLogout"
                 flat
                 dense
                 rounded
                 class="q-mx-sm btn-link">
            {{t('buttons.logout')}}
          </q-btn>
        </div>
        <div v-else>
          <q-btn :to="{ name: 'profile' }"
                 flat
                 dense
                 rounded
                 class="q-mx-sm btn-link">
            {{t('buttons.login')}}
          </q-btn>
          <q-btn :to="{ name: 'registration' }"
                 flat
                 dense
                 rounded
                 class="q-mx-sm btn-link">
            {{t('buttons.registration')}}
          </q-btn>
        </div>
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

  .btn-link {
    text-transform: capitalize;
    font-size: 20px;
  }

  .fade-btn-enter-active,
  .fade-btn-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .fade-btn-enter-from,
  .fade-btn-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  .fade-btn-enter-to,
  .fade-btn-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>
