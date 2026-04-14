<script setup>
import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, locale, messages } = useI18n()

  import macIcon from 'src/assets/macOS.svg'
  import winIcon from 'src/assets/Windows.svg'
  import ubuntuIcon from 'src/assets/Ubuntu.svg'

  const list = ref([
    {
      icon: macIcon,
      text: 'MacOS',
      link: 'https://slay.dev/download/macos',
    },
    {
      icon: winIcon,
      text: 'Windows',
      link: 'https://slay.dev/download/windows',
    },
    {
      icon: ubuntuIcon,
      text: 'Linux',
      link: 'https://slay.dev/download/linux',
    },
  ]);

const instructions = computed(() => {
  return messages.value[locale.value]?.download?.list ?? []
})
</script>

<template>
  <q-page class="row justify-center text-white">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__head">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text">{{ t('download.title') }}</h2>
            <p>{{ t('download.subtitle') }}</p>
          </div>
        </div>

        <div class="section__main q-mb-xl">
          <q-list class="row justify-center">
            <q-item v-for="(item, index) in list" :key="index" class="col-md-4 col-sm-6 col-xs-12">
              <q-item-section class="column items-center liquid-glass q-pa-md">
                <q-img :src="item.icon" class="q-mb-sm" />
                <span class="q-mb-lg">{{ item.text }}</span>
                <q-btn :href="item.link"
                       unelevated
                       rounded
                       class="btn-glass--primary q-px-md q-mt-auto">
                  {{t('buttons.downloadFor') }} {{item.text}}
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="section__foot">
          <h3 class="q-mb-md">{{ t('download.instruction') }}</h3>
          <q-list class="liquid-glass--primary text-white">
            <q-item v-for="(item, index) in instructions" :key="index" class="q-pa-md">
              <q-item-section class="block">
                {{index + 1}}. <span v-html="item.title"></span>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
  .section {
    &__main {
      .q-item {
        &__section {
          border-radius: 16px;
        }
      }
    }

    &__foot {
      .q-list {
        border-radius: 16px;
      }

      .q-item {
        &:not(:last-child) {
          border-bottom: 1px solid #03d5ff;
        }
      }
    }
  }



  .q-img {
    width: 48px;
    height: 48px;


    @media (min-width: 77.5em) {
      width: 64px;
      height: 64px;
    }

    @media (min-width: 120em) {
      width: 100px;
      height: 100px;
    }
  }

  :deep(code) {
    color: #03d5ff;
    padding: 4px 8px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 4px;
  }
</style>
