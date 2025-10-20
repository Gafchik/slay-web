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
  <q-page class="row justify-center">
    <div class="responsive-width">
      <div class="text-primary">
        <h4 class="text-primary text-center q-mb-lg q-pb-lg">
          {{ t('profile.title') }}
        </h4>

        <q-form @submit="onSubmit" class="q-gutter-md" ref="form">
          <q-input
            dense
            outlined
            :readonly="readonly"
            v-model="user.first_name"
            :label="t('profile.first_name')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
            :rules="[(val) => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="black" />
            </template>
          </q-input>

          <!-- Last Name -->
          <q-input
            dense
            outlined
            :readonly="readonly"
            v-model="user.last_name"
            :label="t('profile.last_name')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
            :rules="[(val) => !!val || t('validation.required')]"
          >
            <template v-slot:prepend>
              <q-icon name="person" color="black" />
            </template>
          </q-input>

          <!-- Email -->
          <q-input
            dense
            outlined
            v-model="user.email"
            :readonly="readonly"
            :label="t('profile.email')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
            type="email"
            :rules="[
              (val) => !!val || t('validation.required'),
              (val) => /.+@.+\..+/.test(val) || t('validation.not_valid'),
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="black" />
            </template>
          </q-input>

          <q-input
            v-if="readonly"
            dense
            outlined
            :model-value="created_at"
            :readonly="true"
            :label="t('profile.created_at')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
          ></q-input>

          <q-input
            dense
            v-if="readonly"
            outlined
            :model-value="updated_at"
            :readonly="true"
            :label="t('profile.updated_at')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
          ></q-input>

          <q-input
            v-if="!readonly"
            dense
            outlined
            v-model="password"
            :label="t('profile.password')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
            type="password"
            autocomplete="new-password"
            :rules="[(val) => !val || val.length >= 8 || t('validation.min_length', { min: 8 })]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="black" />
            </template>
          </q-input>

          <!-- Password Confirmation -->
          <q-input
            v-if="!readonly && password"
            dense
            outlined
            v-model="passwordConfirmation"
            :label="t('profile.password_confirmation')"
            label-color="black"
            color="black"
            bg-color="rgba(255, 255, 255, 0.1)"
            class="auto-field"
            type="password"
            autocomplete="new-password"
            :rules="[
              (val) => !password || !!val || t('validation.required'),
              (val) => !password || val === password || t('validation.password_mismatch'),
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="black" />
            </template>
          </q-input>

          <div class="row justify-center q-mt-lg">
            <q-btn
              v-if="!readonly"
              unelevated
              type="submit"
              text-color="black"
              icon-right="save"
              class="glass q-mx-sm"
              size="md"
            />

            <q-btn
              @click="toggleReadonly"
              unelevated
              text-color="black"
              :icon-right="readonly ? 'edit' : 'close'"
              class="glass q-mx-sm"
              size="md"
            />
          </div>
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<style scoped></style>
