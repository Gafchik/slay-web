<script setup>
  import { useI18n } from 'vue-i18n'

  import Video1 from 'assets/video/laucher/Launcher-full.mp4'
  import Video2 from 'assets/video/laucher/Launcher-full.webm'

  import AppVideoPreview from 'pages/blocks/AppVideoPreview.vue'

  const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="section__video">
                <AppVideoPreview
                  :mp4="Video1"
                  :webm="Video2"
                />
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="section__title flex column justify-center">
                <h2 class="q-mb-sm">{{t('sections.launcher.title')}}</h2>
                <p class="q-mb-md">{{t('sections.launcher.subtitle')}}</p>
                <p>{{t('sections.launcher.description')}}</p>
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
    &__title {
      text-align: center;

      @media (min-width: 64em) {
        padding-left: 48px;
        text-align: right;
      }
    }

    &__video {
      @media (min-width: 64em) {
        mask-image: linear-gradient(to bottom, black 75%, transparent);
        mask-composite: intersect;
        -webkit-mask-composite: source-in;
      }
    }

    .row {
      flex-direction: column-reverse;

      @media (min-width: 64em) {
        flex-direction: row;
      }
    }
  }
</style>
