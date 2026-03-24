<script setup>
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body text-white cta-content glass">
        <h4 class="q-mb-md">Готовы повысить свою продуктивность?</h4>
        <p class="q-mb-xl">Начните использовать Slay сегодня</p>
        <div class="flex justify-center">
          <q-btn
            rounded
            size="xl"
            :to="{ name: 'download' }"
            label="Скачать бесплатно"
            class="btn-glass btn-download"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section__body {
    padding: 40px 24px;
    border-radius: 20px;
    text-align: center;
  }

  h4 {
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
  }

  .cta-button {
    border-radius: 10px;
    font-weight: 600;
    text-transform: none;
    padding: 12px 24px;
    width: 100%;
    max-width: 280px;
  }
</style>
