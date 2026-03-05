<script setup>
  import Video1 from 'assets/video/Video-1.mp4'
  import Video2 from 'assets/video/Video-1.webm'
</script>

<template>
  <section class="section q-my-xl">
    <div class="container">
      <div class="section__body flex q-my-auto">
        <div class="section__main full-width">
          <div class="row">
            <div class="col-5">
              <div class="flex column justify-center full-height">
                <h2 class="q-mb-xl q-ma-auto">Быстрый запуск рабочего пространства</h2>
                <p class="description-big">Открывайте все рабочие инструменты моментально.</p>
              </div>
            </div>
            <div class="col-7">
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
    border-radius: 20px;
    overflow: hidden;
    mask-image:
      linear-gradient(to bottom, black 80%, transparent),
      linear-gradient(to right, transparent, black 80%);

    mask-composite: intersect;
    -webkit-mask-composite: source-in;
  }
</style>
