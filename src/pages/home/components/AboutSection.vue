<script setup>
  import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Observer } from 'gsap/Observer';

  import Video1 from 'src/assets/video/Video-1.mp4';
  import Video2 from'src/assets/video/Video-1.webm';

  gsap.registerPlugin(ScrollTrigger, Observer);

  const aboutData = ref([
    {
      title: 'Менеджер Проектов',
      description: 'Открывайте все рабочие инструменты моментально',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Мгновенный запуск',
      description: 'Запуск всего рабочего пространства одним кликом',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Консольные Алиасы',
      description: 'Создавайте короткие алиасы для любых консольных операций',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Персонализированные названия',
      description: 'Присваивайте проектам понятные имена без необходимости переименовывать системные папки.',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Интеллектуальный поиск',
      description: 'Мгновенно находите проекты по частичному совпадению в названии.',
      videoMP4: Video1,
      videoWEBM: Video2
    },
  ]);

  const sectionEl = ref(null)
  const listVideoEl = ref(null)
  const listDataEl = ref(null)

  let ctx
  let obs
  let st

  onMounted(async () => {
    await nextTick()

    const section = sectionEl.value
    if (!section) return

    let index = 0
    let locked = false
    let enterLock = false

    const itemsLength = aboutData.value.length

    let releaseTimer = null
    const RELEASE_DELAY = 200 // ms
    const END_EPS = 2         // px: не давать попасть ровно в st.end

    ctx = gsap.context(() => {
      const textItems  = gsap.utils.toArray(section.querySelectorAll('.list-text p'))
      const titleItems = gsap.utils.toArray(section.querySelectorAll('.list-text h4'))
      const videoItems = gsap.utils.toArray(section.querySelectorAll('.list-video video'))

      gsap.set(titleItems, { autoAlpha: 0.7 })
      gsap.set(titleItems[0], { autoAlpha: 1, marginBottom: '16px' })

      gsap.set(textItems,  { autoAlpha: 0 })
      gsap.set(textItems[0], { autoAlpha: 0.5, height: 'auto' })

      gsap.set(videoItems, { autoAlpha: 0 })
      gsap.set(videoItems[0], { autoAlpha: 1 })

      st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${itemsLength * (innerHeight / 2)}`,
        pin: true,
        scrub: false,
        onEnter: () => {
          enableObs();

          enterLock = true
          setTimeout(() => (enterLock = false), 100)

          gsap.to(textItems[0], { autoAlpha: 1, duration: 0.2 })
          videoItems[0].play()
        },
        onEnterBack: () => {
          enableObs()

          enterLock = true
          setTimeout(() => (enterLock = false), 100)
        },
        onLeave: () => {
          disableObs()
        },
        onLeaveBack: () => {
          disableObs()

          clearTimeout(releaseTimer)

          enterLock = true
          setTimeout(() => (enterLock = false), 100)
        },
      })

      function enableObs() {
        if (obs) return

        videoItems[0].play()

        obs = Observer.create({
          target: window,
          type: 'wheel,touch,pointer',
          preventDefault: true,
          allowClicks: true,
          tolerance: 10,
          wheelSpeed: 1,

          onDown: () => {
            if (enterLock || locked) return

            if (index === itemsLength - 1) {
              clearTimeout(releaseTimer)
              releaseTimer = setTimeout(() => {
                disableObs()
                st.scroll(st.end + 2)
              }, RELEASE_DELAY)
              return
            }

            clearTimeout(releaseTimer)
            goTo(index + 1)
          },
          onUp: () => {
            if (enterLock || locked) return

            if (index === 0) {
              clearTimeout(releaseTimer)
              releaseTimer = setTimeout(() => {
                disableObs()
                st.scroll(st.start - 2)
              }, RELEASE_DELAY)
              return
            }

            clearTimeout(releaseTimer)
            goTo(index - 1)
          },
        })
      }

      function disableObs() {
        obs?.kill()
        obs = null
      }

      function goTo(next) {
        next = Math.max(0, Math.min(itemsLength - 1, next))
        if (next === index || locked) return

        clearTimeout(releaseTimer) // ✅

        locked = true

        const prev = index
        index = next

        const progress = index / (itemsLength - 1)
        let pos = st.start + (st.end - st.start) * progress

        if (index === itemsLength - 1) pos = st.end - END_EPS
        if (index === 0) pos = st.start + END_EPS

        st.scroll(pos)

        gsap.timeline({
          defaults: { duration: 0.45, ease: 'power2.out' },
          onComplete: () => { locked = false }
        })
          .to(titleItems[prev], { autoAlpha: 0.25, marginBottom: 0 }, 0)
          .to(titleItems[index], { autoAlpha: 1, marginBottom: 16 }, 0)
          .to(textItems[prev],  { autoAlpha: 0, height: 0 }, 0)
          .to(textItems[index], { autoAlpha: 1, height: 'auto' }, 0)
          .to(videoItems[prev], {
            autoAlpha: 0,
            onStart: () => {
              videoItems[prev].pause()
              videoItems[prev].currentTime = 0
            }
          }, 0)
          .to(videoItems[index], {
            autoAlpha: 1,
            onStart: () => {
              videoItems[index].currentTime = 0
              videoItems[index].play()
            }
          }, 0)

      }
    }, section)

    const refresh = () => ScrollTrigger.refresh()
    requestAnimationFrame(refresh)
    setTimeout(refresh, 0)
    window.addEventListener('resize', refresh)
  })

  onBeforeUnmount(() => {
    obs?.kill()
    st?.kill()
    ctx?.revert()
  })
</script>

<template>
  <section class="section q-py-lg" ref="sectionEl">
    <div class="container">
      <div class="section__body flex">
        <div class="section__main q-my-auto full-width">
          <div class="row">
            <div class="col-9">
              <q-list class="list list-video" ref="listVideoEl">
                <q-item v-for="(item, index) in aboutData"
                        :key="index">
                  <q-item-section>
                    <video preload="auto" muted loop playsinline width="100%" height="100%">
                      <source :src="item.videoMP4" type="video/webm">
                      <source :src="item.videoWEBM" type="video/mp4">
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
                    <h4>{{ item.title }}</h4>
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
    font-size: 20px;
    line-height: 24px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    height: 0;
  }

  .section {
    min-height: 100vh;

    &__body {
      height: inherit;
    }
  }

  .q-list {
    position: relative;
    height: 100%;
    width: 100%;

    &.list-video {
      aspect-ratio: 16 / 9;

      .q-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 0;
        aspect-ratio: 16 / 9;
      }

      video {
        border-radius: 20px;
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
