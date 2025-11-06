<script setup>
import { ref } from 'vue'

const launchSlide = ref(1)
const launchFeatures = ref([
  {
    title: 'Всегда под рукой!',
    description: 'Весь список необходимых приложений доступен в одном месте и готов к запуску.',
  },
  {
    title: 'Запуск всего стека одним кликом',
    description: 'Открывайте браузеры, месседжеры и все рабочие инструменты моментально.',
  },
  {
    title: 'Интеллектуальный поиск',
    description: 'Мгновенно находите нужные инструменты по частичному совпадению в названии.',
  },
])
</script>

<template>
  <section class="feature-section launch-section">
    <div class="container">
      <div class="section-header">
        <h2>Быстрый запуск рабочего пространства</h2>
        <p>
          Мгновенно запускайте все необходимые инструменты и приложения для вашей комфортной работы.
        </p>
      </div>

      <div class="feature-content">
        <div class="feature-slider">
          <q-carousel
            v-model="launchSlide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            padding
            arrows
            height="300px"
            class="benefits-carousel glass"
          >
            <q-carousel-slide
              v-for="(feature, index) in launchFeatures"
              :name="index + 1"
              :key="index"
              class="column no-wrap flex-center"
            >
              <div class="benefit-content">
                <q-icon name="mdi-check-circle" color="positive" size="lg" class="q-mb-sm" />
                <h3 class="benefit-title">{{ feature.title }}</h3>
                <p class="benefit-description">{{ feature.description }}</p>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>

        <div class="feature-visual">
          <div class="gif-placeholder glass">
            <div class="placeholder-content">
              <q-icon name="mdi-play-circle" size="xl" class="q-mb-md" />
              <p class="placeholder-title">Демонстрация Быстрого Запуска</p>
              <p class="placeholder-subtitle">Запускайте IDE, терминалы и сервисы моментально</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.feature-section {
  padding: 60px 0;
}

.launch-section {
  background: linear-gradient(180deg, rgba(0, 225, 255, 0.05) 0%, rgba(0, 255, 170, 0.05) 100%);
}

.feature-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.benefits-carousel {
  height: 280px;

  :deep(.q-carousel__slide) {
    padding: 24px;
  }
}

.benefit-content {
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
}
.benefit-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
}
.benefit-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
}

@media (min-width: 768px) {
  .feature-section {
    padding: 80px 0;
  }
  .feature-content {
    flex-direction: row;
    gap: 40px;
  }
  .benefits-carousel {
    height: 350px;
  }
}
</style>
