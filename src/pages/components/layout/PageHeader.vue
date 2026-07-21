<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'

import AppLanguageSwitcher from 'pages/components/layout/AppLanguageSwitcher.vue'

import Logotype from 'assets/images/Logotype.svg'

const { t } = useI18n()
const { localeTo, localeRouteName } = useLocaleRoute()

const $q = useQuasar()

const showButton = ref(false)
const route = useRoute()

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
  <q-header>
    <q-toolbar class="flex justify-between q-py-none">
      <q-toolbar-title>
        <router-link class="flex items-center btn-logo" :to="localeTo('home')">
          <img :src="Logotype" alt="" title="" height="125" width="451" class="q-mr-md"/>
          <span>SLAY SYNERGY</span>
        </router-link>
      </q-toolbar-title>
      <div class="flex">
        <div class="col q-mx-xs">
          <q-btn
            unelevated
            rounded
            class="btn-link"
          >
            <span>{{ t('routes.feature')}}</span>
          </q-btn>
        </div>
        <div class="col q-mx-xs">
          <q-btn
            unelevated
            rounded
            class="btn-link"
            :to="localeTo('pricing')"
          >
            <span>{{ t('routes.pricing')}}</span>
          </q-btn>
        </div>
        <div class="col q-mx-xs">
          <q-btn
            unelevated
            rounded
            class="btn-link"
            :to="localeTo('pricing')"
          >
            <span>{{ t('routes.password')}}</span>
          </q-btn>
        </div>
      </div>
      <div class="flex justify-end" style="width: 250px">
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

  .router-link-active {
    text-decoration: none;
    color: #E4CD71;
  }

  .q-header {
    padding: 8px 0;
    background: transparent;
    border-radius: 0 0 12px 12px;
    transition: 0.25s;

    @media (min-width: 77.5em) {
      padding: 12px 0;
    }


    @media (min-width: 158.75em) {
      padding: 16px 0;
    }

    .q-toolbar {
      min-height: 40px;
      padding: 0 16px;

      @media screen and (min-width: 77.5em) {
        min-height: 50px;
        padding: 0 20px;
      }

      @media (min-width: 158.75em) {
        min-height: 55px;
        padding: 0 40px;
      }
    }

    &:hover {
      background: #051627;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.32);
    }
  }

  .q-toolbar__title {
    width: 250px;
    flex: initial;
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
</style>
