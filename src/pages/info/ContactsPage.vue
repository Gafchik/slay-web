<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const openMail = () => {
  window.location.href = 'mailto:info@slay-app.dev'
}
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <section class="section full-width q-my-auto">
      <div class="container">
        <div class="section__body column items-center">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text">{{t('routes.contacts')}}</h2>
            <p>{{t('text.haveQuestion')}}</p>
          </div>
          <div class="column items-center">
            <q-btn
              outline
              rounded
              class="btn-glass q-mb-md q-py-md q-px-lg text-lowercase"
              color="white"
              icon="mail"
              type="submit"
              label="info@slay-app.dev"
              @click="openMail"
              unelevated
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
</style>
