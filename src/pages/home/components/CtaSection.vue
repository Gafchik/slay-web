<template>
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
</template>

<script setup></script>

<style scoped lang="scss">
.cta-section {
  padding: 60px 0;
}
.cta-content {
  padding: 40px 24px;
  border-radius: 20px;
  text-align: center;
}
.cta-content h2 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  line-height: 1.3;
}
.cta-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
  line-height: 1.4;
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

@media (min-width: 1024px) {
  .cta-content {
    padding: 60px 48px;
  }
}
</style>
