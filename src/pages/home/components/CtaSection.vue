<script setup>
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main glass ">
          <div class="section__title">
            <h2>{{t('sections.cta.title')}}</h2>
            <p>{{t('sections.cta.subtitle')}}</p>
          </div>
          <div class="flex justify-center">
            <q-btn
              unelevated
              rounded
              :to="{ name: 'download' }"
              class="btn-download btn-glass q-px-xl"
            >
              {{t('buttons.join')}}
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section__main {
    padding: 40px 24px;
    border-radius: 20px;
    text-align: center;
  }
</style>
