<script setup>
  import { computed, ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useRoute, useRouter } from 'vue-router'

  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import { useAuthStore } from 'stores/auth-store.js'

  const { t } = useI18n()
  const route = useRoute()
  const router = useRouter()
  const { localeTo } = useLocaleRoute()

  const { resetPasswordRequest } = useAuthStore()

  const form = ref(null)
  const password = ref('')
  const passwordConfirmation = ref('')

  const token = computed(() => String(route.query.token || ''))
  const email = computed(() => String(route.query.email || ''))
  const hasResetCredentials = computed(() => Boolean(token.value && email.value))

  const onSubmit = async () => {
    if (!form.value || !hasResetCredentials.value) return

    const success = await form.value.validate()

    if (!success) return

    const result = await resetPasswordRequest({
      token: token.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })

    if (result?.success) {
      await router.replace(localeTo('login'))
    }
  }
</script>

<template>
  <q-page class="row justify-center text-primary q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <q-icon name="lock_reset" size="56px" class="gradient-text" />
          <h2 class="gradient-text ">{{ t('account.resetPassword.title') }}</h2>
          <p class="text-grey-5 q-mt-none q-mb-xl">
            {{ t('account.resetPassword.description') }}
          </p>
        </div>

        <template v-if="hasResetCredentials">
          <q-form ref="form" @submit="onSubmit">
            <q-input
              v-model="password"
              dark
              rounded
              outlined
              lazy-rules
              type="password"
              autocomplete="new-password"
              label-color="white"
              color="white"
              class="btn-glass auto-field q-mb-sm"
              :label="t('inputData.password')"
              :rules="[
              val => !!val || t('validation.required'),
              val => val.length >= 8 || t('validation.minLength', { min: 8 }),
            ]"
            >
              <template #prepend>
                <q-icon name="lock" color="white" />
              </template>
            </q-input>

            <q-input
              v-model="passwordConfirmation"
              dark
              rounded
              outlined
              lazy-rules
              type="password"
              autocomplete="new-password"
              label-color="white"
              color="white"
              class="btn-glass auto-field"
              :label="t('inputData.passwordConfirmation')"
              :rules="[
              val => !!val || t('validation.required'),
              val => val === password || t('validation.passwordMismatch'),
            ]"
            >
              <template #prepend>
                <q-icon name="lock" color="white" />
              </template>
            </q-input>

            <q-btn
              outline
              rounded
              unelevated
              class="btn-glass--primary"
              color="white"
              icon-right="check"
              type="submit"
              size="lg"
              :label="t('account.resetPassword.submit')"
            />
          </q-form>
        </template>

        <div v-else class="text-center">
          <q-icon name="link_off" color="negative" size="42px" />
          <p class="text-grey-4 q-mb-lg">
            {{ t('account.resetPassword.invalidLink') }}
          </p>
          <router-link class="gradient-text text-bold no-underline"
                       :to="localeTo('login')"
          >
            {{t('account.resetPassword.backToLogin')}}
          </router-link>
        </div>
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
  .q-btn {
    width: 100%;
  }
}
</style>
