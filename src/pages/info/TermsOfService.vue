<script setup>
//
</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <section class="section">
      <div class="container">
        <div class="section__body">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text ">Terms of Services</h2>
          </div>

          <div class="section__main">
            <small>Last updated: April 28, 2026</small>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing or using SLAY (the “Service”), including its website and desktop applications (Windows, macOS, Linux), you agree to be bound by these Terms.</p>
            <h3>2. Description of Service</h3>
            <p>SLAY provides tools to enhance developer workflows, including but not limited to:</p>
            <ul>
              <li>command launching;</li>
              <li>server connections (SSH);</li>
              <li>credential storage and management.</li>
            </ul>
            <p>We may update or modify the Service at any time.</p>
            <h3>3. Account Registration</h3>
            <p>You must provide accurate information and keep your credentials secure.</p>
            <p>You are fully responsible for all activity under your account.</p>
            <h3>4. Subscription and Payments</h3>
            <p>Certain features require a paid subscription.</p>
            <ul>
              <li>Billing is recurring;</li>
              <li>Prices may change with notice;</li>
              <li>Payments will be processed via third-party providers (to be specified later).</li>
            </ul>
            <p>We are not responsible for third-party payment processing errors.</p>
            <h3>5. Security and User Responsibility</h3>
            <p>SLAY allows storing sensitive data, including:</p>
            <ul>
              <li>passwords;</li>
              <li>SSH credentials;</li>
              <li>access tokens.</li>
            </ul>
            <p>You acknowledge and agree that:</p>
            <ul>
              <li>You are responsible for safeguarding your device and access;</li>
              <li>You use these features at your own risk;</li>
              <li>You must not store illegal or unauthorized data/</li>
            </ul>
            <p>We implement encryption and security measures, but we cannot guarantee absolute security.</p>
            <h3>6. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Service for illegal activities;</li>
              <li>Attempt to reverse engineer or exploit the Service;</li>
              <li>Access systems without authorization using the Service.</li>
            </ul>
            <h3>7. Intellectual Property</h3>
            <p>All rights belong to SLAY.</p>
            <p>You receive a limited license to use the Service.</p>
            <h3>8. Terminationy</h3>
            <p>We may suspend or terminate access if:</p>
            <ul>
              <li>Terms are violated;</li>
              <li>Service is abused.</li>
            </ul>
            <h3>9. Disclaimer of Warranties</h3>
            <p>The Service is provided “as is”.</p>
            <p>We do not guarantee uninterrupted or error-free operation.</p>
            <h3>10. Limitation of Liability</h3>
            <p>We are not liable for:</p>
            <ul>
              <li>data loss;</li>
              <li>unauthorized access;</li>
              <li>damages resulting from use of stored credentials or SSH connections.</li>
            </ul>
            <h3>11. Governing Law</h3>
            <p>These Terms are governed by the laws of Ukraine.</p>
            <h3>12. Changes to Terms</h3>
            <p>We may update these Terms at any time.</p>
            <h3>13. Contact</h3>
            <p><a href="mailto:info@slay-app.dev">info@slay-app.dev</a></p>
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
