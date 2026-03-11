<script setup>
  import { ref } from 'vue';

  import Video1 from 'src/assets/video/Video-1.mp4';
  import Video2 from'src/assets/video/Video-1.webm';

  const projectFeatures = ref([
    {
      title: 'Умная централизованная организация',
      description: 'Все ваши проекты в едином пространстве с интуитивной навигацией и мгновенным поиском.'
    },
    {
      title: 'Мгновенный запуск',
      description: 'Открывайте проекты в предпочитаемой среде разработки одним кликом без лишних действий.'
    },
    {
      title: 'Персонализированные названия',
      description: 'Присваивайте проектам понятные имена без необходимости переименовывать системные папки.'
    },
  ]);
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body flex q-my-auto">
        <div class="section__main  full-width">
          <div class="row">
            <div class="col-7">
              <div class="video">
                <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
                  <source :src="Video1" type="video/webm">
                  <source :src="Video2" type="video/mp4">
                </video>
              </div>
            </div>
            <div class="col-5">
              <div class="q-px-xl">
                <h2 class="q-mb-xl q-pt-lg">Менеджер Проектов</h2>
                <p class="description-big">Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы.</p>
              </div>
            </div>
          </div>
          <ul class="row list liquid-glass">
            <li
              v-for="(feature, index) in projectFeatures"
              :key="index"
              class="col-4 q-pa-xl scroll-feature"
              :class="{ active: projectSlide === index + 1 }"
              @click="projectSlide = index + 1"
            >
              <h4 class="q-mb-md">{{ feature.title }}</h4>
              <p class="description">{{ feature.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .video {
    border-radius: 20px 20px 0 0;
    border: 1px solid white;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 100%);
  }

  .list {
    border-radius: 0 0 20px 20px;
    mask-image: linear-gradient(to top, black 0%, black 80%, transparent 100%);

    li {
      &:nth-child(2) {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
</style>

