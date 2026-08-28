<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import RestorePasswordDialog from 'pages/components/dialog/RestorePasswordDialog.vue'

  import { useAuthStore } from 'stores/auth-store.js'

  import Example from 'assets/images/home/Example.png'

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
  <q-page class="row justify-center">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__head q-mb-xl">
          <div class="section__title text-center">
            <h2 class="gradient-text ">{{ t('account.login.title') }}</h2>
          </div>
        </div>

        <div class="section__body">
          <div class="flex">
            <div class="col q-px-xl">
              <img :src="Example" alt="" title="" height="auto" width="100%"/>
            </div>
            <div class="col q-px-xl">
              <q-form @submit="onSubmit" ref="form">
                <q-input
                  dark
                  outlined
                  lazy-rules
                  v-model="email"
                  type="email"
                  label-color="white"
                  color="white"
                  class="auto-field q-ma-none"
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
                  class="auto-field q-ma-none q-mb-md"
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

                <q-btn
                  outline
                  rounded
                  unelevated
                  class="btn-gold q-mb-md"
                  type="submit"
                  :label="t('buttons.continue')"
                />

                <button class="gsi-material-button q-mb-xl" @click="loginGoggleRequest">
                  <div class="gsi-material-button-content-wrapper">
                    <div class="gsi-material-button-icon">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                        <path fill="none" d="M0 0h48v48H0z"></path>
                      </svg>
                    </div>
                    <span class="gsi-material-button-contents">Continue with Google</span>
                  </div>
                </button>

                <div class="flex">
                    <span>
                      {{t('account.login.reg_text')}}
                    <router-link class="btn btn-link--blue"
                                 :to="localeTo('registration')"
                    >
                      {{t('buttons.signUp').toUpperCase()}}
                    </router-link>
                    </span>
                </div>
              </q-form>
            </div>
          </div>
        </div>
      </section>
    </div>

    <RestorePasswordDialog  v-model="forgotPasswordDialog"
                            :initial-email="email"/>
  </q-page>
</template>

<style scoped lang="scss">
  .q-page {
    padding: 100px 0;
  }

  .section {
    padding:  0;
    color: rgba(255, 255, 255, 0.64);

    &__title {
      height: auto;
      margin: 0;
    }

    &__body {
      padding: 0;
      margin: 0;

      .col {
        position: relative;

        &:first-child {
          display: none;

          @media (min-width: 64em) {
            display: flex;
          }

          &:before,
          &:after {
            content: '';
            position: absolute;
            pointer-events: none;
          }

          &:before {
            top: 0;
            right: 0;
            height: 100%;
            width: 2px;
            background: rgba(228, 205, 113, 0.64);
          }

          &:after {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background: linear-gradient(to bottom, rgba(0, 51, 60, 0.00) 0%, #011C37 100%);
          }
        }
      }
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

  .gsi-material-button {
    width: 100%;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -webkit-appearance: none;
    background-color: #02172B;
    background-image: none;
    -webkit-border-radius: 4px;
    border-radius: 16px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #FFF;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 0.25px;
    outline: none;
    overflow: hidden;
    padding: 10px 24px;
    position: relative;
    text-align: left;
    transition: 0.25s;
    vertical-align: middle;
    white-space: nowrap;
    min-width: min-content;
    border: none;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25), 2px 4px 4px 0 rgba(12, 44, 98, 1) inset;

    .gsi-material-button-content-wrapper {
      -webkit-align-items: center;
      align-items: center;
      display: flex;
      -webkit-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      flex-wrap: nowrap;
      height: 100%;
      justify-content: space-between;
      position: relative;
      width: 100%;
    }

    .gsi-material-button-contents {
      -webkit-flex-grow: 1;
      flex-grow: 1;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: top;
    }

    .gsi-material-button-icon {
      height: 24px;
      margin-right: 12px;
      min-width: 24px;
      width: 24px;
    }

    .gsi-material-button-state {
      -webkit-transition: opacity .218s;
      transition: opacity .218s;
      bottom: 0;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    &:disabled {
      cursor: default;
      background-color: #13131461;
      border-color: #8e918f1f;

      .gsi-material-button-state {
        background-color: #e3e3e31f;
      }

      .gsi-material-button-contents {
        opacity: 38%;
      }

      .gsi-material-button-icon {
        opacity: 38%;
      }
    }

    &:not(:disabled) {
      &:active {
      }

      &:focus {
      }

      &:hover {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 1), 2px 4px 4px 0 rgba(12, 44, 98, 0.25) inset;

        .gsi-material-button-state {
          background-color: white;
          opacity: 8%;
        }
      }
    }
  }
</style>
