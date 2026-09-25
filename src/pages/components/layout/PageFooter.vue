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
      <div class="footer__head flex">
        <div class="footer__column footer__column-left">
          <router-link class="flex items-center q-mb-sm" :to="localeTo('home')">
            <img :src="Logotype"
                 alt="" title=""
                 height="40" width="40"
                 class="q-mr-md"/>
            <span>SLAY SYNERGY</span>
          </router-link>
          <p>{{t('components.footer.description')}}</p>
        </div>
        <div class="footer__column footer__column-right">
          <div class="flex">
            <div class="col">
              <span>{{t('components.footer.titles.features')}}</span>
              <q-list>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    class="btn-link"
                    :label="t('pages.features.projectsManager.title')"
                    :to="localeTo('projects-manager')"
                  />
                </q-item>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    class="btn-link"
                    :label="t('pages.features.launcherWorkspace.title')"
                    :to="localeTo('launcher_workspace')"
                  />
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <span>{{t('components.footer.titles.start')}}</span>
              <q-list>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    class="btn-link"
                    :label="t('routes.download')"
                    :to="localeTo('download')"
                  />
                </q-item>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    class="btn-link"
                    :label="t('routes.pricing')"
                    :to="localeTo('pricing')"
                  />
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <span>{{t('components.footer.titles.support')}}</span>
              <q-list>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    class="btn-link"
                    :label="t('routes.faq')"
                    :to="localeTo('faq')"
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
            <div class="col">
              <span>{{t('components.footer.titles.legal')}}</span>
              <q-list>
                <q-item class="q-pa-none">
                  <q-btn
                    flat
                    dense
                    align="left"
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
              </q-list>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__foot q-pt-lg text-left">
        <p>© 2026 SLAY {{t('components.footer.allRightsReserved')}}</p>
      </div>
    </div>
  </q-footer>
</template>

<style scoped lang="scss">
  .footer {
    position: absolute;
    font-size: 1rem;
    line-height: 120%;
    background-color: #051826;
    text-align: center;
    padding: 32px 0;

    @media (min-width: 90em) {
      padding: 50px 0;
    }

    &__head {
      flex-direction: column;
      justify-content: center;
      border-bottom: 1px solid rgba(26, 88, 90, 0.64);
      text-align: center;
      padding-bottom: 22px;

      @media screen and (min-width: 37.5em) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

    &__column {
      &-left {
        text-align: left;
        margin-bottom: 32px;

        @media (min-width: 90em) {
          max-width: 20%;
          margin: 0;
        }
      }

      &-right {
        width: 100%;

        @media (min-width: 90em) {
          width: auto;
        }

        .flex {
          width: 100%;
          flex-wrap: wrap;
          margin: 0 -34px;

          @media (min-width: 90em) {
            width: auto;
          }
        }

        .col {
          flex: 50%;
          padding: 0 34px;
          text-align: left;
          margin-bottom: 18px;

          @media (min-width: 64em) {
            flex: 25%;
          }

          @media (min-width: 90em) {
            flex: auto;
          }
        }

        span {
          display: inline-block;
          margin-bottom: 14px;
          font-size: 1rem;
          line-height: 120%;
          color: #E4CD71;
          font-weight: 700;
        }
      }
    }
  }

  p {
    color: #738094;
    font-size: 0.875rem;
    line-height: 120%;
    font-weight: 500;

    @media (min-width: 90em) {
      font-size: 1rem;
    }
  }

  .q-item {
    min-height: auto;
    padding: 0;
    margin-bottom: 10px;
  }

  .q-btn {
    &.btn-link {
      padding: 0;
      min-height: 1.5rem;
      font-size: inherit;
      line-height: inherit;
      color: #A6B2C7;


      @media (min-width: 90em) {
        white-space: nowrap;
      }

      &:hover {
        color: #3DC7C7;
      }

      &:active {
        color: #268C8C;
      }

      :deep {
        span {
          text-align: left;
        }
      }
    }
  }

  .router-link-active {
    display: inline-flex;
    text-decoration: none;
    color: #E4CD71;
  }
</style>
