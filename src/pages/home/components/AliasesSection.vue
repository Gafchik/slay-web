<template>
  <section class="feature-section aliases-section">
    <div class="container">
      <div class="section-header">
        <h2>Консольные Алиасы</h2>
        <p>Упростите работу в терминале с мощными алиасами</p>
      </div>

      <div class="aliases-content">
        <div class="aliases-text">
          <p class="aliases-description">
            С Slay вы забудете о рутинном вводе длинных команд. Создавайте мощные и короткие алиасы для любых консольных операций.
          </p>

          <div class="aliases-features">
            <div v-for="(feature, index) in aliasFeatures" :key="index" class="alias-feature">
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
</template>

<script setup>
import { ref } from 'vue';

const aliasFeatures = ref([
  { title: 'Мгновенный доступ к командам', description: 'Создавайте короткие и запоминающиеся алиасы для любых сложных консольных команд.' },
  { title: 'Глобальный запуск', description: 'Используйте ваши алиасы из любой консоли на ПК.' },
  { title: 'Упрощение рутинных задач', description: 'Легко входите в Docker конейнер, одной командой запускайте локальные сервера, именуйте версии язиков програмирования' },
  { title: 'Повышение эффективности терминала', description: 'Сократите время на ввод команд в разы и повысьте свою продуктивность в терминале.' },
  { title: 'Централизованное управление', description: 'Управляйте всеми вашими консольными алиасами из одного удобного места для всех проектов.' },
  { title: 'Персонализация и гибкость', description: 'Настраивайте алиасы под свои нужды и рабочие процессы для максимального комфорта.' }
]);
</script>

<style scoped lang="scss">
.feature-section { padding: 60px 0; }
.aliases-section { background: linear-gradient(180deg, rgba(170, 0, 255, 0.05) 0%, transparent 100%); }

.aliases-content { display: flex; flex-direction: column; gap: 30px; }
.aliases-description { font-size: 1rem; color: rgba(255, 255, 255, 0.8); line-height: 1.5; margin-bottom: 24px; }
.aliases-features { display: flex; flex-direction: column; gap: 20px; }
.alias-feature { display: flex; gap: 12px; align-items: flex-start; }
.alias-icon { margin-top: 2px; flex-shrink: 0; }
.alias-content h4 { font-size: 1.125rem; margin-bottom: 4px; line-height: 1.3; }
.alias-content p { color: rgba(255, 255, 255, 0.7); margin: 0; font-size: 0.9rem; line-height: 1.4; }

@media (min-width: 768px) {
  .aliases-content { flex-direction: row; gap: 40px; }
}
</style>

