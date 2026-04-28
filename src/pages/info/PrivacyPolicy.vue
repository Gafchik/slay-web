<script setup>

</script>

<template>
  <q-page class="row justify-center q-py-xl">
    <section class="section">
      <div class="container">
        <div class="section__body">
          <div class="section__title text-center q-mb-xl">
            <h2 class="gradient-text ">Privacy Policy</h2>
          </div>

          <div class="section__main">
            <small>Last updated: April 28, 2026</small>
            <h3>1. Introduction</h3>
            <p>This Privacy Policy explains how SLAY collects and processes personal data.</p>
            <h3>2. Data We Collect</h3>
            <p>Account Information</p>
            <ul>
              <li>First name;</li>
              <li>Last name;</li>
              <li>Email address.</li>
            </ul>
            <p>Sensitive User Data</p>
            <p>Depending on your usage, you may store:</p>
            <ul>
              <li>passwords;</li>
              <li>SSH credentials;</li>
              <li>private keys.</li>
            </ul>
            <p>This data is encrypted.</p>
            <h3>3. How We Use Data</h3>
            <p>We use your data to:</p>
            <ul>
              <li>provide and operate the Service;</li>
              <li>authenticate users;</li>
              <li>manage subscriptions;</li>
              <li>improve performance and usability.</li>
            </ul>
            <h3>4. Encryption and Security</h3>
            <p>Sensitive data (such as passwords and SSH credentials) is:</p>
            <ul>
              <li>encrypted before storage;</li>
              <li>protected using industry-standard security practices.</li>
            </ul>
            <p>However, no method of storage is 100% secure.</p>
            <h3>5. User Responsibility</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>securing your device;</li>
              <li>protecting your master password (if applicable).</li>
            </ul>
            <p>We cannot recover encrypted data if access credentials are lost.</p>
            <h3>6. Data Sharing</h3>
            <p>We do not sell your data.</p>
            <p>We may share data with:</p>
            <ul>
              <li>payment providers (once integrated);</li>
              <li>infrastructure providers.</li>
            </ul>
            <h3>7. Legal Basis</h3>
            <p>Where applicable, we process data under GDPR:</p>
            <ul>
              <li>contract performance;</li>
              <li>legitimate interest.</li>
            </ul>
            <h3>8. Data Retention</h3>
            <p>We retain data only as long as necessary to provide the Service.</p>
            <h3>9. Your Rights</h3>
            <p>You may:</p>
            <ul>
              <li>request access;</li>
              <li>request deletion;</li>
              <li>request correction.</li>
            </ul>
            <h3>10. Cookies and Analytics</h3>
            <p>We may introduce analytics tools in the future.</p>
            <h3>11. Governing Law</h3>
            <p>This Policy is governed by the laws of Ukraine.</p>
            <h3>12. Changes to Policy</h3>
            <p>We may update this Policy at any time.</p>
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
