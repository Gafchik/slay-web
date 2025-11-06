<script setup>
import { ref, computed } from 'vue'

const passwordSlide = ref(1)
const passwordFeatures = ref([
  {
    title: 'Надежное AES-256-GCM шифрование',
    description:
      'Максимальная защита ваших учетных данных с использованием передового стандарта шифрования.',
  },
  {
    title: 'Иерархическая структура папок',
    description: 'Организуйте пароли и конфиденциальные данные в удобные папки и подпапки.',
  },
  {
    title: 'Защита мастер-паролем',
    description: 'Ваши данные шифруются уникальным мастер-паролем, который знаете только вы.',
  },
  {
    title: 'Безопасное хранение любой информации',
    description:
      'Храните не только пароли, но и заметки, ключи API и другие конфиденциальные данные.',
  },
  {
    title: 'Удобный поиск и фильтрация',
    description: 'Мгновенно находите нужные записи с помощью сквозного поиска.',
  },
])

const passwordSlides = computed(() => {
  const slides = []
  for (let i = 0; i < passwordFeatures.value.length; i += 3) {
    slides.push(passwordFeatures.value.slice(i, i + 3))
  }
  return slides
})
</script>

<template>
  <section class="feature-section password-section">
    <div class="container">
      <div class="section-header">
        <h2>Менеджер паролей</h2>
        <p>Безопасное хранение и удобная организация паролей</p>
      </div>

      <div class="carousel-cards">
        <q-carousel
          v-model="passwordSlide"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="400px"
          class="cards-carousel"
        >
          <q-carousel-slide
            v-for="(slide, index) in passwordSlides"
            :name="index + 1"
            :key="index"
            class="no-padding"
          >
            <div class="cards-container">
              <div v-for="(card, cardIndex) in slide" :key="cardIndex" class="password-card glass">
                <div class="card-icon">
                  <q-icon name="mdi-shield-check" />
                </div>
                <h4>{{ card.title }}</h4>
                <p>{{ card.description }}</p>
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.feature-section {
  padding: 60px 0;
}
.password-section {
  background: transparent;
}

.carousel-cards {
  max-width: 100%;
  margin: 0 auto;
}
.cards-carousel {
  background: transparent !important;
}
.cards-carousel :deep(.q-carousel__slide) {
  padding: 0;
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
}

.password-card {
  padding: 30px 20px;
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1.125rem;
    margin: 12px 0 8px;
    line-height: 1.3;
  }
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.4;
  }
}

.card-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(0, 255, 170, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.card-icon .q-icon {
  color: #00ffaa;
  font-size: 1.75rem;
}

@media (min-width: 768px) {
  .feature-section {
    padding: 80px 0;
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0;
  }
}
</style>
