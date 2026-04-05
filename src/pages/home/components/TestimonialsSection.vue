<script setup>
import { computed  } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale, messages } = useI18n()

const testimonials = computed(() => {
  return messages.value[locale.value]?.sections?.reviews?.list ?? []
})
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section__body">
        <div class="section__main">
          <div class="section__title text-center">
            <h2>{{t('sections.reviews.title')}}</h2>
          </div>

          <div class="testimonials-grid">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card glass">

              <div class="testimonial-content">
                <q-icon name="mdi-format-quote-open" class="quote-icon" />
                <p>"{{ testimonial.text }}"</p>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">
                  <q-icon :name="testimonial.avatar" />
                </div>
                <div class="author-info">
                  <strong>{{ testimonial.author }}</strong>
                  <span>{{ testimonial.role }}</span>
                  <div class="feature-tag">{{ testimonial.feature }}</div>
                </div>
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
    &__title {
      h2 {
        margin: 0;
      }
    }
  }

  .testimonials-grid { display: flex; flex-direction: column; gap: 24px; }
  .testimonial-card { padding: 28px 20px; border-radius: 16px; display: flex; flex-direction: column; justify-content: space-between; }
  .testimonial-content { position: relative; margin-bottom: 20px; }
  .quote-icon { position: absolute; top: -8px; left: -8px; font-size: 2rem; color: rgba(0, 225, 255, 0.3); }
  .testimonial-content p { font-size: 1rem; line-height: 1.5; color: rgba(255, 255, 255, 0.9); position: relative; z-index: 2; }
  .testimonial-author { display: flex; align-items: center; gap: 12px; }
  .author-avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(0, 225, 255, 0.2); display: flex; align-items: center; justify-content: center; }
  .author-avatar .q-icon { font-size: 1.25rem; }
  .author-info { display: flex; flex-direction: column; }
  .author-info strong { font-size: 1rem; }
  .author-info span { color: rgba(255, 255, 255, 0.7); font-size: 0.8rem; }
  .feature-tag { background: rgba(0, 225, 255, 0.2); color: #00e1ff; padding: 2px 6px; border-radius: 8px; font-size: 0.7rem; margin-top: 2px; display: inline-block; }

  @media (min-width: 768px) {
    .testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  }

  @media (min-width: 1024px) {
    .testimonials-grid { grid-template-columns: repeat(3, 1fr); }
  }
</style>

