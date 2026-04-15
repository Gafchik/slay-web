<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <q-footer class="footer glass">
    <q-toolbar class="justify-between">
      <q-list class="flex">
        <q-item class="q-pa-none q-mr-md">
          <q-btn
            flat
            dense
            color="white"
            class="btn-link"
            :label="t('routes.terms')"
            :to="{ name: 'terms_of_services' }"
          />
        </q-item>
        <q-item class="q-pa-none">
          <q-btn
            flat
            dense
            color="white"
            class="btn-link"
            :label="t('routes.privacyPolicy')"
            :to="{ name: 'privacy_policy' }"
          />
        </q-item>
      </q-list>
      <p class="text-primary text-center">© 2025 Slay. All rights reserved.</p>
    </q-toolbar>
  </q-footer>
</template>

<style scoped lang="scss">
  .q-footer {
    font-size: 1rem;
    line-height: 120%;
    padding: 16px 0;
    border-radius: 20px 20px 0 0;

    .q-toolbar {
      min-height: auto;
      padding: 0 16px;

      @media screen and (min-width: 77.5em) {
        padding: 0 24px;
      }

      @media (min-width: 158.75em) {
        padding: 0 48px;
      }
    }
  }

  .q-item {
    min-height: auto;
  }

  .q-btn {
    &.btn-link {
      min-height: 1.5rem;
      font-size: inherit;
      line-height: inherit;
    }
  }
</style>
