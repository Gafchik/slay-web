<script setup>
  import { computed } from 'vue'
  import { useQuasar } from 'quasar'

  import TitleSection from './components/TitleSection.vue'
  import WorkspaceSection from './components/WorkspaceSection.vue'
  import DistinctionSection from './components/DistinctionSection.vue'
  import SubsequenceSection from './components/SubsequenceSection.vue'
  import AliasesSection from './components/AliasesSection.vue'
  import PasswordSection from './components/PasswordSection.vue'
  import CtaSection from './components/CtaSection.vue'
  import AppVideoDialog from '../components/video/AppVideoDialog.vue'

  const $q = useQuasar()
  const showAboutSection = computed(() => $q.screen.width >= 1240)
</script>

<template>
  <q-page class="fit q-pb-xl">
    <TitleSection />
    <WorkspaceSection />
    <DistinctionSection />
    <SubsequenceSection v-if="showAboutSection"/>
    <AliasesSection v-if="showAboutSection"/>
    <PasswordSection />
    <CtaSection />
  </q-page>

  <AppVideoDialog />
</template>

<style scoped lang="scss"></style>
