<script setup>
  import { useI18n } from 'vue-i18n'

  import Video1 from 'src/assets/video/projects/Projects-full.mp4';
  import Video2 from'src/assets/video/projects/Projects-full.webm';

  const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <div class="section__title flex column justify-center">
                <h2>{{t('sections.project.title')}}</h2>
                <p class="description-big">{{t('sections.project.description')}}</p>
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="section__video">
                <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
                  <source :src="Video1" type="video/mp4">
                  <source :src="Video2" type="video/webm">
                </video>
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
        padding-right: 48px;
        text-align: left;
      }
    }

    &__video {
      @media (min-width: 64em) {
        mask-image: linear-gradient(to bottom, black 75%, transparent);
        mask-composite: intersect;
        -webkit-mask-composite: source-in;
      }
    }
  }
</style>

