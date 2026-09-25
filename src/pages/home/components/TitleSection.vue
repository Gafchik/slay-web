<script setup>
  import { ref, computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import logotype from 'src/assets/Logotype-new.svg'
  import example from 'src/assets/images/home/Example.png'

  import macIcon from 'src/assets/images/home/Icon-mac.svg'
  import winIcon from 'src/assets/images/home/Icon-windows.svg'
  import ubuntuIcon from 'src/assets/images/home/Icon-ubuntu.svg'

  const { t, tm } = useI18n()
  const { localeTo } = useLocaleRoute()

  const list = ref([
    {
      icon: macIcon,
      text: 'macOS'
    },
    {
      icon: winIcon,
      text: 'Windows'
    },
    {
      icon: ubuntuIcon,
      text: 'Ubuntu'
    },
  ]);
  const listAbout = computed(() => {
    return tm('pages.home.title.list')
  })
</script>

<template>
  <section class="section text-white">
    <div class="home text-center">
      <div class="container">
        <div class="container-fluid">
          <div class="column justify-center full-height">
            <div class="heating column items-center">
              <figure class="q-mb-lg">
                <q-img :src="logotype" class="q-mb-md"/>
                <figcaption>Workspace Synergy</figcaption>
              </figure>
              <q-btn :to="localeTo('download')"
                     unelevated
                     rounded
                     class="btn-start btn-download q-mb-xl">
                {{ t('buttons.start') }}
              </q-btn>

              <q-list class="flex justify-center no-wrap">
                <q-item class="column justify-center"
                        v-for="(item, index) in list"
                        :key="index">
                  <div class="q-item__body">
                    <q-item-section avatar class="items-center q-mb-sm q-pa-none">
                      <q-img :src="item.icon" />
                    </q-item-section>
                    <q-item-section>{{ item.text }}</q-item-section>
                  </div>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about q-pb-xl">
      <div class="about__body">
        <span class="note q-mb-lg">
          {{ t('pages.home.title.note') }}
        </span>
        <h1 class="q-mb-md">
          {{ t('pages.home.title.title') }}
        </h1>
        <p class="q-mb-xl">
          {{ t('pages.home.title.description') }}
        </p>
        <div class="q-mb-xl">
          <q-list class="flex">
            <q-item v-for="(item, index) in listAbout" :key="index" class="q-mb-md">
              <div class="q-item__body">
                <q-item-section avatar class="q-mb-sm q-pa-none">
                  <q-item-label>{{ item.title }}</q-item-label>
                  <q-item-label caption>{{ item.description }}</q-item-label>
                </q-item-section>
              </div>
            </q-item>
          </q-list>
        </div>
        <q-img :src="example"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    position: relative;

    &:before,
    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      left: 0;
      width: 100%;
      height: 139px;
      pointer-events: none;
    }

    &:before {
      top: 0;
      background: linear-gradient(to top, rgba(0, 62, 64, 0.00) 0%, #081426 100%);
    }

    &:after {
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 51, 60, 0.00) 0%, #011C37 100%);
    }
  }

  .home {
    min-height: 700px;
    height: 100vh;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background-image: url("assets/images/home/Background.png");
      background-position: right center;
      background-size: cover;
      transform-origin: right center;
      animation: home-background-pulse 8s ease-in-out infinite alternate;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    }

    @media (min-width: 37.5em) {
      min-height: 500px;
    }

    @media (min-width: 64em) {
    }

    @media (min-width: 77.5em) {
      min-height: 810px;
    }

    @media (min-width: 90em) {
      height: 100vh;
      min-height: 810px;
    }

    @media (min-width: 158.75em) {
    }

    figure {
      .q-img {
        width: 88px;
        height: 88px;
      }

      figcaption {
        color: #FFF;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;
      }
    }

    .heating {
      width: 100%;

      @media (min-width: 77.5em) {
        max-width: 45%;
        padding: 0 20px;
      }

      @media (min-width: 90em) {
        padding: 0 60px;
      }
    }

    .q-list {
      margin: 0 -10px;
      color: #E4CD71;
      font-size: 16px;
      font-weight: 500;

      .q-item {
        padding: 0 10px;

        &__body {
          position: relative;
          padding: 0 16px 16px;

          @media (min-width: 37.5em) {
            padding: 0 24px 16px;
          }

          @media (min-width: 64em) {
            padding: 0 32px 16px;
          }

          @media (min-width: 77.5em) {
            padding: 0 40px 16px;
          }

          &:before,
          &:after {
            content: '';
            position: absolute;
            border-radius: 8px;
          }

          &:before {
            bottom: 0;
            left: 0;
            height: 64px;
            width: 100%;
            background: linear-gradient(to top, #E4CD71, rgba(126, 113, 62, 0));
          }

          &:after {
            bottom: 1px;
            left: 0;
            right: 0;
            margin: auto;
            height: 62px;
            width: calc(100% - 2px);
            background: #00333C;
          }
        }

        &__section {
          position: relative;
          z-index: 1;
        }
      }

      .q-img {
        width: 30px;
        height: 30px;

        @media (min-width: 64em) {
          width: 36px;
          height: 36px;
        }

        @media (min-width: 77.5em) {
          width: 44px;
          height: 44px;
        }
      }
    }
  }

  @keyframes home-background-pulse {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(1.12);
    }
  }

  .about {
    @media (min-width: 77.5em) {
      position: absolute;
      z-index: 2;
      top: 100px;
      right: max(80px, calc((100vw - 1440px) / 2 + 80px));
      width: 100%;
      max-width: min(
        calc((100vw - 160px) * 0.55),
        calc((1440px - 160px) * 0.55)
      );
    }

    &__body {
      width: 100%;
      max-width: 414px;
      padding: 0 16px;
      margin: 0 auto;

      @media (min-width: 37.5em) {
        max-width: 768px;
        padding: 0 24px;
      }

      @media (min-width: 64em) {
        padding: 0 40px;
      }

      @media (min-width: 77.5em) {
        position: relative;
        padding: 24px 20px 12px;
        border-radius: 20px;
        background: rgba(0, 51, 60, 0.76);
        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(8px);
      }

      @media (min-width: 90em) {
        padding: 44px 40px 12px;
      }

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
        display: none;
        border-radius: inherit;
        height: calc(100% + 2px);
        width: calc(100% + 2px);
        padding: 2px;
        background: linear-gradient(
            to bottom,
            #E4CD71,
            rgba(126, 113, 62, 0)
        );

        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);

        -webkit-mask-composite: xor;
        mask-composite: exclude;

        pointer-events: none;

        @media (min-width: 77.5em) {
          display: block;
        }
      }
    }

    .q-list {
      margin: 0 -8px;

      .q-item {
        width: 100%;
        padding: 0 8px;

        @media (min-width: 37.5em) {
          width: 50%;
        }

        &__body {
          position: relative;
          padding: 16px 20px;
          border-radius: 8px;
          background: #00333C;
          box-shadow: 3px 6px 8px 0 rgba(0, 0, 0, 0.48);

          &:before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            z-index: -1;
            border-radius: inherit;
            height: calc(100% + 2px);
            width: calc(100% + 2px);
            background: linear-gradient(to top, #E4CD71, rgba(126, 113, 62, 0));
          }
        }

        &__label {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal !important;
          color: #E4CD71;

          & + .q-item__label {
            font-size: 18px;
            color: #FFF;
          }
        }

        &:last-child {
          margin-bottom: 0;

          @media (min-width: 37.5em) {
            margin-bottom: 16px;
          }
        }
      }
    }

    .q-img {
      position: relative;
      display: none;

      @media (min-width: 77.5em) {
        display: inline-block;
      }

      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 139px;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0, 51, 60, 0.00) 0%, #00333C 100%);
      }
    }
  }
</style>
