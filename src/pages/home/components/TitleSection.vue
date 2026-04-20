<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import macIcon from 'src/assets/macOS.svg'
  import winIcon from 'src/assets/Windows.svg'
  import ubuntuIcon from 'src/assets/Ubuntu.svg'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()

  const list = ref([
    {
      icon: macIcon,
      text: 'macOS'
    },
    {
      icon: winIcon,
      text: 'Windows'
    },
    {
      icon: ubuntuIcon,
      text: 'Ubuntu'
    },
  ]);
</script>

<template>
  <section class="section text-center">
    <div class="container">
      <div class="section__body flex column">
        <div class="section__main q-my-auto">
          <div class="section__title">
            <h1 class="title q-mb-lg">{{t('sections.home.title')}}</h1>
            <p class="subtitle">{{t('sections.home.subtitle')}}</p>
            <p class="subtitle q-mb-xl">{{t('sections.home.description')}}</p>
            <q-btn :to="localeTo('download')"
                   unelevated
                   rounded
                   class="btn-download btn-glass--primary q-px-xl">
              {{t('buttons.download')}}
            </q-btn>
          </div>
        </div>
        <div class="section__footer">
          <q-list  class="flex justify-center q-mx-auto">
            <q-item class="flex items-center"
              v-for="(item, index) in list"
              :key="index">
              <q-item-section avatar class="flex">
                <q-img :src="item.icon" />
              </q-item-section>
              <q-item-section>{{ item.text }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    padding: 0;
    min-height: inherit;

    &__title {
      height: initial;
    }

    &__body {
      min-height: inherit;
    }

    &__footer {
      padding-bottom: 24px;

      @media (min-width: 118.75em) {
        padding-bottom: 40px;
      }

      @media (min-width: 158.75em) {
        padding-bottom: 50px;
      }
    }
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;

    @media (min-width: 48em) {
      font-size: 2.25rem;
    }

    @media (min-width: 64em) {
      font-size: 2.5rem;
    }

    @media (min-width: 77.5em) {
      font-size: 3rem;
    }

    @media (min-width: 158.75em) {
      font-size: 4rem;
    }
  }

  .subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;

    @media (min-width: 48em) {
      font-size: 1.25rem;
    }

    @media (min-width: 64em) {
      font-size: 1.5rem;
    }

    @media (min-width: 77.5em) {
      font-size: 1.75rem;
    }

    @media (min-width: 158.75em) {
      font-size: 2.25rem;
    }
  }

  .q-list {
    max-width: 410px;

    @media (min-width: 48em) {
      max-width: none;
    }

    .q-item {
      min-height: auto;
      margin: 0 8px;
      border-radius: 12px;
      color: #03d5ff;
      background-color: color-mix(in srgb, #03d5ff 5%, transparent);
      backdrop-filter: blur(8px) saturate(150%);
      box-shadow: inset 0 0 0 1px color-mix(in srgb, #03d5ff calc(1* 10%), transparent),
      inset 1.8px 3px 0px -2px color-mix(in srgb, #03d5ff calc(1 * 90%), transparent),
      inset -2px -2px 0px -2px color-mix(in srgb, #03d5ff calc(1 * 80%), transparent),
      inset -3px -8px 1px -6px color-mix(in srgb, #03d5ff calc(1 * 60%), transparent),
      inset -0.3px -1px 4px 0px color-mix(in srgb, #03d5ff calc(1 * 12%), transparent),
      inset -1.5px 2.5px 0px -2px color-mix(in srgb, #03d5ff calc(1 * 20%), transparent),
      inset 0px 3px 4px -2px color-mix(in srgb, #03d5ff calc(1 * 20%), transparent),
      inset 2px -6.5px 1px -4px color-mix(in srgb, #03d5ff calc(1 * 10%), transparent),
      0px 1px 5px 0px color-mix(in srgb, #03d5ff calc(1 * 10%), transparent),
      0px 6px 16px 0px color-mix(in srgb, #03d5ff calc(1 * 8%), transparent);
      transition: background-color 400ms
      cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms
      cubic-bezier(1, 0, 0.4, 1), transform 400ms;
      color: #03d5ff;
      box-sizing: border-box;
      font-size: 1rem;
      line-height: 110%;

      @media (min-width: 48em) {
        font-size: 1.25rem;
      }

      @media (min-width: 64em) {
        padding: 12px 16px;
        margin: 0 12px;
        font-size: 1.5rem;
      }

      @media (min-width: 77.5em) {
        padding: 12px 20px;
        margin: 0 16px;
        font-size: 1.75rem;
      }

      @media (min-width: 158.75em) {
        padding: 16px 20px;
        margin: 0 20px;
        font-size: 2.25rem;
      }

      &:not(:last-child) {
        margin-bottom: 8px;

        @media (min-width: 48em) {
          margin-bottom: 0;
        }
      }

      &__section--avatar {
        min-width: auto;
        padding: 0;
      }
    }

    .q-img {
      width: 20px;
      height: 20px;
      margin-right: 8px;

      @media (min-width: 48em) {
        width: 24px;
        height: 24px;
      }

      @media (min-width: 64em) {
        width: 28px;
        height: 28px;
        margin-right: 12px;
      }

      @media (min-width: 77.5em) {
        width: 32px;
        height: 32px;
        margin-right: 16px;
      }

      @media (min-width: 158.75em) {
        width: 40px;
        height: 40px;
        margin-right: 20px;
      }
    }
  }
</style>
