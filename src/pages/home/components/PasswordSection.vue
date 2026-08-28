<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, tm  } = useI18n();

  const passwordFeatures = computed(() => {
    return tm('pages.home.passwords.list')
  })
</script>

<template>
  <section class="section text-white q-py-xl q-mb-xl">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body">
          <div class="section__head q-mb-xl">
            <span class="note q-mb-lg">
              {{ t('pages.home.passwords.note') }}
            </span>
            <h2 class="section__title q-mb-md">
              {{ t('pages.home.passwords.title') }}
            </h2>
            <p class="section__subtitle">
              {{ t('pages.home.passwords.subtitle') }}
            </p>
            <p class="section__subtitle section__description">
              {{ t('pages.home.passwords.description') }}
            </p>
          </div>
          <div class="section__main">
            <q-list class="flex items-start">
              <q-item v-for="(item, index) in passwordFeatures" :key="index">
                <div class="q-item__body column justify-start">
                  <q-item-section class="q-pa-none">
                    <q-icon :name="item.icon" class="q-mb-md"/>
                    <q-item-label>{{ item.title }}</q-item-label>
                    <q-item-label>{{ item.subtitle }}</q-item-label>
                  </q-item-section>
                </div>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      pointer-events: none;
    }

    &:before {
      top: -100px;
      right: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, #186459 6.93%, #011C37 100%);
      clip-path: polygon(0 0, 100% 10%, 100% 100%, 0% 100%);

      @media (min-width: 77.5em) {
        clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
      }
    }

    &:after {
      top: -210px;
      right: 0;
      display: none;
      width: 408px;
      height: 436px;
      background-image: url("../../../../src/assets/images/decor/Decor-3.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      @media (min-width: 77.5em) {
        display: inline-block;
      }
    }

    &__head {
      position: relative;

      @media (min-width: 64em) {
        width: 50%;
      }
    }

    &__description {
      margin-top: 8px;

      @media (min-width: 64em) {
        position: absolute;
        bottom: 0;
        left: 100%;
        padding-left: 24px;
        margin-left: 24px;
        margin-top: 0;
        width: 100%;
        border-left: 1px solid rgba(228, 205, 113, 0.64);
      }
    }
  }

  .q-list {
    margin: 0 -12px;

    .q-item {
      padding: 0 12px;
      margin-bottom: 16px;
      align-self: normal;

      @media (min-width: 37.5em) {
        flex: 50%;
      }

      @media (min-width: 77.5em) {
        flex: 25%;
        align-self: auto;
        margin-bottom: 0;
      }

      &__body {
        position: relative;
        padding: 20px 20px 28px;
        border-radius: 8px;
        background: #00333C;

        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          top: -1px;
          left: -1px;
          border-radius: inherit;
          height: calc(100% + 2px);
          width: calc(100% + 2px);
          padding: 2px;
          background: linear-gradient(
              to bottom,
              #E4CD71,
              rgba(126, 113, 62, 0)
          );

          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);

          -webkit-mask-composite: xor;
          mask-composite: exclude;

          pointer-events: none;
        }
      }

      &__label {
        color: #E4CD71;
        font-size: 20px;
        font-weight: 500;

        & + .q-item__label {
          color: inherit;
          font-size: 18px;
        }
      }

      &:nth-of-type(even) {
        .q-item {
          &__body {

            @media (min-width: 77.5em) {
              margin-top: 35%;
            }

            &:before {
              @media (min-width: 77.5em) {
                background: linear-gradient(
                    to top,
                    #E4CD71,
                    rgba(126, 113, 62, 0)
                );
              }
            }
          }
        }
      }
    }

    .q-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color: #084144;
      font-size: 24px;
    }
  }
</style>
