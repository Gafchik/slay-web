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
            <p>This Privacy Policy explains how SLAY (“we”, “our”, or “us”) collects, uses, and protects your personal data when you use our website and desktop applications (Windows, macOS, Linux) (the “Service”).</p>
            <p>By using the Service, you agree to the terms of this Privacy Policy.</p>
            <p>SLAY is an independent software service operated by its owner.</p>

            <h3>2. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <p>Account Information</p>
            <ul>
              <li>First name;</li>
              <li>Last name;</li>
              <li>Email address.</li>
            </ul>
            <p>Authentication Data</p>
            <ul>
              <li>login data via third-party providers (such as Google).</li>
            </ul>
            <p>User Data</p>
            <ul>
              <li>data necessary to provide the functionality of the Service.</li>
            </ul>
            <p>Sensitive Data</p>
            <p>Depending on your use of the Service, you may store:</p>
            <ul>
              <li>passwords;</li>
              <li>access credentials;</li>
              <li>tokens or similar sensitive data.</li>
            </ul>
            <p>SSH private keys are not stored on our servers.</p>
            <p>The Service may store only references (such as local file paths) to keys located on your device.</p>
            <p>We do not intentionally collect IP addresses or device tracking data.</p>

            <h3>3. How We Use Information</h3>
            <p>We use your information to:</p>
            <ul>
              <li>provide, operate, and maintain the Service;</li>
              <li>authenticate users;</li>
              <li>manage subscriptions and payments;</li>
              <li>improve performance and usability;</li>
              <li>ensure security and prevent abuse.</li>
            </ul>

            <h3>4. Sensitive Data and Security</h3>
            <p>Sensitive data stored in the Service is protected using industry-standard encryption.</p>
            <ul>
              <li>data is encrypted before storage;</li>
              <li>encryption is based on user-controlled credentials (e.g., a master password);</li>
              <li>we do not have access to your decrypted sensitive data.</li>
            </ul>
            <p>You acknowledge that no method of transmission or storage is completely secure.</p>

            <h3>5. User Responsibility</h3>
            <p>You are responsible for:</p>
            <ul>
              <li>securing your device and environment;</li>
              <li>protecting your account credentials;</li>
              <li>safeguarding your master password.</li>
            </ul>
            <p>Loss of your master password may result in permanent loss of access to encrypted data.</p>

            <h3>6. Data Sharing</h3>
            <p>We do not sell your personal data.</p>
            <p>We may share limited data with trusted third parties, including:</p>
            <ul>
              <li> <a href="https://www.paddle.com/" target="_blank">Paddle</a> for payment processing;</li>
              <li>authentication providers (such as Google);</li>
              <li>hosting and infrastructure providers.</li>
            </ul>
            <p>We may introduce analytics services in the future to improve the Service.</p>
            <p>If we do so, this Privacy Policy will be updated accordingly.</p>
            <p>We only share data to the extent necessary to provide the Service.</p>

            <h3>7. Legal Basis for Processing</h3>
            <p>Where applicable, we process personal data under the following legal bases:</p>
            <ul>
              <li>performance of a contract;</li>
              <li>legitimate interests;</li>
              <li>compliance with legal obligations;</li>
              <li>user consent (where required).</li>
            </ul>

            <h3>8. Data Retention</h3>
            <p>We retain personal data only for as long as necessary to:</p>
            <ul>
              <li>provide the Service;</li>
              <li>comply with legal obligations;</li>
              <li>resolve disputes.</li>
            </ul>

            <h3>9. Your Rights</h3>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>request access to your personal data;</li>
              <li>request correction of inaccurate data;</li>
              <li>request deletion of your data;</li>
              <li>request information about how your data is processed;</li>
            </ul>
            <p>To exercise your rights, please contact us at: <a href="mailto:info@slay-app.dev">info@slay-app.dev</a></p>
            <p>Due to the nature of encryption used in the Service:</p>
            <ul>
              <li>we may not be able to provide decrypted versions of sensitive data;</li>
              <li>certain data stored locally on your device (such as SSH keys) is not accessible to us.</li>
            </ul>
            <p>We will respond within a reasonable timeframe.</p>

            <h3>10. Cookies and Analytics</h3>
            <p>We currently do not use tracking cookies or analytics tools.</p>
            <p>We may introduce such tools in the future to improve the Service.</p>
            <p>If we do, this Privacy Policy will be updated.</p>

            <h3>11. Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect personal data.</p>
            <p>However, no system can be guaranteed to be completely secure.</p>

            <h3>12. Governing Law</h3>
            <p>This Privacy Policy is governed by the laws of Ukraine.</p>

            <h3>13. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time.</p>
            <p>Continued use of the Service constitutes acceptance of the updated Policy.</p>

            <h3>13. Contact</h3>
            <p>If you have any questions regarding this Privacy Policy, please contact us at: <a href="mailto:info@slay-app.dev">info@slay-app.dev</a></p>
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
