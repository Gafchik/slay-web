<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRoute } from 'src/composables/useLocaleRoute'

import { useAuthStore } from 'stores/auth-store.js'
const authStore = useAuthStore()
const {registerRequest, loginGoggleRequest} = authStore

import googleLogo from 'assets/google_logo.png'

const { t } = useI18n()
const { localeTo } = useLocaleRoute()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const form = ref(null)
const agreeTos = ref(false)

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
      window.location.href = '/'
    }
  }
}
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <h2 class="gradient-text ">{{ t('account.register.title') }}</h2>
        </div>

        <q-form @submit="onSubmit" ref="form" class="q-pb-xl">
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
            :label="t('inputData.firstName')"
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
            :label="t('inputData.lastName')"
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
            val => /.+@.+\..+/.test(val) || t('validation.notValid'),
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
            val => val.length >= 8 || t('validation.minLength', { min: 8 })
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
            :label="t('inputData.passwordConfirmation')"
            type="password"
            :rules="[
            val => !!val || t('validation.required'),
            val => val === password || t('validation.passwordMismatch')
          ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="white" />
            </template>
          </q-input>

          <q-checkbox v-model="agreeTos"
                      dark
                      color="primary">
            <template #default>
              <span>
                {{ t('inputData.agreeTos') }}

                <RouterLink :to="localeTo('terms_of_services')" class="text-primary">
                  {{ t('routes.terms') }}
                </RouterLink>

                {{ t('text.and') }}

                <RouterLink :to="localeTo('privacy_policy')" class="text-primary">
                  {{ t('routes.privacyPolicy') }}
                </RouterLink>
              </span>
            </template>
          </q-checkbox>

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
                            :to="localeTo('login')"
               >
                 {{t('buttons.login').toUpperCase()}}
               </router-link>
            </span>
          </div>
        </q-form>
      </section>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
  .section {
    padding:  0;

    &__title {
      height: auto;
    }
  }

  .q-form {
    max-width: 300px;

    @media (min-width: 48em) {
      max-width: none;
    }

    span {
      line-height: 140%;
    }
  }

  .google-logo {
    width: 24px;
    height: 24px;
  }
</style>
