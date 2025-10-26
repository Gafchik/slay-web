<template>
  <q-page class="home-page q-pa-md">
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

    <!-- Features Section -->
    <section class="features-section q-mb-xl">
      <div class="container">
        <h2 class="text-h3 text-bold text-center q-mb-xl">Основные Функции</h2>

        <!-- Desktop/Tablet Layout -->
        <div class="row q-col-gutter-lg gt-sm">
          <div class="col-12 col-md-6">
            <q-card dark bordered class="feature-card full-height">
              <q-card-section horizontal>
                <q-card-section class="col-4 flex flex-center">
                  <q-icon name="mdi-folder-multiple-outline" size="xl" color="primary" />
                </q-card-section>
                <q-card-section class="col-8">
                  <div class="text-h5 q-mt-sm q-mb-xs">Менеджер Проектов</div>
                  <p class="text-grey-5">
                    Централизуйте все ваши проекты. Быстрый доступ и запуск в вашей любимой IDE, мгновенно повышая продуктивность.
                  </p>
                  <q-list dense dark>
                    <q-item v-for="item in projectFeatures" :key="item">
                      <q-item-section avatar>
                        <q-icon name="mdi-check-circle" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ item }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card dark bordered class="feature-card full-height">
              <q-card-section horizontal>
                <q-card-section class="col-4 flex flex-center">
                  <q-icon name="mdi-lock-outline" size="xl" color="primary" />
                </q-card-section>
                <q-card-section class="col-8">
                  <div class="text-h5 q-mt-sm q-mb-xs">Менеджер Паролей</div>
                  <p class="text-grey-5">
                    Храните пароли и конфиденциальные данные в безопасности с военным уровнем шифрования. Организуйте их интуитивно в папки и подпапки.
                  </p>
                  <q-list dense dark>
                    <q-item v-for="item in passwordFeatures" :key="item">
                      <q-item-section avatar>
                        <q-icon name="mdi-check-circle" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ item }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card dark bordered class="feature-card full-height">
              <q-card-section horizontal>
                <q-card-section class="col-4 flex flex-center">
                  <q-icon name="mdi-rocket" size="xl" color="primary" />
                </q-card-section>
                <q-card-section class="col-8">
                  <div class="text-h5 q-mt-sm q-mb-xs">Быстрый Запуск Программ</div>
                  <p class="text-grey-5">
                    Автоматизируйте запуск всего рабочего стека для любого проекта одним кликом. Экономьте драгоценное время, особенно на Windows и Linux.
                  </p>
                  <q-list dense dark>
                    <q-item v-for="item in launchFeatures" :key="item">
                      <q-item-section avatar>
                        <q-icon name="mdi-check-circle" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ item }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card dark bordered class="feature-card full-height">
              <q-card-section horizontal>
                <q-card-section class="col-4 flex flex-center">
                  <q-icon name="mdi-console" size="xl" color="primary" />
                </q-card-section>
                <q-card-section class="col-8">
                  <div class="text-h5 q-mt-sm q-mb-xs">Консольные Алиасы</div>
                  <p class="text-grey-5">
                    Упростите работу в терминале, создавая мощные алиасы для сложных команд. Запускайте их глобально с `slay-cli`.
                  </p>
                  <q-list dense dark>
                    <q-item v-for="item in aliasFeatures" :key="item">
                      <q-item-section avatar>
                        <q-icon name="mdi-check-circle" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ item }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Mobile Layout with Carousel -->
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="550px"
          class="bg-transparent lt-md"
        >
          <q-carousel-slide :name="1" class="column no-wrap flex-center">
            <q-card dark bordered class="feature-card full-height full-width">
              <q-card-section class="flex flex-center column">
                <q-icon name="mdi-folder-multiple-outline" size="xl" color="primary" class="q-mb-md" />
                <div class="text-h5 q-mt-sm q-mb-xs text-center">Менеджер Проектов</div>
                <p class="text-grey-5 text-center">
                  Централизуйте все ваши проекты. Быстрый доступ и запуск в вашей любимой IDE, мгновенно повышая продуктивность.
                </p>
                <q-list dense dark class="text-left">
                  <q-item v-for="item in projectFeatures" :key="item">
                    <q-item-section avatar>
                      <q-icon name="mdi-check-circle" color="positive" />
                    </q-item-section>
                    <q-item-section>{{ item }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="2" class="column no-wrap flex-center">
            <q-card dark bordered class="feature-card full-height full-width">
              <q-card-section class="flex flex-center column">
                <q-icon name="mdi-lock-outline" size="xl" color="primary" class="q-mb-md" />
                <div class="text-h5 q-mt-sm q-mb-xs text-center">Менеджер Паролей</div>
                <p class="text-grey-5 text-center">
                  Храните пароли и конфиденциальные данные в безопасности с военным уровнем шифрования. Организуйте их интуитивно в папки и подпапки.
                </p>
                <q-list dense dark class="text-left">
                  <q-item v-for="item in passwordFeatures" :key="item">
                    <q-item-section avatar>
                      <q-icon name="mdi-check-circle" color="positive" />
                    </q-item-section>
                    <q-item-section>{{ item }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="3" class="column no-wrap flex-center">
            <q-card dark bordered class="feature-card full-height full-width">
              <q-card-section class="flex flex-center column">
                <q-icon name="mdi-rocket" size="xl" color="primary" class="q-mb-md" />
                <div class="text-h5 q-mt-sm q-mb-xs text-center">Быстрый Запуск Программ</div>
                <p class="text-grey-5 text-center">
                  Автоматизируйте запуск всего рабочего стека для любого проекта одним кликом. Экономьте драгоценное время, особенно на Windows и Linux.
                </p>
                <q-list dense dark class="text-left">
                  <q-item v-for="item in launchFeatures" :key="item">
                    <q-item-section avatar>
                      <q-icon name="mdi-check-circle" color="positive" />
                    </q-item-section>
                    <q-item-section>{{ item }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
          <q-carousel-slide :name="4" class="column no-wrap flex-center">
            <q-card dark bordered class="feature-card full-height full-width">
              <q-card-section class="flex flex-center column">
                <q-icon name="mdi-console" size="xl" color="primary" class="q-mb-md" />
                <div class="text-h5 q-mt-sm q-mb-xs text-center">Консольные Алиасы</div>
                <p class="text-grey-5 text-center">
                  Упростите работу в терминале, создавая мощные алиасы для сложных команд. Запускайте их глобально с `slay-cli`.
                </p>
                <q-list dense dark class="text-left">
                  <q-item v-for="item in aliasFeatures" :key="item">
                    <q-item-section avatar>
                      <q-icon name="mdi-check-circle" color="positive" />
                    </q-item-section>
                    <q-item-section>{{ item }}</q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';


const slide = ref(1);

const projectFeatures = ref([
  'Умная организация всех репозиториев',
  'Запуск проекта в вашей IDE в один клик',
  'Мгновенный поиск и фильтрация по проектам',
  'Централизованное управление для фрилансеров и команд',
  'Поддержка любых языков и технологий'
]);

const passwordFeatures = ref([
  'Надежное AES-256-GCM шифрование для максимальной безопасности',
  'Интуитивная иерархическая структура папок и подпапок (как в Passbolt)',
  'Единый мастер-пароль для доступа ко всем хранимым данным',
  'Гибкий контроль видимости паролей и автозаполнение полей',
  'Безопасное хранение заметок и конфиденциальной информации'
]);

const launchFeatures = ref([
  'Создание персонализированных наборов программ для каждого проекта',
  'Запуск всего рабочего стека (IDE, терминал, браузер) одним кликом',
  'Бесшовная автоматизация рутинных процессов запуска (Windows/Linux Must-Have)',
  'Значительная экономия времени на настройке и переключении рабочих окружений',
  'Управление зависимостями и окружениями для каждого проекта'
]);

const aliasFeatures = ref([
  'Мгновенный доступ к сложным и часто используемым консольным командам',
  'Глобальный запуск алиасов из любой консоли на вашем ПК через `slay-cli`',
  'Упрощение работы с Docker, PHP серверами, SSH-подключениями и сложными скриптами',
  'Повышение эффективности работы в терминале и сокращение времени на ввод команд',
  'Централизованное управление алиасами для всех ваших проектов и задач'
]);
</script>

<style scoped lang="scss">
.home-page {
  background: radial-gradient(circle at 20% 30%, #101218, #0f1115 60%);
  min-height: 100vh;
  color: white;
}

.hero-section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.q-btn {
  border-radius: 8px;
  text-transform: none;
  font-weight: 600;
}

.q-btn.q-btn--outline {
  border-color: white;
}

.features-section {
  padding-top: 60px;
  padding-bottom: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow: 0 10px 40px rgba(0, 255, 200, 0.05), inset 0 1px 10px rgba(255, 255, 255, 0.05);
  transition: all 0.4s ease;

  &:hover {
    box-shadow: 0 15px 45px rgba(0, 255, 200, 0.1), inset 0 1px 12px rgba(255, 255, 255, 0.08);
    transform: translateY(-5px);
  }
}

.q-card-section {
  padding: 30px;
}

.q-card-section.col-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.q-card-section.col-8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.q-list {
  background: transparent;
  padding: 0;
}

.q-item {
  padding-left: 0;
  min-height: unset;
  margin-bottom: 8px;
}

.q-item-section--avatar {
  min-width: 30px;
  padding-right: 8px;
}

.glass-button {
  background: linear-gradient(135deg, rgba(0, 225, 255, 0.2), rgba(0, 255, 170, 0.2));
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  color: white;

  &:hover {
    background: linear-gradient(135deg, rgba(0, 225, 255, 0.3), rgba(0, 255, 170, 0.3));
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.4);
  }
}

.q-carousel {
  border-radius: 18px;
}

// Responsive adjustments
@media (max-width: 800px) {
  .hero-section {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .q-btn {
    width: 100%;
    margin-right: 0 !important;
    margin-bottom: 15px;
  }

  .q-card-section.horizontal {
    flex-direction: column;

    .col-4, .col-8 {
      width: 100%;
      text-align: center;
    }

    .q-icon {
      margin-bottom: 20px;
    }
  }

  .q-card-section.col-4:first-child {
    padding-bottom: 0;
  }
}
</style>
