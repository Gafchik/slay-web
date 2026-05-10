<script setup>
  import { format } from 'date-fns'
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useAuthStore } from 'stores/auth-store.js'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import { useConfirmDialogStore } from 'stores/confirm-dialog-store.js'
  import ConfirmDialog from '../../components/dialog/ConfirmDialog.vue'
  import { useBillingStore } from 'stores/billing-store.js'
  const { t } = useI18n()

  const authStore = useAuthStore()
  const billingStore = useBillingStore()
  const confirmDialogStore = useConfirmDialogStore()
  const { openConfirmDialog } = confirmDialogStore
  const {getTransactions, getSubscriptions, cancelSubscription} = billingStore
  const {transactions, subscriptions} = storeToRefs(billingStore)

  getTransactions()
  getSubscriptions()

  const { getUserData, updateUserDataRequest, logoutRequest, deleteAccountRequest } = authStore
  const { user } = storeToRefs(authStore)
  const readonly = ref(true)
  const password = ref('')
  const passwordConfirmation = ref('')
  const form = ref(null)

  getUserData()

  const created_at = computed(() => format(new Date(user.value.created_at), 'yyyy-MM-dd HH:mm'))
  const updated_at = computed(() => format(new Date(user.value.updated_at), 'yyyy-MM-dd HH:mm'))
  const trial_ends_at = computed(() => format(new Date(user.value.trial_ends_at), 'yyyy-MM-dd HH:mm'))

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

  const handleLogout = async () => {
    const result = await logoutRequest()
    if (result?.success) {
      window.location.href = '/'
    }
  }

  const deleteAccount = async () => {
    openConfirmDialog(
      t('account.profile.deleteConfirm.title'),
      t('account.profile.deleteConfirm.text'),
      deleteAccountRequest,
      handleLogout
    )
  }
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <h2 class="gradient-text">{{ t('account.profile.title') }}</h2>
        </div>

        <q-form @submit="onSubmit" ref="form" class="q-pb-xl">
          <div class="glass q-pa-md q-mb-md">
            <h4 class="q-mb-sm text-primary">{{ t('account.profile.profileInfo') }}</h4>
            <p class="q-mb-lg text-white">{{ t('account.profile.profileDescription') }}</p>

            <q-input
              dense
              dark
              outlined
              :readonly="readonly"
              v-model="user.first_name"
              :label="t('inputData.firstName')"
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
              :label="t('inputData.lastName')"
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
                (val) => /.+@.+\..+/.test(val) || t('validation.notValid'),
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
              dense
              v-if="readonly"
              outlined
              dark
              :model-value="trial_ends_at"
              :readonly="true"
              :label="t('account.profile.trial_ends_at')"
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
              :rules="[(val) => !val || val.length >= 8 || t('validation.minLength', { min: 8 })]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="white" />
              </template>
            </q-input>

            <q-input
              v-if="!readonly && password"
              dense
              outlined
              dark
              v-model="passwordConfirmation"
              :label="t('inputData.passwordConfirmation')"
              label-color="white"
              color="white"
              bg-color="rgba(255, 255, 255, 0.1)"
              class="auto-field q-ma-none q-mb-md"
              type="password"
              autocomplete="new-password"
              :rules="[
                (val) => !password || !!val || t('validation.required'),
                (val) => !password || val === password || t('validation.passwordMismatch'),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="lock" color="white" />
              </template>
            </q-input>

            <q-checkbox :model-value="user.has_active_trial">has_active_trial</q-checkbox>
            <q-checkbox :model-value="user.has_active_subscription">has_active_subscription</q-checkbox>
          </div>

          <div class="glass q-pa-md q-mb-md">
            <h4 class="q-mb-sm text-primary">{{ t('account.profile.profileAction') }}</h4>
            <p class="q-mb-lg text-white">{{ t('account.profile.profileActionDescription') }}</p>

            <div class="row justify-between q-mt-lg">
              <q-btn
                outline
                rounded
                unelevated
                @click="toggleReadonly"
                class="btn-glass"
                color="white"
                :icon="readonly ? 'edit' : 'close'"
                size="md"
                :label="readonly ? t('buttons.edit') : t('buttons.cancel')"
              />

              <q-btn
                v-if="readonly"
                flat
                dense
                size="md"
                icon="logout"
                color="white"
                class="btn-link"
                @click="handleLogout"
              >
                <span>{{t('buttons.logout')}}</span>
              </q-btn>

              <q-btn
                v-else
                outline
                rounded
                unelevated
                class="btn-glass--primary"
                color="white"
                icon="save"
                type="submit"
                size="md"
                :label="t('buttons.save')"
              />
            </div>
          </div>

          <div class="glass-red q-pa-md q-mb-md">
            <h4 class="q-mb-sm text-red">{{ t('account.profile.profileRemove') }}</h4>
            <p class="q-mb-lg text-white">{{ t('account.profile.profileRemoveDescription') }}</p>
            <div class="row">
              <div class="col q-pr-md">
                <p class="text-white q-mb-sm">{{ t('account.profile.deleteAccount') }}</p>
                <p class="text-white">{{ t('account.profile.deleteAccountDescription') }}</p>
              </div>
              <div>
                <q-btn
                  outline
                  rounded
                  unelevated
                  @click="deleteAccount"
                  class="btn-glass--red"
                  color="red"
                  icon="delete"
                  size="md"
                >
                  <span>{{t('buttons.delete')}}</span>
                </q-btn>
              </div>
            </div>
          </div>

          <div class="flex justify-center q-mt-xl" v-if="!readonly">
            <q-btn
              flat
              dense
              size="md"
              icon="logout"
              color="red"
              class="btn-link"
              @click="handleLogout"
            >
              <span>{{t('buttons.logout')}}</span>
            </q-btn>
          </div>
        </q-form>
      </section>
      <section class="section">
        <div v-for="(trans, index) in transactions" :key="index">
          {{trans}}
          <br>
          <br>
        </div>
      </section>
      <br>
      <section class="section">
        <div v-for="(sub, index) in subscriptions" :key="index">
          {{sub}}
          <br>
          <br>
          <q-btn  v-if="!sub.ends_at && sub.status === 'active' "
                  @click="cancelSubscription(sub.paddle_id)">
            cancel
          </q-btn>
        </div>
      </section>
      <confirm-dialog/>
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
    min-width: 300px;

    @media (min-width: 48em) {
      min-width: 414px;
    }

    p {
      opacity: 0.7;
      font-size: 0.85rem;
    }
  }

  .q-btn {
    :deep {
      .q-icon {
        margin-right: 12px;
      }
    }
  }
</style>
