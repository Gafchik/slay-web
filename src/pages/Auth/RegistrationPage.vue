<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from 'stores/auth-store.js'
const { t } = useI18n()

const authStore = useAuthStore()
const {registerRequest} = authStore
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
  <q-page class="main-background flex flex-center">
    <div class="login-container">
      <div class="login-card">
        <h4 class="login-title text-white text-center q-mb-lg q-pb-lg">{{ t('register.title') }}</h4>

        <q-form @submit="onSubmit" class="q-gutter-md" ref="form">
          <!-- First Name -->
          <q-input dense
                   dark
                   outlined
                   v-model="firstName"
                   :label="t('register.first_name')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   class="auto-field"
                   lazy-rules
                   :rules="[val => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="white" />
            </template>
          </q-input>

          <!-- Last Name -->
          <q-input dense
                   outlined
                   dark
                   v-model="lastName"
                   :label="t('register.last_name')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   class="auto-field"
                   lazy-rules
                   :rules="[val => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="white" />
            </template>
          </q-input>

          <!-- Email -->
          <q-input dense
                   dark
                   outlined
                   v-model="email"
                   :label="t('register.email')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   class="auto-field"
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

          <!-- Password -->
          <q-input dense
                   dark
                   outlined
                   v-model="password"
                   :label="t('register.password')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   class="auto-field"
                   lazy-rules
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
          <q-input dense
                   outlined
                   dark
                   v-model="passwordConfirmation"
                   :label="t('register.password_confirmation')"
                   label-color="white"
                   color="white"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   class="auto-field"
                   lazy-rules
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

          <div class="row justify-center q-mt-lg">
            <q-btn
              :label="t('register.sign_up')"
              unelevated
              type="submit"
              text-color="white"
              icon-right="person_add"
              class="glass"
              size="md"
            />
          </div>

          <div class="row justify-center q-mt-lg text-white">
            <span>
              {{ t('register.have_account_text') }}
               <router-link class="text-white text-bold no-underline"
                            :to="{ name: 'login' }"
               >
                 {{t('register.have_account_link').toUpperCase()}}
               </router-link>
            </span>
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
