<script setup>
  import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'
  import { gsap } from 'gsap'
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'

  import AppVideoDialog from 'pages/components/video/AppVideoDialog.vue'
  import AppVideoPreview from 'pages/components/video/AppVideoPreview.vue'
  import CtaSection from 'pages/home/components/CtaSection.vue'

  import Video1 from 'assets/video/projects/Projects-full.mp4'
  import Video2 from 'assets/video/projects/Projects-full.webm'

  import Step1 from 'assets/images/features/projects/Step-1.jpg'
  import Step2 from 'assets/images/features/projects/Step-2.jpg'
  import Step3 from 'assets/images/features/projects/Step-3.jpg'
  import Step4 from 'assets/images/features/projects/Step-4.jpg'

  import Icon1 from 'assets/images/features/projects/Icon-1.png'
  import Icon2 from 'assets/images/features/projects/Icon-2.png'
  import Icon3 from 'assets/images/features/projects/Icon-3.png'
  import Icon4 from 'assets/images/features/projects/Icon-4.png'

  const { locale, t, tm } = useI18n()
  const { localeTo } = useLocaleRoute()
  const sectionHomeRef = ref(null)

  let animationMedia
  let animationFrameId
  let animationGeneration = 0

  const stepImages = [Step1, Step2, Step3, Step4]
  const stepIcons = [Icon1, Icon2, Icon3, Icon4]
  const nextStepOpacity = 1
  const nextStepGap = 32
  const nextStepVisibleRatio = 0.5

  const sectionInfo = computed(() => {
    const steps = tm('pages.features.projectsManager.list')

    if (!Array.isArray(steps)) {
      return []
    }

    return steps.map((step, index) => ({
      id: `project-step-${index}`,
      ...step,
      image: stepImages[index],
      icon: stepIcons[index],
    }))
  })

  const createDesktopAnimation = () => {
    animationMedia = gsap.matchMedia()

    animationMedia.add('(min-width: 1240px)', () => {
      const section = sectionHomeRef.value

      if (!section) {
        return
      }

      const intro = section.querySelector('.section__intro')
      const stepsList = section.querySelector('.steps-list')
      const textItems = gsap.utils.toArray('.step-item', section)
      const imageItems = gsap.utils.toArray('.visual-item', section)
      const stepsCount = Math.min(textItems.length, imageItems.length)

      if (!intro || !stepsList || stepsCount === 0) {
        return
      }

      // Keep an unrefreshed baseline so matchMedia can restore the mobile styles.
      gsap.set(textItems, { autoAlpha: 1, y: 0, yPercent: 0 })
      gsap.set(imageItems, { autoAlpha: 0 })
      gsap.set(imageItems[0], { autoAlpha: 1 })

      if (stepsCount === 1) {
        return
      }

      const getNextStepOffset = (index) => {
        // Measure the list independently of the intro's animated height.
        const collapsedListTop = stepsList.getBoundingClientRect().top
          - section.getBoundingClientRect().top
          - intro.getBoundingClientRect().height
        const listTop = collapsedListTop + (index === 1 ? intro.scrollHeight : 0)
        const previewOffset = section.clientHeight - listTop
          - textItems[index].offsetHeight * nextStepVisibleRatio

        return Math.max(textItems[index - 1].offsetHeight + nextStepGap, previewOffset)
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.inOut',
        },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * (stepsCount - 1)}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          snap: {
            snapTo: 1 / (stepsCount - 1),
            directional: true,
            inertia: false,
            delay: 0.001,
            duration: {
              min: 0.25,
              max: 0.3,
            },
            ease: 'power3.out',
          },
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      timeline.set(textItems, {
        autoAlpha: (index) => index < 2 ? 1 : 0,
        yPercent: 0,
        y: (index) => {
          if (index === 0) {
            return 0
          }

          const previewOffset = getNextStepOffset(index)

          return index === 1
            ? previewOffset
            : previewOffset + textItems[index].offsetHeight + nextStepGap
        },
      }, 0)

      timeline.to(intro, {
        autoAlpha: 0,
        height: 0,
        duration: 0.2,
      }, 0)

      for (let index = 1; index < stepsCount; index += 1) {
        const transitionStart = index - 1

        timeline
          .to(textItems[index - 1], {
            autoAlpha: 0,
            duration: 0.2,
          }, transitionStart)
          .to(textItems[index], {
            autoAlpha: 1,
            y: 0,
            yPercent: 0,
            duration: 0.6,
            ease: 'power3.inOut',
          }, transitionStart + 0.05)
          .set(imageItems[index - 1], {
            autoAlpha: 0,
          }, transitionStart + 0.05)
          .set(imageItems[index], {
            autoAlpha: 1,
          }, transitionStart + 0.05)

        if (index + 1 < stepsCount) {
          timeline
            .to(textItems[index + 1], {
              autoAlpha: nextStepOpacity,
              duration: 0.5,
              ease: 'sine.inOut',
            }, transitionStart + 0.2)
            .to(textItems[index + 1], {
              y: () => getNextStepOffset(index + 1),
              yPercent: 0,
              duration: 0.1,
            }, transitionStart + 0.45)
        }
      }

      let scrollTween

      const handleWheel = (event) => {
        const scrollTrigger = timeline.scrollTrigger
        const currentScroll = window.scrollY
        const direction = Math.sign(event.deltaY)

        if (
          !scrollTrigger
          || Math.abs(event.deltaY) <= Math.abs(event.deltaX)
          || Math.abs(event.deltaY) < 4
          || direction === 0
          || currentScroll < scrollTrigger.start - 1
          || currentScroll > scrollTrigger.end + 1
        ) {
          return
        }

        const isFirstStep = currentScroll <= scrollTrigger.start + 1
        const isLastStep = currentScroll >= scrollTrigger.end - 1

        if ((direction < 0 && isFirstStep) || (direction > 0 && isLastStep)) {
          return
        }

        event.preventDefault()

        if (scrollTween?.isActive()) {
          return
        }

        const lastStepIndex = stepsCount - 1
        const scrollRange = scrollTrigger.end - scrollTrigger.start

        if (scrollRange <= 0) {
          return
        }

        const progress = gsap.utils.clamp(
          0,
          1,
          (currentScroll - scrollTrigger.start) / scrollRange,
        )
        const rawStepIndex = progress * lastStepIndex
        const currentStepIndex = direction > 0
          ? Math.floor(rawStepIndex + 0.001)
          : Math.ceil(rawStepIndex - 0.001)
        const targetStepIndex = gsap.utils.clamp(
          0,
          lastStepIndex,
          currentStepIndex + direction,
        )
        const targetScroll = scrollTrigger.start
          + scrollRange * (targetStepIndex / lastStepIndex)

        scrollTween = gsap.to(window, {
          scrollTo: {
            y: targetScroll,
            autoKill: false,
          },
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
          onComplete: () => {
            scrollTween = undefined
          },
          onInterrupt: () => {
            scrollTween = undefined
          },
        })
      }

      window.addEventListener('wheel', handleWheel, { passive: false })

      let refreshFrameId
      const sizeObserver = new ResizeObserver(() => {
        if (refreshFrameId !== undefined) {
          return
        }

        refreshFrameId = window.requestAnimationFrame(() => {
          refreshFrameId = undefined
          ScrollTrigger.refresh()
        })
      })

      // Images, fonts and translated text can change the preview's height.
      textItems.forEach((item) => sizeObserver.observe(item))
      Array.from(intro.children).forEach((item) => sizeObserver.observe(item))

      return () => {
        sizeObserver.disconnect()
        if (refreshFrameId !== undefined) {
          window.cancelAnimationFrame(refreshFrameId)
        }
        window.removeEventListener('wheel', handleWheel)
        scrollTween?.kill()
      }
    })
  }

  const destroyDesktopAnimation = () => {
    animationGeneration += 1

    if (animationFrameId !== undefined) {
      window.cancelAnimationFrame(animationFrameId)
      animationFrameId = undefined
    }

    animationMedia?.revert()
    animationMedia = undefined
  }

  const rebuildDesktopAnimation = async () => {
    destroyDesktopAnimation()

    const currentGeneration = animationGeneration

    await nextTick()

    if (currentGeneration !== animationGeneration || !sectionHomeRef.value) {
      return
    }

    animationFrameId = window.requestAnimationFrame(() => {
      animationFrameId = undefined

      if (currentGeneration !== animationGeneration || !sectionHomeRef.value) {
        return
      }

      createDesktopAnimation()
      ScrollTrigger.refresh()
    })
  }

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    rebuildDesktopAnimation()
  })

  watch(locale, rebuildDesktopAnimation, { flush: 'post' })

  onBeforeUnmount(() => {
    destroyDesktopAnimation()
  })
</script>

<template>
  <q-page>
    <div class="q-pb-xl q-mb-xl">
      <section ref="sectionHomeRef" class="section section-home">
        <div class="section__body">
          <div class="container">
            <div class="container-fluid">
              <div class="projects-grid">
                <div class="projects-copy">
                  <div class="section__heading">
                    <h1 class="section__title q-mb-sm">
                      {{ t('pages.features.projectsManager.title') }}
                    </h1>
                    <div class="section__intro q-mb-xl">
                      <p class="q-pb-md">
                        {{ t('pages.features.projectsManager.subtitle') }}
                      </p>
                      <p>
                        {{ t('pages.features.projectsManager.description') }}
                      </p>
                    </div>
                  </div>
                  <q-list class="steps-list">
                    <q-item
                      v-for="(step, index) in sectionInfo"
                      :key="step.id"
                      class="step-item column items-start"
                    >
                      <span class="note q-mb-lg">{{ step.title }}</span>
                      <p class="q-mb-md">{{ step.description }}</p>
                      <div v-if="step.icon" class="step-icon">
                        <img :src="step.icon" alt="">
                        <span
                          v-if="index === 0"
                          class="step-icon__highlight"
                          aria-hidden="true"
                        >
                          <span class="step-icon__highlight-line step-icon__highlight-line--top"></span>
                          <span class="step-icon__highlight-line step-icon__highlight-line--right"></span>
                          <span class="step-icon__highlight-line step-icon__highlight-line--left"></span>
                          <span class="step-icon__highlight-line step-icon__highlight-line--bottom"></span>
                        </span>
                        <span
                          v-if="index === 0"
                          class="step-icon__arrow"
                          aria-hidden="true"
                        ></span>
                      </div>
                    </q-item>
                  </q-list>
                </div>
                <div class="projects-visuals flex items-start justify-center">
                  <div class="projects-visuals-wrapper">
                    <ul class="visual-list">
                      <li
                        v-for="step in sectionInfo"
                        :key="`${step.id}-image`"
                        class="visual-item"
                      >
                        <div v-if="step.image" class="step-img">
                          <img :src="step.image" :alt="step.title">
                        </div>
                      </li>
                    </ul>
                    <q-btn :to="localeTo('download')"
                           unelevated
                           rounded
                           class="btn-start btn-download q-mb-xl">
                      {{ t('buttons.start') }}
                    </q-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-video q-pb-xl q-mb-xl">
        <div class="container">
          <div class="container-fluid">
            <div class="section__body">
              <div class="video">
                <AppVideoPreview
                  :mp4="Video1"
                  :webm="Video2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        :section-title="t('pages.features.projectsManager.cta.title')"
        :section-subtitle="t('pages.features.projectsManager.cta.description')"
      />
    </div>
  </q-page>

  <AppVideoDialog />
</template>

<style scoped lang="scss">
  .section {
    &-home {
      position: relative;
      padding: 60px 0;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom center;

      @media (min-width: 77.5em) {
        height: 100vh;
        min-height: 100vh;
        padding: 74px 0;
        overflow: hidden;
        background-image: url("../../assets/images/features/projects/Background.jpg");
      }

      @media (min-width: 158.5em) {
        padding: 87px 0;
      }

      &:after,
      &:before {
        content: '';
        position: absolute;
        left: 0;
        display: none;
        height: 139px;
        width: 100%;
        pointer-events: none;

        @media (min-width: 77.5em) {
          display: block;
        }
      }

      &:after {
        top: 0;
        background: linear-gradient(0deg, rgba(0, 62, 64, 0.00) 0%, #081426 100%);
      }

      &:before {
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 51, 60, 0.00) 0%, #011C37 100%);
      }

      .section__body,
      .container,
      .container-fluid {
        height: 100%;
        min-height: 0;
      }

      .section__body {
        position: relative;
        padding-top: 40px;

        @media (min-width: 77.5em) {
          padding-top: 74px;
        }

        &:after {
          content: '';
          position: absolute;
          z-index: -1;
          bottom: -200px;
          left: 0;
          width: 298px;
          height: 352px;
          display: none;
          background:
            linear-gradient(
                -234deg,
                rgba(1, 28, 55, 0) 0%,
                rgba(1, 28, 55, 0.92) 61.96%,
                #011c37 100%
            ),
            url("../../assets/images/features/projects/Decor-1.png")
            center / cover no-repeat;


          @media (min-width: 77.5em) {
            display: block;
          }

          @media (min-width: 100em) {
            width: 408px;
          }
        }
      }

      .section__heading {
        @media (min-width: 77.5em) {
          padding-bottom: 48px;
        }
      }
    }

    &-video {
      position: relative;
      display: flex;
      justify-content: center;

      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        right: 0;
        top: -30px;
        width: 150px;
        height: 110px;
        background:
          linear-gradient(
              234deg,
              rgba(1, 28, 55, 0) 0%,
              rgba(1, 28, 55, 0.92) 61.96%,
              #011c37 100%
          ),
          url("../../assets/images/features/projects/Decor-1.png")
          center / cover no-repeat;
        pointer-events: none;

        @media (min-width: 48em) {
          top: -50px;
          width: 300px;
          height: 220px;
        }

        @media (min-width: 77.5em) {
          top: auto;
          bottom: 100px;
          width: 408px;
          height: 352px;
        }
      }
    }

    &-cta {
      position: relative;

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -50px;
        left: 0;
        width: 125px;
        height: 96px;
        background:
          linear-gradient(
              -234deg,
              rgba(1, 28, 55, 0) 0%,
              rgba(1, 28, 55, 0.92) 61.96%,
              #011c37 100%
          ),
          url("../../assets/images/features/projects/Decor-1.png")
          center / cover no-repeat;
        pointer-events: none;

        @media (min-width: 48em) {
          width: 250px;
          height: 182px;
        }

        @media (min-width: 77.5em) {
          top: -150px;
          width: 408px;
          height: 351px;
        }
      }
    }

    &__intro {
      @media (min-width: 77.5em) {
        overflow: hidden;
      }
    }
  }

  .projects {
    &-copy {
      @media (min-width: 77.5em) {
        padding-right: 48px;
      }
    }

    &-grid {
      display: grid;
      gap: 48px;

      @media (min-width: 77.5em) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 64px;
        height: 100%;
        min-height: 0;
      }
    }

    &-visuals {
      display: none;

      @media (min-width: 77.5em) {
        display: flex;
      }

      &-wrapper {
        position: relative;
      }
    }
  }

  .visual {
    &-list {
      padding: 0;
      list-style: none;
    }

    &-item {
      &:not(:first-child) {
        @media (min-width: 77.5em) {
          visibility: hidden;
          opacity: 0;
        }
      }
    }
  }

  .steps {
    &-list {
      z-index: 1;

      @media (min-width: 77.5em) {
        align-items: start;
      }
    }
  }

  .step {
    &-icon {
      --highlight-fill-delay: 2s;
      --highlight-fill-duration: 0.3s;

      position: relative;
      display: inline-block;
      width: 100%;
      max-width: 320px;
      line-height: 0;

      @media (min-width: 48em) {
        width: auto;
        max-width: none;
      }

      &__highlight {
        position: absolute;
        inset: -8px;
        pointer-events: none;
        color: #03d5ff;
        filter: drop-shadow(0 0 5px rgba(3, 213, 255, 0.7));
        animation: fill-step-highlight var(--highlight-fill-duration) ease-in-out var(--highlight-fill-delay) forwards;

        &-line {
          position: absolute;
          display: block;
          opacity: 0;
          background: currentColor;

          &--top,
          &--bottom {
            left: 0;
            width: 100%;
            height: 2px;
            transform: scaleX(0);
            transform-origin: left center;
            animation: draw-step-highlight-horizontal 0.6s ease-in-out forwards;
          }

          &--left,
          &--right {
            top: 0;
            width: 2px;
            height: 100%;
            transform: scaleY(0);
            transform-origin: center top;
            animation: draw-step-highlight-vertical 0.6s ease-in-out forwards;
          }

          &--top {
            top: 0;
            animation-delay: 0.8s;
          }

          &--right {
            right: 0;
            animation-delay: 1.4s;
          }

          &--left {
            left: 0;
            animation-delay: 0.8s;
          }

          &--bottom {
            bottom: 0;
            animation-delay: 1.4s;
          }
        }
      }

      &__arrow {
        position: absolute;
        z-index: 2;
        top: 25%;
        left: calc(100% - 7px);
        width: 464px;
        aspect-ratio: 464 / 62;
        transform: translateY(-50%);
        pointer-events: none;
        background: url("../../assets/images/features/projects/Step-arrow.svg") center / contain no-repeat;
        clip-path: inset(0 100% 0 0);
        animation: reveal-step-arrow 1.2s linear forwards;
        animation-delay: calc(var(--highlight-fill-delay) + var(--highlight-fill-duration));
        display: none;

        @media (min-width: 77.5em) {
          display: inline-block;
        }

        @media (min-width: 100em) {
          width: 720px;
        }
      }
    }

    &-item {
      padding: 0;

      img {
        position: relative;
        z-index: 1;
        width: 100%;
        max-width: 320px;
        height: auto;

        @media (min-width: 48em) {
          width: auto;
        }
      }

      &:not(:first-child) {
        @media (min-width: 77.5em) {
          visibility: hidden;
          opacity: 0;
          transform: translateY(calc(200% + 64px));
        }

        &:nth-child(2) {
          @media (min-width: 77.5em) {
            visibility: visible;
            opacity: 1;
            transform: translateY(calc(100% + 32px));
          }
        }

        p {
          position: relative;
          padding-left: 56px;

          &:before {
            content: '\002B';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 36px;
            height: 36px;
            margin: auto;
            border: 1px solid #FFF;
            border-radius: 50%;
            background: #13534E;
            text-align: center;
            vertical-align: center;
            font-size: 23px;
            vertical-align: middle;
            color: #fff;
          }
        }
      }
    }

    &-img {
      width: 100%;

      img {
        display: block;
        height: auto;
        border-radius: 16px;
        width: 100%;

        @media (min-width: 77.5em) {
          width: 100%;
          max-height: 67vh;
          object-fit: contain;
        }
      }
    }
  }

  @keyframes reveal-step-arrow {
    from {
      clip-path: inset(0 100% 0 0);
    }

    to {
      clip-path: inset(0 0 0 0);
    }
  }

  @keyframes fill-step-highlight {
    from {
      background-color: rgba(9, 95, 165, 0);
    }

    to {
      background-color: rgba(9, 95, 165, 0.10);
    }
  }

  @keyframes draw-step-highlight-horizontal {
    from {
      opacity: 1;
      transform: scaleX(0);
    }

    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes draw-step-highlight-vertical {
    from {
      opacity: 1;
      transform: scaleY(0);
    }

    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .step-icon__arrow {
      animation: none;
      clip-path: none;
    }

    .step-icon__highlight {
      animation: none;
      background-color: rgba(9, 95, 165, 0.10);
    }

    .step-icon__highlight-line {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }

  .steps-list,
  .visual-list {
    display: grid;
    gap: 32px;

    @media (min-width: 77.5em) {
      position: relative;
    }
  }

  .step-item,
  .visual-item {
    grid-area: auto;

    @media (min-width: 77.5em) {
      grid-area: 1 / 1;
      will-change: transform, opacity;
    }
  }

  .q-btn {
    position: absolute;
    bottom: -41px;
    left: 0;
    right: 0;
    margin: auto;

    @media (min-width: 77.5em) {
      max-width: 400px;
    }
  }

  .video {
    position: relative;
    z-index: 2;
  }
</style>
