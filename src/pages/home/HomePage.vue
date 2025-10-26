<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section q-mb-xl">
      <div class="container text-center">
        <h1 class="text-h2 text-bold q-mb-md">
          Slay GUI: Ваш Универсальный Инструмент Продуктивности
        </h1>
        <p class="text-subtitle1 q-mb-lg text-grey-6">
          Управляйте проектами, паролями, консольными алиасами и запускайте программы
          в одном элегантном и безопасном приложении, созданном для разработчиков.
        </p>
      </div>
    </section>

    <!-- Block 1: Project Manager (теперь с горизонтальным скроллом) -->
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
            <div class="gif-placeholder glass large">
              <div class="placeholder-content">
                <q-icon name="mdi-play-circle" size="xl" class="q-mb-md" />
                <p class="text-h6">Демонстрация Менеджера Проектов</p>
                <p class="text-grey-5">Легко организуйте, ищите и запускайте проекты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Block 2: Quick Program Launch (теперь со слайдером) -->
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
              height="400px"
              class="benefits-carousel glass"
            >
              <q-carousel-slide
                v-for="(feature, index) in launchFeatures"
                :name="index + 1"
                :key="index"
                class="column no-wrap flex-center"
              >
                <div class="benefit-content">
                  <q-icon name="mdi-check-circle" color="positive" size="xl" class="q-mb-md" />
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
                <p class="text-h6">Демонстрация Быстрого Запуска</p>
                <p class="text-grey-5">Запускайте IDE, терминалы и сервисы моментально</p>
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
            height="350px"
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
              С Slay GUI вы забудете о рутинном вводе длинных команд. Создавайте мощные и короткие алиасы для любых консольных операций, будь то запуск Docker-контейнеров, старт PHP-сервера или сложные SSH-соединения. Ваши алиасы доступны из любой консоли на ПК через `slay-cli`, обеспечивая беспрецедентную скорость и комфорт.
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
                <p class="text-h6">Демонстрация Консольных Алиасов</p>
                <p class="text-grey-5">Создавайте и используйте мощные алиасы</p>
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
          <p>Начните использовать Slay GUI сегодня и почувствуйте разницу</p>
          <div class="cta-actions">
            <q-btn
              label="Скачать бесплатно"
              size="lg"
              class="cta-button gradient-bg"
              icon="mdi-download"
            />
            <q-btn
              label="Документация"
              size="lg"
              outline
              class="cta-button-outline"
              icon="mdi-book-open"
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
  },
  {
    title: 'Мультиязычная поддержка',
    description: 'Поддерживает проекты на любых языках и фреймворках: от JavaScript до Python и Go.'
  },
  {
    title: 'Эффективность для команд',
    description: 'Идеальное решение для фрилансеров и команд, управляющих десятками проектов.'
  },
  {
    title: 'Персонализированные рабочие пространства',
    description: 'Настраивайте индивидуальные сценарии запуска для каждого проекта.'
  }
]);

const passwordFeatures = ref([
  {
    title: 'Надежное AES-256-GCM шифрование',
    description: 'Максимальная защита ваших учетных данных с использованием передового стандарта шифрования.'
  },
  {
    title: 'Иерархическая структура папок',
    description: 'Организуйте пароли и конфиденциальные данные в удобные папки и подпапки, как в Passbolt.'
  },
  {
    title: 'Мастер-пароль для полного контроля',
    description: 'Единый мастер-пароль для доступа и управления всеми вашими секретами.'
  },
  {
    title: 'Гибкая видимость и автозаполнение',
    description: 'Контролируйте, когда и как отображаются ваши пароли, с функцией автозаполнения.'
  },
  {
    title: 'Безопасное хранение любой информации',
    description: 'Храните не только пароли, но и заметки, ключи API и другие конфиденциальные данные.'
  },
  {
    title: 'Удобный импорт/экспорт',
    description: 'Легко мигрируйте свои данные между различными менеджерами паролей.'
  }
]);

const launchFeatures = ref([
  {
    title: 'Персонализированные наборы запуска',
    description: 'Создавайте уникальные комплексы программ для каждого проекта или рабочего контекста.'
  },
  {
    title: 'Запуск всего стека одним кликом',
    description: 'Открывайте IDE, терминалы, браузеры и сервисы для проекта моментально.'
  },
  {
    title: 'Бесшовная автоматизация',
    description: 'Автоматизируйте рутинные процессы запуска приложений, экономя время на Windows и Linux.'
  },
  {
    title: 'Экономия драгоценного времени',
    description: 'Значительно сократите время на настройку и переключение между рабочими окружениями.'
  },
  {
    title: 'Управление зависимостями',
    description: 'Контролируйте версии программ и зависимостей, привязанных к каждому проекту.'
  },
  {
    title: 'Интеллектуальное рабочее пространство',
    description: 'Slay GUI помнит ваш рабочий контекст и предлагает релевантные наборы.'
  }
]);

const aliasFeatures = ref([
  {
    title: 'Мгновенный доступ к командам',
    description: 'Создавайте короткие и запоминающиеся алиасы для любых сложных консольных команд.'
  },
  {
    title: 'Глобальный запуск через `slay-cli`',
    description: 'Используйте ваши алиасы из любой консоли на ПК благодаря мощной интеграции `slay-cli`.'
  },
  {
    title: 'Упрощение рутинных задач',
    description: 'Легко управляйте Docker, запускайте PHP-серверы, подключайтесь по SSH и автоматизируйте скрипты.'
  },
  {
    title: 'Повышение эффективности терминала',
    description: 'Сократите время на ввод команд в разы и повысьте свою продуктивность в терминале.'
  },
  {
    title: 'Централизованное управление',
    description: 'Управляйте всеми вашими консольными алиасами из одного удобного места для всех проектов.'
  },
  {
    title: 'Персонализация и гибкость',
    description: 'Настраивайте алиасы под свои нужды и рабочие процессы для максимального комфорта.'
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

// Фиксируем карусель паролей - разбиваем на группы по 3 элемента
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
  padding: 0 20px;
}

// Hero Section
.hero-section {
  position: relative;
  min-height: 60vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

// Common Section Styles
.feature-section {
  padding: 100px 0;
  position: relative;

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
  margin-bottom: 80px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
}

// Block 1: Project Manager (теперь с горизонтальным скроллом)
.scrollable-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.features-scroll-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 225, 255, 0.5);
    border-radius: 3px;
  }
}

.scroll-feature {
  padding: 24px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &.active {
    border-color: rgba(0, 225, 255, 0.5);
    background: rgba(0, 225, 255, 0.1);
  }

  &:hover {
    transform: translateX(10px);
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
}

.scroll-feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 225, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  .q-icon {
    color: #00e1ff;
  }
}

// Block 2: Quick Program Launch (теперь со слайдером)
.feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.benefits-carousel {
  height: 400px;

  :deep(.q-carousel__slide) {
    padding: 40px;
  }
}

.benefit-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.benefit-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.benefit-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

// Block 3: Password Manager - ФИКСИРУЕМ КАРУСЕЛЬ
.carousel-cards {
  max-width: 900px;
  margin: 0 auto;
}

.cards-carousel {
  background: transparent !important;

  :deep(.q-carousel__slide) {
    padding: 0;
  }

  :deep(.q-carousel__navigation) {
    background: transparent;
  }

  :deep(.q-carousel__navigation-inner) {
    background: transparent;
  }
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.password-card {
  padding: 30px 20px;
  text-align: center;
  border-radius: 16px;
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);

  &:hover {
    transform: translateY(-5px);
  }

  h4 {
    font-size: 1.125rem;
    margin: 16px 0 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin: 0;
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

  .q-icon {
    color: #00ffaa;
    font-size: 1.5rem;
  }
}

// Block 4: Console Aliases
.aliases-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.aliases-description {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 40px;
}

.aliases-features {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.alias-feature {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.alias-icon {
  margin-top: 4px;
  flex-shrink: 0;
}

.alias-content {
  h4 {
    font-size: 1.125rem;
    margin-bottom: 4px;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }
}

// GIF Placeholders
.gif-placeholder {
  width: 100%;
  height: 300px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed rgba(255, 255, 255, 0.3);

  &.large {
    height: 500px;
  }
}

.placeholder-content {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);

  .q-icon {
    color: rgba(255, 255, 255, 0.5);
  }
}

// Testimonials
.testimonials-section {
  padding: 100px 0;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  padding: 40px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.testimonial-content {
  position: relative;
  margin-bottom: 30px;

  .quote-icon {
    position: absolute;
    top: -10px;
    left: -10px;
    font-size: 3rem;
    color: rgba(0, 225, 255, 0.3);
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    z-index: 2;
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 16px;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 225, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  .q-icon {
    font-size: 1.5rem;
  }
}

.author-info {
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.125rem;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
  }
}

.feature-tag {
  background: rgba(0, 225, 255, 0.2);
  color: #00e1ff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-top: 4px;
  display: inline-block;
}

// CTA Section
.cta-section {
  padding: 100px 0;
}

.cta-content {
  padding: 80px 60px;
  border-radius: 30px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 40px;
  }
}

.cta-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-button {
  border-radius: 12px;
  font-weight: 600;
  text-transform: none;
  padding: 12px 32px;
}

.cta-button-outline {
  border-radius: 12px;
  font-weight: 600;
  text-transform: none;
  padding: 12px 32px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}

.glass {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow: 0 10px 40px rgba(0, 255, 200, 0.05), inset 0 1px 10px rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;
}

.gradient-bg {
  background: linear-gradient(135deg, #00e1ff, #00ffaa);
  color: #000;
  font-weight: 600;
}

// Responsive Design
@media (max-width: 768px) {
  .hero-section {
    min-height: 40vh;
    padding: 40px 0;
  }

  .feature-content,
  .scrollable-features,
  .aliases-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .features-scroll-container {
    max-height: 300px;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .cta-content {
    padding: 60px 30px;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .testimonial-card,
  .password-card {
    padding: 20px 15px;
  }
}
</style>
