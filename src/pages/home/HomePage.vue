<template>
  <q-page class="home-page">
    <HeroSection />
    <ProjectSection />
    <LaunchSection />
    <AliasesSection />
    <PasswordSection />
    <TestimonialsSection />
    <CtaSection />
  </q-page>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import LaunchSection from './components/LaunchSection.vue'
import PasswordSection from './components/PasswordSection.vue'
import AliasesSection from './components/AliasesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CtaSection from './components/CtaSection.vue'
</script>

<style scoped lang="scss">
.home-page {
  background: radial-gradient(circle at 20% 30%, #101218, #0f1115 60%);
  color: white;
  overflow-x: hidden;
}
</style>
