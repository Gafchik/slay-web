<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  import aesIcon from 'src/assets/AES.png'
  import FrameIcon from 'src/assets/Folder.png'
  import DefenseIcon from 'src/assets/Password.png'
  import SafetyIcon from 'src/assets/Safety.png'

  const { t, tm  } = useI18n();

  const iconMap = {
    coding: aesIcon,
    frame: FrameIcon,
    defense: DefenseIcon,
    safety: SafetyIcon
  }

  const passwordFeatures = computed(() => {
    return (tm('sections.password.list') || []).map(item => ({
      ...item,
      icon: iconMap[item.key]
    }))
  })
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="row flex-center">
            <div class="col-md-10 col-xs-12 q-mx-auto">
              <div class="section__title text-center">
                <h2>{{t('sections.password.title')}}</h2>
                <p class="description-big">{{t('sections.password.description')}}</p>
              </div>
              <q-list class="row text-center" ref="listDataEl" >
                <q-item v-for="(item, index) in passwordFeatures"
                        :key="index" class="col-md-6 col-xs-12">
                  <q-item-section avatar class="flex items-center full-width">
                    <q-img :src="item.icon" />
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    &__title {
      height: inherit;
    }
  }

  .q-list {
    .q-item__section {
      border: 1px solid white;
      border-radius: 12px;

      @media (min-width: 64em) {
        border-radius: 16px;
      }

      @media (min-width: 77.5em) {
        border-radius: 20px;
      }
    }

    .q-item {
      padding: 0 0 16px;

      @media (min-width: 64em) {
        padding: 0 16px 32px;
      }

      &__section {
        padding: 16px;

        @media (min-width: 77.5em) {
          padding: 20px;
        }

        @media (min-width: 158.75em) {
          padding: 30px;
        }
      }
    }

    .q-img {
      height: auto;
      width: 60px;
      margin-bottom: 8px;

      @media (min-width: 64em) {
        width: 100px;
        margin-bottom: 12px;
      }

      @media (min-width: 77.5em) {
        width: 128px;
      }
    }

    h4 {
      font-size: 1.25rem;
      line-height: 110%;
      margin-bottom: 12px;

      @media (min-width: 77.5em) {
        margin-bottom: 18px;
        font-size: 1.5rem;
      }

      @media (min-width: 158.75em) {
        margin-bottom: 24px;
        font-size: 1.75rem;
      }
    }

    p {
      font-size: 1rem;
      line-height: 110%;
      opacity: 0.7;

      @media (min-width: 77.5em) {
        font-size: 1.25rem;
      }

      @media (min-width: 158.75em) {
        font-size: 1.5rem;
      }
    }
  }
</style>
