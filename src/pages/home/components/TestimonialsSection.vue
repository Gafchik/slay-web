<script setup>
  import { computed, ref  } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, tm } = useI18n()

  const slide = ref(1);

  const testimonials = computed(() => {
    return tm('sections.reviews.list') || []
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

          <div class="row">
            <div class="col-md-6 col-sm-8 col-xs-12 q-mx-auto">
              <q-carousel
                v-model="slide"
                transition-prev="slide-right"
                transition-next="slide-left"
                swipeable
                navigation
                arrows
                animated
                infinite
                class="transparent"
              >
                <q-carousel-slide v-for="(testimonial, index) in testimonials"
                                  :name="index" :key="index">
                  <div class="liquid-glass column items-start">
                    <span class="author q-mb-sm">{{ testimonial.author }}</span>
                    <span class="role q-mb-lg">{{ testimonial.role }}</span>
                    <span class="feature q-pa-sm q-mb-lg">{{ testimonial.feature }}</span>
                    <p class="description">"{{ testimonial.text }}"</p>
                    <span class="date q-mt-auto">{{ testimonial.date }}</span>
                  </div>
                </q-carousel-slide>
              </q-carousel>
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

  .q-carousel {
    height: 500px;

    @media (min-width: 37.5em) {
      height: 450px;
    }

    @media (min-width: 48em) {
      height: 400px;
    }

    @media (min-width: 77.5em) {
      height: 450px;
    }

    :deep {
      .q-carousel {
        &__slides {
          &-container {
            padding: 0 24px;
            mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 10%,
                black 90%,
                transparent 100%
            );

            @media (min-width: 90em) {
              padding: 0 56px;
            }

            @media (min-width: 158.75em) {
              padding: 0 70px;
            }
          }
        }

        &__slide {
          cursor: grab;

          &:active {
            cursor: grabbing;
          }
        }

        &__arrow {
          .q-icon {
            font-size: 3.5rem;
          }

          .q-focus-helper {
            display: none;
          }
        }

        &__prev-arrow--horizontal {
          top: -30px;
          left: -16px;

          @media (min-width: 90em) {
            left: 0;
          }
        }

        &__next-arrow--horizontal {
          top: -30px;
          right: -16px;

          @media (min-width: 90em) {
            right: 0;
          }
        }
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

