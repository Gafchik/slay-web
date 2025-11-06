<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content text-center">
        <h1 class="hero-title">Smart Launcher for All Your devtools</h1>
        <p class="hero-subtitle">
         Ваш единый командный центр. Сделайте свою работу эффективной и комфортной.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped lang="scss">
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

@media (min-width: 768px) {
  .hero-section {
    padding: 80px 0 40px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3rem;
  }
}
</style>

