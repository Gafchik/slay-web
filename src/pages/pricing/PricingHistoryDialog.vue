<script setup>
  import { computed } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useI18n } from 'vue-i18n'

  import { getIntlLocaleByI18n } from 'src/i18n/locales'

  import { useBillingStore } from 'stores/billing-store.js'

  const billingStore = useBillingStore()
  const {transactions} = storeToRefs(billingStore)

  const { t, locale } = useI18n()

  const intlLocale = computed(() => {
    return getIntlLocaleByI18n(locale.value)
  })

  const formatDate = (date, withTime = true) => {
    if (!date) return '—'

    const parsed = new Date(date)

    if (Number.isNaN(parsed.getTime())) {
      return '—'
    }

    return new Intl.DateTimeFormat(intlLocale.value, {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      ...(withTime && {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }).format(parsed)
  }

  const formatMoney = (amount, currency = 'USD') => {
    if (amount === null || amount === undefined || amount === '') {
      return '—'
    }

    return new Intl.NumberFormat(intlLocale.value, {
      style: 'currency',
      currency,
    }).format(Number(amount) / 100)
  }

  const billingRows = computed(() => {
    return transactions.value.map((item) => ({
      id: item.id,
      date: formatDate(item.created_at),
      invoice: item.invoice_number,
      amount: formatMoney(item.total, item.currency),
      tax: formatMoney(item.tax, item.currency),
      status: item.status,
    }))
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'positive'
      case 'canceled':
        return 'negative'
      case 'paused':
        return 'warning'
      default:
        return 'grey'
    }
  }
</script>

<template>
  <q-dialog backdrop-filter="brightness(25%)">
    <q-card class="liquid-glass--primary">
      <q-card-section class="flex justify-between">
        <div>
          <h2 class="text-primary text-bold q-mb-sm">
            {{t('subscription.history.title')}}
          </h2>
          <p class="text-white">
            {{t('subscription.history.subTitle')}}
          </p>
        </div>

        <q-btn
          unelevated
          rounded
          icon="close"
          class="btn-icon"
          v-close-popup
        />
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="billing-table">
          <div class="billing-table__head">
            <div>{{t('subscription.history.table.date')}}</div>
            <div>{{t('subscription.history.table.invoice')}}</div>
            <div>{{t('subscription.history.table.amount')}}</div>
            <div>{{t('subscription.history.table.tax')}}</div>
            <div>{{t('subscription.history.table.status')}}</div>
          </div>

          <div
            v-for="row in billingRows"
            :key="row.id"
            class="billing-table__row"
          >
            <div>
              <div class="billing-table__main">{{ row.date }}</div>
            </div>

            <div>
              <div class="billing-table__main">
                #{{ row.invoice }}
              </div>
            </div>

            <div>
              <div class="billing-table__main">
                {{ row.amount }}
              </div>
            </div>

            <div>
              <div class="billing-table__main">
                {{ row.tax }}
              </div>
            </div>

            <div>
              <q-badge
                rounded
                :color="getStatusColor(row.status)"
                :label="row.status"
              />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="scss">
  h2 {
    font-size: 1rem;

    @media (min-width: 64em) {
      font-size: 1.5rem;
    }

    @media (min-width: 158.75em) {
      font-size: 2rem;
    }
  }

  p {
    opacity: 0.75;
    font-size: 0.8rem;

    @media (min-width: 64em) {
      font-size: 1rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.4rem;
    }
  }

  .q-dialog {
    &__backdrop {
      background: rgba(0, 0, 0, 0.8);
    }
  }

  .q-card {
    width: 920px;
    max-width: 95vw;
    border-radius: 16px;
  }

  .q-separator {
    background: rgba(255, 255, 255, 0.25);
  }

  .q-badge {
    padding: 6px 12px;
    text-transform: capitalize;
  }

  .billing-table {
    overflow: hidden;
    border-radius: 14px;
    border: 1px solid rgba(0, 240, 255, 0.2);
  }

  .billing-table__head,
  .billing-table__row {
    display: grid;
    grid-template-columns: 1.4fr 1.2fr 1fr 1fr 0.9fr;
    gap: 16px;
    align-items: center;
  }

  .billing-table__head {
    padding: 14px 18px;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 600;
    background: rgba(255, 255, 255, 0.05);
  }

  .billing-table__row {
    padding: 16px 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .billing-table__main {
    color: #fff;
    font-size: 14px;
  }
</style>
