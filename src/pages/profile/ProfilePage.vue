<script setup>
  import { ref, computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { format } from 'date-fns'
  import { useI18n } from 'vue-i18n'

  import { getIntlLocaleByI18n } from 'src/i18n/locales'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import { useAuthStore } from 'stores/auth-store.js'
  import { useConfirmDialogStore } from 'stores/confirm-dialog-store.js'
  import { useBillingStore } from 'stores/billing-store.js'

  import ConfirmDialog from '../../components/dialog/ConfirmDialog.vue'
  import PricingHistoryDialog from 'pages/pricing/PricingHistoryDialog.vue'

  const { t, locale } = useI18n()
  const { localeTo } = useLocaleRoute()

  const authStore = useAuthStore()
  const { getUserData, updateUserDataRequest, logoutRequest, deleteAccountRequest } = authStore
  const { user } = storeToRefs(authStore)

  const billingStore = useBillingStore()
  const {getTransactions, getSubscriptions, cancelSubscription} = billingStore
  const {subscriptions, transactions} = storeToRefs(billingStore)

  const confirmDialogStore = useConfirmDialogStore()
  const { openConfirmDialog } = confirmDialogStore

  const readonly = ref(true)
  const password = ref('')
  const passwordConfirmation = ref('')
  const form = ref(null)
  const transactionsHistoryDialog = ref(false);

  getUserData()
  getTransactions()
  getSubscriptions()

  const subscriptionBadge = computed(() => {
    const activeSubscription = subscriptions.value?.find(
      item => item.status === 'active'
    )

    if (user.value?.has_active_trial) {
      return {
        color: 'orange',
        text: t('badges.trial')
      }
    }

    if (activeSubscription) {
      return {
        color: 'primary',
        text: t('badges.active')
      }
    }

    return {
      color: 'grey',
      text: t('badges.noActive')
    }
  })

  const created_at = computed(() => format(new Date(user.value.created_at), 'yyyy-MM-dd HH:mm'))
  const updated_at = computed(() => format(new Date(user.value.updated_at), 'yyyy-MM-dd HH:mm'))

  const subscriptionInfo = computed(() => {
    const activeSubscription = subscriptions.value?.find(item => item.status === 'active')
    const allTransactions = transactions.value || []

    const lastTransaction = [...allTransactions].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    )[0]

    const titles = {
      1: t('pricing.cards.monthly.title'),
      6: t('pricing.cards.sixMonths.title'),
      12: t('pricing.cards.yearly.title'),
    }

    const subTitles = {
      1: t('pricing.cards.monthly.subtitle'),
      6: t('pricing.cards.sixMonths.subtitle'),
      12: t('pricing.cards.yearly.subtitle'),
    }

    const priceTitles = {
      1: t('text.charged', {data: t('text.monthly')}),
      6: t('text.charged', {data: t('text.semiannually')}),
      12: t('text.charged', {data: t('text.annually')}),
    }

    if (activeSubscription) {
      const activeTransaction = activeSubscription.transactions?.[0] || lastTransaction

      /* Subscription Active */
      return {
        title: titles[user.value?.billing_cycle?.frequency] || t('subscription.active.title'),
        subTitle: subTitles[user.value?.billing_cycle?.frequency] || t('subscription.active.subTitle'),
        paddleId: activeSubscription.paddle_id,
        startedDate: formatDate(activeSubscription.created_at),
        renewalDate: formatDate(user.value?.next_billed_at),
        endDate: formatDate(activeSubscription.ends_at),
        priceTitle: priceTitles[user.value?.billing_cycle?.frequency] || t('text.charged'),
        priceTotal: formatPrice(activeTransaction?.total, activeTransaction?.currency),
        invoiceNumber: activeTransaction?.invoice_number || null,
        status: activeSubscription?.on_grace_period,
      }
    }

    /* Subscription Canceled*/
    if (lastTransaction) {
      return {
        lastPaymentDate: formatDate(lastTransaction.created_at),
        priceTotal: formatPrice(lastTransaction.total, lastTransaction.currency),
        invoiceNumber: lastTransaction.invoice_number,
      }
    }

    /* Subscription Trial*/
    return {
      trialEndDate: formatDate(user.value?.trial_ends_at),
    }
  })

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

  const confirmCancelSubscription = (paddleId) => {
    if (!paddleId) return

    openConfirmDialog(
      t('subscription.cancel.title'),
      t('subscription.cancel.description'),
      () => cancelSubscription(paddleId),
      getSubscriptions
    )
  }
  const intlLocale = computed(() => {
    return getIntlLocaleByI18n(locale.value)
  })

  const formatDate = (date) => {
    if (!date) return '-'

    const parsed = new Date(date)

    if (Number.isNaN(parsed.getTime())) {
      return '—'
    }

    return new Intl.DateTimeFormat(intlLocale.value, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(parsed)
  }

  const formatPrice = (amount, currency = 'USD') => {
    if (amount === null || amount === undefined || amount === '') {
      return '—'
    }

    return new Intl.NumberFormat(intlLocale.value, {
      style: 'currency',
      currency,
    }).format(Number(amount) / 100)
  }
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <h2 class="gradient-text">{{ t('account.profile.title') }}</h2>
        </div>

        <q-form @submit="onSubmit" ref="form">
          <div class="glass q-pa-md q-mb-md">
            <h4 class="q-mb-sm text-primary text-bold">{{ t('account.profile.profileInfo') }}</h4>
            <p class="q-mb-md text-white">{{ t('account.profile.profileDescription') }}</p>
            <hr>

            <!-- First Name -->
            <div class="row items-center justify-between q-pt-sm">
              <div class="col-auto q-mr-lg">
                <q-icon name="person" color="white" class="q-mr-sm" size="lg"/>
               {{ t('inputData.firstName')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  dark
                  outlined
                  :readonly="readonly"
                  v-model="user.first_name"
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md"
                  :rules="[(val) => !!val || t('validation.required')]"
                />
              </div>
            </div>

            <!-- Last Name -->
            <div class="row items-center justify-between">
              <div class="col-auto q-mr-lg">
                <q-icon name="person" color="white" class="q-mr-sm" size="lg"/>
                {{ t('inputData.lastName')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  :readonly="readonly"
                  v-model="user.last_name"
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md"
                  :rules="[(val) => !!val || t('validation.required')]"
                />
              </div>
            </div>

            <!-- Email -->
            <div class="row items-center justify-between">
              <div class="col-auto q-mr-lg">
                <q-icon name="mail" color="white" class="q-mr-sm" size="lg"/>
                {{ t('inputData.email')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  v-model="user.email"
                  :readonly="readonly"
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md"
                  type="email"
                  :rules="[
                (val) => !!val || t('validation.required'),
                (val) => /.+@.+\..+/.test(val) || t('validation.notValid'),
              ]"
                />
              </div>
            </div>

            <!-- Password -->
            <div class="row items-center justify-between" v-if="!readonly">
              <div class="col-auto q-mr-lg">
                <q-icon name="password" color="white" class="q-mr-sm" size="lg"/>
                {{ t('inputData.password')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  v-model="password"
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md"
                  type="password"
                  autocomplete="new-password"
                  :rules="[(val) => !val || val.length >= 8 || t('validation.minLength', { min: 8 })]"
                />
              </div>
            </div>

            <!-- Password Confirm -->
            <div class="row items-center justify-between" v-if="!readonly && password">
              <div class="col-auto q-mr-lg">
                <q-icon name="password" color="white" class="q-mr-sm" size="lg"/>
                {{ t('inputData.passwordConfirmation')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  v-model="passwordConfirmation"
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
                />
              </div>
            </div>

            <!-- Created date -->
            <div class="row items-center justify-between" v-if="readonly">
              <div class="col-auto q-mr-lg">
                <q-icon name="date_range" color="white" class="q-mr-sm" size="lg"/>
                {{ t('account.profile.created_at')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  :model-value="created_at"
                  readonly
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md border-solid"
                />
              </div>
            </div>

            <!-- Created Updated -->
            <div class="row items-center justify-between" v-if="readonly">
              <div class="col-auto q-mr-lg">
                <q-icon name="date_range" color="white" class="q-mr-sm" size="lg"/>
                {{ t('account.profile.updated_at')}}
              </div>
              <div class="col">
                <q-input
                  dense
                  outlined
                  dark
                  :model-value="updated_at"
                  readonly
                  label-color="white"
                  color="white"
                  bg-color="rgba(255, 255, 255, 0.1)"
                  class="auto-field q-ma-none q-mb-md border-solid"
                />
              </div>
            </div>
          </div>

          <div class="subscription">
            <div class="glass q-pa-md q-mb-md">
              <div class="q-pr-xl">
                <h4 class="q-mb-sm text-primary text-bold">
                  {{t('subscription.title')}}
                </h4>
                <p class="q-mb-md text-white">
                  {{t('subscription.subtitle')}}
                </p>
                <q-badge  :color="subscriptionBadge.color"
                          :label="subscriptionBadge.text"></q-badge>
              </div>
              <hr>

              <!-- Trial -->
              <div class="q-pt-sm" v-if="user.has_active_trial">
                <div class="glass q-pa-md ">
                  <div class="row justify-between">
                    <div class="subscription-info">
                      <h4 class="text-orange q-mb-md text-bold">
                        {{t('subscription.trial.title')}}
                      </h4>
                      <p class="text-white q-mb-sm">
                        {{t('subscription.trial.subtitle')}}
                      </p>
                      <p class="text-white">
                        {{t('subscription.trial.description')}}
                      </p>
                    </div>
                    <div class="subscription-period">
                      <div class="flex">
                        <q-icon name="date_range" color="primary" class="q-mr-sm" size="md"/>
                        <div>
                          <p class="text-white q-mb-sm">
                            {{t('subscription.trial.endDate')}}
                          </p>
                          <p class="text-orange">
                            {{subscriptionInfo?.trialEndDate}}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="subscription-actions">
                      <div class="row">
                        <div class="flex">
                          <q-btn :to="localeTo('download')"
                                 outline
                                 rounded
                                 unelevated
                                 class="btn-glass--primary">
                            {{t('buttons.download')}}
                          </q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Active -->
              <div class="q-pt-sm" v-if="user.has_active_subscription">
                <div class="glass q-pa-md">
                  <div class="row justify-between">
                    <div class="subscription-info">
                      <h4 class="text-primary q-mb-md text-bold">
                        {{subscriptionInfo?.title}}
                      </h4>
                      <p class="text-white q-mb-sm">
                        {{subscriptionInfo?.subTitle}}
                      </p>
                      <p class="text-white">
                        {{t('subscription.active.description')}}
                      </p>
                    </div>
                    <div class="subscription-period">
                      <div class="column">
                        <div class="flex no-wrap q-mb-lg">
                          <q-icon name="date_range" color="primary" class="q-mr-sm" size="md"/>
                          <div>
                            <p class="q-mb-sm">
                              {{t('subscription.active.startDate')}}
                            </p>
                            <p class="text-no-wrap">
                              {{ subscriptionInfo?.startedDate }}
                            </p>
                          </div>
                        </div>
                        <div class="flex no-wrap q-mb-lg">
                          <q-icon name="schedule" color="primary" class="q-mr-sm" size="md"/>
                          <div>
                            <p class="q-mb-sm">
                              {{t('subscription.active.renewDate')}}
                            </p>
                            <p class="text-no-wrap">
                              {{ subscriptionInfo?.renewalDate }}
                            </p>
                          </div>
                        </div>
                        <div class="flex no-wrap">
                          <q-icon name="credit_card" color="primary" class="q-mr-sm" size="md"/>
                          <div>
                            <p class="q-mb-sm">
                              {{subscriptionInfo?.priceTitle}}
                            </p>
                            <p class="text-no-wrap">
                              {{ subscriptionInfo?.priceTotal }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="subscription-actions">
                      <div class="row">
                        <div class="flex text-no-wrap" v-if="!subscriptionInfo?.status">
                          <q-btn
                            outline
                            rounded
                            unelevated
                            class="btn-glass--orange"
                            color="orange"
                            size="md"
                            @click="confirmCancelSubscription(subscriptionInfo?.paddleId)"
                          >
                            <span>{{t('buttons.cancel', {data: 'Plan'})}}</span>
                          </q-btn>
                        </div>
                        <div class="text-no-wrap" v-if="transactions.length > 0">
                          <q-btn
                            outline
                            rounded
                            unelevated
                            class="btn-glass"
                            color="white"
                            size="md"
                            icon="history"
                            @click="transactionsHistoryDialog = !transactionsHistoryDialog"
                          >
                            {{t('subscription.history.title')}}
                          </q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Canceled -->
              <div class="q-pt-sm" v-if="!user.has_active_trial && !user.has_active_subscription">
                <div class="glass q-pa-md">
                  <div class="row justify-between">
                    <div class="subscription-info">
                      <div v-if="user.has_active_trial">
                        <h4 class="text-orange q-mb-md text-bold">
                          {{t('subscription.canceled.title')}}
                        </h4>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.trial.subtitle')}}
                        </p>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.trial.description')}}
                        </p>
                      </div>
                      <div v-if="!user.has_active_trial && transactions.length > 0">
                        <h4 class="text-orange q-mb-md text-bold">
                          {{t('subscription.canceled.title')}}
                        </h4>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.isBilling.subtitle')}}
                        </p>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.isBilling.description')}}
                        </p>
                     </div>
                      <div v-else>
                        <h4 class="text-orange q-mb-md text-bold">
                          {{t('subscription.canceled.title')}}
                        </h4>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.subtitle')}}
                        </p>
                        <p class="text-white q-mb-sm">
                          {{t('subscription.canceled.description')}}
                        </p>
                      </div>
                    </div>
                    <div class="subscription-period">
                      <div class="column">
                        <div class="flex no-wrap q-mb-lg">
                          <q-icon name="date_range" color="primary" class="q-mr-sm" size="md"/>
                          <div>
                            <p class="q-mb-sm">
                              {{t('subscription.canceled.endDate')}}
                            </p>
                            <p class="text-no-wrap">
                              {{ subscriptionInfo?.lastPaymentDate }}
                            </p>
                          </div>
                        </div>
                        <div class="flex no-wrap q-mb-lg">
                          <q-icon name="schedule" color="primary" class="q-mr-sm" size="md"/>
                          <div>
                            <p class="q-mb-sm">
                              {{t('subscription.canceled.status')}}
                            </p>
                            <p class="text-orange text-bold q-mb-sm">
                              {{t('subscription.canceled.isStatus')}}
                            </p>
                            <p>
                              {{t('subscription.canceled.statusDescription')}}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="subscription-actions">
                      <div class="row">
                        <div class="flex text-no-wrap" v-if="!subscriptionInfo?.status">
                          <q-btn :to="localeTo('pricing')"
                                 outline
                                 rounded
                                 unelevated
                                 class="btn-glass--primary"
                          >
                            {{transactions.length > 0 ? t('buttons.renew', { data: 'Plan' }) : t('buttons.choose', { data: 'Plan' })}}
                          </q-btn>
                        </div>
                        <div class="text-no-wrap" v-if="transactions.length > 0">
                          <q-btn
                            v-if="transactions.length > 0"
                            outline
                            rounded
                            unelevated
                            @click="transactionsHistoryDialog = !transactionsHistoryDialog"
                            class="btn-glass"
                            color="white"
                            icon="history"
                            size="md"
                          >
                            {{t('subscription.history.title')}}
                          </q-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        </q-form>

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
      </section>
    </div>
  </q-page>

  <confirm-dialog/>
  <PricingHistoryDialog v-model="transactionsHistoryDialog"/>
</template>

<style scoped lang="scss">
  h4 {
    font-size: 1.25rem;
  }

  hr {
    opacity: 0.5;
  }

  small {
    font-size: 0.8rem;
  }

  .section {
    padding:  0;

    @media (min-width: 77.5em) {
      min-width: 1024px;
    }

    @media (min-width: 90em) {
      min-width: 1240px;
    }

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
      opacity: 0.9;
      font-size: 1rem;
    }

    .q-field {
      &.border-solid {
        :deep {
          .q-field__control:before {
            border-style: solid;
          }
        }
      }
    }

    .col-auto {
      width: 100%;

      @media (min-width: 48em) {
        width: 25%;
        margin-bottom: 16px;
        padding-bottom: 16px;
      }
    }
  }

  .q-btn {
    :deep {
      .q-icon {
        margin-right: 12px;
      }
    }
  }

  .subscription {
    .row {
      @media (min-width: 48em) {
        justify-content: space-between;
      }

      p {
        &:first-child {
          font-size: 0.9rem;
          opacity: 0.7;
        }
      }
    }

    :deep {
      .q-btn__content {
        flex-wrap: nowrap;
      }
    }

    &-info {
      flex: 100%;
      padding-bottom: 16px;

      @media (min-width: 64em) {
        padding-right: 16px;
        padding-bottom: 0;
        flex: 45%;
      }
    }

    &-period {
      flex: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      border-top: 1px solid rgba(#FFFFFF, 0.5);
      border-bottom: 1px solid rgba(#FFFFFF, 0.5);

      @media (min-width: 64em) {
        flex: 30%;
        padding: 0 16px;
        border-top: none;
        border-bottom: none;
        border-left: 1px solid rgba(#FFFFFF, 0.5);
        border-right: 1px solid rgba(#FFFFFF, 0.5);
      }
    }

    &-actions {
      flex: 100%;
      padding-top: 16px;

      @media (min-width: 64em) {
        width: auto !important;
        flex: 25%;
        padding-left: 16px;
        padding-top: 0;
      }

      .row {
        flex-direction: column;

        @media (min-width: 48em) {
          flex-direction: row;
          justify-content: space-between;
        }

        @media (min-width: 64em) {
          justify-content: flex-end;
        }

        & > div {
          width: auto;

          &:last-child:not(:first-child) {
            margin-top: 16px;

            @media (min-width: 48em) {
              margin-top: 0;
            }

            @media (min-width: 64em) {
              margin-top: 16px;
            }
          }
        }
      }


    }
  }

  .glass {
    position: relative;

    .q-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      pointer-events: none;
      font-size: 1rem;
      border-radius: 6px;
      padding: 4px 8px;
    }
  }
</style>
