<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n'

  import Video1 from 'assets/video/alias/Alias-full.mp4'
  import Video2 from 'assets/video/alias/Alias-full.webm'

  const { t } = useI18n()

  const aliasFeatures = ref([
    {
      title: t('sections.alias.list.titlePersonally'),
      description: t('sections.alias.list.descriptionPersonally'),
    },
    {
      title: t('sections.alias.list.titleSimple'),
      description: t('sections.alias.list.descriptionSimple'),
    },
    {
      title: t('sections.alias.list.titleIncrease'),
      description: t('sections.alias.list.descriptionIncrease'),
    }
  ])
</script>

<template>
  <section class="section q-py-xl">
    <div class="container">
      <div class="section__body q-mb-xl">
        <div class="section__main">
          <div class="row">
            <div class="col-4">
              <div class="q-px-xl">
                <h2 class="q-mb-xl q-pt-lg">{{t('sections.alias.title')}}</h2>
                <p class="description-big">{{t('sections.alias.description')}}</p>
              </div>
            </div>
            <div class="col-8">
              <div class="video">
                <video preload="auto" autoplay muted loop playsinline width="100%" height="100%">
                  <source :src="Video1" type="video/webm">
                  <source :src="Video2" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
          <ul class="row list liquid-glass">
            <li
              v-for="(feature, index) in aliasFeatures"
              :key="index"
              class="col-4 q-pa-xl scroll-feature"
              :class="{ active: aliasFeatures === index + 1 }"
              @click="aliasFeatures = index + 1"
            >
              <h4 class="q-mb-md">{{ feature.title }}</h4>
              <p class="description">{{ feature.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .video {
    border-radius: 20px 20px 0 0;
    border: 1px solid white;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, black 0%, black 40%, transparent 100%);
  }

  .list {
    border-radius: 0 0 20px 20px;
    mask-image: linear-gradient(to top, black 0%, black 80%, transparent 100%);

    li {
      &:nth-child(2) {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
      }
    }
  }
</style>

