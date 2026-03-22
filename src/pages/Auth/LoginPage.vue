<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from 'stores/auth-store.js'
const { t } = useI18n()

const authStore = useAuthStore()
const {loginRequest, loginGoggleRequest} = authStore

const email = ref('')
const password = ref('')
const form = ref(null)

const onSubmit = async () => {
  if (!form.value) return

  const success = await form.value.validate()
  if (success) {
    const result = await loginRequest(email.value, password.value)
    if (result?.success) {
      // Редирект на главную страницу после успешного логина
      window.location.href = '/profile'
    }
  }
}
</script>

<template>
  <q-page class="row justify-center text-primary">
    <div class="flex column justify-center q-ma-auto">
      <h4 class="gradient-text text-center q-mb-xl">{{ t('login.title') }}</h4>
      <q-form @submit="onSubmit" class="q-gutter-md" ref="form">
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          v-model="email"
          type="email"
          label-color="white"
          color="white"
          class="btn-glass auto-field q-ma-none q-mb-md"
          :label="t('login.email')"
          :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.not_valid'),
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
          v-model="password"
          type="password"
          label-color="white"
          color="white"
          class="btn-glass auto-field q-ma-none q-mb-md"
          :label="t('login.password')"
          :rules="[val => !!val || t('validation.required')]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="white" />
          </template>
        </q-input>

        <div class="row justify-center q-mt-lg">
          <q-btn
            :label="t('login.sign_in')"
            unelevated
            type="submit"
            text-color="black"
            icon-right="login"
            class="glass button"
            size="md"
          />
          <q-btn
            :label="t('login.sign_in_goggle')"
            unelevated
            @click="loginGoggleRequest"
            text-color="black"
            icon-right="login"
            class="glass button"
            size="md"
          />
        </div>
        <div class="row justify-center q-mt-lg text-primary">
            <span>
              {{t('login.reg_text')}}
            <router-link class="gradient-text text-bold no-underline"
                         :to="{ name: 'registration' }"
            >
              {{t('login.reg').toUpperCase()}}
            </router-link>
            </span>

        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>

</style>
