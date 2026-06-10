<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import RestorePasswordDialog from 'pages/components/dialog/RestorePasswordDialog.vue'

  import { useAuthStore } from 'stores/auth-store.js'

  import googleLogo from 'src/assets/google_logo.png'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()

  const authStore = useAuthStore()
  const { loginRequest, loginGoggleRequest } = authStore

  const email = ref('')
  const password = ref('')
  const form = ref(null)
  const forgotPasswordDialog = ref(false)

  const onSubmit = async () => {
    if (!form.value) return

    const success = await form.value.validate()

    if (success) {
      const result = await loginRequest(email.value, password.value)
      if (result?.success) {
        window.location.href = '/profile'
      }
    }
  }

  const openForgotPasswordDialog = () => {
    forgotPasswordDialog.value = true
  }
</script>

<template>
  <q-page class="row justify-center text-primary q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <h2 class="gradient-text ">{{ t('account.login.title') }}</h2>
        </div>

        <q-form @submit="onSubmit" ref="form">
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
            :label="t('inputData.email')"
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
            v-model="password"
            type="password"
            label-color="white"
            color="white"
            class="btn-glass auto-field q-ma-none q-mb-md"
            :label="t('inputData.password')"
            :rules="[val => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="white" />
            </template>
          </q-input>

          <div class="row justify-end">
            <q-btn
              flat
              dense
              rounded
              no-caps
              size="md"
              class="btn-link q-px-sm"
              :label="t('account.login.forgotPassword')"
              @click="openForgotPasswordDialog"
            />
          </div>

          <div class="row justify-between q-mt-lg">
            <q-btn
              outline
              rounded
              unelevated
              class="btn-glass"
              color="white"
              icon-right="login"
              type="submit"
              size="md"
              :label="t('buttons.signIn')"
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
              {{t('account.login.reg_text')}}
            <router-link class="gradient-text text-bold no-underline"
                         :to="localeTo('registration')"
            >
              {{t('buttons.signUp').toUpperCase()}}
            </router-link>
            </span>

          </div>
        </q-form>
      </section>
    </div>

    <RestorePasswordDialog  v-model="forgotPasswordDialog"
                            :initial-email="email"/>
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
