<script setup>
import { ref } from 'vue'

import icon from 'src/assets/images/distinction/Icon-2.png'
import icon3 from 'src/assets/images/distinction/Icon-3.png'

const listCompetitors = ref([
  {
    title: 'SSH/SFTP client',
    price: '$120/year'
  },
  {
    title: 'Password vault',
    price: '$36/year'
  },
  {
    title: 'Terminal productivity',
    price: '$180/year'
  },
  {
    title: 'Workspace launcher',
    price: '$60/year'
  },
  {
    title: 'Manual setup',
    price: 'every week'
  },
  {
    title: 'Context switching',
    price: 'every day'
  },
]);

const listFeatures = ref([
  {
    title: 'Projects',
  },
  {
    title: 'Apps',
  },
  {
    title: 'Commands',
  },
  {
    title: 'Credentials',
  },
  {
    title: 'Password manager',
  },
  {
    title: 'SSH/SFTP',
  },
]);
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl">
    <div class="container">
      <div class="section__body">
        <div class="section__head q-mb-xl">
          <span class="note q-mb-lg">WORKFLOW COST</span>
          <h1 class="section__title q-mb-md">How much does your scattered workflow cost you?</h1>
          <p class="section__subtitle">Instead of paying for separate launchers, vaults, SSH clients, and command tools, get one workspace that brings them together.</p>
        </div>
        <div class="section__main">
          <div class="flex">
            <div class="col">
              <div class="section__column section__column--left">
                <div class="section__column-content column items-center">
                  <q-img :src="icon" class="q-mb-sm"/>
                  <span class="q-pb-lg">Your current workflow</span>
                  <q-list class="column">
                    <q-item v-for="(item, index) in listCompetitors" :key="index">
                      <div class="q-item__body">
                        <q-item-section class="row justify-between no-wrap q-pa-none">
                          <q-item-label>{{ item.title }}</q-item-label>
                          <q-item-label>{{ item.price }}</q-item-label>
                        </q-item-section>
                      </div>
                    </q-item>
                  </q-list>
                  <p>Total: $155-$371/year</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="section__column section__column--right">
                <div class="section__column-content column items-center">
                  <span class="q-pb-lg">Slay workspace</span>
                  <div class="price q-mb-lg">
                    <q-img :src="icon3"/>
                    <span>monthly</span>
                  </div>
                  <q-list class="column">
                    <q-item v-for="(item, index) in listFeatures" :key="index">
                      <div class="q-item__body">
                        <q-item-section class="q-pa-none">
                          <q-item-label>{{ item.title }}</q-item-label>
                        </q-item-section>
                      </div>
                    </q-item>
                  </q-list>
                </div>
              </div>
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

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      top: -240px;
      right: 0;
      height: 80%;
      width: 100%;
      background: linear-gradient(180deg, #013A4C 0%, #42938A 38.17%, #011C37 100%);
      clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
    }

    &__head {
      color: #011C37;
    }

    &__title {
      text-align: center;
    }

    &__subtitle {
      width: 100%;
      max-width: 65%;
      margin: 0 auto;
      text-align: center;
      color: inherit;
    }

    &__main {
      background-position: center;
      background-repeat: no-repeat;
      background-size: 200px auto;
      background-image: url("../../../assets/images/distinction/Icon-1.png");
    }

    &__column {
      background-repeat: no-repeat;

      p {
        position: relative;
        font-size: 20px;
        border: 1px solid rgba(255,255,255,0.5);
        border-radius: 6px;
        padding: 18px;

        &:before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          margin: auto;
          width: 100px;
          height: 2px;
          border-radius: 50%;
          background: linear-gradient(90deg, rgba(#013A4C, 0) 0%, #0AFDFF 50%, rgba(#013A4C, 0) 100%);
          box-shadow: 0 0 10px #0AFDFF;
        }
      }

      .q-list {
        width: 100%;

        .q-item {
          &__body {
            display: flex;
            align-items: center;
            width: 100%;
          }
        }
      }

      &-content {
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
      }

      &--left {
        padding-top: 85px;
        padding-right: 10px;
        padding-bottom: 225px;
        background-position: top center;
        background-image: url("../../../assets/images/distinction/Background-left.png");
        background-size: auto 100%;

        span {
          position: relative;
          width: 100%;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          text-align: center;
          font-size: 18px;

          &:before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            margin: auto;
            width: 4px;
            height: 4px;
            border-radius: 50px;
            background-color: #0AFDFF;
            box-shadow: 0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF,
            0 0 10px #0AFDFF;
          }
        }

        .q-img {
          width: 60px;
        }

        .q-list {
          margin: 0 auto 24px;

          .q-item {
            padding: 16px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.2);

            &__section {
              flex-direction: row;
            }

            &__label {
              white-space: nowrap;
              margin: 0;
            }

            &:last-child {
              &:before {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                margin: auto;
                width: 4px;
                height: 4px;
                border-radius: 50px;
                background-color: #0AFDFF;
                box-shadow: 0 0 10px #0AFDFF,
                0 0 10px #0AFDFF,
                0 0 10px #0AFDFF,
                0 0 10px #0AFDFF,
                0 0 10px #0AFDFF,
                0 0 10px #0AFDFF;
              }
            }
          }
        }
      }

      &--right {
        padding-top: 80px;
        padding-bottom: 70px;
        background-image: url("../../../assets/images/distinction/Background-right.png");
        background-position: top 10px center;
        background-size: auto 100%;

        span {
          display: block;
          color: #E4CD71;
          font-size: 38px;
        }

        .price {
          span {
            &:first-child {
              font-size: 200px;
            }
          }
        }

        .q-img {
          width: 160px;
        }

        .q-list {
          font-size: 20px;

          .q-item {
            display: flex;
            align-items: center;

            &:before {
              content: '';
              width: 8px;
              height: 16px;
              border: solid #E4CD71;
              border-width: 0 3px 3px 0;
              transform-origin: center;
              transform: rotate(45deg) translateY(7px) translateX(-10px);
            }
          }
        }
      }
    }
  }


</style>
