<script setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'

  const { t, tm } = useI18n()
  const { localeTo } = useLocaleRoute()

  const listWorkspace = computed(() => {
    return tm('pages.home.workspace.society.list')
  })
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body q-pb-xl q-mb-xl">
          <div class="section__head q-mb-xl">
            <span class="note q-mb-lg">
              {{ t('pages.home.workspace.note') }}
            </span>
            <h2 class="q-mb-md">
              {{ t('pages.home.workspace.title') }}
            </h2>
            <p class="q-mb-md">
              {{ t('pages.home.workspace.description') }}
            </p>
          </div>
          <div class="section__main">
            <span class="q-list--title q-mb-sm">
              {{ t('pages.home.workspace.society.title') }}
            </span>
            <q-list class="q-mb-md">
              <q-item v-for="(item, index) in listWorkspace" :key="index">
                <div class="q-item__body">
                  <q-item-section class="q-mb-xs">
                    <q-item-label>{{ item.title }}</q-item-label>
                    <q-item-label caption>{{ item.description }}</q-item-label>
                  </q-item-section>
                </div>
              </q-item>
            </q-list>
            <q-btn :to="localeTo('download')"
                   unelevated
                   rounded
                   class="btn-download btn-gold">
              Try it Now
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    &__body {
      width: 100%;

      @media (min-width: 37.5em) {
      }

      @media (min-width: 77.5em) {
        max-width: 45%;
        padding-right: 60px;
      }

      @media (min-width: 158.75em) {
      }
    }

    .q-list {
      &--title {
        color: rgba(255, 255, 255, 0.86);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .q-item {
        position: relative;
        padding: 0 0 0 24px;

        &:before {
          content: '•';
          position: relative;
          left: -12px;
          font-size: 20px;
          color: #E4CD71;
        }

        &__label {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: #E4CD71;

          & + .q-item__label {
            font-size: 18px;
            color: #FFF;
          }
        }
      }
    }

    .q-btn {
      text-transform: capitalize;
    }
  }
</style>
