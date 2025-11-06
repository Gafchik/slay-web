<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>Что говорят наши пользователи</h2>
        <p>Присоединяйтесь к тысячам довольных разработчиков</p>
      </div>

      <div class="testimonials-grid">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card glass">
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
</template>

<script setup>
import { ref } from 'vue';

const testimonials = ref([
  { author: 'Алексей К.', role: 'Frontend разработчик (Windows)', text: 'Раньше запуск моего рабочего окружения занимал вечность. Теперь с Slay я начинаю работу в один клик, экономя по 10 минут каждое утро! Это просто спасение для продуктивности.', feature: 'Быстрый запуск рабочего пространства', avatar: 'mdi-laptop-windows' },
  { author: 'Иван Т.', role: 'PHP/Laravel разработчик', text: 'Консольные алиасы в Slay  изменили мою работу с PHP версиями и Docker. Быстрый заход в контейнеры, переключение между версиями PHP на Windows — все стало в разы проще. Больше никаких длинных команд!', feature: 'Консольные Алиасы', avatar: 'mdi-php' },
  { author: 'Мария С.', role: 'Фрилансер-разработчик', text: 'Как фрилансер с десятками проектов, я постоянно сталкивалась с хаосом. Менеджер проектов и паролей Slay привел все в порядок. Все проекты организованы, а пароли надежно хранятся. Моя продуктивность взлетела!', feature: 'Менеджер Проектов & Паролей', avatar: 'mdi-account-tie' },
  { author: 'Ольга П.', role: 'Тестировщик', text: 'Для тестирования мне нужны десятки аккаунтов (админ, юзер, менеджер). Менеджер паролей Slay позволяет мне хранить их все в порядке, быстро переключаться и всегда иметь доступ к нужным учетным данным. Незаменимо!', feature: 'Менеджер Паролей', avatar: 'mdi-bug' },
  { author: 'Дмитрий В.', role: 'Backend разработчик', text: 'Хранить пароли от Stripe, Mailgun, Mailtrap и множества серверов — это боль. Slay не только надежно хранит их, но и консольные алиасы ускорили мой доступ к серверам и выполнение сложных команд. Это маст-хэв для бэкенда.', feature: 'Консольные Алиасы & Менеджер Паролей', avatar: 'mdi-server' }
]);
</script>

<style scoped lang="scss">
.testimonials-section { padding: 60px 0; }
.testimonials-grid { display: flex; flex-direction: column; gap: 24px; }
.testimonial-card { padding: 28px 20px; border-radius: 16px; display: flex; flex-direction: column; justify-content: space-between; }
.testimonial-content { position: relative; margin-bottom: 20px; }
.quote-icon { position: absolute; top: -8px; left: -8px; font-size: 2rem; color: rgba(0, 225, 255, 0.3); }
.testimonial-content p { font-size: 1rem; line-height: 1.5; color: rgba(255, 255, 255, 0.9); position: relative; z-index: 2; }
.testimonial-author { display: flex; align-items: center; gap: 12px; }
.author-avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(0, 225, 255, 0.2); display: flex; align-items: center; justify-content: center; }
.author-avatar .q-icon { font-size: 1.25rem; }
.author-info { display: flex; flex-direction: column; }
.author-info strong { font-size: 1rem; }
.author-info span { color: rgba(255, 255, 255, 0.7); font-size: 0.8rem; }
.feature-tag { background: rgba(0, 225, 255, 0.2); color: #00e1ff; padding: 2px 6px; border-radius: 8px; font-size: 0.7rem; margin-top: 2px; display: inline-block; }

@media (min-width: 768px) {
  .testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
}

@media (min-width: 1024px) {
  .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>

