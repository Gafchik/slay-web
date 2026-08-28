<script setup>
  import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { useQuasar } from 'quasar'
  import { storeToRefs } from 'pinia'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'
  import { useAuthStore } from 'src/stores/auth-store.js'

  import AppLanguageSwitcher from 'pages/components/layout/AppLanguageSwitcher.vue'

  import Logotype from 'assets/images/Logotype.svg'

  const { t } = useI18n()
  const { localeTo, localeRouteName } = useLocaleRoute()

  const $q = useQuasar()
  const authStore = useAuthStore()
  const { isLoggedIn } = storeToRefs(authStore)

  const route = useRoute()
  const isHeaderScrolled = ref(false)
  const isMobileMenuOpen = ref(false)

  const isLoginRoute = computed(() => route.name === localeRouteName('login'))
  const isRegistrationRoute = computed(() => route.name === localeRouteName('registration'))
  const isDesktop = computed(() => $q.screen.width >= 1240)
  const mobileMenuWidth = computed(() => Math.min($q.screen.width, 360))
  const accountRoute = computed(() => isLoggedIn.value ? 'profile' : 'login')
  const accountLabel = computed(() => t(isLoggedIn.value ? 'buttons.profile' : 'buttons.login'))

  const updateHeaderBackground = () => {
    isHeaderScrolled.value = window.scrollY > 20
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  onMounted(() => {
    updateHeaderBackground()

    window.addEventListener('scroll', updateHeaderBackground, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateHeaderBackground)
  })

  watch(() => route.fullPath, closeMobileMenu)

  watch(isDesktop, (desktop) => {
    if (desktop) closeMobileMenu()
  })
</script>

<template>
  <q-header :class="{ 'q-header--scrolled': isHeaderScrolled }">
    <q-toolbar class="flex justify-between q-py-none">
      <q-toolbar-title>
        <router-link class="flex items-center btn-logo" :to="localeTo('home')">
          <img :src="Logotype" alt="" height="125" width="451" class="q-mr-md"/>
          <span>SLAY SYNERGY</span>
        </router-link>
      </q-toolbar-title>
      <nav v-if="isDesktop" class="desktop-nav flex" aria-label="Primary navigation">
<!--        <div class="col q-mx-xs">
          <q-btn
            unelevated
            rounded
            class="btn-link"
          >
            <span>{{ t('routes.feature')}}</span>
          </q-btn>
        </div>-->
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
<!--        <div class="col q-mx-xs">
          <q-btn
            unelevated
            rounded
            class="btn-link"
            :to="localeTo('pricing')"
          >
            <span>{{ t('routes.password')}}</span>
          </q-btn>
        </div>-->
      </nav>
      <div v-if="isDesktop" class="desktop-actions flex justify-end">
        <q-btn
          v-if="!isLoginRoute && !isRegistrationRoute"
          unelevated
          rounded
          class="btn-link q-py-sm"
          :to="localeTo(accountRoute)"
        >
          <span>{{ accountLabel }}</span>
        </q-btn>
        <AppLanguageSwitcher />
      </div>
      <q-btn
        v-else
        flat
        round
        dense
        color="primary"
        icon="menu"
        aria-label="Open navigation menu"
        class="mobile-menu-trigger"
        @click="isMobileMenuOpen = true"
      />
    </q-toolbar>
  </q-header>

  <q-drawer
    v-if="!isDesktop"
    v-model="isMobileMenuOpen"
    side="right"
    overlay
    behavior="mobile"
    :width="mobileMenuWidth"
    class="mobile-menu"
  >
    <div class="mobile-menu__content column no-wrap">
      <div class="mobile-menu__header row items-center no-wrap">
        <router-link
          class="mobile-menu__logo flex items-center"
          :to="localeTo('home')"
          @click="closeMobileMenu"
        >
          <img :src="Logotype" alt="" height="125" width="451" class="q-mr-sm"/>
          <span>SLAY SYNERGY</span>
        </router-link>
        <q-space />
        <q-btn
          flat
          round
          dense
          color="primary"
          icon="close"
          aria-label="Close navigation menu"
          class="mobile-menu__close"
          @click="closeMobileMenu"
        />
      </div>

      <nav class="mobile-menu__nav column" aria-label="Mobile navigation">
        <q-btn
          flat
          rounded
          no-caps
          align="left"
          class="mobile-menu__link"
        >
          {{ t('routes.feature') }}
        </q-btn>
        <q-btn
          flat
          rounded
          no-caps
          align="left"
          class="mobile-menu__link"
          :to="localeTo('pricing')"
        >
          {{ t('routes.pricing') }}
        </q-btn>
        <q-btn
          flat
          rounded
          no-caps
          align="left"
          class="mobile-menu__link"
          :to="localeTo('pricing')"
        >
          {{ t('routes.password') }}
        </q-btn>
      </nav>

      <div class="mobile-menu__actions q-mt-auto">
        <q-btn
          v-if="!isLoginRoute && !isRegistrationRoute"
          outline
          rounded
          no-caps
          color="primary"
          class="mobile-menu__account full-width"
          :icon="isLoggedIn ? 'account_circle' : 'login'"
          :label="accountLabel"
          :to="localeTo(accountRoute)"
        />
        <div class="mobile-menu__language row items-center q-mt-md">
          <q-icon name="language" size="24px" />
          <AppLanguageSwitcher class="mobile-menu__language-switcher" />
        </div>
      </div>
    </div>
  </q-drawer>
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
    background: rgba(#051627, 0);
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

    &--scrolled {
      background: rgba(#051627, 0.85);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.32);
    }

    &:hover {
      background: rgba(#051627, 1);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.32);
    }
  }

  .q-toolbar__title {
    min-width: 0;
    flex: 1;

    @media (min-width: 77.5em) {
      width: 250px;
      flex: initial;
    }
  }

  .btn-logo,
  .mobile-menu__logo {
    white-space: nowrap;
  }

  .desktop-actions {
    width: 250px;
  }

  .mobile-menu-trigger {
    flex: 0 0 auto;
    width: 44px;
    height: 44px;
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

  :deep(.mobile-menu) {
    color: #fff;
    background: linear-gradient(180deg, rgba(#051627, 0.99), rgba(#02101e, 0.99));
    border-left: 1px solid rgba(#E4CD71, 0.28);
  }

  .mobile-menu__content {
    min-height: 100%;
    padding: 16px;
  }

  .mobile-menu__header {
    min-height: 40px;
  }

  .mobile-menu__close {
    width: 44px;
    height: 44px;
  }

  .mobile-menu__logo {
    color: #E4CD71;
    text-decoration: none;

    img {
      height: 30px;
    }
  }

  .mobile-menu__nav {
    gap: 8px;
    margin-top: 32px;
  }

  .mobile-menu__link {
    min-height: 48px;
    padding: 0 16px;
    color: #fff;
    font-size: 1.125rem;

    &:hover,
    &.q-router-link--active {
      color: #E4CD71;
      background: rgba(#E4CD71, 0.08);
    }
  }

  .mobile-menu__actions {
    padding-top: 24px;
    border-top: 1px solid rgba(#fff, 0.12);
  }

  .mobile-menu__account {
    min-height: 48px;
    font-size: 1rem;
  }

  .mobile-menu__language {
    min-height: 48px;
    color: rgba(#fff, 0.72);
  }

  .mobile-menu__language-switcher {
    margin-left: 8px;
  }
</style>
