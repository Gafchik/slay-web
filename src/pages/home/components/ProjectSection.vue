<script setup>
import { ref } from 'vue';

const projectSlide = ref(1);
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
    <div class="container">
      <div class="section-header">
        <h2>Менеджер Проектов</h2>
        <p>Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы.</p>
      </div>

      <div class="scrollable-features">
        <div class="features-scroll-container">
          <div
            v-for="(feature, index) in projectFeatures"
            :key="index"
            class="scroll-feature glass"
            :class="{ active: projectSlide === index + 1 }"
            @click="projectSlide = index + 1"
          >
            <div class="scroll-feature-icon">
              <q-icon name="mdi-check-circle" />
            </div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>

        <div class="scroll-visual">
          <div class="gif-placeholder glass">
            <div class="placeholder-content">
              <q-icon name="mdi-play-circle" size="xl" class="q-mb-md" />
              <p class="placeholder-title">Демонстрация Менеджера Проектов</p>
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
  flex-direction: column;
  gap: 30px;
}

.features-scroll-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: none;
  overflow-y: visible;
  padding-right: 0;
}

.scroll-feature {
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &.active {
    border-color: rgba(0, 225, 255, 0.5);
    background: rgba(0, 225, 255, 0.1);
  }

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

.scroll-feature-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 225, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  .q-icon {
    color: #00e1ff;
    font-size: 1.25rem;
  }
}

@media (min-width: 768px) {
  .feature-section {
    padding: 80px 0;
  }

  .features-scroll-container {
    max-height: 400px;
    overflow-y: auto;
    padding-right: 16px;
  }

  .scrollable-features {
    flex-direction: row;
    gap: 40px;
  }
}
</style>

