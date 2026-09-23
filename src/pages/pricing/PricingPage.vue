<script setup>
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'

  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import { useBillingStore } from 'stores/billing-store.js'
  import { useAuthStore } from 'stores/auth-store.js'

  import Features from 'assets/images/pricing/Features.png'

  const router = useRouter()

  const { t, tm, rt, locale } = useI18n()
  const { localeTo } = useLocaleRoute()

  const language = computed(() => locale.value.split('-')[0])

  const billingStore = useBillingStore()
  const {checkout} = billingStore // getPrices
  const {priceCards} = storeToRefs(billingStore)

  const authStore = useAuthStore()
  const {isLoggedIn, user } = storeToRefs(authStore)

  const hasActiveAccess = computed(() => {
    return user.value?.has_active_trial || user.value?.has_active_subscription
  })

  /*getPrices()*/

  const pricingSteps = computed(() => {
    return tm('pricing.steps.list')
  })

  const pricingFeatures = computed(() => {
    return tm('pricing.features.list')
  })

  const pricingFaq = computed(() => {
    return tm('pricing.faq.list')
  })

  const resolveText = (message) => {
    if (!message || (typeof message === 'object' && !Object.keys(message).length)) return ''
    return rt(message).trim()
  }

  const getText = (key) => resolveText(tm(key))
  const getList = (key) => {
    const list = tm(key)
    return Array.isArray(list) ? list : []
  }

  const trialCard = computed(() => ({
    title: getText('pricing.cards.trial.title'),
    subtitle: getText('pricing.cards.trial.subtitle'),
    description: getText('pricing.cards.trial.description'),
    list: getList('pricing.cards.trial.list').map(resolveText).filter(Boolean),
    btn: getText('pricing.cards.trial.btn'),
    notice: getText('pricing.cards.trial.notice'),
  }))

  const cards = computed(() => ['monthly', 'sixMonths', 'yearly'].map((key, index) => {
    const apiData = priceCards.value?.[index]
    const amount = apiData?.amount

    return {
      key,
      title: getText(`pricing.cards.${key}.title`),
      badge: getText(`pricing.cards.${key}.badge`),
      discountPrice: getText(`pricing.cards.${key}.discountPrice`),
      period: getText(`pricing.cards.${key}.period`),
      list: getList(`pricing.cards.${key}.list`).map(resolveText).filter(Boolean),
      price: amount != null && String(amount).trim() && Number.isFinite(Number(amount))
        ? (Number(amount) / 100).toFixed(2)
        : null,
      price_id: apiData?.price_id,
    }
  }))

  const clickStartBtn = (priceId) => {
    if (!isLoggedIn.value) {
      router.push(localeTo('login'))
      return
    }

    if (hasActiveAccess.value) {
      router.push(localeTo('download'))
      return
    }

    if (priceId) checkout(priceId)
  }
</script>

<template>
  <q-page class="column justify-center q-pb-none">
    <section class="section section-cards" :data-locale="language">
      <div class="container">
        <div class="container-fluid">
          <div class="section__main row q-mb-xl">
            <div class="section__column section__column-left">
              <div class="card">
                <div class="card__body q-pa-md">
                  <div class="card__head q-mb-md">
                    <p class="card-subtitle q-mb-sm">{{ trialCard.subtitle }}</p>
                    <h2 class="card-title q-mb-md">{{ trialCard.title }}</h2>
                    <p class="card-description">{{ trialCard.description }}</p>
                  </div>
                  <div class="card__main">
                    <q-list>
                      <q-item v-for="(text, index) in trialCard.list" :key="index" class="items-center q-pa-none">
                        <q-icon name="check" class="q-mr-sm" color="#E4CD71"/>
                        <p>{{ text }}</p>
                      </q-item>
                    </q-list>
                  </div>
                  <div v-if="trialCard.btn || trialCard.notice" class="card__foot">
                    <q-btn v-if="trialCard.btn"
                           :to="localeTo('download')"
                           unelevated
                           rounded
                           class="btn-gold q-mb-md">
                      {{ trialCard.btn }}
                    </q-btn>
                    <p v-if="trialCard.notice" class="card-notice">{{ trialCard.notice }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section__column section__column-right">
              <span class="section__subtitle q-mb-sm">
                {{t('pricing.subtitle')}}
              </span>
              <h1 class="section__description">
                {{t('pricing.title')}}
              </h1>
              <q-list class="cards row justify-center">
                <q-item v-for="item in cards" :key="item.key"
                        class="card q-py-none"
                        :class="[ item.key === 'monthly' ? 'card-monthly' : '',
                              item.key === 'yearly' ? 'card-yearly' : '']">
                  <q-item-section class="card__body">
                    <div v-if="item.title || item.badge || item.price !== null" class="card__head q-mb-md">
                      <h2 v-if="item.title || item.badge" class="card-title q-mb-xs">
                        {{item.title}}
                        <span class="card-badge" v-if="item.badge">{{item.badge}}</span>
                      </h2>
                      <p v-if="item.price !== null" class="card-price">
                        ${{item.price}} <span class="card-price--period">/ {{item.period}}</span>
                      </p>
                    </div>
                    <div v-if="item.discountPrice || item.list.length" class="card__main column q-mb-md">
                      <q-list class="column items-start text-white">
                        <q-item v-if="item.discountPrice" class="row items-center q-pa-none">
                          <span>{{ item.discountPrice }}</span>
                        </q-item>
                        <q-item v-for="(text, itemIndex) in item.list" :key="itemIndex"
                                class="flex items-center q-pa-none">
                          <div>
                            <q-icon name="circle" class="q-mr-sm"/>
                            <p>
                              {{ text }}
                            </p>
                          </div>
                        </q-item>
                      </q-list>

                    </div>
                    <div v-if="getText('buttons.start')" class="card__foot">
                      <q-btn @click="clickStartBtn(item.price_id)"
                             :disable="isLoggedIn && !hasActiveAccess && !item.price_id"
                             unelevated
                             rounded
                             flat
                             class="btn-gold q-mt-auto">
                        {{ t('buttons.choose', { data: item.title }) }}
                      </q-btn>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
              <p class="section__notice">
                {{t('pricing.description')}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="paddle-checkout"></div>
    </section>
    <section class="section section-steps">
      <div class="container">
        <div class="container-fluid">
          <div class="section__body">
            <div class="section__head q-mb-sm">
              <h2 class="section__title">{{t('pricing.steps.title')}}</h2>
            </div>
            <div class="section__main">
              <q-list>
                <q-item v-for="(item, index) in pricingSteps" :key="item.key" class="items-start">
                  <q-item-section>
                    <span class="badge">0{{index + 1}}</span>
                    <div>
                      <span class="q-mb-sm">{{item.title}}</span>
                      <p>{{item.description}}</p>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-features">
      <div class="container">
        <div class="container-fluid">
          <div class="section__body">
            <div class="section__head q-mb-xl">
              <span class="note q-mb-lg">
                {{ t('pricing.features.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{ t('pricing.features.title') }}
              </h1>
            </div>
            <div class="section__main">
              <div class="section__column section__column-left">
                <img :src="Features" alt=""/>
              </div>
              <div class="section__column section__column-left">
                <q-list >
                  <q-item v-for="(item, index) in pricingFeatures" :key="index" class="q-pa-none items-start">
                    <q-item-section avatar class="items-center q-pa-none">
                      <q-icon :name="item.icon"/>
                    </q-item-section>
                    <q-item-section>
                      <span class="q-mb-xs">{{item.title}}</span>
                      <p>{{item.description}}</p>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-faq">
      <div class="container">
        <div class="container-fluid">
          <div class="section__body">
            <div class="section__head q-mb-md">
              <span class="note q-mb-lg">
                {{ t('pricing.faq.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{ t('pricing.faq.title') }}
              </h1>
              <p class="section__description">
                {{ t('pricing.faq.description') }}
              </p>
            </div>
            <div class="section__main">
              <q-list>
                <q-expansion-item
                  v-for="(item, index) in pricingFaq" :key="index"
                  :label="item.title"
                  hide-expand-icon
                >
                  <template #header="{ expanded }">
                    <q-item-section>
                      {{ item.title }}
                    </q-item-section>

                    <q-item-section side>
                      <q-icon
                        :name="expanded ? 'remove' : 'add'"
                        size="24px"
                      />
                    </q-item-section>
                  </template>

                  <q-card>
                    <q-card-section>
                      {{item.description}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-cta">
      <div class="container">
        <div class="container-fluid">
          <div class="section__body">
            <div class="section__main">
              <div class="column justify-center items-center">
                <h1 class="section__title q-mb-sm">
                  {{ t('pricing.cta.title') }}
                </h1>
                <p class="section__description q-mb-md">
                  {{ t('pricing.cta.subtitle') }}
                </p>
                <q-btn :to="localeTo('download')"
                       unelevated
                       rounded
                       class="btn-gold btn-download">
                  {{ t('pricing.cta.btn') }}
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
  .q-page {
    padding: 100px 0 0;
  }

  .container {
    &-fluid {
      @media (min-width: 90em) {
        max-width: 1280px;
      }
    }
  }

  .section {
    &-cards {
      position: relative;

      @media (min-width: 77.5em) {
        padding-top: 64px;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: none;
        width: 325px;
        height: 180px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top left;
        background-image: url("../../assets/images/pricing/Decor-1.png");
        pointer-events: none;

        @media (min-width: 77.5em) {
          display: inline-block;
        }

        @media (min-width: 90em) {
          width: 385px;
          height: 245px;
        }
      }

      .cards {
        margin-left: -12px;
        margin-right: -12px;

        @media (min-width: 90em) {
          flex-wrap: nowrap;
        }
      }

      .card {
        padding: 0 12px;
        margin-bottom: 20px;
        transition: 0.25s;
        width: 100%;

        @media (min-width: 64em) {
          max-width: calc(100% / 3);
        }

        @media (min-width: 90em) {
          margin-bottom: 32px;
        }

        h2 {
          position: relative;

          @media (min-width: 90em) {
            margin-bottom: 12px;
          }
        }

        .q-btn {
          padding: 12px 20px;
          line-height: 120%;
          font-size: 1rem;
          font-weight: 700;
          text-transform: capitalize;

          @media (min-width: 77.5em) {
            width: 100%;
          }
        }

        .q-icon {
          font-size: 6px;
        }

        .q-item {
          min-height: auto;
          font-size: 0.875rem;
          line-height: 110%;
          color: #A9B9BC;

          @media (min-width: 90em) {
            color: #fff;
            font-size: 1.125rem;
          }

          span,
          p {
            font-size: inherit;
            line-height: inherit;
            vertical-align: middle;
          }

          p {
            display: inline;
          }

          span {
            color: #0FD09A;

            @media (min-width: 90em) {
              font-size: 1rem;
            }
          }
        }

        &__body {
          justify-content: flex-start;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #012243;
          transition: 0.25s;

          @media (min-width: 90em) {
            padding: 28px;
          }
        }

        &__head {
          display: flex;
          justify-content: space-between;

          @media (min-width: 77.5em) {
            flex-direction: column;
          }
        }

        &__main {
          flex: 1;
          margin-bottom: 16px;

          @media (min-width: 90em) {
            margin-bottom: 24px;
          }
        }

        &-title {
          font-size: 1.25rem;
          line-height: 130%;
          font-weight: 600;

          @media (min-width: 90em) {
            font-size: 1.375rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.5rem;
          }
        }

        &-description {
          font-size: 0.875rem;
          line-height: 110%;
          color: #A9B9BC;

          @media (min-width: 90em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.375rem;
          }
        }

        &-subtitle {
          font-size: 0.75rem;
          line-height: 110%;
          color: #E4CD71;
          text-transform: uppercase;

          @media (min-width: 90em) {
            font-size: 0.875rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1rem;
          }
        }

        &-notice {
          font-size: 0.75rem;
          line-height: 110%;
          color: #A9B9BC;
          opacity: 0.8;

          @media (min-width: 90em) {
            font-size: 1rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.25rem;
          }
        }

        &-price {
          font-size: 1.125rem;
          font-weight: 700;
          color: #E4CD71;

          @media (min-width: 90em) {
            font-size: 2rem;
          }

          @media (min-width: 158.75em) {
            font-size: 2.725rem;
          }

          &--period {
            font-size: 1rem;
            line-height: 110%;
            color: #A9B9BC;
            font-weight: 400;
          }
        }

        &-badge {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          display: none;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #0AFDFF;
          background: #00333C;
          font-size: 0.75rem;
          line-height: 150%;
          color: #0AFDFF;

          @media (min-width: 77.5em) {
            display: inline-block;
          }
        }

        &:hover {
          @media (min-width: 77.5em) {
            transform: translateY(-10px);
          }
        }
      }

      .section {
        &__main {
          margin: 0 -12px 16px;
          justify-content: center;

          @media (min-width: 77.5em) {
            margin-bottom: 72px;
            flex-wrap: nowrap;
          }
        }

        &__column {
          padding: 0 12px;

          &-left {
            .card {
              padding: 0;
              max-width: none;

              @media (min-width: 77.5em) {
                max-width: 310px;
                margin-bottom: 0;
              }

              @media (min-width: 90em) {
                max-width: 402px;
              }

              .q-item {
                margin-bottom: 10px;
                color: #FFF;

                @media (min-width: 90em) {
                  margin-bottom: 16px;
                }
              }

              .q-icon {
                font-size: 16px;
                color: #E4CD71;
              }

              &__body {
                border-radius: 20px;
                border: 1.5px solid #E4CD71;
                background: #00333C;
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.25);

                @media (min-width: 90em) {
                  padding: 32px;
                }
              }

              &__head {
                flex-direction: column;
              }

              &-title {
                font-size: 1.75rem;

                @media (min-width: 90em) {
                  font-size: 2rem;
                }

                @media (min-width: 158.75em) {
                  font-size: 2.25rem;
                }
              }
            }
          }

          &-right {
            width: 100%;

            @media (min-width: 77.5em) {
              width: auto;
              flex: 1;
            }

            .card {
              .q-item {
                &:not(:last-of-type) {
                  margin-bottom: 4px;
                }
              }
            }
          }
        }

        &__description {
          margin-bottom: 20px;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 130%;

          @media (min-width: 48em) {
            text-align: center;
          }

          @media (min-width: 77.5em) {
            text-align: left;
          }

          @media (min-width: 90em) {
            font-size: 1.375rem;
            margin-bottom: 32px;
          }

          @media (min-width: 158.75em) {
            font-size: 1.5rem;
          }
        }

        &__subtitle {
          display: inline-block;
          padding: 6px 16px;
          border-radius: 100px;
          border: 1px solid #0AFDFF;
          background: #051C1B;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 130%;
          color: #0AFDFF;

          @media (min-width: 48em) {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
          }

          @media (min-width: 77.5em) {
            position: static;
            transform: none;
          }

          @media (min-width: 158.75em) {
            font-size: 1rem;
          }
        }

        &__notice {
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 140%;
          color: #A9B9BC;

          @media (min-width: 90em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.5rem;
          }
        }
      }

      &[data-locale="ru"] {
        .card {
          &__body {
            @media (min-width: 90em) {
              padding: 24px;
            }
          }
        }

        .section {
          &__column {
            &-left {
              .card {
                &__body {
                  @media (min-width: 90em) {
                    padding: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }

    &-steps {
      padding: 32px 0;
      background-color: #01152B;

      @media (min-width: 77.5em) {
        padding: 56px 0;
      }

      .section {
        &__head {
          @media (min-width: 77.5em) {
            display: none;
          }
        }

        &__title {
          font-size: 1.375rem;
          line-height: 130%;
          font-weight: 600;
        }
      }

      .badge {
        position: relative;
        margin-right: 16px;
        font-size: 2rem;
        line-height: 100%;
        font-weight: 800;
        color: #E4CD71;

        @media (min-width: 77.5em) {
          width: 100%;
          font-size: 2.25rem;
          margin: 0 0 16px;
        }

        @media (min-width: 158.75em) {
          font-size: 2.5rem;
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          display: none;
          width: 60px;
          height: 1px;
          margin: auto;
          opacity: 0.4;
          background: #0AFDFF;

          @media (min-width: 77.5em) {
            display: inline-block;
          }
        }
      }

      .q-list {
        @media (min-width: 64em) {
          display: flex;
          flex-wrap: wrap;
        }

        @media (min-width: 77.5em) {
          flex-wrap: nowrap;
        }
      }

      .q-item {
        padding: 0;

        @media (min-width: 64em) {
          flex: 50%;
          padding: 0 12px;
        }

        @media (min-width: 77.5em) {
          flex: 25%;
        }

        &__section {
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          flex-wrap: nowrap;
          padding: 16px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);

          @media (min-width: 77.5em) {
            flex-direction: column;
            border: none;
          }

          div {
            span {
              display: inline-block;
              font-size: 1rem;
              line-height: 110%;
              font-weight: 600;

              @media (min-width: 77.5em) {
                font-size: 1.125rem;
              }

              @media (min-width: 158.75em) {
                font-size: 1.5rem;
              }
            }
          }

          p {
            font-size: 0.875ren;
            font-weight: 400;
            line-height: 150%;
            color: #A9B9BC;

            @media (min-width: 77.5em) {
              font-size: 1.125rem;
            }

            @media (min-width: 158.75em) {
              font-size: 1.5rem;
            }
          }
        }

        &:last-of-type {
          padding-bottom: 0;

          .q-item__section {
            border: none;
          }

          .badge {
            &:before {
              display: none;
            }
          }
        }

        &:nth-of-type(n+3) {
          .q-item__section {
            @media (min-width: 64em) {
              border: none;
            }
          }
        }
      }
    }

    &-features {
      padding: 16px 0;

      @media (min-width: 64em) {
        padding: 40px 0;
      }

      @media (min-width: 77.5em) {
        padding: 96px 0;
      }

      img {
        display: block;
        max-width: 375px;
        width: 100%;
        margin: 0 auto;

        @media (min-width: 64em) {
          max-width: none;
        }
      }

      .q-list {
        span {
          font-size: 1rem;
          line-height: 130%;
          font-weight: 600;

          @media (min-width: 77.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.25rem;
          }
        }

        p {
          font-size: 0.875rem;
          line-height: 150%;
          font-weight: 400;
          color: #A9B9BC;

          @media (min-width: 77.5em) {
            font-size: 1.125rem;
            color: rgba(255, 255, 255, 0.86);
          }

          @media (min-width: 158.75em) {
            font-size: 1.25rem;
          }
        }
      }

      .q-item {
        margin-bottom: 16px;

        @media (min-width: 77.5em) {
          margin-bottom: 24px;
        }

        &__section {
          &--avatar {
            width: 40px;
            min-width: auto;
            height: 40px;
            border-radius: 8px;
            margin-right: 16px;
            border: 1px solid rgba(23, 100, 89, 0.63);
            background: #00333C;
            color: #0AFDFF;

            .q-icon {
              font-size: 18px;
            }
          }
        }
      }

      .section {
        &__main {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -12px;

          @media (min-width: 64em) {
            flex-wrap: nowrap;
            margin: 0 -24px;
          }
        }

        &__column {
          width: 100%;
          padding: 0 12px;

          @media (min-width: 64em) {
            width: 50%;
            padding: 0 24px;
          }

          &-left {
            margin-bottom: 24px;

            @media (min-width: 64em) {
              margin: 0;
            }
          }
        }
      }
    }

    &-faq {
      position: relative;
      padding: 48px 0;

      @media (min-width: 77.5em) {
        padding: 96px 0;
      }

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        display: none;
        width: 325px;
        height: 180px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top right;
        background-image: url("../../assets/images/pricing/Decor-2.png");
        pointer-events: none;

        @media (min-width: 77.5em) {
          display: inline-block;
        }

        @media (min-width: 90em) {
          height: 175px;
        }
      }

      .section {
        &__body {
          display: flex;
          flex-direction: column;
          margin: 0 -12px;

          @media (min-width: 64em) {
            flex-direction: row;
          }

          @media (min-width: 77.5em) {
            margin: 0 -24px;
          }
        }

        &__head {
          padding: 0 12px;

          @media (min-width: 64em) {
            max-width: 40%;
          }

          @media (min-width: 77.5em) {
            padding: 0 24px;
          }
        }

        &__main {
          flex: 1;
          padding: 0 12px;

          @media (min-width: 77.5em) {
            padding: 0 24px;
          }
        }

        &__description {
          color: #A9B9BC;
        }
      }

      .q-expansion-item {
        padding: 16px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.15);
        font-size: 0.938rem;
        line-height: 120%;
        font-weight: 600;
        background-color: #012243;
        transition: 0.25s background-color;

        @media (min-width: 77.5em) {
          font-size: 1.125rem;
          padding: 24px;
        }

        @media (min-width: 158.75em) {
          font-size: 1.375rem;
        }

        &--expanded {
          background-color: #003548;
        }

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }

      :deep {
        .q-item {
          padding: 0;
          min-height: auto;

          .q-focus-helper {
            display: none;
          }
        }
      }

      .q-card {
        background: transparent;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 150%;
        color: #A9B9BC;

        @media (min-width: 77.5em) {
          font-size: 1.125rem;
        }

        @media (min-width: 158.75em) {
          font-size: 1.375rem;
        }

        &__section {
          padding: 12px 0 0;

          @media (min-width: 77.5em) {
            padding-top: 16px;
          }
        }
      }

      .q-icon {
        color: #E4CD71;
      }
    }

    &-cta {
      position: relative;
      padding: 48px 0;
      background: linear-gradient(180deg, #00394B 0%, #011C37 100%);
      text-align: center;

      @media (min-width: 77.5em) {
        padding: 120px 0;
      }

      &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        display: none;
        width: 395px;
        height: 205px;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top right;
        background-image: url("../../assets/images/pricing/Decor-1.png");
        pointer-events: none;

        @media (min-width: 77.5em) {
          display: inline-block;
        }

        @media (min-width: 90em) {
          right: 80px
        }

        @media (min-width: 100em) {
          right: 120px;
        }
      }

      .section {
        &__title {
          font-size: 1.5rem;
          line-height: 130%;
          font-weight: 600;

          @media (min-width: 77.5em) {
            font-size: 2.5rem;
          }

          @media (min-width: 158.75em) {
            font-size: 3.5rem;
          }
        }

        &__description {
          font-size: 1rem;
          line-height: 150%;
          font-weight: 400;
          color: #E4CD71;

          @media (min-width: 77.5em) {
            font-size: 1.25rem;
          }

          @media (min-width: 158.75em) {
            font-size: 1.5rem;
          }
        }
      }

      .q-btn {
        padding: 12px 30px;
        text-transform: none;
        font-size: 1rem;

        @media (min-width: 77.5em) {
          font-size: 1.25rem;
          padding: 12px 62px;
        }

        @media (min-width: 158.75em) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .note {
    &:before {
      display: none;

      @media (min-width: 37.5em) {
        display: inline-block;
      }
    }
  }
</style>
