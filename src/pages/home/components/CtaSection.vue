<script setup>
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  const { t } = useI18n()
  const { localeTo } = useLocaleRoute()

  const props = defineProps({
    sectionTitle: {
      type: String,
      default: '',
    },
    sectionSubtitle: {
      type: String,
      default: '',
    },
  })
</script>

<template>
  <section class="section section-cta text-white">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body">
          <div
            v-if="props.sectionTitle || props.sectionSubtitle"
            class="section__head text-center q-mb-lg q-mx-auto"
          >
            <h2 v-if="props.sectionTitle" class="section__title q-mb-md">
              {{ props.sectionTitle }}
            </h2>
            <p v-if="props.sectionSubtitle" class="section__subtitle">
              {{ props.sectionSubtitle }}
            </p>
          </div>
          <div class="section__main">
            <div class="column justify-center">
              <p class="q-mb-sm">
                {{ t('pages.home.cta.banner.title') }}
              </p>
              <span class="q-mb-lg">
                {{ t('pages.home.cta.banner.subtitle') }}
              </span>
              <div>
                <q-btn :to="localeTo('download')"
                       unelevated
                       rounded
                       class="btn-start btn-download">
                  {{ t('buttons.start') }}
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    &__head {
      width: 100%;

      @media (min-width: 77.5em) {
        max-width: 60vw;
      }
    }
    &__main {
      padding: 32px 24px 48px;
      border-radius: 20px;
      background: #1A585A;
      text-align: center;

      p {
        font-size: 20px;
        color: #E4CD71;
      }

      span {
        font-size: 18px;
      }
    }
  }
</style>
