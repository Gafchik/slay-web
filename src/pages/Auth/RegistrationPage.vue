<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from 'stores/auth-store.js'
import googleLogo from 'assets/google_logo.png'
const { t } = useI18n()

const authStore = useAuthStore()
const {registerRequest, loginGoggleRequest} = authStore
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const form = ref(null)
const onSubmit = async () => {
  if (!form.value) return

  const success = await form.value.validate()
  if (success) {
    const result = await registerRequest({
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value
    })
    if (result?.success) {
      // Редирект на главную страницу после успешной регистрации
      window.location.href = '/'
    }
  }
}
</script>

<template>
  <q-page class="row justify-center q-pb-xl">
    <div class="flex column justify-center q-ma-auto">
      <h4 class="text-primary gradient-text text-center q-mb-xl">{{ t('account.register.title') }}</h4>

      <q-form @submit="onSubmit" ref="form">
        <!-- First Name -->
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          color="white"
          label-color="white"
          class="btn-glass auto-field q-mb-sm"
          v-model="firstName"
          :label="t('inputData.first_name')"
          :rules="[val => !!val || t('validation.required')]"
        >
          <template v-slot:prepend>
            <q-icon name="person" color="white" />
          </template>
        </q-input>

        <!-- Last Name -->
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          color="white"
          label-color="white"
          class="btn-glass auto-field q-mb-sm"
          v-model="lastName"
          :label="t('inputData.last_name')"
          :rules="[val => !!val || t('validation.required')]"
        >
          <template v-slot:prepend>
            <q-icon name="person" color="white" />
          </template>
        </q-input>

        <!-- Email -->
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          color="white"
          label-color="white"
          class="btn-glass auto-field q-mb-sm"
          v-model="email"
          :label="t('inputData.email')"
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

        <!-- Password -->
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          color="white"
          label-color="white"
          class="btn-glass auto-field q-mb-sm"
          v-model="password"
          :label="t('inputData.password')"
          type="password"
          :rules="[
            val => !!val || t('validation.required'),
            val => val.length >= 8 || t('validation.min_length', { min: 8 })
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="white" />
          </template>
        </q-input>

        <!-- Password Confirmation -->
        <q-input
          dark
          rounded
          outlined
          lazy-rules
          color="white"
          label-color="white"
          class="btn-glass auto-field q-mb-sm"
          v-model="passwordConfirmation"
          :label="t('inputData.password_confirmation')"
          type="password"
          :rules="[
            val => !!val || t('validation.required'),
            val => val === password || t('validation.password_mismatch')
          ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="white" />
          </template>
        </q-input>

        <div class="row justify-between q-mt-lg">
          <q-btn
            outline
            rounded
            class="btn-glass"
            color="white"
            icon-right="login"
            type="submit"
            size="md"
            :label="t('buttons.signUp')"
            unelevated
          />
          <q-btn
            @click="loginGoggleRequest"
            outline
            rounded
            class="btn-glass"
            color="white"
            size="md"
          >
            <q-avatar class="google-logo" left>
              <img
                :src="googleLogo"
                alt="Google"
              />
            </q-avatar>
          </q-btn>
        </div>

        <div class="row justify-center q-mt-lg text-primary">
            <span>
              {{ t('account.register.have_account_text') }}
               <router-link class="text-primary gradient-text text-bold no-underline"
                            :to="{ name: 'login' }"
               >
                 {{t('buttons.login').toUpperCase()}}
               </router-link>
            </span>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>
  .google-logo {
    width: 24px;
    height: 24px;
  }
</style>
