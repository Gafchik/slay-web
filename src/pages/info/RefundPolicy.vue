<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <section class="section">
      <div class="container">
        <div class="section__body">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text ">{{t('routes.refundPolicy')}}</h2>
          </div>

          <div class="section__main">
            <small>Last updated: May 1, 2026</small>

            <h3>1. Introduction</h3>
            <p>This Refund Policy explains the conditions under which refunds may be requested for subscriptions to SLAY (the “Service”), including its website and desktop applications (Windows, macOS, and Linux).</p>
            <p>By purchasing a subscription to the Service, you agree to this Refund Policy.</p>
            <p>SLAY is an independent software service operated by its owner.</p>

            <h3>2. Free Trial</h3>
            <p>SLAY may provide a free trial period for new users.</p>
            <p>The free trial begins upon account registration and allows temporary access to the Service without payment.</p>
            <p>A payment method is not required to begin the free trial.</p>
            <p>After the free trial period ends, continued access to the Service requires an active paid subscription.</p>

            <h3>3. Subscription Billing</h3>
            <p>Paid subscriptions are billed in advance on a recurring basis according to the selected billing period.</p>
            <p>Subscriptions automatically renew unless cancelled before the next billing date.</p>
            <p>Subscription pricing, billing periods, and applicable taxes are displayed on the pricing page before purchase.</p>
            <p>Payments are processed securely by Paddle, which acts as the Merchant of Record.</p>

            <h3>4. Cancellation</h3>
            <p>You may cancel your subscription at any time through your account settings.</p>
            <p>Upon cancellation:</p>
            <ul>
              <li>your subscription will remain active until the end of the current billing period;</li>
              <li>your subscription will not renew for the next billing cycle;</li>
              <li>access to paid features will end when the billing period expires.</li>
            </ul>
            <p>Cancelling a subscription does not automatically entitle you to a refund.</p>

            <h3>5. Refund Eligibility</h3>
            <p>We may offer refunds within 14 days of the initial payment, provided that the refund request is submitted within this period.</p>
            <p>Refunds:</p>
            <ul>
              <li>apply only to the first purchase of a subscription;</li>
              <li>do not apply to subscription renewals;</li>
              <li>do not apply to partial billing periods or unused time;</li>
              <li>may be denied in cases of abuse, fraud, or violation of the Terms of Service.</li>
            </ul>

            <h3>6. Non-Refundable Situations</h3>
            <p>Refunds are generally not provided for:</p>
            <ul>
              <li>automatic subscription renewals;</li>
              <li>failure to cancel a subscription before renewal;</li>
              <li>temporary service interruptions beyond our reasonable control;</li>
              <li>issues caused by user devices, network connectivity, or third-party systems.</li>
            </ul>

            <h3>7. Data After Subscription Expiration</h3>
            <p>If your subscription expires, access to paid features may be restricted.</p>
            <p>However, your account and stored data may remain available for future restoration after purchasing a new subscription, unless the account is deleted.</p>

            <h3>8. Requesting a Refund</h3>
            <p>To request a refund, contact:</p>
            <p><a href="mailto:info@slay-app.dev">info@slay-app.dev</a></p>
            <p>Please include:</p>
            <ul>
              <li>the email address associated with your account;</li>
              <li>the approximate purchase date;</li>
              <li>a brief description of the issue.</li>
            </ul>
            <p>We will review refund requests within a reasonable timeframe.</p>

            <h3>9. Chargebacks</h3>
            <p>Initiating unjustified chargebacks or payment disputes may result in suspension or termination of access to the Service.</p>

            <h3>10. Changes to This Policy</h3>
            <p>We may update this Refund Policy from time to time.</p>
            <p>Continued use of the Service after updates constitutes acceptance of the revised Policy.</p>

            <h3>11. Contact</h3>
            <p>If you have any questions regarding this Refund Policy, please contact: <a href="mailto:info@slay-app.dev">info@slay-app.dev</a></p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.section {
  &__main {
    h3 {
      font-size: 1.25rem;
      line-height: 120%;
      padding-top: 6px;
      margin-bottom: 12px;
    }
    p {
      font-size: 1rem;
      line-height: 110%;
      margin-bottom: 6px;
    }

    ul {
      padding-left: 16px;
      list-style-type: disc;
      font-size: 1rem;
      line-height: 110%;

      li {
        margin-bottom: 6px;
      }
    }

    small {
      display: block;
      margin-bottom: 24px;
      font-size: 0.8rem;
      line-height: 100%;
    }

    a {
      font-size: 1rem;
      line-height: 110%;
      color: #03d5ff;
    }
  }
}
</style>
