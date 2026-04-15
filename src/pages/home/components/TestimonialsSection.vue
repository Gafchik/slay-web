<script setup>
import { computed, ref  } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale, messages } = useI18n()

const slide = ref(1);

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

          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            navigation
            animated
            infinite
            class="transparent q-px-lg"
          >
            <q-carousel-slide v-for="(testimonial, index) in testimonials"
                              :name="index" :key="index">
              <div class="liquid-glass">
                <span class="author q-mb-sm">{{ testimonial.author }}</span>
                <span class="role q-mb-lg">{{ testimonial.role }}</span>
                <span class="feature q-pa-sm q-mb-lg">{{ testimonial.feature }}</span>
                <p class="description">"{{ testimonial.text }}"</p>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="1" class="column no-wrap">
              <div
                class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/mountains.jpg"
                />
                <q-img
                  class="rounded-borders col-6 full-height"
                  src="https://cdn.quasar.dev/img/parallax1.jpg"
                />
              </div>
            </q-carousel-slide>
          </q-carousel>
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

  .q-carousel {
    height: 480px;
    mask-image: linear-gradient(
        to right,
        transparent 0%,
        black 5%,
        black 95%,
        transparent 100%
    );

    @media (min-width: 37.5em) {
      height: 325px;
    }

    @media (min-width: 158.75em) {
      height: 350px;
    }

    :deep(.q-carousel__slide) {
      cursor: grab;

      &:active {
        cursor: grabbing;
      }
    }
  }

  .liquid-glass {
    border-radius: 20px;
    height: calc(100% - 56px);
    user-select: none;
    padding: 16px;

    @media (min-width: 158.75em) {
      padding: 24px;
    }
  }

  .author {
    display: block;
    font-size: 1rem;
    line-height: 110%;

    @media (min-width: 77.5em) {
      font-size: 1.25rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.5rem;
    }
  }

  .role {
    display: block;
    font-size: 0.8rem;
    line-height: 100%;
    opacity: 0.7;

    @media (min-width: 77.5em) {
      font-size: 1rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.25rem;
    }
  }

  .feature {
    display: inline-block;
    background: rgba(0, 225, 255, 0.2);
    color: #00e1ff;
    border-radius: 8px;
    font-size: 0.8rem;
    line-height: 100%;

    @media (min-width: 77.5em) {
      font-size: 1rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.25rem;
    }
  }

  .description {
    font-size: 1rem;
    line-height: 120%;

    @media (min-width: 77.5em) {
      font-size: 1.25rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.5rem;
    }
  }
</style>

