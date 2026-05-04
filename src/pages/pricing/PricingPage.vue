<script setup>
  import { useI18n } from 'vue-i18n'
  import { computed, ref } from 'vue'

  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  const { t, tm } = useI18n()
  const { localeTo } = useLocaleRoute()

  const defaultPrice = ref('$9.99');

  const cards = ref([
    {
      title: 'Monthly',
      subtitle: 'Billed monthly',
      price: '$7.99',
      discount: '',
      badget: '',
    },
    {
      title: '6 Months',
      subtitle: 'Billed every 6 months',
      price: '$6.99',
      discount: '12%',
      discountPrice: '$6',
      badget: ''
    },
    {
      title: 'Yearly',
      subtitle: 'Billed annually',
      price: '$5.99',
      discount: '25%',
      discountPrice: '$24',
      badget: 'Best Value'
    },
  ]);

  const getCardInfo = (card) => {
    const list = tm('pricing.info.list') || []

    return list
      .filter(item => item.key !== 'discount' || card.discount)
      .map(item => {
        if (item.key !== 'discount') {
          return item
        }

        const [before, after] = item.title.split('{discount}')

        return {
          ...item,
          isDiscount: true,
          before,
          after,
          discount: card.discount
        }
      })
  }

  const pricingFeatures = computed(() => {
    return tm('pricing.features.list') || []
  })

  const pricingDetails = computed(() => {
    return tm('pricing.details') || []
  })
</script>

<template>
  <q-page class="column justify-center q-pb-xl">
    <section class="section">
      <div class="container">
        <div class="section__head">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text">{{ t('routes.pricing') }}</h2>
            <p>{{ t('pricing.subTitle')}}</p>
          </div>
        </div>

        <div class="section__main q-mb-xl">
          <q-list class="cards row justify-center q-mb-xl">
            <q-item v-for="(item, index) in cards" :key="index"
                    class="card q-py-none q-mb-md col-md-4 col-sm-6 col-xs-12"
                    :class="[ index === 0 ? 'card-monthly' : '',
                              index === 2 ? 'card-yearly' : '']">
              <q-item-section class="card__body q-pa-md">
                <div class="card__head column items-center q-pb-md q-mb-md">
                  <h2 class="card-title q-mb-xs">{{item.title}}</h2>
                  <p class="card-subtitle q-mb-md">{{item.subtitle}}</p>
                  <span class="card-price--default q-mb-md">{{defaultPrice}}</span>
                  <p class="card-price q-mb-xs"><span class="card-price--promo">{{item.price}}</span> / month</p>
                  <p class="card-free">{{t('pricing.info.free')}}</p>
                  <span class="card-badget" v-if="item.badget">{{item.badget}}</span>
                </div>
                <div class="card__main column q-pb-md q-mb-md">
                  <q-list class="column text-white q-mb-md">
                    <q-item v-for="(itemInfo, itemIndex) in getCardInfo(item)" :key="itemIndex"
                            class="q-mb-md q-pa-none items-start">
                      <div class="icon q-mr-md">
                        <q-icon name="check"/>
                      </div>

                      <q-item-section>
                        <template v-if="itemInfo.isDiscount">
                          <p>
                            {{ itemInfo.before }}
                            <span class="discount-value">{{ itemInfo.discount }}</span>
                            (~{{item.discountPrice}}) {{ itemInfo.after }}
                          </p>
                        </template>

                        <p v-else>
                          {{ itemInfo.title }}
                        </p>
                      </q-item-section>
                    </q-item>
                  </q-list>

                  <q-btn :to="localeTo('login')"
                         unelevated
                         rounded
                         class="btn-glass--primary q-px-xl q-py-sm q-mt-auto">
                    {{ t('buttons.start', { data: t('pricing.freeTrial') }) }}
                  </q-btn>
                </div>
                <div class="card__foot">
                  <p class="card-tax">{{t('pricing.info.taxes')}}</p>
                </div>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="features liquid-glass--primary q-pa-md q-mb-xl text-white">
            <h4 class="q-mb-sm">{{t('pricing.features.title')}}</h4>
            <p class="q-mb-md">{{t('pricing.features.description')}}</p>
            <q-list class="flex justify-center">
              <q-item v-for="(item, index) in pricingFeatures" :key="index"
                      class="column items-center q-px-md q-py-none q-mb-md">
                <q-icon :name="item.icon" class="q-mb-md"/>

                <q-item-section class="q-mt-auto">
                  <span>{{item.title}}</span>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <q-list class="details liquid-glass--primary q-px-md q-py-sm">
            <q-item v-for="(item, index) in pricingDetails" :key="index"
                    class="q-px-md q-py-md">
              <q-icon :name="item.icon" class="q-mr-md"/>

              <q-item-section>
                <span class="q-mb-xs">{{item.title}}</span>
                <p>{{item.description}}</p>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.section {

  &__title {
    height: auto;
  }
}

.container {
  @media (min-width: 90em) {
    max-width: 1240px;
  }
}

.cards {
  margin-left: -16px;
  margin-right: -16px;
}

.card {
  transition: 0.25s;

  &__body {
    justify-content: flex-start;
    border: 1px solid white;
    border-radius: 20px;
    transition: 0.25s;
  }

  &__head,
  &__main {
    border-bottom: 1px solid rgba(255,255,255, 0.5);
    border-bottom: 1px solid rgba(255,255,255, 0.5);
  }

  &__main {
    flex: 1;
  }

  &-title {
    font-size: 1.5rem;

    @media (min-width: 64em) {
      font-size: 2rem;
    }

    @media (min-width: 158.75em) {
      font-size: 2.5rem;
    }
  }

  &-subtitle {
    font-size: 1rem;
    line-height: 110%;

    @media (min-width: 158.75em) {
      font-size: 1.25rem;
    }
  }

  &-price {
    &--default {
      font-size: 1rem;
      line-height: 110%;
      text-decoration: line-through;
      opacity: 0.7;

      @media (min-width: 158.75em) {
        font-size: 1.25rem;
      }
    }

    &--promo {
      font-size: 2rem;
      line-height: 110%;
      font-weight: 700;
      color: #03d5ff;

      @media (min-width: 158.75em) {
        font-size: 1.25rem;
      }
    }
  }

  &-free {
    font-size: 0.9rem;
    opacity: 0.6;
  }

  &-badget {
    position: absolute;
    top: -8px;
    right: 10%;
    padding: 2px 10px;
    background-color: #03d5ff;
    border-radius: 16px;
    font-size: 0.7rem;
    color: black;
  }

  &-tax {
    font-size: 0.9rem;
    text-align: center;
    opacity: 0.7;
  }

  .q-btn {
    line-height: 120%;
    font-size: 1rem;
    font-weight: 700;
  }

  .q-item {
    font-size: 0.9rem;
    min-height: auto;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2px;
      border-radius: 50%;
      border: 1px solid #03d5ff;
      font-size: 0.75rem;
      color: #03d5ff;
    }

    span {
      font-size: 1rem;
      color: #03d5ff;
      font-weight: 700;
    }
  }

  &:hover {
    transform: translateY(-10px);

    .card__body {
      box-shadow: 0 0 18px #fff, inset 0 0 6px #fff;
    }
  }

  &-monthly {
    .btn-glass {
      &--primary {
        &:before {
          box-shadow: 0 0 2px #03d5ff, inset 0 0 6px #03d5ff;

          @media (min-width: 77.5em) {
            box-shadow: 0 0 3px #03d5ff, inset 0 0 9px #03d5ff;
          }

          @media (min-width: 158.75em) {
            box-shadow: 0 0 5px #03d5ff, inset 0 0 15px #03d5ff;
          }
        }

        &:hover {
          &:before {
            box-shadow: 0 0 6px #03d5ff, inset 0 0 2px #03d5ff;

            @media (min-width: 77.5em) {
              box-shadow: 0 0 9px #03d5ff, inset 0 0 3px #03d5ff;
            }

            @media (min-width: 158.75em) {
              box-shadow: 0 0 15px #03d5ff, inset 0 0 5px #03d5ff;
            }
          }
        }
      }
    }
  }

  &-yearly {
    .card {
      &__body {
        border-color: #03d5ff;
        box-shadow: 0 0 6px #03d5ff, inset 0 0 18px #03d5ff;
      }
    }

    .q-btn {
      background-color: rgba(#03d5ff, 0.8);
      color: black;
    }

    &:hover {
      .card__body {
        box-shadow: 0 0 18px #03d5ff, inset 0 0 6px #03d5ff;
      }
    }
  }
}

.features {
  border-radius: 20px;

  h4 {
    font-size: 1.5rem;
  }

  p {
    opacity: 0.7;
  }

  span {
    font-size: 1.1rem;
  }

  .q-item {
    flex: 50%;
    text-align: center;

    @media (min-width: 64em) {
      flex: 20%;
    }

    &:not(:last-child) {
      @media (min-width: 64em) {
        border-right: 1px solid rgba(255,255,255,0.5);
      }
    }

    &__section {
      flex: 0;
    }
  }

  .q-icon {
    font-size: 4rem;
    color: #03d5ff;
  }
}

.details {
  border-radius: 20px;

  .q-item {
    &:not(:last-child) {
      border-bottom: 1px solid rgba(255,255,255,0.5);
    }
  }

  .q-icon {
    font-size: 2rem;
  }

  p {
    color: white;
    opacity: 0.7;
    font-size: 0.9rem;
  }
}
</style>
