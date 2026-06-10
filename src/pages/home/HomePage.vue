<script setup>
  /*import { computed } from 'vue'
  import { useQuasar } from 'quasar'*/

  import TitleSection from './components/TitleSection.vue'
  import ProjectSection from './components/ProjectSection.vue'
  import LaunchSection from './components/LaunchSection.vue'
  import AliasesSection from './components/AliasesSection.vue'
  import PasswordSection from './components/PasswordSection.vue'
  /*import AboutSection from './components/AboutSection.vue'*/
  import SftpSection from './components/SftpSection.vue'
  /*import TestimonialsSection from './components/TestimonialsSection.vue'*/
  import CtaSection from './components/CtaSection.vue'
  import AppVideoDialog from '../components/video/AppVideoDialog.vue'

  /*const $q = useQuasar()
  const showAboutSection = computed(() => $q.screen.width >= 1240)*/
</script>

<template>
  <q-page class="fit q-pb-xl">
    <TitleSection />
<!--    <AboutSection v-if="showAboutSection" />-->
    <ProjectSection />
    <LaunchSection />
    <AliasesSection />
    <PasswordSection />
    <SftpSection />
<!--    <TestimonialsSection />-->
    <CtaSection />
  </q-page>

  <AppVideoDialog />
</template>

<style scoped lang="scss"></style>
