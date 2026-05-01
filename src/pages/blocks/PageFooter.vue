<script setup>
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()
</script>

<template>
  <q-footer class="footer glass">
    <q-toolbar class="justify-between">
      <q-list class="flex justify-center">
        <q-item class="q-pa-none">
          <q-btn
            flat
            dense
            color="primary"
            class="btn-link"
            :label="t('routes.terms')"
            :to="localeTo('terms_of_services')"
          />
        </q-item>
        <q-item class="q-pa-none">
          <q-btn
            flat
            dense
            color="primary"
            class="btn-link"
            :label="t('routes.privacyPolicy')"
            :to="localeTo('privacy_policy')"
          />
        </q-item>
      </q-list>

      <q-list class="flex">
        <q-item class="q-pa-none">
          <q-btn
            flat
            dense
            color="primary"
            class="btn-link"
            :label="t('routes.contacts')"
            :to="localeTo('contacts')"
          />
        </q-item>
      </q-list>

      <p class="text-primary text-center">© 2026 Slay. {{t('text.allRightsReserved')}}.</p>
    </q-toolbar>
  </q-footer>
</template>

<style scoped lang="scss">
  .footer {
    position: absolute;
    font-size: 1rem;
    line-height: 120%;
    padding: 16px 0;
    border-radius: 20px 20px 0 0;

    .q-toolbar {
      flex-direction: column;
      align-items: center;
      min-height: auto;
      padding: 0 16px;

      @media screen and (min-width: 64em) {
        flex-direction: row;
      }

      @media screen and (min-width: 77.5em) {
        padding: 0 24px;
      }

      @media (min-width: 158.75em) {
        padding: 0 48px;
      }
    }
  }

  .q-list {
    margin-bottom: 16px;

    @media screen and (min-width: 64em) {
      margin: 0;
    }

    .q-item {
      min-height: auto;

      &:first-child:not(:last-child) {
        @media screen and (min-width: 64em) {
          margin-right: 16px;
        }
      }
    }
  }

  .q-btn {
    &.btn-link {

      min-height: 1.5rem;
      font-size: inherit;
      line-height: inherit;
    }
  }
</style>
