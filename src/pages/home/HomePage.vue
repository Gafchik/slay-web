<template>
  <div class="landing-page">
    <!-- Hero Section -->
    <section class="hero-section ">
      <div class="hero-background">
        <div class="hero-particles"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="title-line">Slay GUI</span>
            <span class="title-line">Ваш Инструмент для</span>
            <span class="title-line accent-text">Максимальной Продуктивности</span>
          </h1>
          <p class="hero-subtitle">
            Единый элегантный интерфейс для управления проектами, программами, паролями и консольными алиасами
          </p>
          <div class="hero-actions">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              icon="rocket_launch"
              label="Начать бесплатно"
              class="cta-button"
            />
            <q-btn
              outline
              color="white"
              size="lg"
              icon="play_circle"
              label="Смотреть демо"
              class="demo-button"
            />
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">+85%</div>
              <div class="stat-label">Эффективности</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">-60%</div>
              <div class="stat-label">Времени настройки</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">∞</div>
              <div class="stat-label">Возможностей</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="app-preview">
            <div class="preview-window primary">
              <div class="window-header">
                <div class="window-controls">
                  <div class="control red"></div>
                  <div class="control yellow"></div>
                  <div class="control green"></div>
                </div>
              </div>
              <div class="preview-content">
                <div class="sidebar">
                  <div class="nav-item active">Проекты</div>
                  <div class="nav-item">Программы</div>
                  <div class="nav-item">Алиасы</div>
                  <div class="nav-item">Пароли</div>
                </div>
                <div class="main-content">
                  <div class="content-item shimmer"></div>
                  <div class="content-item shimmer"></div>
                  <div class="content-item shimmer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Carousel -->
    <section class="features-section">
      <div class="container">
        <h2 class="section-title">Все возможности в одном интерфейсе</h2>
        <div class="features-carousel">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentFeature * 100}%)` }">
            <div
              v-for="(feature) in features"
              :key="feature.id"
              class="carousel-slide"
            >
              <div class="feature-content">
                <div class="feature-visual">
                  <div class="visual-container" :class="`visual-${feature.id}`">
                    <component :is="feature.visual" />
                  </div>
                </div>
                <div class="feature-info">
                  <div class="feature-badge">{{ feature.badge }}</div>
                  <h3 class="feature-title">{{ feature.title }}</h3>
                  <p class="feature-description">{{ feature.description }}</p>
                  <div class="feature-highlights">
                    <div
                      v-for="highlight in feature.highlights"
                      :key="highlight"
                      class="highlight-item"
                    >
                      <q-icon name="check_circle" color="primary" />
                      <span>{{ highlight }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <q-btn
              round
              outline
              color="primary"
              icon="chevron_left"
              @click="prevFeature"
              class="control-btn"
            />
            <div class="carousel-indicators">
              <div
                v-for="(feature, index) in features"
                :key="feature.id"
                :class="['indicator', { active: currentFeature === index }]"
                @click="currentFeature = index"
              ></div>
            </div>
            <q-btn
              round
              outline
              color="primary"
              icon="chevron_right"
              @click="nextFeature"
              class="control-btn"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Interactive Demo -->
    <section class="demo-section">
      <div class="container">
        <h2 class="section-title">Попробуйте сами</h2>
        <div class="demo-container">
          <div class="demo-tabs">
            <q-tabs
              v-model="demoTab"
              inline-label
              class="demo-tabs-container"
            >
              <q-tab
                v-for="tab in demoTabs"
                :key="tab.name"
                :name="tab.name"
                :icon="tab.icon"
                :label="tab.label"
              />
            </q-tabs>
          </div>
          <div class="demo-content">
            <q-tab-panels v-model="demoTab" animated>
              <q-tab-panel v-for="tab in demoTabs" :key="tab.name" :name="tab.name">
                <div class="demo-panel">
                  <div class="demo-text">
                    <h3>{{ tab.title }}</h3>
                    <p>{{ tab.description }}</p>
                    <ul class="demo-list">
                      <li v-for="item in tab.items" :key="item">
                        <q-icon name="arrow_right" color="primary" />
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                  <div class="demo-visual">
                    <div class="interactive-demo" :class="`demo-${tab.name}`">
                      <div class="demo-animation">
                        <div class="animation-element" v-for="n in 3" :key="n"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="platforms-section">
      <div class="container">
        <h2 class="section-title">Работает везде, где работаете вы</h2>
        <div class="platforms-grid">
          <div
            v-for="platform in platforms"
            :key="platform.name"
            class="platform-card"
            @mouseenter="hoveredPlatform = platform.name"
            @mouseleave="hoveredPlatform = null"
          >
            <div class="platform-icon" :class="{ active: hoveredPlatform === platform.name }">
              <q-icon :name="platform.icon" />
            </div>
            <h3>{{ platform.name }}</h3>
            <p>{{ platform.description }}</p>
            <q-btn
              unelevated
              color="primary"
              :label="platform.buttonText"
              class="platform-button"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">Что говорят пользователи</h2>
        <div class="testimonials-carousel">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentTestimonial * 33.333}%)` }">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.id"
              class="testimonial-card"
            >
              <div class="testimonial-content">
                <div class="quote-icon">❝</div>
                <p class="testimonial-text">{{ testimonial.text }}</p>
                <div class="testimonial-author">
                  <div class="author-avatar">
                    {{ testimonial.avatar }}
                  </div>
                  <div class="author-info">
                    <div class="author-name">{{ testimonial.name }}</div>
                    <div class="author-role">{{ testimonial.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonials-controls">
            <q-btn
              round
              outline
              color="primary"
              icon="chevron_left"
              @click="prevTestimonial"
            />
            <q-btn
              round
              outline
              color="primary"
              icon="chevron_right"
              @click="nextTestimonial"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="final-cta">
      <div class="container">
        <div class="cta-content">
          <h2>Готовы увеличить свою продуктивность?</h2>
          <p>Присоединяйтесь к тысячам разработчиков, которые уже используют Slay GUI</p>
          <div class="cta-buttons">
            <q-btn
              unelevated
              color="primary"
              size="lg"
              icon="download"
              label="Скачать бесплатно"
              class="cta-main-button"
            />
            <q-btn
              outline
              color="white"
              size="lg"
              icon="business_center"
              label="Для команд"
            />
          </div>
          <div class="cta-features">
            <div class="feature-tag">
              <q-icon name="security" />
              <span>Безопасно</span>
            </div>
            <div class="feature-tag">
              <q-icon name="sync" />
              <span>Синхронизация</span>
            </div>
            <div class="feature-tag">
              <q-icon name="update" />
              <span>Автообновления</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-logo">Slay GUI</div>
            <p>Максимальная продуктивность для разработчиков</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Продукт</h4>
              <a href="#">Возможности</a>
              <a href="#">Цены</a>
              <a href="#">Документация</a>
            </div>
            <div class="link-group">
              <h4>Компания</h4>
              <a href="#">О нас</a>
              <a href="#">Блог</a>
              <a href="#">Карьера</a>
            </div>
            <div class="link-group">
              <h4>Поддержка</h4>
              <a href="#">Помощь</a>
              <a href="#">Сообщество</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 Slay GUI. Все права защищены.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

// Feature visual components
const ProfilesVisual = {
  template: `
    <div class="profiles-visual">
      <div class="profile-cards">
        <div class="profile-card" v-for="n in 3" :key="n" :style="{ transform: \`rotate(\${(n-1)*5}deg) translateY(\${(n-1)*10}px)\` }">
          <div class="card-header"></div>
          <div class="card-content"></div>
        </div>
      </div>
    </div>
  `
}

const ProjectsVisual = {
  template: `
    <div class="projects-visual">
      <div class="folder-stack">
        <div class="folder" v-for="n in 4" :key="n" :style="{ transform: \`translateX(\${(n-1)*10}px) rotate(\${(n-1)*2}deg)\` }">
          <div class="folder-tab"></div>
          <div class="folder-body"></div>
        </div>
      </div>
    </div>
  `
}

const AliasesVisual = {
  template: `
    <div class="aliases-visual">
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-title">terminal</div>
        </div>
        <div class="terminal-content">
          <div class="command-line" v-for="n in 3" :key="n">
            <div class="prompt">$</div>
            <div class="command shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default {
  setup() {
    const currentFeature = ref(0)
    const currentTestimonial = ref(0)
    const demoTab = ref('projects')
    const hoveredPlatform = ref(null)

    const features = ref([
      {
        id: 'profiles',
        badge: 'Профили',
        title: 'Гибкие рабочие пространства',
        description: 'Создавайте изолированные профили для каждого проекта или клиента с уникальными настройками и данными.',
        highlights: [
          'Мгновенное переключение контекста',
          'Полная изоляция данных',
          'Идеально для фрилансеров и команд',
          'Безграничная организация'
        ],
        visual: ProfilesVisual
      },
      {
        id: 'projects',
        badge: 'Проекты',
        title: 'Интеллектуальное управление проектами',
        description: 'Организуйте все ваши проекты в одном месте с быстрым доступом и интеграцией с IDE.',
        highlights: [
          'Централизованная база проектов',
          'Запуск в один клик',
          'Интеграция с любимыми IDE',
          'Мгновенный поиск и фильтрация'
        ],
        visual: ProjectsVisual
      },
      {
        id: 'aliases',
        badge: 'Алиасы',
        title: 'Мощные консольные алиасы',
        description: 'Ускорьте работу в терминале с умными алиасами, доступными для всех проектов.',
        highlights: [
          'Быстрый доступ к командам',
          'Автоматическая синхронизация',
          'Экономия времени на ввод',
          'Персонализация для каждого проекта'
        ],
        visual: AliasesVisual
      }
    ])

    const demoTabs = ref([
      {
        name: 'projects',
        icon: 'folder',
        label: 'Проекты',
        title: 'Управление проектами',
        description: 'Организуйте все ваши проекты в едином интерфейсе',
        items: [
          'Быстрый доступ к любому проекту',
          'Открытие в предпочтительной IDE',
          'Автоматическая привязка приложений',
          'Мгновенный поиск по всем проектам'
        ]
      },
      {
        name: 'apps',
        icon: 'apps',
        label: 'Программы',
        title: 'Запуск приложений',
        description: 'Настройте и запускайте весь рабочий стек одним кликом',
        items: [
          'Персонализированные наборы приложений',
          'Автоматизация рутинных процессов',
          'Экономия до часов в день',
          'Умный запуск для каждого профиля'
        ]
      },
      {
        name: 'security',
        icon: 'security',
        label: 'Безопасность',
        title: 'Защита данных',
        description: 'Надежное хранение паролей с AES-256 шифрованием',
        items: [
          'Высокоуровневое шифрование данных',
          'Структурированное хранение паролей',
          'Быстрый и безопасный доступ',
          'Полный контроль над данными'
        ]
      }
    ])

    const platforms = ref([
      {
        name: 'Windows',
        icon: 'mdi-microsoft-windows',
        description: 'Нативная поддержка Windows 10/11 с оптимизацией для разработчиков',
        buttonText: 'Скачать для Windows'
      },
      {
        name: 'macOS',
        icon: 'mdi-apple',
        description: 'Полная интеграция с экосистемой Apple и жестами Trackpad',
        buttonText: 'Скачать для macOS'
      },
      {
        name: 'Linux',
        icon: 'mdi-linux',
        description: 'Поддержка всех популярных дистрибутивов с нативным интерфейсом',
        buttonText: 'Скачать для Linux'
      }
    ])

    const testimonials = ref([
      {
        id: 1,
        text: 'Slay GUI изменил то, как я работаю с проектами. Теперь я экономлю минимум 2 часа в день на настройке окружения.',
        name: 'Алексей Петров',
        role: 'Lead Developer в TechCorp',
        avatar: 'AP'
      },
      {
        id: 2,
        text: 'Идеальный инструмент для фрилансера. Отдельные профили для каждого клиента - это просто спасение!',
        name: 'Мария Иванова',
        role: 'Full-stack Developer',
        avatar: 'МИ'
      },
      {
        id: 3,
        text: 'Наша команда из 10 человек использует Slay GUI для всех проектов. Синхронизация и безопасность на высшем уровне.',
        name: 'Дмитрий Сидоров',
        role: 'CTO в StartupLab',
        avatar: 'ДС'
      }
    ])

    const nextFeature = () => {
      currentFeature.value = (currentFeature.value + 1) % features.value.length
    }

    const prevFeature = () => {
      currentFeature.value = currentFeature.value === 0 ? features.value.length - 1 : currentFeature.value - 1
    }

    const nextTestimonial = () => {
      if (currentTestimonial.value < testimonials.value.length - 3) {
        currentTestimonial.value++
      }
    }

    const prevTestimonial = () => {
      if (currentTestimonial.value > 0) {
        currentTestimonial.value--
      }
    }

    // Auto-rotate features
    onMounted(() => {
      setInterval(nextFeature, 5000)
    })

    return {
      currentFeature,
      currentTestimonial,
      demoTab,
      hoveredPlatform,
      features,
      demoTabs,
      platforms,
      testimonials,
      nextFeature,
      prevFeature,
      nextTestimonial,
      prevTestimonial
    }
  }
}
</script>

<style scoped lang="scss">
.landing-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

// Hero Section
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  //background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;

  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .hero-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image:
        radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 0),
        radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 0);
      background-size: 50px 50px, 30px 30px;
    }
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 20px;
    color: white;

    .title-line {
      display: block;

      &.accent-text {
        background: linear-gradient(45deg, #00ff88, #00ccff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }
  }

  .hero-subtitle {
    font-size: 1.3rem;
    color: rgba(255,255,255,0.8);
    margin-bottom: 40px;
    line-height: 1.6;
  }

  .hero-actions {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;

    .cta-button {
      background: linear-gradient(45deg, #00ff88, #00ccff);
      border: none;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0,255,136,0.3);
      }
    }

    .demo-button:hover {
      background: rgba(255,255,255,0.1);
    }
  }

  .hero-stats {
    display: flex;
    gap: 40px;

    .stat-item {
      text-align: center;

      .stat-number {
        font-size: 2rem;
        font-weight: 800;
        color: #00ff88;
        margin-bottom: 5px;
      }

      .stat-label {
        color: rgba(255,255,255,0.7);
        font-size: 0.9rem;
      }
    }
  }

  .hero-visual {
    .app-preview {
      perspective: 1000px;

      .preview-window {
        //background: rgba(255,255,255,0.95);
        border-radius: 12px;
        padding: 20px;
        box-shadow: 0 25px 50px rgba(0,0,0,0.3);
        transform: rotateY(-10deg) rotateX(5deg);
        transition: transform 0.3s ease;

        &:hover {
          transform: rotateY(-5deg) rotateX(2deg) scale(1.02);
        }

        .window-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;

          .window-controls {
            display: flex;
            gap: 8px;

            .control {
              width: 12px;
              height: 12px;
              border-radius: 50%;

              &.red { background: #ff5f57; }
              &.yellow { background: #ffbd2e; }
              &.green { background: #28ca42; }
            }
          }
        }

        .preview-content {
          display: flex;
          gap: 20px;

          .sidebar {
            width: 120px;

            .nav-item {
              padding: 10px;
              margin-bottom: 5px;
              border-radius: 6px;
              cursor: pointer;
              transition: all 0.2s ease;

              &.active {
                background: #667eea;
                color: white;
              }

              &:hover:not(.active) {
                background: rgba(102, 126, 234, 0.1);
              }
            }
          }

          .main-content {
            flex: 1;

            .content-item {
              height: 60px;
              //background: #f0f0f0;
              margin-bottom: 10px;
              border-radius: 6px;
              position: relative;
              overflow: hidden;

              &.shimmer::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    90deg,
                    transparent,
                    rgba(255,255,255,0.4),
                    transparent
                );
                animation: shimmer 2s infinite;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

// Features Carousel
.features-section {
  padding: 100px 0;
  //background: #f8fafc;

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 60px;
    color: #1a202c;
  }

  .features-carousel {
    position: relative;
    overflow: hidden;

    .carousel-track {
      display: flex;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .carousel-slide {
      min-width: 100%;
      padding: 0 20px;
    }

    .feature-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .feature-visual {
      .visual-container {
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;

        // Add specific styles for each visual type
        :deep(.profiles-visual) {
          .profile-cards {
            position: relative;
            height: 200px;
            width: 300px;

            .profile-card {
              position: absolute;
              width: 200px;
              height: 120px;
              background: white;
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              transition: all 0.3s ease;

              .card-header {
                height: 30px;
                background: #667eea;
                border-radius: 8px 8px 0 0;
              }

              .card-content {
                padding: 15px;
              }
            }
          }
        }
      }
    }

    .feature-info {
      .feature-badge {
        display: inline-block;
        background: #667eea;
        color: white;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .feature-title {
        font-size: 2.2rem;
        font-weight: 700;
        margin-bottom: 20px;
        color: #1a202c;
      }

      .feature-description {
        font-size: 1.1rem;
        color: #4a5568;
        margin-bottom: 30px;
        line-height: 1.6;
      }

      .feature-highlights {
        .highlight-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          color: #2d3748;
          font-weight: 500;
        }
      }
    }

    .carousel-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin-top: 40px;

      .carousel-indicators {
        display: flex;
        gap: 10px;

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e0;
          cursor: pointer;
          transition: all 0.3s ease;

          &.active {
            background: #667eea;
            transform: scale(1.2);
          }
        }
      }

      .control-btn:hover {
        background: #667eea;
        color: white;
      }
    }
  }
}

// Demo Section
.demo-section {
  padding: 100px 0;
  background: white;

  .demo-container {
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    overflow: hidden;

    .demo-tabs {
      background: #f8fafc;
      padding: 0 20px;

      :deep(.demo-tabs-container) {
        .q-tab {
          padding: 20px 30px;
          font-weight: 600;
          color: #718096;

          &.q-tab--active {
            color: #667eea;
            border-bottom: 3px solid #667eea;
          }
        }
      }
    }

    .demo-content {
      padding: 40px;

      .demo-panel {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        align-items: center;
      }

      .demo-text {
        h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1a202c;
        }

        p {
          color: #4a5568;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .demo-list {
          list-style: none;
          padding: 0;

          li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 12px;
            color: #2d3748;
            font-weight: 500;
          }
        }
      }

      .demo-visual {
        .interactive-demo {
          height: 300px;
          background: #f8fafc;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;

          .demo-animation {
            .animation-element {
              width: 60px;
              height: 60px;
              background: #667eea;
              border-radius: 8px;
              margin: 10px;
              animation: pulse 2s infinite;

              &:nth-child(2) {
                animation-delay: 0.2s;
              }

              &:nth-child(3) {
                animation-delay: 0.4s;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.7; }
}

// Platforms Section
.platforms-section {
  padding: 100px 0;
  //background: #f8fafc;

  .platforms-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    .platform-card {
      background: white;
      padding: 40px 30px;
      border-radius: 16px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      }

      .platform-icon {
        font-size: 4rem;
        color: #cbd5e0;
        margin-bottom: 20px;
        transition: all 0.3s ease;

        &.active {
          color: #667eea;
          transform: scale(1.1);
        }
      }

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 15px;
        color: #1a202c;
      }

      p {
        color: #718096;
        margin-bottom: 25px;
        line-height: 1.6;
      }

      .platform-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
      }
    }
  }
}

// Testimonials Section
.testimonials-section {
  padding: 100px 0;
  background: white;

  .testimonials-carousel {
    position: relative;
    overflow: hidden;

    .testimonials-track {
      display: flex;
      transition: transform 0.5s ease;
      gap: 30px;
    }

    .testimonial-card {
      min-width: calc(33.333% - 20px);
      background: #f8fafc;
      padding: 40px;
      border-radius: 16px;
      border: 1px solid #e2e8f0;

      .testimonial-content {
        .quote-icon {
          font-size: 3rem;
          color: #667eea;
          margin-bottom: 20px;
        }

        .testimonial-text {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 30px;
          font-style: italic;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;

          .author-avatar {
            width: 50px;
            height: 50px;
            background: #667eea;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
          }

          .author-info {
            .author-name {
              font-weight: 700;
              color: #1a202c;
              margin-bottom: 4px;
            }

            .author-role {
              color: #718096;
              font-size: 0.9rem;
            }
          }
        }
      }
    }

    .testimonials-controls {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 40px;
    }
  }
}

// Final CTA
.final-cta {
  padding: 100px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;

  .cta-content {
    h2 {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 40px;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      margin-bottom: 50px;

      .cta-main-button {
        background: linear-gradient(45deg, #00ff88, #00ccff);
        border: none;

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,255,136,0.3);
        }
      }
    }

    .cta-features {
      display: flex;
      gap: 30px;
      justify-content: center;

      .feature-tag {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
      }
    }
  }
}

// Footer
.main-footer {
  background: #1a202c;
  color: white;
  padding: 60px 0 30px;

  .footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    margin-bottom: 40px;

    .footer-brand {
      .brand-logo {
        font-size: 1.8rem;
        font-weight: 800;
        margin-bottom: 15px;
        color: #667eea;
      }

      p {
        color: #a0aec0;
        line-height: 1.6;
      }
    }

    .footer-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;

      .link-group {
        h4 {
          color: white;
          margin-bottom: 20px;
          font-weight: 600;
        }

        a {
          display: block;
          color: #a0aec0;
          margin-bottom: 12px;
          text-decoration: none;
          transition: color 0.2s ease;

          &:hover {
            color: #667eea;
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #2d3748;
    padding-top: 30px;
    text-align: center;
    color: #a0aec0;
  }
}

// Responsive Design
@media (max-width: 768px) {
  .hero-section .container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem !important;
  }

  .hero-actions {
    flex-direction: column;
  }

  .features-carousel .feature-content,
  .demo-panel {
    grid-template-columns: 1fr !important;
  }

  .platforms-grid {
    grid-template-columns: 1fr !important;
  }

  .testimonial-card {
    min-width: 100% !important;
  }

  .footer-content {
    grid-template-columns: 1fr !important;
  }

  .footer-links {
    grid-template-columns: 1fr !important;
  }
}
</style>
