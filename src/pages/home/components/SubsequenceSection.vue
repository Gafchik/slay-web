<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'

  import cup from 'src/assets/images/steps/Cup.png'

  const { t, tm } = useI18n()
  const { localeTo } = useLocaleRoute()

  const listSteps = computed(() => {
    return tm('pages.home.subsequence.before.list')
  })
  const featuresSteps = computed(() => {
    return tm('pages.home.subsequence.after.list')
  })
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body q-pb-xl q-mb-xl">
          <div class="section__head q-mb-xl">
            <span class="note q-mb-lg">
              {{ t('pages.home.subsequence.note') }}
            </span>
            <h2 class="section__title q-mb-md">
              {{ t('pages.home.subsequence.title') }}
            </h2>
            <p class="section__subtitle">
              {{ t('pages.home.subsequence.description') }}
            </p>
          </div>
          <div class="section__main">
            <div class="flex">
              <div class="col section__column--left">
                <div class="routine flex justify-between items-center q-mb-sm">
                  <span>
                    {{ t('pages.home.subsequence.before.note') }}
                  </span>
                  <span>
                    {{ t('pages.home.subsequence.before.badge') }}
                  </span>
                </div>
                <q-list class="column">
                  <q-item v-for="(item, index) in listSteps" :key="index" class="q-mb-md">
                    <div class="q-item__body">
                      <q-item-section class="q-pa-none">
                        <q-item-label>{{ item.title }}</q-item-label>
                      </q-item-section>
                    </div>
                  </q-item>
                </q-list>
              </div>
              <div class="col section__column--right">
                <div class="flex full-height q-mr-auto">
                  <div class="column">
                    <div class="routine">
                      <span>
                        {{ t('pages.home.subsequence.after.note') }}
                      </span>
                    </div>
                    <div class="q-mt-auto">
                      <div class="workspace q-mb-lg">
                        <q-img :src="cup"/>
                        <p>
                          {{ t('pages.home.subsequence.after.subtitle') }}
                        </p>
                        <h3 class="q-mb-lg">
                          {{ t('pages.home.subsequence.after.title') }}
                        </h3>
                        <q-list>
                          <q-item v-for="(item, index) in featuresSteps" :key="index" class="q-mb-sm">
                            <q-item-label>{{ item.title }}</q-item-label>
                          </q-item>
                        </q-list>
                      </div>
                    </div>
                    <div class="flex justify-center">
                      <q-btn :to="localeTo('download')"
                             unelevated
                             rounded
                             class="btn-download btn-gold">
                        Try it Now
                      </q-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      right: 16px;
      top: 0;
      width: 408px;
      height: 351px;
      background-image: url("../../../../src/assets/images/steps/Decor-1.png");
      background-size: cover;
      background-repeat: no-repeat;
      pointer-events: none;
    }

    &__head {
      max-width: 40%;
    }

    &__column {
      &--left {
        .q-list {
          position: relative;
          color: #0AFDFF;
          font-size: 20px;
          line-height: normal;
          font-weight: 500;
          counter-reset: item;

          &:before {
            content: '';
            position: absolute;
            z-index: 1;
            left: calc(100% - 5px);
            top: 0;
            bottom: 0;
            height: 86%;
            width: 50%;
            margin: auto;
            background-image: url("../../../../src/assets/images/steps/Decor-2.png");
            background-size: contain;
            background-position: left center;
            background-repeat: no-repeat;
            pointer-events: none;

            @media (min-width: 90em) {
              height: 87%;
            }
          }

          .q-item {
            padding: 24px 20px;
            border-radius: 16px;
            background: #012243;
            box-shadow: -5px -5px 15px 0 #01203F, 5px 5px 15px 0 #01182F;

            &:before {
              counter-increment: item;
              content: counter(item) ".";
              margin-right: 12px;
            }

            &__body {
              display: flex;
              align-items: center;
            }
          }
        }
      }

      &--right {
        & > div {
          margin-left: 200px;

          @media (min-width: 90em) {

          }
        }
        .q-list {
          display: grid;
          grid-template-columns: repeat(2, max-content);
          grid-template-rows: repeat(4, auto);
          grid-auto-flow: column; /* <-- вот это */
          gap: 0 50px;
          list-style: none;
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;

          .q-item {
            min-height: auto;
            padding: 0 0 0 28px;

            &:before {
              content: '';
              position: absolute;
              left: 0;
              top: 0;
              bottom: 0;
              width: 20px;
              height: 18px;
              margin: auto;
              background-image: url("../../../../src/assets/images/icons/checked.svg");
              background-size: 100%;
              background-repeat: no-repeat;
              pointer-events: none;
            }
          }
        }
      }
    }
  }

  .workspace {
    position: relative;
    padding: 180px 34px 30px;
    border-radius: 16px;
    background: #053D41;
    box-shadow: -5px -5px 15px 0 #01203F, 5px 5px 15px 0 #01182F;
    text-align: center;

    @media (min-width: 90em) {
      padding: 196px 50px 40px;
    }

    p {
      font-size: 20px;
      color: #0AFDFF;
    }

    h3 {
      color: #E4CD71;
    }

    .q-img {
      position: absolute;
      top: -103px;
      left: 0;
      right: 0;
      margin: auto;
      width: 220px;
      height: auto;

      @media (min-width: 90em) {
        top: -133px;
        width: 254px;
      }
    }
  }

  .routine {
    position: relative;
    z-index: 1;
    color: #E4CD71;
    font-size: 20px;
    line-height: 36px;
    font-style: italic;
    font-weight: 400;

    span {
      &:last-child:not(:first-child) {
        padding: 0 24px;
        color: #011C37;
        border-radius: 16px;
        background: #0AFDFF;
      }
    }
  }

  .q-btn {
    text-transform: capitalize;
  }
</style>
