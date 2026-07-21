<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { useLocaleRoute } from 'src/composables/useLocaleRoute'

  import logotype from 'src/assets/Logotype-new.svg'
  import example from 'src/assets/images/home/Example.png'

  import macIcon from 'src/assets/images/home/Icon-mac.svg'
  import winIcon from 'src/assets/images/home/Icon-windows.svg'
  import ubuntuIcon from 'src/assets/images/home/Icon-ubuntu.svg'

  const { t } = useI18n()
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

  const listWorkspace = ref([
    {
      title: 'Developers',
      description: 'Launch your full development environment in one click.'
    },
    {
      title: 'QA Engineers',
      description: 'Switch between testing environments and projects faster.'
    },
    {
      title: 'Project Managers',
      description: 'Keep project resources, links, and documentation organized.'
    },
    {
      title: 'DevOps Engineers',
      description: 'Manage tools, credentials, and environments without repetitive setup.'
    },
  ]);

  const listAbout = ref([
    {
      title: 'Project Management',
      description: 'Keep team projects, links, and context organized. Switch between workspaces without losing the thread.'
    },
    {
      title: 'Saved Access',
      description: 'Store passwords, credentials, and key links safely. Find what you need without digging through chats.'
    },
    {
      title: 'Routine Simplified',
      description: 'Reduce repeated setup and daily switching. Spend less time preparing and more time working.'
    },
    {
      title: 'Instant Launch',
      description: 'Open the right tools, apps, and tabs together. Start the day without rebuilding your setup.'
    },
  ]);
</script>

<template>
  <section class="section text-white">
    <div class="home text-center">
      <div class="container column justify-center">
        <div class="heating column items-center">
          <figure class="q-mb-lg">
            <q-img :src="logotype" class="q-mb-md"/>
            <figcaption>Workspace Synergy</figcaption>
          </figure>
          <q-btn :to="localeTo('download')"
                 unelevated
                 rounded
                 class="btn-download btn-glass--primary q-px-xl q-mb-xl">
            {{ t('buttons.start', { data: t('pricing.freeTrial') }) }}
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
    <div class="about">
      <div class="about__body">
        <span class="note q-mb-lg">Workspace Control</span>
        <h1 class="q-mb-md">Open your full dev workspace in seconds</h1>
        <p class="q-mb-xl">Keep projects, apps, comments, passwords, and answers accessible in one place. Start working without hunting for tools, links, and credentials.</p>
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
        <q-img :src="example"/>
      </div>
    </div>
    <div class="workspace">
      <div class="container">
        <div class="heating">
          <span class="note q-mb-xl">Workspace Control</span>
          <h2 class="q-mb-md">Everything your project needs, always within reach</h2>
          <p class="q-mb-md">Stop searching for projects, reopening tools, and copying commands from old notes. Slay keeps your workspace organized and ready to work from a single place.</p>
          <span class="q-list--title q-mb-sm">Perfect for:</span>
          <q-list class="q-mb-md">
            <q-item v-for="(item, index) in listWorkspace" :key="index">
              <div class="q-item__body">
                <q-item-section class="q-mb-xs">
                  <q-item-label>{{ item.title }}</q-item-label>
                  <q-item-label caption>{{ item.description }}</q-item-label>
                </q-item-section>
              </div>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="section__body flex column">
        <div class="section__main q-my-auto">
          <div class="section__title">
            <p class="brand-title q-mb-md">Smart Launcher for All Your Dev Tools</p>
            <h1 class="title q-mb-lg">{{ t('sections.home.subtitle') }}</h1>
            <p class="subtitle q-mb-xl" v-html="t('sections.home.description')"></p>
            <q-btn :to="localeTo('pricing')"
                   unelevated
                   rounded
                   class="btn-download btn-glass--primary q-px-xl">
              {{ t('buttons.start', { data: t('pricing.freeTrial') }) }}
            </q-btn>
          </div>
        </div>
        <div class="section__footer">
          <q-list  class="flex justify-center q-mx-auto">
            <q-item class="flex items-center"
              v-for="(item, index) in list"
              :key="index">
              <q-item-section avatar class="flex">
                <q-img :src="item.icon" />
              </q-item-section>
              <q-item-section>{{ item.text }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .home {
    position: relative;
    background-image: url("assets/images/home/Background.png");
    background-position: right center;
    background-size: cover;

    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 139px;
    }

    &:before {
      top: 0;
      background: linear-gradient(to top, rgba(0, 62, 64, 0.00) 0%, #081426 100%);
    }

    &:after {
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 51, 60, 0.00) 0%, #011C37 100%);
    }

    @media (min-width: 48em) {
    }

    @media (min-width: 64em) {
    }

    @media (min-width: 77.5em) {
      min-height: 100vh;
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
        /*font-family: Geist;*/
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.4px;
        text-transform: uppercase;
      }
    }

    .heating {
      width: 100%;
      max-width: 45%;
      padding: 0 60px;
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
          padding: 0 40px 16px;

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
        width: 44px;
        height: 44px;
      }
    }
  }

  .workspace {
    @media (min-width: 48em) {
    }

    @media (min-width: 64em) {
    }

    @media (min-width: 77.5em) {
      padding: 40px 0;
      min-height: 100vh;
    }

    @media (min-width: 158.75em) {
    }

    .heating {
      width: 100%;
      max-width: 45%;
      padding-right: 60px;
    }

    .q-list {
      &--title {
        color: rgba(255, 255, 255, 0.86);
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .q-item {
        position: relative;
        padding: 0 0 0 24px;

        &:before {
          content: '•';
          position: relative;
          left: -12px;
          font-size: 20px;
          color: #E4CD71;
        }

        &__label {
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          color: #E4CD71;

          & + .q-item__label {
            font-size: 18px;
            color: #FFF;
          }
        }
      }
    }
  }

  .about {
    @media (min-width: 48em) {
    }

    @media (min-width: 64em) {
    }

    @media (min-width: 77.5em) {
      position: absolute;
      top: 100px;
      right: max(80px, calc((100vw - 1440px) / 2 + 80px));
      width: 100%;
      max-width: min(
        calc((100vw - 160px) * 0.55),
        calc((1440px - 160px) * 0.55)
      );
    }

    @media (min-width: 158.75em) {
    }

    &__body {
      position: relative;
      width: 100%;
      padding: 44px 40px 12px;
      border-radius: 20px;
      background: rgba(0, 51, 60, 0.76);
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(8px);

      &:before {
        content: '';
        position: absolute;
        z-index: -1;
        top: -1px;
        left: -1px;
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
      }
    }

    .q-list {
      margin: 0 -8px;

      .q-item {
        width: 50%;
        padding: 0 8px;

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
          line-height: normal;
          color: #E4CD71;

          & + .q-item__label {
            font-size: 18px;
            color: #FFF;
          }
        }
      }
    }

    .q-img {
      position: relative;

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
