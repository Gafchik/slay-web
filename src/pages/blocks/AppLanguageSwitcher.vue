<script setup>
import { computed } from 'vue'
import { useLanguageSwitcher } from 'src/composables/useLanguageSwitcher'

const { switchLanguage, currentLocaleKey, locales } = useLanguageSwitcher()

const currentLanguage = computed(() => currentLocaleKey())

const localeEntries = computed(() => Object.entries(locales))
</script>

<template>
  <q-btn
    flat
    dense
    rounded
    color="primary"
    class="btn-icon btn-link"
    :label="locales[currentLanguage]?.url || 'En'"
  >
    <q-menu class="menu-primary no-shadow">
      <q-list style="min-width: 160px">
        <q-item
          v-for="[key, locale] in localeEntries"
          :key="key"
          clickable
          v-close-popup
          @click="switchLanguage(key)"
        >
          <q-item-section>
            {{ locale.label }}
          </q-item-section>

          <q-item-section side v-if="key === currentLanguage">
            <q-icon name="check" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style scoped lang="scss">
  .btn-link {
    margin-left: 8px;

    @media screen and (min-width: 77.5em) {
      margin-left: 12px;
    }

    @media (min-width: 118.75em) {
      margin-left: 20px;
    }

    @media (min-width: 158.75em) {
      margin-left: 24px;
    }
  }

  .q-item {
    min-height: 24px;
  }

  .q-icon {
    color: #03d5ff;
  }
</style>
