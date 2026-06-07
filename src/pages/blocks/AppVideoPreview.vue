<template>
  <video
    class="app-video-preview"
    preload="auto"
    autoplay
    muted
    loop
    playsinline
    width="100%"
    height="100%"
    @click="handleClick"
  >
    <source v-if="mp4" :src="mp4" type="video/mp4" />
    <source v-if="webm" :src="webm" type="video/webm" />
  </video>

  <q-btn
    unelevated
    rounded
    class="btn-icon"
    icon="open_in_full"
    @click="handleClick"
  />
</template>

<script setup>
import { useVideoDialog } from 'src/composables/useVideoDialog'

const props = defineProps({
  mp4: {
    type: String,
    default: '',
  },
  webm: {
    type: String,
    default: '',
  },
})

const { open } = useVideoDialog()

const handleClick = () => {
  const videoSources = []

  if (props.mp4) {
    videoSources.push({
      src: props.mp4,
      type: 'video/mp4',
    })
  }

  if (props.webm) {
    videoSources.push({
      src: props.webm,
      type: 'video/webm',
    })
  }

  open(videoSources)
}
</script>

<style scoped lang="scss">
.app-video-preview {
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  display: block;
}
</style>
