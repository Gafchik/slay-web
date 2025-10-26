<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content text-center">
          <h1 class="hero-title">
            Slay GUI: Ваш Универсальный Инструмент Продуктивности
          </h1>
          <p class="hero-subtitle">
            Управляйте проектами, паролями, консольными алиасами и запускайте программы
            в одном элегантном и безопасном приложении, созданном для разработчиков.
          </p>
        </div>
      </div>
    </section>

    <!-- Block 1: Project Manager -->
    <section class="feature-section project-section">
      <div class="container">
        <div class="section-header">
          <h2>Менеджер Проектов</h2>
          <p>Организуйте и управляйте всеми вашими проектами в одном месте</p>
        </div>

        <div class="scrollable-features">
          <div class="features-scroll-container">
            <div
              v-for="(feature, index) in projectFeatures"
              :key="index"
              class="scroll-feature glass"
              :class="{ 'active': projectSlide === index + 1 }"
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
                <p class="placeholder-subtitle">Легко организуйте, ищите и запускайте проекты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Block 2: Quick Program Launch -->
    <section class="feature-section launch-section">
      <div class="container">
        <div class="section-header">
          <h2>Быстрый Запуск Программ</h2>
          <p>Запускайте весь стек инструментов одним кликом</p>
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

    <!-- Block 3: Password Manager -->
    <section class="feature-section password-section">
      <div class="container">
        <div class="section-header">
          <h2>Менеджер Паролей</h2>
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
            height="280px"
            class="cards-carousel"
          >
            <q-carousel-slide
              v-for="(slide, index) in passwordSlides"
              :name="index + 1"
              :key="index"
              class="no-padding"
            >
              <div class="cards-container">
                <div
                  v-for="(card, cardIndex) in slide"
                  :key="cardIndex"
                  class="password-card glass"
                >
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

    <!-- Block 4: Console Aliases -->
    <section class="feature-section aliases-section">
      <div class="container">
        <div class="section-header">
          <h2>Консольные Алиасы</h2>
          <p>Упростите работу в терминале с мощными алиасами</p>
        </div>

        <div class="aliases-content">
          <div class="aliases-text">
            <p class="aliases-description">
              С Slay GUI вы забудете о рутинном вводе длинных команд. Создавайте мощные и короткие алиасы для любых консольных операций.
            </p>

            <div class="aliases-features">
              <div
                v-for="(feature, index) in aliasFeatures"
                :key="index"
                class="alias-feature"
              >
                <div class="alias-icon">
                  <q-icon name="mdi-check-circle" color="positive" />
                </div>
                <div class="alias-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="aliases-visual">
            <div class="gif-placeholder glass">
              <div class="placeholder-content">
                <q-icon name="mdi-console-line" size="xl" class="q-mb-md" />
                <p class="placeholder-title">Демонстрация Алиасов</p>
                <p class="placeholder-subtitle">Создавайте и используйте мощные алиасы</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2>Что говорят наши пользователи</h2>
          <p>Присоединяйтесь к тысячам довольных разработчиков</p>
        </div>

        <div class="testimonials-grid">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card glass"
          >
            <div class="testimonial-content">
              <q-icon name="mdi-format-quote-open" class="quote-icon" />
              <p>"{{ testimonial.text }}"</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">
                <q-icon :name="testimonial.avatar" />
              </div>
              <div class="author-info">
                <strong>{{ testimonial.author }}</strong>
                <span>{{ testimonial.role }}</span>
                <div class="feature-tag">{{ testimonial.feature }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content glass">
          <h2>Готовы повысить свою продуктивность?</h2>
          <p>Начните использовать Slay GUI сегодня</p>
          <div class="cta-actions">
            <q-btn
              :to="{ name: 'download' }"
              label="Скачать бесплатно"
              class="cta-button gradient-bg"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';

const projectSlide = ref(1);
const passwordSlide = ref(1);
const launchSlide = ref(1);

const projectFeatures = ref([
  {
    title: 'Умная централизованная организация',
    description: 'Храните все ваши репозитории в одном месте с легкой навигацией и мгновенным поиском.'
  },
  {
    title: 'Запуск в один клик',
    description: 'Открывайте любой проект в вашей любимой IDE или другом приложении моментально.'
  },
  {
    title: 'Глубокая интеграция с IDE',
    description: 'Автоматическое обнаружение и запуск проектов в VS Code, PhpStorm, WebStorm и других.'
  }
]);

const passwordFeatures = ref([
  {
    title: 'Надежное AES-256-GCM шифрование',
    description: 'Максимальная защита ваших учетных данных'
  },
  {
    title: 'Иерархическая структура папок',
    description: 'Организуйте пароли в удобные папки и подпапки'
  },
  {
    title: 'Мастер-пароль для контроля',
    description: 'Единый мастер-пароль для доступа ко всем секретам'
  },
  {
    title: 'Гибкая видимость',
    description: 'Контролируйте, когда и как отображаются ваши пароли'
  },
  {
    title: 'Безопасное хранение',
    description: 'Храните не только пароли, но и заметки, ключи API'
  },
  {
    title: 'Удобный импорт/экспорт',
    description: 'Легко мигрируйте данные между менеджерами паролей'
  }
]);

const launchFeatures = ref([
  {
    title: 'Персонализированные наборы запуска',
    description: 'Создавайте уникальные комплексы программ для каждого проекта'
  },
  {
    title: 'Запуск всего стека одним кликом',
    description: 'Открывайте IDE, терминалы, браузеры моментально'
  },
  {
    title: 'Бесшовная автоматизация',
    description: 'Автоматизируйте рутинные процессы запуска приложений'
  }
]);

const aliasFeatures = ref([
  {
    title: 'Мгновенный доступ к командам',
    description: 'Создавайте короткие алиасы для сложных команд'
  },
  {
    title: 'Глобальный запуск через `slay-cli`',
    description: 'Используйте алиасы из любой консоли на ПК'
  },
  {
    title: 'Упрощение рутинных задач',
    description: 'Легко управляйте Docker, запускайте серверы'
  }
]);

const testimonials = ref([
  {
    author: 'Алексей К.',
    role: 'Frontend разработчик (Windows)',
    text: 'Раньше запуск моего рабочего окружения занимал вечность. Теперь с Slay GUI я начинаю работу в один клик, экономя по 15 минут каждое утро! Это просто спасение для продуктивности.',
    feature: 'Быстрый Запуск Программ',
    avatar: 'mdi-laptop-windows'
  },
  {
    author: 'Иван Т.',
    role: 'PHP/Laravel разработчик',
    text: 'Консольные алиасы в Slay GUI изменили мою работу с PHP версиями и Docker. Быстрый заход в контейнеры, переключение между версиями PHP на Windows — все стало в разы проще. Больше никаких длинных команд!',
    feature: 'Консольные Алиасы',
    avatar: 'mdi-php'
  },
  {
    author: 'Мария С.',
    role: 'Фрилансер-разработчик',
    text: 'Как фрилансер с десятками проектов, я постоянно сталкивалась с хаосом. Менеджер проектов и паролей Slay GUI привел все в порядок. Все проекты организованы, а пароли надежно хранятся. Моя продуктивность взлетела!',
    feature: 'Менеджер Проектов & Паролей',
    avatar: 'mdi-account-tie'
  },
  {
    author: 'Ольга П.',
    role: 'Тестировщик',
    text: 'Для тестирования мне нужны десятки аккаунтов (админ, юзер, менеджер). Менеджер паролей Slay GUI позволяет мне хранить их все в порядке, быстро переключаться и всегда иметь доступ к нужным учетным данным. Незаменимо!',
    feature: 'Менеджер Паролей',
    avatar: 'mdi-bug'
  },
  {
    author: 'Дмитрий В.',
    role: 'Backend разработчик',
    text: 'Хранить пароли от Stripe, Mailgun, Mailtrap и множества серверов — это боль. Slay GUI не только надежно хранит их, но и консольные алиасы ускорили мой доступ к серверам и выполнение сложных команд. Это маст-хэв для бэкенда.',
    feature: 'Консольные Алиасы & Менеджер Паролей',
    avatar: 'mdi-server'
  }
]);

const passwordSlides = computed(() => {
  const slides = [];
  for (let i = 0; i < passwordFeatures.value.length; i += 3) {
    slides.push(passwordFeatures.value.slice(i, i + 3));
  }
  return slides;
});
</script>

<style scoped lang="scss">
.home-page {
  background: radial-gradient(circle at 20% 30%, #101218, #0f1115 60%);
  color: white;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

// Hero Section
.hero-section {
  padding: 40px 0 20px;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
  }
}

.hero-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

// Common Section Styles
.feature-section {
  padding: 60px 0;

  &.project-section {
    background: linear-gradient(180deg, transparent 0%, rgba(0, 225, 255, 0.05) 100%);
  }

  &.launch-section {
    background: linear-gradient(180deg, rgba(0, 225, 255, 0.05) 0%, rgba(0, 255, 170, 0.05) 100%);
  }

  &.password-section {
    background: transparent;
  }

  &.aliases-section {
    background: linear-gradient(180deg, rgba(170, 0, 255, 0.05) 0%, transparent 100%);
  }
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

// Block 1: Project Manager
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

// Block 2: Quick Program Launch
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

// Block 3: Password Manager
.carousel-cards {
  max-width: 100%;
  margin: 0 auto;
}

.cards-carousel {
  background: transparent !important;

  :deep(.q-carousel__slide) {
    padding: 0;
  }
}

.cards-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0;
}

.password-card {
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  transition: transform 0.3s ease;

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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 255, 170, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  .q-icon {
    color: #00ffaa;
    font-size: 1.25rem;
  }
}

// Block 4: Console Aliases
.aliases-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.aliases-description {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 24px;
}

.aliases-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.alias-feature {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.alias-icon {
  margin-top: 2px;
  flex-shrink: 0;
}

.alias-content {
  h4 {
    font-size: 1.125rem;
    margin-bottom: 4px;
    line-height: 1.3;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }
}

// GIF Placeholders
.gif-placeholder {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.3);
}

.placeholder-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  padding: 0 16px;

  .q-icon {
    color: rgba(255, 255, 255, 0.5);
    font-size: 2rem !important;
  }
}

.placeholder-title {
  font-size: 1rem;
  margin-bottom: 4px;
  font-weight: 600;
}

.placeholder-subtitle {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

// Testimonials
.testimonials-section {
  padding: 60px 0;
}

.testimonials-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.testimonial-card {
  padding: 24px 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-content {
  position: relative;
  margin-bottom: 20px;

  .quote-icon {
    position: absolute;
    top: -8px;
    left: -8px;
    font-size: 2rem;
    color: rgba(0, 225, 255, 0.3);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 2;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 225, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  .q-icon {
    font-size: 1.25rem;
  }
}

.author-info {
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1rem;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
  }
}

.feature-tag {
  background: rgba(0, 225, 255, 0.2);
  color: #00e1ff;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 0.7rem;
  margin-top: 2px;
  display: inline-block;
}

// CTA Section
.cta-section {
  padding: 60px 0;
}

.cta-content {
  padding: 40px 24px;
  border-radius: 20px;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 12px;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    line-height: 1.4;
  }
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.cta-button {
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  padding: 12px 24px;
  width: 100%;
  max-width: 280px;
}

.cta-button-outline {
  border-radius: 10px;
  font-weight: 600;
  text-transform: none;
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 100%;
  max-width: 280px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.glass {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 255, 200, 0.05), inset 0 1px 8px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.gradient-bg {
  background: linear-gradient(135deg, #00e1ff, #00ffaa);
  color: #000;
  font-weight: 600;
}

// Tablet styles (768px+)
@media (min-width: 768px) {
  .container {
    padding: 0 24px;
  }

  .hero-section {
    padding: 80px 0 40px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .feature-section {
    padding: 80px 0;
  }

  .section-header {
    margin-bottom: 60px;

    h2 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1.125rem;
    }
  }

  .scrollable-features {
    flex-direction: row;
    gap: 40px;
  }

  .features-scroll-container {
    max-height: 400px;
    overflow-y: auto;
    padding-right: 16px;
  }

  .feature-content {
    flex-direction: row;
    gap: 40px;
  }

  .benefits-carousel {
    height: 350px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 0;
  }

  .aliases-content {
    flex-direction: row;
    gap: 40px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .cta-actions {
    flex-direction: row;
    justify-content: center;
  }

  .cta-button,
  .cta-button-outline {
    width: auto;
  }

  .gif-placeholder {
    height: 280px;
  }
}

// Desktop styles (1024px+)
@media (min-width: 1024px) {
  .container {
    padding: 0 32px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .cta-content {
    padding: 60px 48px;
  }

  .gif-placeholder {
    height: 320px;
  }
}

// Small mobile fixes (under 360px)
@media (max-width: 360px) {
  .container {
    padding: 0 12px;
  }

  .hero-title {
    font-size: 1.5rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .scroll-feature,
  .password-card,
  .testimonial-card {
    padding: 16px;
  }

  .cta-content {
    padding: 32px 20px;
  }
}
</style>
