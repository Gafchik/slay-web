<script setup>
  import PageHeader from 'pages/components/layout/PageHeader.vue'
  import PageFooter from 'pages/components/layout/PageFooter.vue'
  import AssistantButton from 'pages/components/assistant/AssistantButton.vue'
  import AssistantChat from 'pages/components/assistant/AssistantChat.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <PageFooter />
    <AssistantChat />
    <AssistantButton />
  </q-layout>
</template>

<style>

</style>
