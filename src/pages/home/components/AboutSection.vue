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

    const tailVh = 0.6

    const itemsLength = aboutData.value.length;
    const stepPx = 900                          // "длина" одного шага в px, подбери
    const tailPx = 300

    ctx = gsap.context(() => {
      const textItems = gsap.utils.toArray(section.querySelectorAll('.list-text p'))
      gsap.set(textItems, { autoAlpha: 0 })
      gsap.set(textItems[0], { autoAlpha: 0.5, height: 'auto' })

      const titleItems = gsap.utils.toArray(section.querySelectorAll('.list-text h4'))
      gsap.set(titleItems, { autoAlpha: 0.7 })
      gsap.set(titleItems[0], { autoAlpha: 1, height: 'auto', marginBottom: '16px' })

      const videoItems = gsap.utils.toArray(section.querySelectorAll('.list-video video'))
      gsap.set(videoItems, { autoAlpha: 0 })
      gsap.set(videoItems[0], { autoAlpha: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${(itemsLength - 1) * stepPx + tailPx}`,
          pin: true,
          scrub: 0.6,
          snap: 1 / (itemsLength - 1),
          onEnter: () => {
            tl.to(textItems[0], { autoAlpha: 1 }, 0)
            videoItems[0].play()
          },
        }
      })

      titleItems.forEach((el, i) => {
        if (i === 0) return
        tl.to(titleItems[i - 1], { autoAlpha: 0.7, duration: 0.3, marginBottom: 0 }, i)
        tl.to(el, { autoAlpha: 1, duration: 0.3, marginBottom: '16px' }, i)
      })

      textItems.forEach((el, i) => {
        if (i === 0) return
        tl.to(textItems[i - 1], { autoAlpha: 0, duration: 0.3, height: 0 }, i)
        tl.to(el, { autoAlpha: 1, duration: 0.3, height: 'auto' }, i)
      })

      videoItems.forEach((el, i) => {
        if (i === 0) return

        tl.to(videoItems[i - 1], {
          autoAlpha: 0,
          duration: 0.3,
          onStart: () => {
            videoItems[i - 1].pause()
            videoItems[i - 1].currentTime = 0
          },
          onReverseComplete: () => {
            videoItems[i - 1].currentTime = 0
            videoItems[i - 1].play()
          }
        }, i)

        tl.to(el, {
          autoAlpha: 1,
          duration: 0.3,
          onStart: () => {
            el.currentTime = 0
            el.play()
          }
        }, i)
      })

      tl.to({}, { duration: tailVh })
    }, section)

    const refresh = () => ScrollTrigger.refresh()

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
