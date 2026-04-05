<script setup>
  import { useI18n } from 'vue-i18n'

  import Video1 from 'src/assets/video/sftp/Sftp-full.mp4';
  import Video2 from'src/assets/video/sftp/Sftp-full.webm';

  const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="row">
            <div class="col-md-10 col-xs-12 q-mx-auto">
              <div class="section__title text-center">
                <h2>{{t('sections.sftp.title')}}</h2>
                <p>{{t('sections.sftp.description')}}</p>
              </div>
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
      height: inherit;
    }
  }
</style>
