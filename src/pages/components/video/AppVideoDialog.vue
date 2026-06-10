<script setup>
  import { nextTick, ref, watch } from 'vue'
  import { useVideoDialog } from 'src/composables/useVideoDialog.js'

  const { isOpen, sources, close } = useVideoDialog()
  const videoRef = ref(null)
  const dialogModel = ref(false)

  const handleClose = () => {
    videoRef.value?.pause()
    close()
  }

  watch(
    () => isOpen.value,
    async (value) => {
      dialogModel.value = value

      if (value) {
        await nextTick()
        videoRef.value?.load()
        videoRef.value?.play().catch(() => {})
      } else {
        videoRef.value?.pause()
      }
    },
    { immediate: true }
  )

  watch(
    () => dialogModel.value,
    (value) => {
      if (!value && isOpen.value) {
        handleClose()
      }
    }
  )
</script>

<template>
  <q-dialog v-model="dialogModel" maximized>
    <div class="app-video-dialog">
      <q-btn
        icon="close"
        flat
        round
        color="white"
        class="app-video-dialog__close"
        @click="handleClose"
      />

      <video
        v-if="sources.length"
        ref="videoRef"
        class="app-video-dialog__video"
        controls
        autoplay
        playsinline
      >
        <source
          v-for="(source, index) in sources"
          :key="index"
          :src="source.src"
          :type="source.type"
        />
      </video>
    </div>
  </q-dialog>
</template>

<style scoped lang="scss">
.app-video-dialog {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.96);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
  overflow: hidden;

  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
  }

  &__video {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
}
</style>
