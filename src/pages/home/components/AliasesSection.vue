<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  import Video1 from 'assets/video/alias/Alias-full.mp4'
  import Video2 from 'assets/video/alias/Alias-full.webm'

  import AppVideoPreview from 'pages/blocks/AppVideoPreview.vue'

  const { t, locale, messages } = useI18n()

  const aliasFeatures = computed(() => {
    return messages.value[locale.value]?.sections?.alias?.list ?? []
  })
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="section__head row">
            <div class="col-md-4 col-xs-12">
              <div class="section__title flex column justify-center">
                <h2>{{t('sections.alias.title')}}</h2>
                <p class="description-big">{{t('sections.alias.description')}}</p>
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="section__video">
                <AppVideoPreview
                  :mp4="Video1"
                  :webm="Video2"
                />
              </div>
            </div>
          </div>
          <q-list class="row liquid-glass">
            <q-item
              v-for="(feature, index) in aliasFeatures"
              :key="index"
              class="col-md-4 col-xs-12 column"
            >
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    &__head {
      margin-bottom: 16px;

      @media (min-width: 48em) {
        margin-bottom: 24px;
      }

      @media (min-width: 64em) {
        margin-bottom: 0;
      }
    }

    &__title {
      text-align: center;

      @media (min-width: 64em) {
        padding-right: 48px;
        text-align: left;
      }
    }

    &__video {
      @media (min-width: 64em) {
        border-radius: 20px 20px 0 0;
        border: 1px solid white;
        overflow: hidden;
        mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 100%);
      }
    }
  }

  .q-list {
    border-radius: 12px;

    @media (min-width: 64em) {
      border-radius: 0 0 16px 16px;
      mask-image: linear-gradient(to top, black 0%, black 80%, transparent 100%);
    }

    @media (min-width: 77.5em) {
      border-radius: 0 0 20px 20px;
    }

    .q-item {
      padding: 16px;
      text-align: center;

      @media (min-width: 64em) {
        padding: 24px;
        text-align: left;
      }

      @media (min-width: 77.5em) {
        padding: 36px;
      }

      @media (min-width: 157.75em) {
        padding: 50px;
      }

      &:nth-child(2) {
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;

        @media (min-width: 64em) {
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
          border-top: none;
          border-bottom: none;
        }
      }
    }

    h4 {
      margin-bottom: 12px;
      font-size: 1.25rem;
      line-height: 110%;

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

