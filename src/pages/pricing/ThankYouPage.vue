<script setup>
  import { computed, ref, onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { copyToClipboard } from 'quasar'

  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'
  import { getIntlLocaleByI18n } from 'src/i18n/locales.js'

  const transactionData = ref(null)

  const { t, tm, locale } = useI18n()
  const { localeTo } = useLocaleRoute()

  const intlLocale = computed(() => {
    return getIntlLocaleByI18n(locale.value)
  })

  const subscriptionInfo = computed(() => {
    return tm('subscription.thanks.info.list') || []
  })

  const subscriptionInfoList = computed(() => {
    const data = transactionData.value;
    const info = subscriptionInfo.value;
    return [
      {
        icon: 'event_available',
        title: info[0]?.title,
        value: subscriptionPlanName.value || '—',
      },
      {
        icon: 'date_range',
        title: info[1]?.title,
        value: formatDate(nextBilledAt.value),
      },
      {
        icon: 'payments',
        title: info[2]?.title,
        value: formatPrice(data?.totals?.total, data?.currency_code),
        caption: data?.totals?.tax
          ? t('subscription.thanks.tax', {
            data: formatPrice(data?.totals?.tax, data?.currency_code),
          })
          : null,
      },
      {
        icon: 'receipt',
        title: info[3]?.title,
        value: paymentMethod.value,
      },
    ]
  })

  const customerEmail = computed(() => {
    const email = transactionData.value?.customer?.email || ''

    if (!email.includes('@')) return email

    const [name, domain] = email.split('@')

    if (name.length <= 4) return email

    return `${name.slice(0, 4)}****@${domain}`
  })

  const transactionId = computed(() => {
    return transactionData.value?.transaction_id || ''
  })

  onMounted(() => {
    transactionData.value = history.state?.transactionData
  })

  const copyTransactionId = async () => {
    if (!transactionId.value) return

    try {
      await copyToClipboard(transactionId.value)
    } catch (e) {
      console.error('Copy failed', e)
    }
  }

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
    }).format(Number(amount))
  }

  const subscriptionPlanName = computed(() => {
    const billingCycle = firstItem.value?.billing_cycle

    if (!billingCycle) {
      return '—'
    }

    const { interval, frequency } = billingCycle
    const title = t('subscription.title')

    if (interval === 'month' && frequency === 1) {
      return `${title} ${t('text.monthly')}`
    }

    if (interval === 'month' && frequency === 6) {
      return `${title} ${t('text.semiannually')}`
    }

    if (interval === 'year' && frequency === 1) {
      return `${title} ${t('text.annually')}`
    }

    return title
  })

  const firstItem = computed(() => transactionData.value?.items?.[0] || null)

  const cardType = computed(() => {
    const type = transactionData.value?.payment?.method_details?.card?.type

    return type ? type.charAt(0).toUpperCase() + type.slice(1) : null
  })

  const cardLast4 = computed(() => {
    return transactionData.value?.payment?.method_details?.card?.last4 || null
  })

  const paymentMethod = computed(() => {
    if (!cardType.value || !cardLast4.value) return '—'

    return `${cardType.value} •••• ${cardLast4.value}`
  })

  const addBillingCycle = (date, billingCycle) => {
    if (!date || !billingCycle?.interval || !billingCycle?.frequency) return null

    const result = new Date(date)
    const frequency = Number(billingCycle.frequency)

    if (Number.isNaN(result.getTime()) || Number.isNaN(frequency)) return null

    switch (billingCycle.interval) {
      case 'day':
        result.setDate(result.getDate() + frequency)
        break

      case 'week':
        result.setDate(result.getDate() + frequency * 7)
        break

      case 'month':
        result.setMonth(result.getMonth() + frequency)
        break

      case 'year':
        result.setFullYear(result.getFullYear() + frequency)
        break

      default:
        return null
    }

    return result
  }

  const nextBilledAt = computed(() => {
    const data = transactionData.value
    const item = firstItem.value

    return addBillingCycle(
      data?.completed_at || data?.created_at || new Date(),
      item?.billing_cycle
    )
  })
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <div class="flex column justify-center q-ma-auto">
      <section class="section">
        <div class="section__title text-center q-mb-xl">
          <svg class="success-svg" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <linearGradient id="cyanGradient" x1="0" y1="0" x2="220" y2="220">
                <stop offset="0%" stop-color="#00EFFF"/>
                <stop offset="100%" stop-color="#00C2FF"/>
              </linearGradient>
            </defs>

            <!-- outer pulse ring -->
            <circle
              class="pulse-ring"
              cx="110"
              cy="110"
              r="72"
              stroke="#00EFFF"
              stroke-opacity="0.18"
              stroke-width="2"
              fill="none"
            />

            <!-- sparkle dots -->
            <g class="sparkles" filter="url(#softGlow)">
              <circle cx="110" cy="24" r="2" fill="#00EFFF"/>
              <circle cx="146" cy="30" r="2" fill="#00EFFF"/>
              <circle cx="174" cy="52" r="2" fill="#00EFFF"/>
              <circle cx="190" cy="86" r="2" fill="#00EFFF"/>
              <circle cx="192" cy="122" r="2" fill="#00EFFF"/>
              <circle cx="176" cy="156" r="2" fill="#00EFFF"/>
              <circle cx="146" cy="184" r="2" fill="#00EFFF"/>
              <circle cx="110" cy="196" r="2" fill="#00EFFF"/>
              <circle cx="74" cy="184" r="2" fill="#00EFFF"/>
              <circle cx="44" cy="156" r="2" fill="#00EFFF"/>
              <circle cx="28" cy="122" r="2" fill="#00EFFF"/>
              <circle cx="30" cy="86" r="2" fill="#00EFFF"/>
              <circle cx="46" cy="52" r="2" fill="#00EFFF"/>
              <circle cx="74" cy="30" r="2" fill="#00EFFF"/>
            </g>

            <!-- main ring -->
            <circle
              class="main-ring"
              cx="110"
              cy="110"
              r="56"
              stroke="url(#cyanGradient)"
              stroke-width="8"
              fill="rgba(0,239,255,0.04)"
              filter="url(#glow)"
            />

            <!-- inner glow -->
            <circle
              cx="110"
              cy="110"
              r="42"
              fill="rgba(0,239,255,0.05)"
            />

            <!-- check -->
            <path
              class="checkmark"
              d="M87 111L103 127L136 93"
              stroke="#00F6FF"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              filter="url(#glow)"
            />
          </svg>
          <h1 class="gradient-text q-mb-sm">
            {{t('subscription.thanks.title')}}
          </h1>
          <p class=" q-mb-md">
            {{t('subscription.thanks.subtitle')}}
          </p>
          <h2 class="text-primary">
            {{t('subscription.thanks.welcome')}}
          </h2>
          <p class=" q-mb-md">
            {{t('subscription.thanks.description')}}
          </p>
        </div>
        <div class="section__main q-mb-lg">
          <div class="glass q-pa-md q-mb-md">
            <h3 class="q-mb-md">{{t('subscription.thanks.info.title')}}</h3>
            <q-list class="row">
              <q-item
                v-for="item in subscriptionInfoList"
                :key="item.title"
                class="column"
              >
                <q-item-label>
                  <q-icon color="primary" :name="item.icon" size="md" />
                </q-item-label>

                <q-item-section>
                  <p class="q-mb-xs">{{ item.title }}</p>
                  <span class="text-no-wrap">{{ item.value }}</span>
                  <small v-if="item.caption" class="q-mt-xs">{{ item.caption }}</small>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="row justify-center q-mb-md">
            <div class="col-auto q-pa-sm">
              <q-btn :to="localeTo('download')"
                     outline
                     rounded
                     unelevated
                     icon="download"
                     size="lg"
                     class="btn-glass--primary q-px-xl">
                {{t('buttons.download', {data: 'SLAY'})}}
              </q-btn>
            </div>
          </div>

          <div class="receipt-info glass q-px-xl q-py-md q-mb-lg" v-if="customerEmail || transactionId">
            <p v-if="customerEmail" :class="transactionId ? 'q-pb-sm' : ''">
              <q-icon color="primary" name="mail" size="sm" class="q-mr-sm" />
              {{ t('subscription.thanks.receipt', { data: customerEmail }) }}
            </p>

            <p v-if="transactionId" class="q-mt-sm">
              <q-icon color="primary" name="description" size="sm" class="q-mr-sm" />
              {{ t('subscription.thanks.transaction', { data: transactionId }) }}

              <q-btn
                flat
                dense
                round
                icon="content_copy"
                @click="copyTransactionId"
              >
                <q-tooltip>
                  Copy transaction ID
                </q-tooltip>
              </q-btn>
            </p>
          </div>
        </div>
        <div class="section__foot">
          <div class="terminal-card">
            <div class="terminal-line terminal-line--first">
              <span class="terminal-prompt">&gt;_</span>
              <span class="terminal-text">payment accepted.</span>
            </div>

            <div class="terminal-line terminal-line--second">
              <span class="terminal-indent"></span>
              <span class="terminal-text">access granted. enjoy building.</span>
              <span class="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
  h1 {
    font-size: 2rem;

    @media (min-width: 64em) {
      font-size: 2.5rem;
    }

    @media (min-width: 158.75em) {
      font-size: 3rem;
    }
  }

  h2 {
    margin-bottom: 8px;
    font-size: 1.25rem;

    @media (min-width: 64em) {
      font-size: 1.5rem;
    }

    @media (min-width: 158.75em) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1rem;

    @media (min-width: 64em) {
      font-size: 1.25rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 0.8rem;

    @media (min-width: 64em) {
      font-size: 1rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.25rem;
    }
  }

  .section {
    padding-top: 0;

    &__title {
      height: auto;
    }

    &__main {
      @media (min-width: 48em) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .q-btn {
    text-transform: capitalize;
  }

  .q-list {
    flex-direction: column;

    @media (min-width: 48em) {
      margin: 0 -24px;
      min-width: 768px;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: nowrap;
    }

    p {
      font-size: 0.6rem;
      opacity: 0.8;

      @media (min-width: 64em) {
        font-size: 0.8rem;
      }

      @media (min-width: 158.75em) {
        font-size: 1rem;
      }
    }

    span {
      font-size: 0.8rem;

      @media (min-width: 64em) {
        font-size: 1rem;
      }

      @media (min-width: 158.75em) {
        font-size: 1.25rem;
      }
    }

    small {
      font-size: 0.6rem;
      opacity: 0.8;

      @media (min-width: 64em) {
        font-size: 0.8rem;
      }

      @media (min-width: 158.75em) {
        font-size: 1rem;
      }
    }

    .q-item {
      flex-direction: row;
      padding: 0 0 16px;
      margin-bottom: 16px;

      @media (min-width: 48em) {
        flex-direction: column;
        flex: 25%;
        padding: 0 24px;
        margin: 0;
      }

      &__label {
        margin-right: 16px;

        @media (min-width: 48em) {
          margin-right: 0;
          margin-bottom: 8px;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(255,255,255,0.5);

        @media (min-width: 48em) {
          border-bottom: none;
          border-right: 1px solid rgba(255,255,255,0.5);
        }
      }

      &:last-child {
        padding: 0;
        margin: 0;

        @media (min-width: 48em) {
          padding: 0 24px;
        }
      }
    }
  }

  .receipt-info {
    background: rgba(1, 19, 27, 0.42);

    p {
      &:not(:last-child) {
        border-bottom: 1px dashed rgba(0, 239, 255, 0.14);
      }
    }
  }

  .success-svg .main-ring {
    stroke-dasharray: 352;
    stroke-dashoffset: 352;
    animation: draw-ring 0.8s ease-out forwards;
  }

  .success-svg .checkmark {
    stroke-dasharray: 90;
    stroke-dashoffset: 90;
    animation: draw-check 0.45s ease-out 0.55s forwards;
  }

  .success-svg .pulse-ring {
    transform-origin: center;
    animation: pulse-ring 1.8s ease-in-out infinite;
  }

  .success-svg .sparkles circle {
    opacity: 0;
    transform-box: fill-box;
    transform-origin: center;
    animation: sparkle-in 0.35s ease-out forwards,
    sparkle-pulse 1.8s ease-in-out infinite;
  }

  .success-svg .sparkles circle:nth-child(1) { animation-delay: 0.8s, 1.4s; }
  .success-svg .sparkles circle:nth-child(2) { animation-delay: 0.84s, 1.44s; }
  .success-svg .sparkles circle:nth-child(3) { animation-delay: 0.88s, 1.48s; }
  .success-svg .sparkles circle:nth-child(4) { animation-delay: 0.92s, 1.52s; }
  .success-svg .sparkles circle:nth-child(5) { animation-delay: 0.96s, 1.56s; }
  .success-svg .sparkles circle:nth-child(6) { animation-delay: 1s, 1.6s; }
  .success-svg .sparkles circle:nth-child(7) { animation-delay: 1.04s, 1.64s; }
  .success-svg .sparkles circle:nth-child(8) { animation-delay: 1.08s, 1.68s; }
  .success-svg .sparkles circle:nth-child(9) { animation-delay: 1.12s, 1.72s; }
  .success-svg .sparkles circle:nth-child(10) { animation-delay: 1.16s, 1.76s; }
  .success-svg .sparkles circle:nth-child(11) { animation-delay: 1.2s, 1.8s; }
  .success-svg .sparkles circle:nth-child(12) { animation-delay: 1.24s, 1.84s; }
  .success-svg .sparkles circle:nth-child(13) { animation-delay: 1.28s, 1.88s; }
  .success-svg .sparkles circle:nth-child(14) { animation-delay: 1.32s, 1.92s; }

  @keyframes draw-ring {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes draw-check {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes pulse-ring {
    0%, 100% {
      opacity: 0.18;
      transform: scale(1);
    }

    50% {
      opacity: 0.35;
      transform: scale(1.04);
    }
  }

  @keyframes sparkle-in {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes sparkle-pulse {
    0%, 100% {
      opacity: 0.45;
      transform: scale(0.9);
    }

    50% {
      opacity: 1;
      transform: scale(1.25);
    }
  }

  .terminal {
    &-card {
      width: 100%;
      max-width: 596px;
      margin: 0 auto;
      padding: 18px 22px;
      border: 1px solid rgba(0, 239, 255, 0.16);
      border-radius: 8px;
      background:
        linear-gradient(180deg, rgba(0, 239, 255, 0.05), rgba(0, 239, 255, 0.015)),
        rgba(1, 19, 27, 0.72);
      box-shadow:
        inset 0 0 24px rgba(0, 239, 255, 0.04),
        0 0 24px rgba(0, 239, 255, 0.08);
      overflow: hidden;
    }

    &-line {
      display: flex;
      align-items: center;
      min-height: 20px;
      font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
      font-size: 13px;
      line-height: 1.45;
      color: #3dff8f;
      text-shadow: 0 0 8px rgba(61, 255, 143, 0.45);
      white-space: nowrap;
    }

    &-prompt {
      flex: 0 0 auto;
      margin-right: 10px;
      color: #d8faff;
      opacity: 0.9;
    }

    &-indent {
      flex: 0 0 25px;
    }

    &-text {
      display: inline-block;
      width: 0;
      overflow: hidden;
      white-space: nowrap;
    }

    &-cursor {
      display: inline-block;
      width: 7px;
      height: 14px;
      margin-left: 6px;
      background: #3dff8f;
      box-shadow: 0 0 10px rgba(61, 255, 143, 0.8);
      opacity: 0;
      animation:
        cursor-show 0s 1.45s forwards,
        cursor-blink 0.8s steps(1) 1.45s infinite;
    }

    &-line {
      &--first {
        .terminal-text {
          animation: typing-first 1.1s steps(17) 0.25s forwards;
        }
      }

      &--second {
        .terminal-text {
          animation: typing-second 1.8s steps(31) 1.45s forwards;
        }
      }
    }
  }

  @keyframes typing-first {
    from {
      width: 0;
    }

    to {
      width: 17ch;
    }
  }

  @keyframes typing-second {
    from {
      width: 0;
    }

    to {
      width: 31ch;
    }
  }

  @keyframes cursor-show {
    to {
      opacity: 1;
    }
  }

  @keyframes cursor-blink {
    0%, 49% {
      opacity: 1;
    }

    50%, 100% {
      opacity: 0;
    }
  }
</style>
