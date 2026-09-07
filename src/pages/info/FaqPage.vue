<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Fuse from 'fuse.js'
import { useLocaleRoute } from 'src/composables/useLocaleRoute'
import { useAssistantStore } from 'src/stores/assistant-store'

const { t, tm } = useI18n()
const { localeTo } = useLocaleRoute()
const assistantStore = useAssistantStore()

const searchQuery = ref('')

const categories = computed(() => tm('faq.categories') || [])

const flatItems = computed(() => {
  const list = []

  categories.value.forEach((category, ci) => {
    (category.items || []).forEach((item, ii) => {
      list.push({ id: `${ci}-${ii}`, q: item.q, a: item.a })
    })
  })

  return list
})

const fuse = computed(() => new Fuse(flatItems.value, {
  keys: ['q', 'a'],
  threshold: 0.35,
  ignoreLocation: true,
}))

const filteredCategories = computed(() => {
  const query = searchQuery.value.trim()
  if (!query) return categories.value

  const matchedIds = new Set(fuse.value.search(query).map((result) => result.item.id))

  return categories.value
    .map((category, ci) => ({
      ...category,
      items: (category.items || []).filter((_, ii) => matchedIds.has(`${ci}-${ii}`)),
    }))
    .filter((category) => category.items.length > 0)
})
</script>

<template>
  <q-page class="faq-page text-white">
    <div class="column q-pt-xl">
      <section class="faq-hero">
        <div class="container">
          <div class="container-fluid">
            <span class="ai-badge">
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.5L11.6 7.4L17.5 9L11.6 10.6L10 16.5L8.4 10.6L2.5 9L8.4 7.4L10 1.5Z" fill="#E4CD71"/>
              </svg>
              {{ t('faq.aiBadge') }}
            </span>

            <h1 class="gradient-text">{{ t('faq.title') }}</h1>
            <p class="q-mb-lg">{{ t('faq.subtitle') }}</p>

            <div class="flex justify-center q-mb-lg q-py-xs">
              <span class="divider">{{ t('faq.browseByTopic') }}</span>
            </div>

            <div class="faq-search-wrap">
              <q-input
                dark
                rounded
                outlined
                hide-bottom-space
                v-model="searchQuery"
                class="btn-glass faq-search"
                :placeholder="t('faq.searchPlaceholder')"
              >
                <template v-slot:prepend>
                  <q-icon name="search" color="white" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-content">
        <div class="container">
          <div class="container-fluid">
            <div v-if="filteredCategories.length === 0" class="faq-no-results">
              {{ t('faq.noResults', { query: searchQuery }) }}
            </div>

            <div class="faq-grid">
              <div v-for="(category, ci) in filteredCategories" :key="category.label" class="faq-category">
                <span class="note q-mb-lg">{{ category.label }}</span>

                <q-list class="faq-items">
                  <q-expansion-item
                    v-for="(item, ii) in category.items"
                    :key="item.q"
                    group="faq-accordion"
                    :default-opened="ci === 0 && ii === 0"
                    header-class="faq-item-header"
                    expand-icon-class="faq-item-icon"
                    class="faq-item"
                  >
                    <template v-slot:header>
                      <q-item-section class="faq-item-question">{{ item.q }}</q-item-section>
                    </template>
                    <div class="faq-item-answer">{{ item.a }}</div>
                  </q-expansion-item>
                </q-list>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-cta">
        <div class="container">
          <div class="container-fluid">
            <div class="glass">
              <span class="note">{{ t('faq.ctaEyebrow') }}</span>
              <h2>{{ t('faq.ctaTitle') }}</h2>
              <p>{{ t('faq.ctaSubtitle') }}</p>
              <div class="faq-cta-actions">
                <q-btn unelevated rounded class="btn-gold" :label="t('faq.askAi')" icon="chat" @click="assistantStore.open()" />
                <q-btn unelevated rounded class="btn-glass--primary" :to="localeTo('contacts')" :label="t('routes.contacts')" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<style scoped lang="scss">
.faq-page {
  padding: 60px 0;

  @media (min-width: 77.5em) {
    padding: 74px 0;
  }
}

.faq-hero {
  text-align: center;
  padding-bottom: 8px;

  h1 {
    margin: 18px 0 16px;
    font-size: 48px;
  }

  > p {
    margin: 0 auto;
    max-width: 620px;
    font-size: 18px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.72);
  }
}

.ai-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px 7px 12px;
  border-radius: 999px;
  background: rgba(228, 205, 113, 0.12);
  border: 1px solid rgba(228, 205, 113, 0.4);
  color: #E4CD71;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
}

.faq-search-wrap {
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
}

.faq-search {
  width: 100%;
  max-width: 560px;
}

.faq-no-results {
  text-align: center;
  padding: 48px 0;
  color: rgba(255, 255, 255, 0.5);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 56px 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: transparent;
}

.faq-item {
  position: relative;
  border-radius: 16px;
  background: #00333C;
  box-shadow: 3px 6px 18px rgba(0, 0, 0, 0.35);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(to bottom, #E4CD71, rgba(228, 205, 113, 0) 60%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  :deep(.faq-item-header) {
    padding: 18px 24px;
  }

  :deep(.faq-item-icon) {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover :deep(.faq-item-question) {
    color: #E4CD71;
  }
}

.faq-item-question {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  line-height: 140%;
  padding: 0;
}

.faq-item-answer {
  padding: 20px 24px;
  font-size: 15px;
  line-height: 156%;
  color: rgba(255, 255, 255, 0.68);
  white-space: pre-line;
}

.faq-cta {
  margin-top: 96px;
  text-align: center;
  border-radius: 24px;

  h2 {
    margin: 16px 0 12px;
  }

  p {
    margin: 0 auto 28px;
    max-width: 480px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.68);
  }

  .glass {
    padding: 64px 40px;
  }
}

.faq-cta-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
