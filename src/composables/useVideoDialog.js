import { readonly, ref } from 'vue'

const isOpen = ref(false)
const sources = ref([])

export function useVideoDialog() {
  const open = (videoSources) => {
    sources.value = videoSources
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
    sources.value = []
  }

  return {
    isOpen: readonly(isOpen),
    sources: readonly(sources),
    open,
    close,
  }
}
