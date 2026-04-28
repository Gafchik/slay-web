<script setup>
  import { nextTick, onBeforeUnmount, onMounted, ref, computed } from 'vue'
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { Observer } from 'gsap/Observer'
  import { useI18n } from 'vue-i18n'

  import Project1 from 'src/assets/video/projects/Projects-short.mp4'
  import Project2 from 'src/assets/video/projects/Projects-short.webm'
  import Launcher1 from 'src/assets/video/laucher/Launcher-short.mp4'
  import Launcher2 from 'src/assets/video/laucher/Launcher-short.webm'
  import Alias1 from 'src/assets/video/alias/Alias-short.mp4'
  import Alias2 from 'src/assets/video/alias/Alias-short.webm'
  import Password1 from 'src/assets/video/password/Password-full.mp4'
  import Password2 from 'src/assets/video/password/Password-full.webm'
  import Sftp1 from 'src/assets/video/sftp/Sftp-short.mp4'
  import Sftp2 from 'src/assets/video/sftp/Sftp-short.webm'

  const { t } = useI18n()

  gsap.registerPlugin(ScrollTrigger, Observer)

  const aboutData = computed(() => [
    {
      title: t('sections.about.titleProject'),
      description: t('sections.about.descriptionProject'),
      videoMP4: Project1,
      videoWEBM: Project2
    },
    {
      title: t('sections.about.titleLauncher'),
      description: t('sections.about.descriptionLauncher'),
      videoMP4: Launcher1,
      videoWEBM: Launcher2
    },
    {
      title: t('sections.about.titleAlias'),
      description: t('sections.about.descriptionAlias'),
      videoMP4: Alias1,
      videoWEBM: Alias2
    },
    {
      title: t('sections.about.titlePassword'),
      description: t('sections.about.descriptionPassword'),
      videoMP4: Password1,
      videoWEBM: Password2
    },
    {
      title: t('sections.about.titleServer'),
      description: t('sections.about.descriptionServer'),
      videoMP4: Sftp1,
      videoWEBM: Sftp2
    }
  ])

  const sectionEl = ref(null)
  const listVideoEl = ref(null)
  const listDataEl = ref(null)

  let ctx = null
  let obs = null
  let st = null
  let refreshHandler = null
  let onTitleClick = () => {}

  onMounted(async () => {
    await nextTick()

    const section = sectionEl.value
    if (!section) return

    let index = 0
    let locked = false
    let enterLock = false
    let isCompleted = false

    const itemsLength = aboutData.value.length

    let releaseTimer = null
    const RELEASE_DELAY = 200
    const END_EPS = 2

    ctx = gsap.context(() => {
      const textItems = gsap.utils.toArray(section.querySelectorAll('.list-text p'))
      const titleItems = gsap.utils.toArray(section.querySelectorAll('.list-text h4'))
      const videoItems = gsap.utils.toArray(section.querySelectorAll('.list-video video'))

      if (!textItems.length || !titleItems.length || !videoItems.length) return

      gsap.set(titleItems, {
        autoAlpha: 0.7,
        marginBottom: 0,
        cursor: 'pointer'
      })

      gsap.set(titleItems[0], { autoAlpha: 1, marginBottom: 16 })

      gsap.set(textItems, {
        autoAlpha: 0,
        height: 0,
        overflow: 'hidden'
      })

      gsap.set(textItems[0], {
        autoAlpha: 1,
        height: 'auto'
      })

      gsap.set(videoItems, { autoAlpha: 0 })
      gsap.set(videoItems[0], { autoAlpha: 1 })

      function playVideo(idx) {
        const video = videoItems[idx]
        if (!video) return

        const playPromise = video.play()
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {})
        }
      }

      function stopVideo(idx) {
        const video = videoItems[idx]
        if (!video) return

        video.pause()
        video.currentTime = 0
      }

      function disableObs() {
        if (releaseTimer) {
          clearTimeout(releaseTimer)
          releaseTimer = null
        }

        obs?.kill()
        obs = null
      }

      function clearCompletedSectionStyles(currentSection) {
        if (!currentSection) return

        const container = currentSection.querySelector('.container')
        const sectionBody = currentSection.querySelector('.section__body')
        const sectionMain = currentSection.querySelector('.section__main')
        const videoList = currentSection.querySelector('.list-video')
        const textList = currentSection.querySelector('.list-text')

        gsap.set(currentSection, {
          clearProps: 'position,top,left,bottom,right,transform,width,height,minHeight,maxHeight,margin'
        })

        if (container) {
          gsap.set(container, {
            clearProps: 'width,height,minHeight,maxHeight,transform'
          })
        }

        if (sectionBody) {
          gsap.set(sectionBody, {
            clearProps: 'width,height,minHeight,maxHeight,transform'
          })
        }

        if (sectionMain) {
          gsap.set(sectionMain, {
            clearProps: 'width,height,minHeight,maxHeight,transform'
          })
        }

        if (videoList) {
          gsap.set(videoList, {
            clearProps: 'width,height,minHeight,maxHeight,transform'
          })
        }

        if (textList) {
          gsap.set(textList, {
            clearProps: 'width,height,minHeight,maxHeight,transform'
          })
        }
      }

      function completeSection() {
        if (isCompleted) return

        isCompleted = true
        disableObs()

        const currentSection = sectionEl.value
        if (!currentSection) return
        currentSection.classList.add('scrolled')

        const spacer = currentSection.parentElement
        const nextElement = spacer?.nextElementSibling || currentSection.nextElementSibling
        const anchorEl = nextElement || currentSection

        const beforeTop = anchorEl.getBoundingClientRect().top

        st?.kill(false)
        st = null

        if (spacer && spacer.classList.contains('pin-spacer')) {
          const parent = spacer.parentNode

          if (parent) {
            parent.insertBefore(currentSection, spacer)
            spacer.remove()
          }
        }

        clearCompletedSectionStyles(currentSection)

        if (document.body) {
          document.body.style.removeProperty('height')
          document.body.style.removeProperty('overflow')
        }

        if (document.documentElement) {
          document.documentElement.style.removeProperty('height')
          document.documentElement.style.removeProperty('overflow')
        }

        ScrollTrigger.refresh()

        const afterTop = anchorEl.getBoundingClientRect().top
        const delta = afterTop - beforeTop

        if (delta !== 0) {
          window.scrollTo({
            top: window.scrollY + delta,
            behavior: 'auto'
          })
        }
      }

      function goTo(next, options = {}) {
        const { fromClick = false } = options

        next = Math.max(0, Math.min(itemsLength - 1, next))
        if (next === index || locked) return

        if (!fromClick && !st) return

        if (releaseTimer) {
          clearTimeout(releaseTimer)
          releaseTimer = null
        }

        locked = true

        const prev = index
        index = next

        if (st) {
          const progress = itemsLength > 1 ? index / (itemsLength - 1) : 0
          let pos = st.start + (st.end - st.start) * progress

          if (index === itemsLength - 1) pos = st.end - END_EPS
          if (index === 0) pos = st.start + END_EPS

          st.scroll(pos)
        }

        gsap.timeline({
          defaults: { duration: 0.45, ease: 'power2.out' },
          onComplete: () => {
            locked = false
          }
        })
          .to(titleItems[prev], { autoAlpha: 0.25, marginBottom: 0 }, 0)
          .to(titleItems[index], { autoAlpha: 1, marginBottom: 16 }, 0)
          .to(textItems[prev], { autoAlpha: 0, height: 0 }, 0)
          .to(textItems[index], { autoAlpha: 1, height: 'auto' }, 0)
          .to(videoItems[prev], {
            autoAlpha: 0,
            onStart: () => {
              stopVideo(prev)
            }
          }, 0)
          .to(videoItems[index], {
            autoAlpha: 1,
            onStart: () => {
              videoItems[index].currentTime = 0
              playVideo(index)
            }
          }, 0)
      }

      onTitleClick = (clickedIndex) => {
        goTo(clickedIndex, { fromClick: true })
      }

      function enableObs() {
        if (obs || isCompleted) return

        playVideo(index)

        obs = Observer.create({
          target: window,
          type: 'wheel,touch,pointer',
          preventDefault: true,
          allowClicks: true,
          tolerance: 10,
          wheelSpeed: 1,

          onDown: () => {
            if (enterLock || locked || isCompleted) return

            if (index === itemsLength - 1) {
              if (releaseTimer) clearTimeout(releaseTimer)

              releaseTimer = setTimeout(() => {
                completeSection()
              }, RELEASE_DELAY)

              return
            }

            if (releaseTimer) {
              clearTimeout(releaseTimer)
              releaseTimer = null
            }

            goTo(index + 1)
          },

          onUp: () => {
            if (isCompleted) return
            if (enterLock || locked) return

            if (index === 0) {
              if (releaseTimer) clearTimeout(releaseTimer)

              releaseTimer = setTimeout(() => {
                disableObs()

                if (st) {
                  st.scroll(st.start - 2)
                }
              }, RELEASE_DELAY)

              return
            }

            if (releaseTimer) {
              clearTimeout(releaseTimer)
              releaseTimer = null
            }

            goTo(index - 1)
          }
        })
      }

      st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${itemsLength * (window.innerHeight / 2)}`,
        pin: true,
        scrub: false,

        onEnter: () => {
          if (isCompleted) return

          enableObs()

          enterLock = true
          setTimeout(() => {
            enterLock = false
          }, 100)

          gsap.to(textItems[0], { autoAlpha: 1, duration: 0.2 })
          playVideo(index)
        },

        onEnterBack: () => {
          if (isCompleted) {
            disableObs()
            return
          }

          enableObs()

          enterLock = true
          setTimeout(() => {
            enterLock = false
          }, 100)
        },

        onLeave: () => {
          disableObs()
        },

        onLeaveBack: () => {
          disableObs()

          if (isCompleted) return

          enterLock = true
          setTimeout(() => {
            enterLock = false
          }, 100)
        }
      })
    }, section)

    refreshHandler = () => {
      ScrollTrigger.refresh()
    }

    requestAnimationFrame(() => {
      refreshHandler?.()
    })

    setTimeout(() => {
      refreshHandler?.()
    }, 0)

    window.addEventListener('resize', refreshHandler)
  })

  onBeforeUnmount(() => {
    if (refreshHandler) {
      window.removeEventListener('resize', refreshHandler)
      refreshHandler = null
    }

    onTitleClick = () => {}

    obs?.kill()
    obs = null

    st?.kill()
    st = null

    ctx?.revert()
    ctx = null
  })
</script>

<template>
  <section class="section" ref="sectionEl">
    <div class="container">
      <div class="section__body flex">
        <div class="section__main q-my-auto full-width">
          <div class="row">
            <div class="col-9">
              <q-list class="list list-video" ref="listVideoEl">
                <q-item v-for="(item, index) in aboutData"
                        :key="index">
                  <q-item-section class="justify-end">
                    <video preload="auto" muted loop playsinline width="100%" height="100%">
                      <source :src="item.videoMP4" type="video/mp4">
                      <source :src="item.videoWEBM" type="video/webm">
                    </video>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="flex col-3">
              <q-list class="list-text q-pl-lg text-white" ref="listDataEl">
                <q-item v-for="(item, index) in aboutData"
                        :key="index" class="list__item q-py-md q-px-none">
                  <q-item-section>
                    <h4 @click="onTitleClick(index)">{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  h4 {
    font-size: 1.25rem;
    line-height: 110%;
    margin-bottom: 12px;

    @media (min-width: 77.5em) {
      margin-bottom: 18px;
      font-size: 1.5rem;
    }

    @media (min-width: 158.75em) {
      margin-bottom: 24px;
      font-size: 1.75rem;
    }
  }

  p {
    height: 0;
    font-size: 1rem;
    line-height: 110%;

    @media (min-width: 77.5em) {
      font-size: 1.25rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.5rem;
    }
  }

  .section {
    min-height: 100vh;
    padding: 0;

    &.scrolled {

    }

    &__body {
      height: inherit;
    }
  }

  .q-list {
    position: relative;
    height: 100%;
    width: 100%;

    &.list-video {
      aspect-ratio: 584 / 339;
      border-radius: 20px;
      overflow: hidden;

      .q-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;
      }

      video {
        border-radius: 20px;
        overflow: hidden;
        mask-image:
          linear-gradient(to bottom, black 85%, transparent),
          linear-gradient(to right, transparent, black 15%);

        mask-composite: intersect;
        -webkit-mask-composite: source-in;
      }
    }

    &.list-text {
      margin-top: auto;
      height: auto;

      .q-item {
        &:not(:last-child) {
          border-bottom: 1px solid #03d5ff;
        }
      }
    }
  }
</style>
