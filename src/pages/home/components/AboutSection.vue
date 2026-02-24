<script setup>
  import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  import Video1 from 'src/assets/video/Video-1.mp4';
  import Video2 from'src/assets/video/Video-1.webm';

  gsap.registerPlugin(ScrollTrigger);

  const aboutData = ref([
    {
      title: 'Менеджер Проектов',
      description: 'Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы.',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Мгновенный запуск',
      description: 'Открывайте проекты в предпочитаемой среде разработки одним кликом без лишних действий.',
      videoMP4: Video1,
      videoWEBM: Video2
    },
    {
      title: 'Универсальный запуск проектов',
      description: 'Выбирайте любую IDE для работы — и все ваши проекты будут открываться именно в ней.',
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

  onMounted(async () => {
    await nextTick()

    const section = sectionEl.value
    if (!section) return

    const vh = () => window.innerHeight

    const tailVh = 0.6

    ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(section.querySelectorAll('.list-text p'))

      gsap.set(slides, { opacity: 0 })
      gsap.set(slides[0], { opacity: 1 })

      const videoItems = gsap.utils.toArray(section.querySelectorAll('.list-video video'))

      gsap.set(videoItems, { opacity: 0 })
      gsap.set(videoItems[0], { opacity: 1 })

      videoItems[0].play()

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${aboutData.value.length * vh() + tailVh * vh()}`,
          pin: true,
          scrub: 0.5
        }
      })

      slides.forEach((el, i) => {
        if (i === 0) return
        tl.to(slides[i - 1], { opacity: 0, duration: 0.3, height: '0px' }, i)
        tl.to(el, { opacity: 1, duration: 0.3, height: 'auto' }, i)
      })

      videoItems.forEach((el, i) => {
        if (i === 0) return

        tl.to(slides[i - 1], {
          autoAlpha: 0,
          duration: 0.3,
          onStart: () => {
            slides[i - 1].pause()
            slides[i - 1].currentTime = 0
          }
        }, i)

        tl.to(el, {
          autoAlpha: 1,
          duration: 0.3,
          onStart: () => {
            el.play()
          }
        }, i)
      })

      tl.to({}, { duration: tailVh })
    }, section)

    const v = listVideoEl.value
    const refresh = () => ScrollTrigger.refresh()

    if (v) {
      v.addEventListener('loadedmetadata', refresh, { once: true })
      v.addEventListener('loadeddata', refresh, { once: true })
    }

    // на всякий случай после первого layout
    requestAnimationFrame(refresh)
    setTimeout(refresh, 0)

    window.addEventListener('resize', refresh)
  })

  onBeforeUnmount(() => {
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
            <div class="col-3">
              <q-list class="list-text text-white" ref="listDataEl">
                <q-item v-for="(item, index) in aboutData"
                        :key="index" class="list__item">
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
  }
</style>
