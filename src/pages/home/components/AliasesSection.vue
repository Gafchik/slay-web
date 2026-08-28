<script setup>
  import { useI18n } from 'vue-i18n'

  import icon from 'src/assets/images/aliases/Icon.png'

  const { t } = useI18n()
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl">
    <div class="container">
      <div class="container-fluid">
        <div class="section__body q-pb-xl">
          <div class="section__head q-pb-xl">
            <span class="note q-mb-lg">
              {{ t('pages.home.aliases.note') }}
            </span>
            <h2 class="section__title q-mb-md">
              {{ t('pages.home.aliases.title') }}
            </h2>
          </div>
          <div class="section__main">
            <div class="flex justify-between">
              <div class="col-auto section__column--left">
                <div>
                  <p>
                    {{ t('pages.home.aliases.before.description') }}
                  </p>
                  <span class="badge">
                    {{ t('pages.home.aliases.before.badge') }}
                  </span>
                </div>
              </div>
              <div class="col-auto section__column--right">
                <div>
                  <q-img :src="icon"/>
                  <p>
                    {{ t('pages.home.aliases.after.description') }}
                  </p>
                  <span class="badge">
                    {{ t('pages.home.aliases.after.badge') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="section__foot q-pb-xl">
            <div class="flex justify-center">
              <p>
                {{ t('pages.home.aliases.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .section {
    position: relative;

    &__column {
      &--left {
        div {
          position: relative;
          width: 100%;
          max-width: 410px;
          padding: 18px 26px 60px;
          border-radius: 16px;
          background: linear-gradient(0deg, rgba(22, 91, 82, 0.24) 0%, rgba(22, 91, 82, 0.24) 100%), #012243;
          box-shadow: -5px -5px 15px 0 #022548, 5px 5px 15px 0 #01182F;

          &:before {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 100%;
            width: 410px;
            height: 100px;
            margin: auto;
            background-image: url("../../../../src/assets/images/aliases/Decor.svg");
            background-position: left center;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            pointer-events: none;

            @media (min-width: 90em) {
              width: 572px;
              height: 100px;
            }

            @media (min-width: 118.75em) {
              width: 970px;
              height: 120px;
            }
          }
        }

        .badge {
          right: 28px;
          bottom: -21px;
          background: #0AFDFF;
        }

        p {
          color: rgba(255, 255, 255, 0.86);
          font-size: 16px;
          font-weight: 400;
        }
      }

      &--right {
        position: relative;
        text-align: center;
        font-size: 20px;
        font-weight: 500;

        &:before {
          content: '';
          position: absolute;
          z-index: -11;
          bottom: 57px;
          right: calc(100% - 54px);
          width: 408px;
          height: 352px;
          background-image: url("../../../../src/assets/images/steps/Decor-1.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          pointer-events: none;
        }

        & > div {
          position: relative;
          width: 100%;
          max-width: 300px;
          padding: 148px 73px 64px;
          border-radius: 32px;
          border: 2px solid rgba(126, 113, 62, 0.00);
          background: #235753;
          box-shadow: -6px -6px 16px 0 #022548, 6px 6px 16px 0 #01182F;
        }

        p {
          color: #0AFDFF;
        }

        .badge {
          bottom: -21px;
          left: 0;
          right: 0;
          margin: auto;

          justify-self: center;
          background: #0FD09A;
        }

        .q-img {
          position: absolute;
          z-index: 1;
          top: -48px;
          left: 10px;
          right: 0;
          width: 210px;
          height: auto;
          margin: auto;
        }
      }
    }

    &__foot {
      p {
        width: 100%;
        max-width: 440px;
        margin-left: 100px;
        color: #6FEFF0;
        text-align: center;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;

        @media (min-width: 90em) {
          margin-top: -40px;
        }
      }
    }
  }

  .badge {
    position: absolute;
    z-index: 1;
    display: inline-flex;
    padding: 10px 24px;
    border-radius: 16px;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    color: #011C37;
  }
</style>

