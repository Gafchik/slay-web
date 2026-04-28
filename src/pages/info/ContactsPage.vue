<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const form = ref(null);
const userName = ref('');
const userEmail = ref('');
const userMessage = ref('');

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

<!--          <q-form  ref="form" class="q-pb-xl">
            <q-input
              dark
              rounded
              outlined
              lazy-rules
              v-model="userName"
              type="text"
              label-color="white"
              color="white"
              class="btn-glass auto-field q-mb-md"
              :label="t('inputData.name')"
              :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.notValid'),
                  ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" color="white" />
              </template>
            </q-input>

            <q-input
              dark
              rounded
              outlined
              lazy-rules
              color="white"
              label-color="white"
              class="btn-glass auto-field q-mb-md"
              v-model="userEmail"
              :label="t('inputData.email')"
              type="email"
              :rules="[
            val => !!val || t('validation.required'),
            val => /.+@.+\..+/.test(val) || t('validation.notValid'),
          ]"
            >
              <template v-slot:prepend>
                <q-icon name="mail" color="white" />
              </template>
            </q-input>

            <q-input
              dark
              rounded
              outlined
              lazy-rules
              v-model="userMessage"
              type="textarea"
              label-color="white"
              color="textarea"
              class="btn-glass auto-field q-mb-md"
              :label="t('inputData.message')"
              :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.notValid'),
                  ]"
            >
              <template v-slot:prepend>
                <q-icon name="message" color="white" />
              </template>
            </q-input>

            <div class="flex justify-center">
              <q-btn
                outline
                rounded
                class="btn-glass q-px-lg"
                color="white"
                size="lg"
                type="submit"
                :label="t('buttons.send')"
                unelevated
              />
            </div>
          </q-form>-->

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
