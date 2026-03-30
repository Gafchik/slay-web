<script setup>
  import { useI18n } from 'vue-i18n'

  import Video1 from 'src/assets/video/sftp/Sftp-full.mp4';
  import Video2 from'src/assets/video/sftp/Sftp-full.webm';

  const { t } = useI18n()
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body q-mb-xl">
        <div class="section__main">
          <div class="row flex-center">
            <div class="col-10 q-mx-auto">
              <div class="q-mb- text-center text-white">
                <h2 class="q-mb-lg">{{t('sections.sftp.title')}}</h2>
                <p class="description-big">{{t('sections.sftp.description')}}</p>
              </div>
              <div class="video">
                <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
                  <source :src="Video1" type="video/webm">
                  <source :src="Video2" type="video/mp4">
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
  .video {
    border-radius: 14px;
    overflow: hidden;
  }
</style>
