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
      window.location.href = '/profile'
    }
  }
}
</script>

<template>
  <q-page class="row justify-center text-primary">
    <div>
      <div>
        <h4 class="text-primary text-center q-mb-lg q-pb-lg">{{ t('login.title') }}</h4>
        <q-form @submit="onSubmit" class="q-gutter-md" ref="form">
          <q-input dense
                   outlined
                   class="auto-field"
                   v-model="email"
                   :label="t('login.email')"
                   label-color="black"
                   color="black"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   lazy-rules
                   type="email"
                   :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.not_valid'),
                  ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="black" />
            </template>
          </q-input>

          <q-input dense
                   outlined
                   class="auto-field"
                   v-model="password"
                   :label="t('login.password')"
                   label-color="black"
                   color="black"
                   bg-color="rgba(255, 255, 255, 0.1)"
                   lazy-rules
                   type="password"
                   :rules="[val => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="black" />
            </template>
          </q-input>

          <div class="row justify-center q-mt-lg">
            <q-btn
              :label="t('login.sign_in')"
              unelevated
              type="submit"
              text-color="black"
              icon-right="login"
              class="glass"
              size="md"
            />
          </div>
          <div class="row justify-center q-mt-lg text-primary">
            <span>
              {{t('login.reg_text')}}
            <router-link class="text-primary text-bold no-underline"
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
