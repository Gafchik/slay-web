<script setup>
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()
</script>

<template>
  <q-footer class="footer glass text-primary">
    <q-toolbar class="justify-between">
      <div class="col-auto">
        <span>SLAY</span>
        <p>{{t('sections.home.title')}}.</p>
      </div>
      <div class="col">
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
          <q-item class="q-pa-none">
            <q-btn
              flat
              dense
              color="primary"
              class="btn-link"
              :label="t('routes.refundPolicy')"
              :to="localeTo('refund_policy')"
            />
          </q-item>
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
      </div>

      <div class="col-auto">
        <p>© 2026 SLAY</p>
        <p>{{t('text.allRightsReserved')}}</p>
      </div>
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
    text-align: center;

    .q-toolbar {
      flex-direction: column;
      align-items: center;
      min-height: auto;
      padding: 0 16px;

      @media screen and (min-width: 64em) {
        flex-direction: row;
        flex-wrap: wrap;
      }

      @media screen and (min-width: 77.5em) {
        padding: 0 24px;
      }

      @media (min-width: 158.75em) {
        padding: 0 48px;
      }
    }

    .col-auto {
      &:first-child {
        margin-bottom: 16px;

        @media screen and (min-width: 64em) {
          text-align: left;
          padding-right: 24px;
          margin: 0;
        }
      }

      &:last-child {
        @media screen and (min-width: 64em) {
          text-align: right;
          padding-left: 24px;
        }
      }
    }

    .col {
      @media screen and (min-width: 64em) {
        margin-top: 24px;
        order: 1;
        flex: 100%;
      }
    }
  }

  .q-list {
    flex-direction: column;
    align-items: center;
    margin: 0 -16px 16px;

    @media screen and (min-width: 64em) {
      flex-direction: row;
      margin: 0 -16px;
    }

    .q-item {
      min-height: auto;
      padding: 0 16px;
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
