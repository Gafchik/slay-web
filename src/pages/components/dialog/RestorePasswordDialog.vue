<script setup>
  import { ref, watch, computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  import { useAuthStore } from 'stores/auth-store.js'

  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    initialEmail: {
      type: String,
      default: '',
    },
  })

  const emit = defineEmits(['update:modelValue'])

  const { t } = useI18n()

  const authStore = useAuthStore()
  const { forgotPasswordRequest } = authStore

  const form = ref(null)
  const email = ref('')

  const isOpen = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
  })

  watch(
    () => props.modelValue,
    value => {
      if (value) {
        email.value = props.initialEmail || ''
      }
    }
  )

  const onSubmit = async () => {
    if (!form.value) return

    const success = await form.value.validate()
    if (!success) return

    const result = await forgotPasswordRequest(email.value)

    if (result?.success) {
      isOpen.value = false
    }
  }
</script>

<template>
  <q-dialog v-model="isOpen" backdrop-filter="blur(4px)" persistent>
    <q-card dense class="glass text-white">
      <q-card-section class="flex justify-between no-wrap">
        <div class="q-mr-xl">
          <div class="text-h5 text-weight-bold gradient-text q-mb-md">
            {{ t('account.forgotPassword.title') }}
          </div>
          <div class="text-grey-5">
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
          class="btn-icon"
        />
      </q-card-section>

      <q-card-section>
        <q-form ref="form" @submit.prevent="onSubmit">
          <q-input
            dark
            outlined
            lazy-rules
            v-model="email"
            type="email"
            color="white"
            class="auto-field q-ma-none"
            :placeholder="t('inputData.email')"
            :rules="[
                    val => !!val || t('validation.required'),
                    val => /.+@.+\..+/.test(val) || t('validation.notValid'),
                  ]"
          >
            <template v-slot:prepend>
              <q-icon name="mail" color="white" />
            </template>
          </q-input>

          <div class="row justify-end q-mt-lg">
            <q-btn
              outline
              rounded
              unelevated
              class="btn-gold"
              icon-right="send"
              type="submit"
              size="md"
              :label="t('account.forgotPassword.submit')"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
  .q-card{
    background-color: #011C37;
    border-radius: 20px;
  }
</style>
