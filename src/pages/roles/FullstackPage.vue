<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <h2 class="gradient-text">{{ t('account.profile.title') }}</h2>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style scoped lang="scss"></style>
