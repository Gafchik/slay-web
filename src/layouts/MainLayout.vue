<script setup>
  import PageHeader from 'pages/blocks/PageHeader.vue'
  import PageFooter from 'pages/blocks/PageFooter.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <PageHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
    <PageFooter />
  </q-layout>
</template>

<style>

</style>
