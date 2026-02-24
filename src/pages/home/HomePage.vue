<script setup>
  import HeroSection from './components/TitleSection.vue'
  import ProjectSection from './components/ProjectSection.vue'
  import LaunchSection from './components/LaunchSection.vue'
  import PasswordSection from './components/PasswordSection.vue'
  import AliasesSection from './components/AliasesSection.vue'
  import TestimonialsSection from './components/TestimonialsSection.vue'
  import CtaSection from './components/CtaSection.vue'
  import AboutSection from 'pages/home/components/AboutSection.vue'
</script>

<template>
  <q-page class="fit">
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <LaunchSection />
    <AliasesSection />
    <PasswordSection />
    <TestimonialsSection />
    <CtaSection />
  </q-page>
</template>

<style scoped lang="scss">
  .q-page {
    background: radial-gradient(circle at 20% 30%, #101218, #0f1115 60%);
  }
</style>
