<script setup>
  import { format } from 'date-fns'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useAuthStore } from 'stores/auth-store.js'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  const { t } = useI18n()

  const authStore = useAuthStore()
  const { getUserData, updateUserDataRequest } = authStore
  const { user } = storeToRefs(authStore)
  const readonly = ref(true)
  const password = ref('')
  const passwordConfirmation = ref('')
  const form = ref(null)

  getUserData()

  const created_at = computed(() => format(new Date(user.value.created_at), 'yyyy-MM-dd HH:mm'))
  const updated_at = computed(() => format(new Date(user.value.updated_at), 'yyyy-MM-dd HH:mm'))
  const toggleReadonly = () => {
    if (!readonly.value) {
      getUserData()
      password.value = ''
      passwordConfirmation.value = ''
    }
    readonly.value = !readonly.value
  }
  const onSubmit = async () => {
    const success = await form.value.validate()
    if (success) {
      await updateUserDataRequest({
        first_name: user.value.first_name,
        last_name: user.value.first_name,
        email: user.value.email,
        password: password.value ?? null,
        password_confirmation: passwordConfirmation.value ?? null,
      })
        .then(() => toggleReadonly())
    }
  }
</script>

<template>
  <q-page class="row justify-center text-primary q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <h4 class="text-primary gradient-text text-center q-mb-lg q-pb-lg">
        {{ t('account.profile.title') }}
      </h4>

      <q-form @submit="onSubmit" ref="form" class="q-pb-xl">
        <q-input
          dense
          dark
          outlined
          :readonly="readonly"
          v-model="user.first_name"
          :label="t('inputData.first_name')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
          :rules="[(val) => !!val || t('validation.required')]"
        >
          <template v-slot:prepend>
            <q-icon name="person" color="white" />
          </template>
        </q-input>

        <q-input
          dense
          outlined
          dark
          :readonly="readonly"
          v-model="user.last_name"
          :label="t('inputData.last_name')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
          :rules="[(val) => !!val || t('validation.required')]"
        >
          <template v-slot:prepend>
            <q-icon name="person" color="white" />
          </template>
        </q-input>

        <q-input
          dense
          outlined
          dark
          v-model="user.email"
          :readonly="readonly"
          :label="t('inputData.email')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
          type="email"
          :rules="[
              (val) => !!val || t('validation.required'),
              (val) => /.+@.+\..+/.test(val) || t('validation.not_valid'),
            ]"
        >
          <template v-slot:prepend>
            <q-icon name="mail" color="white" />
          </template>
        </q-input>

        <q-input
          v-if="readonly"
          dense
          outlined
          dark
          :model-value="created_at"
          :readonly="true"
          :label="t('account.profile.created_at')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
        ></q-input>

        <q-input
          dense
          v-if="readonly"
          outlined
          dark
          :model-value="updated_at"
          :readonly="true"
          :label="t('account.profile.updated_at')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
        ></q-input>

        <q-input
          v-if="!readonly"
          dense
          outlined
          dark
          v-model="password"
          :label="t('inputData.password')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
          type="password"
          autocomplete="new-password"
          :rules="[(val) => !val || val.length >= 8 || t('validation.min_length', { min: 8 })]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="white" />
          </template>
        </q-input>

        <!-- Password Confirmation -->
        <q-input
          v-if="!readonly && password"
          dense
          outlined
          dark
          v-model="passwordConfirmation"
          :label="t('inputData.password_confirmation')"
          label-color="white"
          color="white"
          bg-color="rgba(255, 255, 255, 0.1)"
          class="auto-field q-ma-none q-mb-md"
          type="password"
          autocomplete="new-password"
          :rules="[
              (val) => !password || !!val || t('validation.required'),
              (val) => !password || val === password || t('validation.password_mismatch'),
            ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock" color="white" />
          </template>
        </q-input>

        <div class="row justify-center q-mt-lg" :class="readonly ? 'justify-center' : 'justify-between'">
          <q-btn
            outline
            rounded
            unelevated
            @click="toggleReadonly"
            class="btn-glass"
            color="white"
            :icon-right="readonly ? 'edit' : 'close'"
            size="md"
            :label="readonly ? t('buttons.edit') : t('buttons.cancel')"
          />

          <q-btn
            v-if="!readonly"
            outline
            rounded
            unelevated
            class="btn-glass--primary"
            color="white"
            icon-right="save"
            type="submit"
            size="md"
            :label="t('buttons.save')"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style scoped>
  .q-form {
    min-width: 300px;

    @media (min-width: 48em) {
      min-width: 414px;
    }
  }
</style>
