<script setup>
  import { useI18n } from 'vue-i18n'

  import Video1 from 'assets/video/laucher/Launcher-full.mp4'
  import Video2 from 'assets/video/laucher/Launcher-full.webm'

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
                <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
                  <source :src="Video1" type="video/webm">
                  <source :src="Video2" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="col-md-4 col-xs-12">
              <div class="section__title flex column justify-center">
                <h2>{{t('sections.launcher.title')}}</h2>
                <p class="description-big">{{t('sections.launcher.description')}}</p>
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
