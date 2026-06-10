<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import { useAuthStore } from 'stores/auth-store.js'

  import googleLogo from 'src/assets/google_logo.png'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()

  const authStore = useAuthStore()
  const { forgotPasswordRequest, loginRequest, loginGoggleRequest } = authStore

  const email = ref('')
  const password = ref('')
  const form = ref(null)
  const forgotPasswordDialog = ref(false)
  const forgotPasswordEmail = ref('')
  const forgotPasswordForm = ref(null)

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
    forgotPasswordEmail.value = email.value
    forgotPasswordDialog.value = true
  }

  const onForgotPasswordSubmit = async () => {
    if (!forgotPasswordForm.value) return

    const success = await forgotPasswordForm.value.validate()

    if (!success) return

    const result = await forgotPasswordRequest(forgotPasswordEmail.value)

    if (result?.success) {
      forgotPasswordDialog.value = false
    }
  }
</script>

<template>
  <q-page class="row justify-center text-primary  q-py-xl">
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

          <div class="row justify-end q-mt-sm">
            <q-btn
              flat
              dense
              no-caps
              class="forgot-password-link"
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

    <q-dialog v-model="forgotPasswordDialog" backdrop-filter="blur(8px) brightness(35%)">
      <q-card class="forgot-password-dialog glass text-white">
        <q-card-section class="forgot-password-dialog__header q-pb-sm">
          <div>
            <div class="text-h5 text-weight-bold gradient-text">
              {{ t('account.forgotPassword.title') }}
            </div>
            <div class="text-grey-5 q-mt-sm">
              {{ t('account.forgotPassword.description') }}
            </div>
          </div>

          <q-btn
            v-close-popup
            flat
            round
            dense
            icon="close"
            color="white"
            class="forgot-password-dialog__close"
          />
        </q-card-section>

        <q-card-section>
          <q-form ref="forgotPasswordForm" @submit="onForgotPasswordSubmit">
            <q-input
              v-model="forgotPasswordEmail"
              dark
              rounded
              outlined
              lazy-rules
              autofocus
              type="email"
              autocomplete="email"
              label-color="white"
              color="white"
              class="btn-glass auto-field"
              :label="t('inputData.email')"
              :rules="[
                val => !!val || t('validation.required'),
                val => /.+@.+\..+/.test(val) || t('validation.notValid'),
              ]"
            >
              <template #prepend>
                <q-icon name="mail" color="white" />
              </template>
            </q-input>

            <div class="row justify-end q-mt-lg">
              <q-btn
                rounded
                unelevated
                no-caps
                type="submit"
                class="gradient-bg q-px-lg"
                icon-right="send"
                :label="t('account.forgotPassword.submit')"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
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

  .forgot-password-link {
    color: #63efff;
    font-weight: 700;
  }

  .forgot-password-dialog {
    width: min(92vw, 460px);
    padding: 12px;
    border-radius: 24px;
    background-color: rgba(4, 12, 16, 0.92);

    &__header {
      position: relative;
      padding-right: 52px;
    }

    &__close {
      position: absolute;
      top: 12px;
      right: 12px;
    }
  }
</style>
