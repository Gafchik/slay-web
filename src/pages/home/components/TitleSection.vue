<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  import macIcon from 'src/assets/macOS.svg'
  import winIcon from 'src/assets/Windows.svg'
  import ubuntuIcon from 'src/assets/Ubuntu.svg'

  const { t } = useI18n()

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
  <section class="section">
    <div class="container">
      <div class="section__body flex column">
        <div class="section__main q-my-auto">
          <div class="text-center">
            <h1 class="title">{{t('text.title')}}</h1>
            <p class="subtitle">{{t('text.subtitle')}}</p>
            <p class="subtitle q-mb-lg">{{t('text.description')}}</p>
            <q-btn :to="{ name: 'download' }" unelevated rounded size="lg" class="btn-glass--primary">
              {{t('buttons.join')}}
            </q-btn>
          </div>
        </div>
        <div class="section__footer q-pb-md">
          <q-list  class="flex justify-center">
            <q-item class="flex q-mx-md"
              v-for="(item, index) in list"
              :key="index">
              <q-item-section avatar class="flex q-pa-none q-mr-md">
                <q-img
                  :src="item.icon"
                  width="26px"
                  height="26px"
                />
              </q-item-section>
              <q-item-section>
                {{ item.text }}
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    min-height: inherit;

    &__body {
      min-height: inherit;
    }
  }

  .title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }

  .subtitle {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  .q-item {
    border: 1px solid #03d5ff;
    border-radius: 20px;
    color: #03d5ff;
    backdrop-filter: blur(8px) saturate(150%);
    box-shadow: 0 0 5px #03d5ff, inset 0 0 10px #03d5ff;
    font-size: 18px;
    line-height: 22px;
  }

  .q-item__section--avatar {
    min-width: auto;
  }

  .q-btn {
    min-width: 200px;
  }
</style>
