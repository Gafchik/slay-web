<script setup>
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, tm } = useI18n()

  import macIcon from 'src/assets/macOS.svg'
  import winIcon from 'src/assets/Windows.svg'
  import ubuntuIcon from 'src/assets/Ubuntu.svg'

  const downloadUrl =
    import.meta.env.VITE_DOWNLOAD_BASE_URL ?? 'https://downloads.slay-app.dev';

  const list = ref([
    {
      icon: macIcon,
      text: 'Apple silicon',
      link: downloadUrl + '/slay-mac-arm64.pkg'
    },
    {
      icon: macIcon,
      text: 'Intel chip',
      link: downloadUrl + '/slay-mac-intel.pkg'
    },
    {
      icon: winIcon,
      text: 'Windows',
      link: downloadUrl + '/slay-windows.exe'
    },
    {
      icon: ubuntuIcon,
      text: 'Linux',
      link: downloadUrl + '/slay-linux.deb'
    },
  ]);

const instructions = computed(() => {
  return tm('download.list') || []
})
</script>

<template>
  <q-page class="column justify-center q-pb-xl">
    <section class="section">
      <div class="container">
        <div class="section__head">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text">{{ t('download.title') }}</h2>
            <p>{{ t('download.subtitle') }}</p>
          </div>
        </div>

        <div class="section__main q-mb-xl">
          <q-list class="row justify-center">
            <q-item v-for="(item, index) in list" :key="index" class="col-md-3 col-sm-6 col-xs-12">
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

        <div class="section__foot q-pb-xl">
          <h3 class="q-mb-md">{{ t('download.instruction') }}</h3>
          <q-list class="liquid-glass--primary text-white">
            <q-item v-for="(item, index) in instructions" :key="index" class="q-pa-md">
              <q-item-section class="block">
                {{index + 1}}. <span v-html="item.title"></span>
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
    &__main {
      .q-item {
        padding: 0 8px 16px;
        font-size: 1rem;

        @media (min-width: 77.5em) {
          padding: 0 16px 16px;
        }

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
        font-size: 1rem;
        line-height: 140%;

        &:not(:last-child) {
          border-bottom: 1px solid #03d5ff;
        }
      }
    }

    .q-btn {
      white-space: nowrap;
      font-size: 0.8rem;
      text-transform: capitalize;
    }
  }

  .container {
    @media (min-width: 77.5em) {
      max-width: 1240px;
    }
  }

  .btn-glass--primary {
    &:before {
      box-shadow: 0 0 3px #03d5ff, inset 0 0 9px #03d5ff;
    }

    &:hover {
      &:before {
        box-shadow: 0 0 6px #03d5ff, inset 0 0 6px #03d5ff;
      }
    }

    &:active {
      &:before {
        box-shadow: 0 0 9px #03d5ff, inset 0 0 3px #03d5ff;
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
