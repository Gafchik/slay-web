<script setup>
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'
  import Logotype from 'assets/images/Logotype.svg'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()
</script>

<template>
  <q-footer class="footer">
    <div class="container">
      <div class="footer__head flex q-pb-lg">
        <div class="col-auto">
          <router-link class="flex items-center q-mb-sm" :to="localeTo('home')">
            <img :src="Logotype"
                 alt="" title=""
                 height="40" width="40"
                 class="q-mr-md"/>
            <span>SLAY SYNERGY</span>
          </router-link>
          <p>{{t('sections.home.title')}}.</p>
        </div>
        <div class="col-auto">
          <p>© 2026 SLAY</p>
          <p>{{t('text.allRightsReserved')}}</p>
        </div>
      </div>
      <div class="footer__foot flex justify-center q-pt-lg">
        <q-list class="flex justify-center">
          <q-item class="q-pa-none">
            <q-btn
              flat
              dense
              class="btn-link"
              :label="t('routes.terms')"
              :to="localeTo('terms_of_services')"
            />
          </q-item>
          <q-item class="q-pa-none">
            <q-btn
              flat
              dense
              class="btn-link"
              :label="t('routes.privacyPolicy')"
              :to="localeTo('privacy_policy')"
            />
          </q-item>
          <q-item class="q-pa-none">
            <q-btn
              flat
              dense
              class="btn-link"
              :label="t('routes.refundPolicy')"
              :to="localeTo('refund_policy')"
            />
          </q-item>
          <q-item class="q-pa-none">
            <q-btn
              flat
              dense
              class="btn-link"
              :label="t('routes.contacts')"
              :to="localeTo('contacts')"
            />
          </q-item>
        </q-list>
      </div>
    </div>
  </q-footer>
</template>

<style scoped lang="scss">
  .footer {
    position: absolute;
    font-size: 1rem;
    line-height: 120%;
    padding: 16px 0;
    background-color: #051826;
    text-align: center;

    @media (min-width: 64em) {
      padding: 24px 0;
    }

    @media (min-width: 90em) {
      padding: 40px 0;
    }

    &__head {
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid rgba(26, 88, 90, 0.64);
      text-align: center;

      @media screen and (min-width: 37.5em) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .col-auto {
        &:first-child {
          @media screen and (min-width: 37.5em) {
            text-align: left;
          }
        }

        &:last-child {
          @media screen and (min-width: 37.5em) {
            text-align: right;
          }
        }
      }
    }
  }

  .q-list {
    flex-direction: column;
    align-items: center;
    margin: 0 -16px;

    @media screen and (min-width: 37.5em) {
      flex-direction: row;
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

  .router-link-active {
    display: inline-flex;
    text-decoration: none;
    color: #E4CD71;
  }
</style>
