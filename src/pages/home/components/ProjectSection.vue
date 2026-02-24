<script setup>
  import { ref } from 'vue';

  import Video1 from 'src/assets/video/Video-1.mp4';
  import Video2 from'src/assets/video/Video-1.webm';

  const projectFeatures = ref([
    {
      title: 'Умная централизованная организация',
      description: 'Все ваши проект в едином пространстве с интуитивной навигацией и мгновенным поиском.'
    },
    {
      title: 'Мгновенный запуск',
      description: 'Открывайте проекты в предпочитаемой среде разработки одним кликом без лишних действий.'
    },
    {
        title: 'Универсальный запуск проектов',
        description: 'Выбирайте любую IDE для работы — и все ваши проекты будут открываться именно в ней.',
    },
    {
      title: 'Персонализированные названия',
      description: 'Присваивайте проектам понятные имена без необходимости переименовывать системные папки.'
    },
    {
      title: 'Интеллектуальный поиск',
      description: 'Мгновенно находите проекты по частичному совпадению в названии.',
    },
  ]);
</script>

<template>
  <section class="feature-section project-section">
    <div class="feature-section__wrapper">
      <div class="container">
        <div class="section-header q-pt-xl">
          <h2 class="q-mt-none q-pt-xl">Менеджер Проектов</h2>
          <p>Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы.</p>
        </div>

        <div class="scrollable-features">
          <div class="scroll-visual">
            <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
              <source :src="Video1" type="video/webm">
              <source :src="Video2" type="video/mp4">
            </video>
          </div>

          <div class="features-content">
            <ul class="list glass">
              <li
                v-for="(feature, index) in projectFeatures"
                :key="index"
                class="scroll-feature"
                :class="{ active: projectSlide === index + 1 }"
                @click="projectSlide = index + 1"
              >
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .project-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 225, 255, 0.05) 100%);
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 12px;
      line-height: 1.2;
    }

    p {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      line-height: 1.4;
    }
  }

  .scrollable-features {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }

  .scroll-visual {
    display: flex;
    width: 75%;
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 16 / 9;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .features-content {
    display: flex;
    width: 25%;
  }

  .list {
    position: relative;
    height: 100%;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .scroll-feature {
    padding: 20px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 225, 255, 0.5);
    background: rgba(0, 225, 255, 0.1);

    h4 {
      font-size: 1.125rem;
      margin-bottom: 8px;
      line-height: 1.3;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      margin: 0;
      font-size: 0.9rem;
      line-height: 1.4;
    }
  }


</style>

