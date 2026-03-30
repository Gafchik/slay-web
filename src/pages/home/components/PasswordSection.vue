<script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  import aesIcon from 'src/assets/AES.png'
  import FrameIcon from 'src/assets/Folder.png'
  import DefenseIcon from 'src/assets/Password.png'
  import SafetyIcon from 'src/assets/Safety.png'

  const { t } = useI18n()

  const passwordFeatures = ref([
    {
      title: t('sections.password.list.titleCoding'),
      description: t('sections.password.list.descriptionCoding'),
      icon: aesIcon
    },
    {
      title: t('sections.password.list.titleFrame'),
      description: t('sections.password.list.descriptionFrame'),
      icon: FrameIcon
    },
    {
      title: t('sections.password.list.titleDefense'),
      description: t('sections.password.list.descriptionDefense'),
      icon: DefenseIcon
    },
    {
      title: t('sections.password.list.titleSafety'),
      description: t('sections.password.list.descriptionSafety'),
      icon: SafetyIcon
    }
  ])
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body q-mb-xl">
        <div class="section__main">
          <div class="row flex-center">
            <div class="col-10 q-mx-auto">
              <div class="q-mb-xl text-center text-white">
                <h2 class="q-mb-lg">{{t('sections.password.title')}}</h2>
                <p class="description-big">{{t('sections.password.description')}}</p>
              </div>
              <div class="col-10">
                <q-list class="row text-white" ref="listDataEl">
                  <q-item v-for="(item, index) in passwordFeatures"
                          :key="index" class="col-6 q-pb-md q-px-md">
                    <q-item-section avatar class="flex flex-center q-pa-md text-center">
                      <q-img
                        :src="item.icon"
                        width="128px"
                        height="128px"
                      />
                      <span class="q-mb-md">{{ item.title }}</span>
                      <p>{{ item.description }}</p>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .q-list {
    .q-item__section {
      border: 1px solid white;
      border-radius: 20px;
    }

    span {
      font-size: 20px;
      line-height: 24px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      opacity: 0.7;
    }
  }
</style>
