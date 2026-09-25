<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  import icon from 'src/assets/images/distinction/Icon-2.png'
  import icon3 from 'src/assets/images/distinction/Icon-3.png'

  const { t, tm, locale } = useI18n()

  const language = computed(() => locale.value.split('-')[0])


  const listCompetitors = computed(() => {
    return tm('pages.home.distinction.competitors.list')
  })
  const listFeatures = computed(() => {
    return tm('pages.home.distinction.features.list')
  })
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl" :data-locale="language">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body q-pb-xl q-mb-xl">
          <div class="section__head q-mb-xl">
            <span class="note q-mb-lg">
              {{ t('pages.home.distinction.note') }}
            </span>
            <h1 class="section__title q-mb-md">
              {{ t('pages.home.distinction.title') }}
            </h1>
            <p class="section__subtitle">
              {{ t('pages.home.distinction.description') }}
            </p>
          </div>
          <div class="section__main">
            <div class="flex">
              <div class="col">
                <div class="section__column section__column--left">
                  <div class="section__column-content column items-center">
                    <q-img :src="icon" class="q-mb-sm"/>
                    <span class="q-pb-lg">
                      {{ t('pages.home.distinction.competitors.title') }}
                    </span>
                    <q-list class="column">
                      <q-item v-for="(item, index) in listCompetitors" :key="index">
                        <div class="q-item__body">
                          <q-item-section class="row justify-between no-wrap q-pa-none">
                            <q-item-label>{{ item.title }}</q-item-label>
                            <q-item-label>{{ item.price }}</q-item-label>
                          </q-item-section>
                        </div>
                      </q-item>
                    </q-list>
                    <p>{{ t('pages.home.distinction.competitors.subtitle') }}</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="section__column section__column--right">
                  <div class="section__column-content column items-center">
                    <span class="q-pb-lg">
                      {{ t('pages.home.distinction.features.title') }}
                    </span>
                    <div class="price q-mb-lg">
                      <q-img :src="icon3"/>
                      <span>
                        {{ t('pages.home.distinction.features.subtitle') }}
                      </span>
                    </div>
                    <q-list class="column">
                      <q-item v-for="(item, index) in listFeatures" :key="index">
                        <div class="q-item__body">
                          <q-item-section class="q-pa-none">
                            <q-item-label>{{ item.title }}</q-item-label>
                          </q-item-section>
                        </div>
                      </q-item>
                    </q-list>
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
      z-index: -1;
      top: -240px;
      right: 0;
      height: 80%;
      width: 100%;
      background: linear-gradient(180deg, #013A4C 0%, #42938A 38.17%, #011C37 100%);
      clip-path: polygon(0 18%, 100% 9%, 100% 100%, 0% 100%);

      @media (min-width: 77.5em) {
        clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
      }
    }

    &__head {
      color: #011C37;
    }

    &__title {
      text-align: center;
    }

    &__subtitle {
      width: 100%;
      max-width: 65%;
      margin: 0 auto;
      text-align: center;
      color: inherit;
    }

    &__main {
      @media (min-width: 77.5em) {
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150px auto;
        background-image: url("../../../assets/images/distinction/Icon-1.png");
      }

      @media (min-width: 90em) {
        background-size: 200px auto;
      }

      .col {
        &:first-child {
          display: none;

          @media (min-width: 77.5em) {
            display: inline-block;
          }
        }
      }
    }

    &__column {
      background-repeat: no-repeat;

      p {
        position: relative;
        font-size: 20px;
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 6px;
        padding: 18px;

        &:before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          margin: auto;
          width: 100px;
          height: 2px;
          border-radius: 50%;
          background: linear-gradient(90deg, rgba(#013A4C, 0) 0%, #0AFDFF 50%, rgba(#013A4C, 0) 100%);
          box-shadow: 0 0 10px #0AFDFF;
        }
      }

      .q-list {
        width: 100%;

        .q-item {
          &__body {
            display: flex;
            align-items: center;
            width: 100%;
          }
        }
      }

      &-content {
        width: 100%;
        max-width: 270px;
        margin: 0 auto;
      }

      &--left {
        padding-top: 85px;
        padding-right: 10px;
        padding-bottom: 225px;
        background-position: top center;
        background-image: url("../../../assets/images/distinction/Background-left.png");
        background-size: auto 100%;

        span {
          position: relative;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          text-align: center;
          font-size: 18px;

          &:before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            margin: auto;
            width: 4px;
            height: 4px;
            border-radius: 50px;
            background-color: #0AFDFF;
            box-shadow: 0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF;
          }
        }

        .q-img {
          width: 60px;
        }

        .q-list {
          margin: 0 auto 24px;
        }

        .q-item {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.2);

          &__section {
            flex-direction: row;
          }

          &__label {
            white-space: nowrap;
            margin: 0;
          }

          &:last-child {
            &:before {
              content: '';
              position: absolute;
              bottom: -2px;
              left: 0;
              right: 0;
              margin: auto;
              width: 4px;
              height: 4px;
              border-radius: 50px;
              background-color: #0AFDFF;
              box-shadow: 0 0 10px #0AFDFF,
              0 0 10px #0AFDFF,
              0 0 10px #0AFDFF,
              0 0 10px #0AFDFF,
              0 0 10px #0AFDFF,
              0 0 10px #0AFDFF;
            }
          }
        }
      }

      &--right {

        @media (min-width: 26em) {
          padding-top: 80px;
          padding-bottom: 70px;
          background-image: url("../../../assets/images/distinction/Background-right.png");
          background-position: top 10px center;
          background-size: 520px auto;
        }

        @media (min-width: 37.5em) {
          background-size: auto 100%;
          padding-bottom: 100px;
        }

        @media (min-width: 77.5em) {
          padding-bottom: 125px;
        }

        span {
          position: relative;
          display: block;
          color: #E4CD71;
          font-size: 38px;

          &:before {
            content: '';
            position: absolute;
            bottom: 0;
            left: -10%;
            right: -10%;
            margin: auto;
            height: 20px;
            width: 100%;
            background-image: url("../../../assets/images/distinction/Decor.png");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            @media (min-width: 37.5em) {
              width: 100%;
            }
          }
        }

        .price {
          span {
            &:before {
              bottom: -20px;
              left: -50%;
              right: -50%;
              width: 170%;

              @media (min-width: 37.5em) {
                width: 150%;
              }
            }
          }
        }

        .q-img {
          width: 160px;
        }

        .q-list {
          padding-left: 50px;
          font-size: 20px;

          .q-item {
            display: flex;
            align-items: center;

            &:before {
              content: '';
              width: 8px;
              height: 16px;
              border: solid #E4CD71;
              border-width: 0 3px 3px 0;
              transform-origin: center;
              transform: rotate(45deg) translateY(7px) translateX(-10px);
            }
          }
        }
      }
    }

    &[data-locale="ru"] {
      .section {
        &__column {
          &--left {
            .q-item {
              padding-left: 0;
              padding-right: 0;
            }
          }
        }
      }
    }

    &[data-locale="ua"] {
      .section {
        &__column {
          &--left {
            .q-item {
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        }
      }
    }
  }
</style>
