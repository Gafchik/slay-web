<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from 'stores/auth-store.js'
const { t } = useI18n()

const authStore = useAuthStore()
const {loginRequest} = authStore

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
      window.location.href = '/'
    }
  }
}
</script>

<template>

  <q-page class="flex flex-center">
    <div class="login-container">
      <div class="login-card">
        <h4 class="login-title text-white text-center q-mb-lg q-pb-lg">{{ t('login.title') }}</h4>
        <q-form @submit="onSubmit" class="q-gutter-md" ref="form">
          <q-input dense
                   dark
                   outlined
                   class="auto-field"
                   v-model="email"
                   :label="t('login.email')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   lazy-rules
                   type="email"
                   :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.not_valid'),
                  ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="white" />
            </template>
          </q-input>

          <q-input dense
                   outlined
                   dark
                   class="auto-field"
                   v-model="password"
                   :label="t('login.password')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   lazy-rules
                   type="password"
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
              text-color="white"
              icon-right="login"
              class="glass"
              size="md"
            />
          </div>
          <div class="row justify-center q-mt-lg text-white">
            <span>
              {{t('login.reg_text')}}
            <router-link class="text-white text-bold no-underline"
                         :to="{ name: 'registration' }"
            >
              {{t('login.reg').toUpperCase()}}
            </router-link>
            </span>

          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<style scoped>

</style>
