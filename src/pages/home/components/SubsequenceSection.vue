<script setup>
import { ref } from 'vue'

const listSteps = ref([
  {
    title: 'Find the project folder',
  },
  {
    title: 'Open the right IDE',
  },
  {
    title: 'Launch required apps',
  },
  {
    title: 'Search for credentials',
  },
  {
    title: 'Connect to SSH/SFTP',
  },
  {
    title: 'Run saved commands',
  },
  {
    title: 'Reopen notes and context',
  },
]);
</script>

<template>
  <section class="section text-white q-pb-xl q-mb-xl">
    <div class="container">
      <div class="section__body">
        <div class="section__head q-mb-xl">
          <span class="note q-mb-lg">ONE-CLICK WORKFLOW</span>
          <h2 class="section__title q-mb-md">How many steps before work actually starts?</h2>
          <p class="section__subtitle">Every project starts with folders, apps, credentials, servers, commands, and context. Slay turns that setup into one workspace launch.</p>
        </div>
        <div class="section__main">

          <div class="flex">
            <div class="col">
              <div class="routine flex justify-between items-center q-mb-sm">
                <span>Before Slay</span>
                <span>Repeat every morning</span>
              </div>
              <q-list class="column">
                <q-item v-for="(item, index) in listSteps" :key="index" class="q-mb-md">
                  <div class="q-item__body">
                    <q-item-section class="q-pa-none">
                      <q-item-label>{{ item.title }}</q-item-label>
                    </q-item-section>
                  </div>
                </q-item>
              </q-list>
            </div>
            <div class="col">
              <div class="routine flex items-center  q-mb-xs">
                <span>With Slay</span>
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


    &__head {
      max-width: 40%;
    }
  }

  .q-list {
    color: #0AFDFF;
    font-size: 20px;
    line-height: normal;
    font-weight: 500;
    counter-reset: item;

    .q-item {
      padding: 24px 20px;
      border-radius: 16px;
      background: #012243;
      box-shadow: -5px -5px 15px 0 #01203F, 5px 5px 15px 0 #01182F;

      &:before {
        counter-increment: item;
        content: counter(item) ".";
        margin-right: 12px;
      }

      &__body {
        display: flex;
        align-items: center;
      }
    }
  }

  .routine {
    position: relative;
    z-index: 1;
    color: #E4CD71;
    font-size: 20px;
    line-height: 36px;
    font-style: italic;
    font-weight: 400;

    span {
      &:last-child:not(:first-child) {
        padding: 0 24px;
        color: #011C37;
        border-radius: 16px;
        background: #0AFDFF;
      }
    }
  }
</style>
