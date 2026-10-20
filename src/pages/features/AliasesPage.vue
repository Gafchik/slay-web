<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleRoute } from 'src/composables/useLocaleRoute.js'

import imageHome from 'assets/images/features/aliases/Image-1.svg'
import imageTerminal from 'assets/images/features/aliases/Terminal.svg'

import imageManagement1 from 'assets/images/features/aliases/Management-1.svg'
import imageManagements2 from 'assets/images/features/aliases/Management-2.svg'

const { t, tm } = useI18n()
const { localeTo } = useLocaleRoute()

const stepsList = computed(() => {
  return tm('pages.features.consoleAliases.steps.list')
})

const profilesManagement = [imageManagement1, imageManagements2]
const managementContentList = computed(() =>
  tm('pages.features.consoleAliases.management.listContent').map((step, index) => ({
    ...step,
    image: profilesManagement[index],
  }))
)
const managementList = computed(() => {
  return tm('pages.features.consoleAliases.management.list')
})

const tasksList = computed(() => {
  return tm('pages.features.consoleAliases.tasks.list')
})

const commandsList = computed(() => {
  return tm('pages.features.consoleAliases.commands.card.list')
})

const profilesList = computed(() => {
  return tm('pages.features.consoleAliases.profiles.list')
})
const profilesCommandsList = computed(() => {
  return tm('pages.features.consoleAliases.profiles.listCommands')
})

const faqList = computed(() => {
  return tm('pages.features.consoleAliases.faq.list')
})
</script>

<template>
  <q-page>
    <section class="section section-home">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__main">
              <div class="section__heating q-pb-xl">
                <h1 class="section__title q-mb-lg">
                  {{ t('pages.features.consoleAliases.title') }}
                </h1>
                <span class="note q-mb-md">
                  {{ t('pages.features.consoleAliases.note') }}
                </span>
                <p class="section__description q-mb-lg">
                  {{ t('pages.features.consoleAliases.description') }}
                </p>
                <q-btn :to="localeTo('download')"
                       unelevated
                       rounded
                       class="btn-start btn-download q-mb-lg">
                  {{ t('buttons.start') }}
                </q-btn>
                <div class="code">
                  <code>slay run start-dev</code>
                </div>
              </div>
              <div class="section__image column justify-center q-pb-lg">
                <img :src="imageHome" alt="" class="q-mb-lg"/>
                <p class="q-mb-lg">
                  {{ t('pages.features.consoleAliases.home.subtitle') }}
                </p>
                <div class="code">
                  <img :src="imageTerminal" alt=""/>
                  <code>$ slay run start-dev</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-about">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__head q-mb-xl">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.about.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{ t('pages.features.consoleAliases.about.title') }}
              </h1>
              <p class="section__description">
                {{ t('pages.features.consoleAliases.about.description') }}
              </p>
            </div>
            <div class="section__main flex">
              <div class="col q-mb-xl">
                <div class="code">
                  <span>{{ t('pages.features.consoleAliases.about.before') }}</span>
                  <code>ssh -i ~/.ssh/shop_staging -p 2222 deploy@staging.shop.example.com "cd /var/www/shop && docker compose logs -f --tail=200 app"</code>
                </div>
              </div>
              <div class="col q-mb-xl">
                <div class="code">
                  <span>{{ t('pages.features.consoleAliases.about.after') }}</span>
                  <code>slay run staging-logs</code>
                </div>
              </div>
            </div>
            <div class="section__foot flex justify-center items-center">
              <p>{{ t('pages.features.consoleAliases.about.notice') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-steps">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__head q-mb-xl">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.steps.note') }}
              </span>
              <h1 class="section__title">
                {{ t('pages.features.consoleAliases.steps.title') }}
              </h1>
            </div>
            <div class="section__main">
              <q-list class="flex">
                <q-item v-for="(item, index) in stepsList"
                        :key="item.id"
                        class="col">
                  <q-item-section class="column no-wrap">
                    <div class="q-item__head column items-start no-wrap">
                      <span class="q-item__count">0{{(index + 1)}}</span>
                      <h3 class="q-item__title">{{item.title}}</h3>
                      <p class="q-item__description">{{item.description}}</p>
                    </div>
                    <div class="q-item__extra column items-start">
                      <template v-if="item.extra">
                        <span class="q-item__extra-btn">
                            <q-icon name="add" size="16px"/> {{item.extra.btn}}
                          </span>
                        <span class="q-item__extra-title">{{item.extra.title}}</span>
                        <span class="q-item__extra-subtitle">{{item.extra.subtitle}}:</span>
                        <code class="q-item__extra-code">{{item.extra.code}}</code>
                      </template>

                      <template v-else-if="item.code">
                        <div class="code">
                          <code>{{item.code}}</code>
                        </div>
                      </template>
                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-management">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__head q-mb-xl">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.management.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{t('pages.features.consoleAliases.management.title')}}
              </h1>
              <p class="section__description">
                {{ t('pages.features.consoleAliases.management.description') }}
              </p>
            </div>
            <div class="section__main">
              <q-list class="flex">
                <q-item v-for="item in managementContentList"
                        :key="item.id"
                >
                  <q-item-section class="justify-center items-start">
                    <span class="q-mb-md">{{item.title}}</span>
                    <img :src="item.image" alt="">
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="section__foot">
              <q-list class="flex">
                <q-item v-for="item in managementList"
                        :key="item.id"
                >
                  <q-item-section class="items-center">
                    <q-icon :name="item.icon"/>
                    <span>{{item.title}}</span>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-tasks">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__head q-mb-xl">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.tasks.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{t('pages.features.consoleAliases.tasks.title')}}
              </h1>
              <p class="section__description">
                {{ t('pages.features.consoleAliases.tasks.description') }}
              </p>
            </div>
            <div class="section__main">
              <q-list class="flex">
                <q-item v-for="item in tasksList"
                        :key="item.id"
                >
                  <q-item-section class="items-start">
                    <q-icon :name="item.icon"/>
                    <span class="q-mb-sm">{{item.title}}</span>
                    <p>{{item.command}}</p>
                    <code class="saved">{{item.saved}}</code>
                    <code>{{item.code}}</code>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div class="section__foot">
              <p>
                {{ t('pages.features.consoleAliases.tasks.notice') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-arguments">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__content">
              <div class="section__head">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.arguments.note') }}
              </span>
                <h1 class="section__title q-mb-md">
                  {{t('pages.features.consoleAliases.arguments.title')}}
                </h1>
                <p class="section__description q-mb-md">
                  {{ t('pages.features.consoleAliases.arguments.description') }}
                </p>
                <p class="section__description">
                  {{ t('pages.features.consoleAliases.arguments.subtitle') }}
                </p>
              </div>
              <div class="section__main">
                <div class="column justify-start">
                  <span class="q-mb-md">
                    {{ t('pages.features.consoleAliases.arguments.content.before') }}
                  </span>
                  <code class="q-mb-md">cd ~/Projects/shop && docker compose exec app php artisan</code>
                  <span class="q-mb-md">
                    {{ t('pages.features.consoleAliases.arguments.content.after') }}
                  </span>
                  <div class="code">
                    <img :src="imageTerminal" alt=""/>
                    <code>slay run artisan migrate --seed</code>
                  </div>
                  <span class="q-mt-md q-mb-md">
                    {{ t('pages.features.consoleAliases.arguments.content.result') }}
                  </span>
                  <code>cd ~/Projects/shop && docker compose exec app php artisan migrate --seed</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-commands">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__content">
              <div class="section__head">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.commands.note') }}
              </span>
                <h1 class="section__title q-mb-md">
                  {{t('pages.features.consoleAliases.commands.title')}}
                </h1>
                <p class="section__description q-mb-md">
                  {{ t('pages.features.consoleAliases.commands.description') }}
                </p>
              </div>
              <div class="section__main">
                <div class="card ">
                  <div class="card__head column">
                    <span>
                    {{ t('pages.features.consoleAliases.commands.card.title') }}
                  </span>
                    <code>
                      {{ t('pages.features.consoleAliases.commands.card.command') }}
                    </code>
                  </div>
                  <q-list class="card__main flex">
                    <q-item v-for="item in commandsList"
                            :key="item.id"
                    >
                      <q-item-section class="items-start">
                        <span class="q-mb-sm">{{item.title}}</span>
                        <code>{{item.command}}</code>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
            </div>
            <div class="section__foot">
              <p class="section__description q-mb-sm">
                {{ t('pages.features.consoleAliases.commands.subtitle') }}
              </p>
              <p class="section__description">
                {{ t('pages.features.consoleAliases.commands.notice') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-search">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__content">
              <div class="section__head">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.search.note') }}
              </span>
                <h1 class="section__title q-mb-md">
                  {{t('pages.features.consoleAliases.search.title')}}
                </h1>
                <p class="section__description q-mb-md">
                  {{ t('pages.features.consoleAliases.search.description') }}
                </p>

              </div>
              <div class="section__main">
                <div class="column justify-start">
                  <div class="code q-mb-lg" >
                    <img :src="imageTerminal" alt=""/>
                    <code>slay alias list</code>
                  </div>
                  <p class="section__description">
                    {{ t('pages.features.consoleAliases.search.notice') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-profiles">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__content">
              <div class="section__head q-mb-xl">
              <span class="note q-mb-md">
                {{ t('pages.features.consoleAliases.profiles.note') }}
              </span>
                <h1 class="section__title q-mb-md">
                  {{t('pages.features.consoleAliases.profiles.title')}}
                </h1>
                <p class="section__description q-mb-md">
                  {{ t('pages.features.consoleAliases.profiles.description') }}
                </p>
              </div>
              <div class="section__main">
                <q-list class="flex">
                  <q-item v-for="item in profilesList"
                          :key="item.id"
                  >
                    <q-item-section class="items-start">
                      <span>{{item.title}}</span>
                      <div class="code">
                        <img :src="imageTerminal" alt=""/>
                        <code>{{item.command}}</code>
                      </div>
                      <span>{{item.subtitle}}</span>
                      <div class="commands column justify-start">
                        <span
                          v-for="command in item.commandsList"
                          :key="command"
                        >
                          {{ command }}
                        </span>
                      </div>
                    </q-item-section>
                  </q-item>

                  <q-item>
                    <q-item-section class="items-center">
                      <q-icon name="arrow_forward"/>
                      <code>{{ t('pages.features.consoleAliases.profiles.switchCommand') }}</code>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <div class="section__foot">
              <q-list class="flex">
                <q-item v-for="item in profilesCommandsList"
                        :key="item.id"
                >
                  <q-item-section class="items-start">
                    <code>{{item}}</code>
                  </q-item-section>
                </q-item>
              </q-list>
              <p>
                {{ t('pages.features.consoleAliases.profiles.notice') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-faq">
      <div class="container">
        <div class="container-fluid">
          <div class="section__body">
            <div class="section__head q-mb-md">
              <span class="note q-mb-lg">
                {{ t('pages.features.consoleAliases.faq.note') }}
              </span>
              <h1 class="section__title q-mb-md">
                {{ t('pages.features.consoleAliases.faq.title') }}
              </h1>
            </div>
            <div class="section__main">
              <q-list>
                <q-expansion-item
                  v-for="(item, index) in faqList" :key="index"
                  :label="item.title"
                  hide-expand-icon
                >
                  <template #header="{ expanded }">
                    <q-item-section>
                      {{ item.title }}
                    </q-item-section>

                    <q-item-section side>
                      <q-icon
                        :name="expanded ? 'remove' : 'add'"
                        size="24px"
                      />
                    </q-item-section>
                  </template>

                  <q-card>
                    <q-card-section>
                      {{item.description}}
                    </q-card-section>
                  </q-card>
                </q-expansion-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-cta">
      <div class="section__body">
        <div class="container">
          <div class="container-fluid">
            <div class="section__main column justify-center items-center">
              <h1 class="section__title q-mb-md">
                {{t('pages.features.consoleAliases.cta.title')}}
              </h1>
              <p class="section__subtitle q-mb-lg">
                {{ t('pages.features.consoleAliases.cta.subtitle') }}
              </p>
              <q-btn :to="localeTo('download')"
                     unelevated
                     rounded
                     class="btn-start btn-download q-mb-lg">
                {{ t('buttons.start') }}
              </q-btn>
              <code>
                {{ t('pages.features.consoleAliases.cta.command') }}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">
.section {
  &__description {
    color: #A9B9BC;
  }

  &-home {
    position: relative;
    padding: 60px 0 20px;
    background: radial-gradient(79.06% 35.36% at 75% 25%, #06364D 0%, #011C37 100%);

    @media (min-width: 77.5em) {
      height: 100vh;
      min-height: 840px;
      padding: 80px 0;
    }

    @media (min-width: 90em) {
      min-height: 880px;
    }

    @media (min-width: 118.5em) {
      min-height: 960px;
    }

    @media (min-width: 158.5em) {
      min-height: 1000px;
      padding: 100px 0;
    }

    &:after {
      content: '';
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 0;
      width: 408px;
      height: 170px;
      display: none;
      opacity: 0.4;
      background:
        linear-gradient(
          -234deg,
          rgba(1, 28, 55, 0) 0%,
          rgba(1, 28, 55, 0.92) 61.96%,
          #011c37 100%
        ),
        url("../../assets/images/decor/Decor-3.png")
        center / cover no-repeat;

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 77.5em) {
        height: 328px;
      }
    }

    .section__body,
    .container,
    .container-fluid {
      height: 100%;
      min-height: 0;
    }

    .section {
      &__body {
        position: relative;
        padding-top: 40px;

        @media (min-width: 77.5em) {
          padding-top: 74px;
        }
      }

      &__main {
        display: flex;
        flex-direction: column;

        @media (min-width: 48em) {
          flex-direction: row;
          margin: 0 -15px;
        }

        @media (min-width: 64em) {
          margin: 0 -30px;
        }

        @media (min-width: 90em) {
          margin: 0 -60px;
        }

        @media (min-width: 118.5em) {
          margin: 0 -80px;
        }
      }

      &__heating,
      &__image {
        @media (min-width: 48em) {
          width: 50%;
          padding: 0 15px;
        }

        @media (min-width: 64em) {
          padding: 0 30px;
        }

        @media (min-width: 90em) {
          padding: 0 60px;
        }

        @media (min-width: 118.5em) {
          padding: 0 80px;
        }
      }

      &__heating {
        @media (min-width: 64em) {
          padding-top: 30px;
        }

        @media (min-width: 90em) {
          padding-top: 60px;
        }

        @media (min-width: 118.5em) {
          padding-top: 80px;
        }

        .code {
          border: none;
          background: transparent;
          box-shadow: none;

          code {
            padding: 0;
          }
        }
      }

      &__image {
        width: 100%;
        max-width: 414px;
        margin: 0 auto;

        @media (min-width: 64em) {
          width: 50%;
          max-width: none;
        }

        img {
          width: 100%;
          height: auto;
          object-fit: contain;

          @media (min-width: 90em) {
            width: auto;
          }
        }

        p {
          display: block;
          color: #E4CD71;
          font-size: 1rem;
          font-weight: 400;
          line-height: 120%;

          @media (min-width: 77.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.25rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.375rem;
          }
        }

        .code {
          border: 1px solid #25505E;

          img {
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
          }
        }
      }
    }
  }

  &-about {
    position: relative;
    background-color: #06273B;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 210px;
      height: 100px;
      display: none;
      background:
        linear-gradient(
          234deg,
          rgba(6, 39, 59, 0) 0%,
          rgba(6, 39, 59, 0.92) 61.96%,
          #06273B 100%
        ),
        url("../../assets/images/features/projects/Decor-1.png")
        center / cover no-repeat;
      pointer-events: none;

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 77.5em) {
        width: 408px;
        height: 252px;
      }
    }

    .code {
      code {
        padding-top: 8px;

        @media (min-width: 48em) {
          padding-top: 12px;
        }

        @media (min-width: 64em) {
          padding-top: 14px;
        }

        @media (min-width: 77.5em) {
          padding-top: 18px;
        }
      }
    }

    .section {
      &__head {
        @media (min-width: 77.5em) {
          max-width: 75%;
        }
      }

      &__main {
        flex-direction: column;

        @media (min-width: 48em) {
          flex-direction: row;
          margin-left: -16px;
          margin-right: -16px;
        }

        @media (min-width: 118.5em) {
          margin-left: -20px;
          margin-right: -20px;
        }

        .col {
          flex: 65%;

          @media (min-width: 48em) {
            padding: 0 16px;
          }

          @media (min-width: 64em) {
            flex: 60%;
          }

          @media (min-width: 118.5em) {
            padding: 0 20px;
          }

          &:last-of-type {
            flex: 35%;

            @media (min-width: 64em) {
              flex: 40%;
            }

            span {
              color: #E4CD71;
            }

            .code {
              border: 1px solid #E4CD71;
              background: #00333C;
            }
          }
        }

        span {
          display: inline-block;
          padding: 16px 12px 0;
          color: #A9B9BC;
          font-size: 0.625rem;
          line-height: 100%;
          text-transform: uppercase;

          @media (min-width: 48em) {
            font-size: 0.75rem;
            padding: 20px 24px 0;
          }

          @media (min-width: 64em) {
            padding: 24px 28px 0;
          }

          @media (min-width: 77.5em) {
            font-size: 0.875rem;
            padding: 28px 30px 0;
          }

          @media (min-width: 158.5em) {
            padding: 28px 28px 0;
          }
        }
      }

      &__foot {
        p {
          color: #E4CD71;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 100%;

          @media (min-width: 48em) {
            font-size: 1rem;
          }

          @media (min-width: 77.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.25rem;
          }
        }
      }
    }
  }

  &-steps {
    position: relative;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      bottom: -125px;
      display: none;
      width: 250px;
      height: 182px;
      right: 0;
      background: url("../../assets/images/features/projects/Decor-1.png") center / cover no-repeat;
      pointer-events: none;
      opacity: 0.22;

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 77.5em) {
        bottom: -225px;
        width: 408px;
        height: 352px;
      }
    }

    .code {
      width: 100%;

      code {
        padding: 16px;

        @media (min-width: 77.5em) {
          padding: 20px;
        }
      }
    }

    .q-list {
      flex-direction: column;

      @media (min-width: 48em) {
        flex-direction: row;
        align-items: normal;
        margin: 0 -12px;
      }

      @media (min-width: 118.5em) {
        margin: 0 -24px;
      }
    }

    .q-item {
      margin-bottom: 24px;

      @media (min-width: 48em) {
        padding: 0 12px;
        margin-bottom: 0;
      }

      @media (min-width: 77.5em) {
      }

      @media (min-width: 118.5em) {
        padding: 0 24px;
      }

      @media (min-width: 158.5em) {
      }

      &__head {
        margin-bottom: 24px;
        flex: 1;

        @media (min-width: 48em) {
          margin-bottom: 36px;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 48px;
        }
      }

      &__section {
        justify-content: normal;

        @media (min-width: 48em) {
        }

        @media (min-width: 77.5em) {
        }

        @media (min-width: 118.5em) {
        }
      }

      &__count {
        position: relative;
        width: 100%;
        margin-bottom: 8px;
        color: #E4CD71;
        font-size: 36px;
        font-weight: 600;
        line-height: 100%;

        @media (min-width: 48em) {
          margin-bottom: 12px;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 24px;
        }

        @media (min-width: 118.5em) {
        }

        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 60px;
          height: 2px;
          width: calc(50% - 60px);
          margin: auto;
          background: #2C7773;

          @media (min-width: 48em) {
            right: 0;
            width: calc(100% - 60px);
          }
        }
      }

      &__title {
        margin-bottom: 8px;
        color: #FFF;
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 115%;

        @media (min-width: 48em) {
          margin-bottom: 12px;
          font-size: 1.375rem;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 24px;
          font-size: 1.5rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.625rem;
        }
      }

      &__description {
        color: #A9B9BC;
        font-size: 1rem;
        font-weight: 500;
        line-height: 150%;

        @media (min-width: 48em) {
          font-size: 1.125rem;
        }

        @media (min-width: 77.5em) {
          font-size: 1.25rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.375rem;
        }
      }

      &__extra {
        @media (min-width: 48em) {
          height: 160px;
        }

        @media (min-width: 64em) {
          height: 140px;
        }

        @media (min-width: 77.5em) {
          height: 150px;
        }

        @media (min-width: 118.5em) {
          height: 160px;
        }

        &-btn {
          display: inline-block;
          padding: 10px 20px;
          margin-bottom: 8px;
          border-radius: 100px;
          border: 2px solid #E8FFFF;
          box-shadow: 0 0 12px 0 rgba(174, 252, 255, 0.33);
          text-transform: uppercase;
          cursor: default;

          @media (min-width: 77.5em) {
            margin-bottom: 16px;
          }
        }

        &-title {
          margin-bottom: 8px;
          color: #FFF;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 120%;

          @media (min-width: 77.5em) {
            margin-bottom: 16px;
            font-size: 1rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }
        }

        &-subtitle {
          margin-bottom: 8px;
          color: #A9B9BC;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 120%;

          @media (min-width: 77.5em) {
            margin-bottom: 16px;
            font-size: 0.875rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1rem;
          }
        }

        &-code {
          color: #0AFDFF;
          font-family: monospace;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 140%;

          @media (min-width: 77.5em) {
            font-size: 1rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }
        }
      }
    }

    .section {
      &__head {
        @media (min-width: 77.5em) {
          max-width: 75%;
        }
      }
    }
  }

  &-management {
    background: #06273B;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    img {
      height: auto;
      width: 100%;
      max-width: 350px;
      box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.40);

      @media (min-width: 64em) {
        max-width: none;
      }
    }

    .section {
      &__head {
        @media (min-width: 77.5em) {
          max-width: 75%;
        }
      }

      &__main {
        @media (min-width: 64em) {
          margin-bottom: 24px;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 40px;
        }

        .q-list {
          justify-content: center;

          @media (min-width: 48em) {
            flex-wrap: nowrap;
            margin: 0 -9px;
          }

          @media (min-width: 64em) {
            margin: 0 -16px;
          }

          @media (min-width: 77.5em) {
            margin: 0 -32px;
          }

          @media (min-width: 158.5em) {
            margin: 0 -60px;
          }
        }

        .q-item {
          padding: 0 9px;
          margin-bottom: 24px;

          @media (min-width: 48em) {
            flex: 50%;
          }

          @media (min-width: 64em) {
            padding: 0 16px;
            margin: 0;
          }

          @media (min-width: 77.5em) {
            padding: 0 32px;
          }

          @media (min-width: 158.5em) {
            padding: 0 60px;
          }

          span {
            color: #E4CD71;
            text-align: left;
            font-size: 0.625rem;
            font-weight: 400;
            line-height: 140%;
            letter-spacing: 0.5px;
            text-transform: uppercase;

            @media (min-width: 77.5em) {
              font-size: 0.875rem;
              letter-spacing: 0.7px;
            }

            @media (min-width: 118.5em) {
              font-size: 1.125rem;
            }

            @media (min-width: 158.5em) {
              font-size: 1.375rem;
            }
          }
        }
      }

      &__foot {
        .q-list {


          @media (min-width: 48em) {

            margin: 0 -9px;
          }

          @media (min-width: 64em) {
            justify-content: center;
            margin: 0 -14px;
          }

          @media (min-width: 77.5em) {

          }

          @media (min-width: 158.5em) {
            margin: 0 -60px;
          }
        }

        .q-item {
          flex: 100%;
          padding: 0;
          min-height: auto;
          margin-bottom: 16px;

          @media (min-width: 48em) {
            flex: 50%;
            padding: 0 9px;
          }

          @media (min-width: 64em) {
            padding: 0 14px;
          }

          @media (min-width: 77.5em) {
            flex: 25%;
            margin-bottom: 0;
          }

          @media (min-width: 90em) {
            flex: auto;
          }

          @media (min-width: 158.5em) {
            padding: 0 60px;
          }

          &__section {
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: nowrap;
          }

          span {
            color: #fff;
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 140%;

            @media (min-width: 77.5em) {
              padding: 0;
              margin: 0;
              font-size: 1rem;
            }

            @media (min-width: 118.5em) {
              font-size: 1.125rem;
            }

            @media (min-width: 158.5em) {
              font-size: 1.375rem;
            }
          }
        }

        .q-icon {
          font-size: 28px;
          font-weight: 100;
          color: #0AFDFF;
          margin-right: 8px;
        }
      }
    }
  }

  &-tasks {
    position: relative;
    padding: 40px 0;

    @media (min-width: 48em) {
      padding: 60px 0;
    }

    @media (min-width: 64em) {
      padding: 80px 0;
    }

    @media (min-width: 77.5em) {
      padding: 100px 0;
    }

    @media (min-width: 158.5em) {
      padding: 120px 0;
    }

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 16px;
      right: 0;
      display: none;
      width: 250px;
      height: 148px;
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

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 77.5em) {
        width: 408px;
        height: 239px;
      }
    }

    .q-list {
      flex-direction: column;

      @media (min-width: 37.5em) {
        flex-direction: row;
        justify-content: center;
        margin: 0 -8px;
      }

      @media (min-width: 64em) {
        margin: 0 -16px;
        flex-wrap: nowrap;
      }

      @media (min-width: 77.5em) {
        margin: 0 -24px;
      }

      @media (min-width: 158.5em) {
        margin: 0 -30px;
      }

      span {
        margin-bottom: 10px;
        color: #E4CD71;
        font-size: 0.625rem;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: 0.39px;
        text-transform: uppercase;

        @media (min-width: 77.5em) {
          margin-bottom: 20px;
          font-size: 0.875rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.125rem;
        }

        @media (min-width: 158.5em) {
          font-size: 1.375rem;
        }
      }

      p {
        margin-bottom: 10px;
        color: #FFF;
        font-size: 1rem;
        font-weight: 600;
        line-height: 140%;

        @media (min-width: 48em) {
          font-size: 1.125rem;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 20px;
          font-size: 1.25rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.375rem;
        }

        @media (min-width: 158.5em) {
          font-size: 1.625rem;
        }
      }

      code {
        font-size: 0.625rem;

        @media (min-width: 77.5em) {
          font-size: 0.875rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.125rem;
        }

        @media (min-width: 158.5em) {
          font-size: 1.375rem;
        }

        &.saved {
          margin-top: auto;
          margin-bottom: 10px;
          color: rgba(255, 255, 255, 0.6);
          overflow-wrap: anywhere;

          @media (min-width: 77.5em) {
            margin-bottom: 16px;
          }
        }
      }
    }

    .q-item {
      min-height: auto;
      padding: 0;
      margin-bottom: 16px;

      @media (min-width: 37.5em) {
        flex: 50%;
        padding: 0 8px;
      }

      @media (min-width: 64em) {
        flex: 25%;
        padding: 0 16px;
        margin: 0;
      }

      @media (min-width: 77.5em) {
        padding: 0 24px;
      }

      @media (min-width: 158.5em) {
        padding: 0 30px;
      }

      &__section {
        justify-content: normal;
        padding: 10px;
        border-radius: 12px;
        border: 1px solid #2C7773;
        background: #00333C;

        @media (min-width: 48em) {
          padding: 18px 16px;
        }

        @media (min-width: 77.5em) {
          padding: 22px 16px;
        }

        @media (min-width: 90em) {
          padding: 24px 18px;
        }

        @media (min-width: 158.5em) {
          padding: 36px 24px;
        }
      }
    }

    .q-icon {
      margin-bottom: 10px;
      font-size: 28px;
      color: #0AFDFF;

      @media (min-width: 77.5em) {
        margin-bottom: 20px;
      }
    }

    .section {
      &__head {
        @media (min-width: 77.5em) {
          max-width: 75%;
        }
      }

      &__main {
        margin-bottom: 16px;

        @media (min-width: 64em) {
          margin-bottom: 32px;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 40px;
        }
      }

      &__foot {
        p {
          color: #A9B9BC;
          font-size: 0.875rem;
          font-weight: 400;
          line-height: 160%;

          @media (min-width: 77.5em) {
            font-size: 1rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.25rem;
          }
        }
      }
    }
  }

  &-arguments {
    background: #06273B;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    .code {
      width: 100%;
      border: 1px solid #25505E;

      img {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    .section {
      &__content {
        display: flex;
        flex-direction: column;

        @media (min-width: 64em) {
          flex-direction: row;
          margin: 0 -32px;
        }
      }

      &__head {
        margin-bottom: 24px;

        @media (min-width: 64em) {
          width: 100%;
          max-width: 48%;
          margin: 0;
          padding: 0 32px;
        }
      }

      &__main {
        @media (min-width: 64em) {
          width: 100%;
          max-width: 52%;
          padding: 0 32px;
        }

        span {
          color: #E4CD71;
          font-size: 0.625rem;
          font-weight: 400;
          line-height: 140%;
          text-transform: uppercase;

          @media (min-width: 77.5em) {
            font-size: 0.875rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.375rem;
          }
        }
      }
    }
  }

  &-commands {
    position: relative;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    .code {
      width: 100%;
      border: 1px solid #25505E;

      img {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    .section {
      &__content {
        display: flex;
        flex-direction: column;

        @media (min-width: 64em) {
          flex-direction: row;
          margin-left: -32px;
          margin-right: -32px;
        }
      }

      &__head {
        margin-bottom: 24px;

        @media (min-width: 64em) {
          width: 100%;
          max-width: 48%;
          margin: 0;
          padding: 0 32px;
        }
      }

      &__main {
        margin-bottom: 24px;

        @media (min-width: 64em) {
          width: 100%;
          max-width: 52%;
          padding: 0 32px;
        }

        span {
          color: #E4CD71;
          font-size: 0.625rem;
          font-weight: 400;
          line-height: 140%;
          text-transform: uppercase;

          @media (min-width: 77.5em) {
            font-size: 0.875rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.375rem;
          }
        }
      }

      &__foot {
        padding-left: 24px;
        border-left: 2px solid #E4CD71;

        p {
          &:last-of-type {
            font-size: 0.875rem;

            @media (min-width: 77.5em) {
              font-size: 1rem;
            }

            @media (min-width: 158.75em) {
              font-size: 1.125rem;
            }
          }
        }
      }
    }

    .card {
      width: 100%;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid #2C7773;
      background: #00333C;

      @media (min-width: 77.5em) {
        padding: 28px;
      }

      @media (min-width: 158.75em) {
        padding: 32px;
      }

      &__head {
        margin-bottom: 10px;

        @media (min-width: 77.5em) {
          margin-bottom: 20px;
        }

        code {
          padding: 10px 0;
          border-bottom: 1px solid #2C7773;

          @media (min-width: 77.5em) {
            padding: 20px 0;
          }
        }
      }

      &__main {
        span {
          color: #A9B9BC;
          text-transform: none;
        }
      }
    }

    .q-list {
      flex-direction: column;

      @media (min-width: 37.5em) {
        flex-direction: row;
        margin: 0 -10px;
      }
    }

    .q-item {
      flex: auto;
      min-height: 0;
      padding: 0;

      &:first-of-type {
        margin-bottom: 20px;

        @media (min-width: 37.5em) {
          flex: 15%;
          margin: 0;
          padding: 0 10px;
        }

        code {
          color: #fff;
        }
      }
    }
  }

  &-search {
    background: #06273B;
    padding: 40px 0;

    @media (min-width: 77.5em) {
      padding: 80px 0;
    }

    @media (min-width: 158.5em) {
      padding: 100px 0;
    }

    .code {
      width: 100%;
      border: 1px solid #25505E;

      img {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    .section {
      &__content {
        display: flex;
        flex-direction: column;

        @media (min-width: 64em) {
          flex-direction: row;
          margin: 0 -32px;
        }
      }

      &__head {
        margin-bottom: 24px;

        @media (min-width: 64em) {
          width: 100%;
          max-width: 48%;
          margin: 0;
          padding: 0 32px;
        }
      }

      &__main {
        @media (min-width: 64em) {
          width: 100%;
          max-width: 52%;
          padding: 0 32px;
        }

        span {
          color: #E4CD71;
          font-size: 0.625rem;
          font-weight: 400;
          line-height: 140%;
          text-transform: uppercase;

          @media (min-width: 77.5em) {
            font-size: 0.875rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.375rem;
          }
        }
      }
    }
  }

  &-profiles {
    position: relative;
    padding: 40px 0;

    @media (min-width: 48em) {
      padding: 60px 0;
    }

    @media (min-width: 64em) {
      padding: 80px 0;
    }

    @media (min-width: 77.5em) {
      padding: 100px 0;
    }

    @media (min-width: 158.5em) {
      padding: 120px 0;
    }

    .code {
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #25505E;

      @media (min-width: 77.5em) {
        margin-bottom: 20px;
      }

      img {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
      }
    }

    .commands {
      span {
        color: #FFF;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media (min-width: 77.5em) {
          font-size: 1.125rem;
        }

        @media (min-width: 118.5em) {
          font-size: 1.25rem;
        }

        @media (min-width: 158.5em) {
          font-size: 1.375rem;
        }

        &:not(:last-child) {
          margin-bottom: 6px;

          @media (min-width: 77.5em) {
            margin-bottom: 12px;
          }
        }
      }
    }

    .q-icon {
      font-size: 22px;
      color: #E4CD71;
      transform: rotate(90deg);

      @media (min-width: 64em) {
        transform: none;
        margin-bottom: 12px;
      }
    }

    .section {
      &__head {
        @media (min-width: 77.5em) {
          max-width: 75%;
        }
      }

      &__main {
        margin-bottom: 16px;

        @media (min-width: 64em) {
          margin-bottom: 32px;
        }

        @media (min-width: 77.5em) {
          margin-bottom: 40px;
        }

        .q-list {
          flex-direction: column;

          @media (min-width: 37.5em) {
            flex-direction: row;
            justify-content: center;
            margin: 0 -8px;
          }

          @media (min-width: 64em) {
            flex-wrap: nowrap;
          }

          @media (min-width: 77.5em) {
            margin: 0 -16px;
          }

          @media (min-width: 158.5em) {
            margin: 0 -24px;
          }

          span {
            &:not(.commands span) {
              margin-bottom: 10px;
              color: #E4CD71;
              font-size: 0.625rem;
              font-weight: 600;
              line-height: 140%;
              letter-spacing: 0.39px;
              text-transform: uppercase;

              @media (min-width: 77.5em) {
                margin-bottom: 16px;
                font-size: 0.875rem;
                letter-spacing: 0.7px;
              }

              @media (min-width: 118.5em) {
                font-size: 1.125rem;
              }

              @media (min-width: 158.5em) {
                font-size: 1.375rem;
              }

              &:nth-of-type(2) {
                color: #A9B9BC;
                font-weight: 400;
              }
            }

          }
        }

        .q-item {
          width: 100%;
          min-height: auto;
          padding: 0;
          margin-bottom: 24px;

          @media (min-width: 37.5em) {
            padding: 0 8px;
          }

          @media (min-width: 64em) {
            width: calc(100% / 3);
            margin: 0;
          }

          @media (min-width: 77.5em) {
            padding: 0 16px;
          }

          @media (min-width: 90em) {
            width: 35%;
          }

          @media (min-width: 158.5em) {
            padding: 0 24px;
          }

          &:nth-of-type(2) {
            order: 3;
          }

          &:last-of-type {
            order: 2;

            @media (min-width: 90em) {
              width: 30%;
            }

            .q-item__section {
              flex-direction: column-reverse;

              @media (min-width: 64em) {
                flex-direction: column;
              }
            }
          }
        }
      }

      &__foot {
        p {
          color: #E4CD71;
          font-size: 1rem;
          font-weight: 400;
          line-height: 160%;

          @media (min-width: 77.5em) {
            font-size: 1.125rem;
          }

          @media (min-width: 118.5em) {
            font-size: 1.25rem;
          }

          @media (min-width: 158.5em) {
            font-size: 1.375rem;
          }
        }

        .q-list {
          flex-direction: column;
          padding: 12px 0;
          margin-bottom: 20px;
          border-top: 1px solid #2C7773;
          border-bottom: 1px solid #2C7773;

          @media (min-width: 48em) {
            flex-direction: row;
            justify-content: space-between;
            margin: 0 -16px 20px;
          }

          @media (min-width: 77.5em) {
            padding: 24px 0;
            margin-bottom: 40px;
          }
        }

        .q-item {
          min-height: 0;
          padding: 0;

          @media (min-width: 48em) {
            padding: 0 16px;
          }

          &:not(:last-child) {
            margin-bottom: 16px;

            @media (min-width: 48em) {
              margin: 0;
            }
          }
        }
      }
    }
  }

  &-faq {
    position: relative;
    padding: 48px 0;

    @media (min-width: 77.5em) {
      padding: 96px 0;
    }

    &:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 0;
      display: none;
      width: 308px;
      height: 215px;
      background:
        linear-gradient(
          -234deg,
          rgba(1, 28, 55, 0) 0%,
          rgba(1, 28, 55, 0.92) 61.96%,
          #011c37 100%
        ),
        url("../../assets/images/decor/Decor-3.png")
        center / cover no-repeat;
      pointer-events: none;

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 90em) {
        width: 408px;
        height: 340px;
      }
    }

    .section {
      &__body {
        display: flex;
        flex-direction: column;
        margin: 0 -12px;

        @media (min-width: 64em) {
          flex-direction: row;
        }

        @media (min-width: 77.5em) {
          margin: 0 -24px;
        }
      }

      &__head {
        padding: 0 12px;

        @media (min-width: 64em) {
          max-width: 40%;
        }

        @media (min-width: 77.5em) {
          padding: 0 24px;
        }
      }

      &__main {
        flex: 1;
        padding: 0 12px;

        @media (min-width: 77.5em) {
          padding: 0 24px;
        }
      }

      &__description {
        color: #A9B9BC;
      }
    }

    .q-expansion-item {
      padding: 16px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      font-size: 0.938rem;
      line-height: 120%;
      font-weight: 600;
      background-color: #012243;
      transition: 0.25s background-color;

      @media (min-width: 77.5em) {
        font-size: 1.125rem;
        padding: 24px;
      }

      @media (min-width: 158.75em) {
        font-size: 1.375rem;
      }

      &--expanded {
        background-color: #003548;
      }

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    :deep {
      .q-item {
        padding: 0;
        min-height: auto;

        .q-focus-helper {
          display: none;
        }
      }
    }

    .q-card {
      background: transparent;
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 150%;
      color: #A9B9BC;

      @media (min-width: 77.5em) {
        font-size: 1.125rem;
      }

      @media (min-width: 158.75em) {
        font-size: 1.375rem;
      }

      &__section {
        padding: 12px 0 0;

        @media (min-width: 77.5em) {
          padding-top: 16px;
        }
      }
    }

    .q-icon {
      color: #E4CD71;
    }
  }

  &-cta {
    position: relative;
    background: #1A585A;
    padding: 40px 0;
    text-align: center;

    @media (min-width: 48em) {
      padding: 60px 0;
    }

    @media (min-width: 64em) {
      padding: 80px 0;
    }

    @media (min-width: 77.5em) {
      padding: 100px 0;
    }

    @media (min-width: 158.5em) {
      padding: 120px 0;
    }

    &:before {
      content: '';
      position: absolute;
      z-index: 0;
      top: 0;
      bottom: 0;
      left: 0;
      display: none;
      width: 155px;
      height: calc(100% - 40px);
      margin: auto;
      background: url("../../assets/images/decor/Decor-3.png") center / cover no-repeat;
      pointer-events: none;

      @media (min-width: 64em) {
        display: inline-block;
      }

      @media (min-width: 77.5em) {
        width: 170px;
        height: calc(100% - 80px);
      }

      @media (min-width: 90em) {
        width: 180px;
      }

      @media (min-width: 158.5em) {
        width: 220px;
      }
    }
  }
}

img {
  height: auto;
}

code {
  color: #0AFDFF;
  font-family: monospace;
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;

  @media (min-width: 77.5em) {
    font-size: 1.125rem;
  }

  @media (min-width: 118.5em) {
    font-size: 1.25rem;
  }

  @media (min-width: 158.5em) {
    font-size: 1.375rem;
  }
}

.note {
  &:before {
    display: none;

    @media (min-width: 64em) {
      display: inline-block;
    }
  }
}

.code {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #040E1B;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.40);

  @media (min-width: 77.5em) {
    border-radius: 12px;
  }

  code {
    padding: 12px 16px;

    @media (min-width: 48em) {
      padding: 24px 20px;
    }

    @media (min-width: 64em) {
      padding: 28px 24px;
    }

    @media (min-width: 77.5em) {
      padding: 30px 28px;
    }
  }
}
</style>
