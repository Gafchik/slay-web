<script setup>
  import Video1 from 'src/assets/video/projects/Projects-full.mp4';
  import Video2 from'src/assets/video/projects/Projects-full.webm';
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body flex">
        <div class="section__main">
          <div class="row">
            <div class="col-4">
              <div class="flex column justify-center full-height q-pr-xl">
                <h2 class="q-mb-xl q-ma-auto">Менеджер Проектов</h2>
                <p class="description-big">Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы в предпочитаемой среде</p>
              </div>
            </div>
            <div class="col-8">
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
    mask-image: linear-gradient(to bottom, black 75%, transparent);
    mask-composite: intersect;
    -webkit-mask-composite: source-in;
  }
</style>

