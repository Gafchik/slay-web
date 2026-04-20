<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { useLocaleRoute } from 'src/composables/useLocaleRoute'

import AppLanguageSwitcher from 'src/pages/blocks/AppLanguageSwitcher.vue'

import Logotype from 'assets/Logotype.png'

const { t } = useI18n()
const { localeTo, localeRouteName } = useLocaleRoute()

const $q = useQuasar()

const showButton = ref(false)
const route = useRoute()

const isHomeRoute = computed(() => route.name === localeRouteName('home'))
const isLoginRoute = computed(() => route.name === localeRouteName('login'))
const isRegistrationRoute = computed(() => route.name === localeRouteName('registration'))

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

const isDesktop = computed(() => $q.screen.width >= 1240)

onMounted(async () => {
  await nextTick()

  updateVisibility()

  window.addEventListener('scroll', updateVisibility, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateVisibility)
})

watch(() => route.fullPath, async () => {
  showButton.value = false

  await nextTick()
  updateVisibility()
})
</script>

<template>
  <q-header class="glass">
    <q-toolbar class="flex justify-between q-py-none">
      <q-toolbar-title>
        <router-link class="flex" :to="localeTo('home')">
          <img :src="Logotype" alt="" title="" height="125" width="451"/>
        </router-link>
      </q-toolbar-title>
      <transition name="fade-btn" v-if="isHomeRoute">
        <q-btn
          v-show="showButton"
          unelevated
          rounded
          class="btn-glass--primary q-py-sm"
          :to="localeTo('download')"
        >
          <span v-if="isDesktop">{{t('buttons.download')}} SLAY</span>
          <q-icon name="download" v-else/>
        </q-btn>
      </transition>
      <div class="flex items-center">
        <q-btn
          v-if="!isLoginRoute && !isRegistrationRoute"
          unelevated
          rounded
          class="q-py-sm"
          :class="isDesktop ? 'btn-link' : 'btn-icon'"
          :to="localeTo('profile') "
        >
          <span v-if="isDesktop">{{t('buttons.profile')}}</span>
          <q-icon name="account_circle" v-else/>
        </q-btn>
        <AppLanguageSwitcher />
      </div>
    </q-toolbar>
  </q-header>
</template>

<style scoped lang="scss">
  img {
    width: auto;
    height: 30px;

    @media (min-width: 77.5em) {
      height: 40px;
    }

    @media (min-width: 158.75em) {
      height: 48px;
    }
  }

  .q-header {
    padding: 8px 0;

    @media (min-width: 158.75em) {
      padding: 16px 0;
    }

    .q-toolbar {
      min-height: 40px;
      padding: 0 16px;

      @media screen and (min-width: 77.5em) {
        min-height: 50px;
        padding: 0 24px;
      }

      @media (min-width: 158.75em) {
        min-height: 55px;
        padding: 0 48px;
      }
    }
  }

  .btn-link {
    margin-left: 8px;

    @media screen and (min-width: 77.5em) {
      margin-left: 12px;
    }

    @media (min-width: 118.75em) {
      margin-left: 20px;
    }

    @media (min-width: 158.75em) {
      margin-left: 24px;
    }
  }

  .q-toolbar__title {
    flex: 0 1 auto;
  }

  .btn-link,
  .btn-glass--primary {
    min-height: auto;
    font-size: 1rem;
    line-height: 110%;
    text-transform: capitalize;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }

    @media (min-width: 77.5em) {
      font-size: 1.5rem;
      border-radius: 31px;
    }

    @media (min-width: 158.75em) {
      font-size: 1.75rem;
    }
  }

  .btn-glass--primary {
    &:before {
      box-shadow: 0 0 4px #03d5ff, inset 0 0 12px #03d5ff;
    }

    &:hover {
      &:before {
        box-shadow: 0 0 6px #03d5ff, inset 0 0 6px #03d5ff;
      }
    }

    &:active {
      &:before {
        box-shadow: 0 0 12px #03d5ff, inset 0 0 4px #03d5ff;
      }
    }
  }

  .q-header,
  .q-header .q-layout__shadow {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .q-header .q-layout__shadow {
    border-radius: 18px;
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
