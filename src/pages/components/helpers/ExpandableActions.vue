<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'

const containerRef = ref(null)
const widthVar = ref('0px')

const props = defineProps({
  id: {
    type: [Number, String],
    default: null,
  },
  animation: {
    type: String,
    default: 'slide-left',
    validator: (value) => ['slide-left', 'slide-right'].includes(value),
  },
})

const { t } = useI18n()

const isOpen = ref(false)

const direction = computed(() => (props.animation === 'slide-right' ? 'right' : 'left'))

const toggle = () => {
  isOpen.value = !isOpen.value
  nextTick(() => {
    updateWidth()
  })
}

const updateWidth = () => {
  const container = containerRef.value
  if (!container) return
  const buttons = container.querySelectorAll('button')
  const count = buttons.length
  const buttonWidth = 40
  const totalWidth = count * buttonWidth
  widthVar.value = totalWidth + 'px'

  container.style.setProperty('--slide-width', widthVar.value)
}

onMounted(updateWidth)
</script>

<template>
  <div
    class="row items-center no-wrap"
    :class="{
      reverse: direction === 'right',
      'justify-end': direction === 'left',
      'justify-start': direction === 'right',
    }"
  >
    <transition :name="`slide-${direction}`">
      <div
        v-if="isOpen"
        ref="containerRef"
        class="flex no-wrap overflow-hidden slide-container"
      >
        <slot />
      </div>
    </transition>

    <slot name="trigger">
      <q-btn
        flat
        dense
        class="btn-icon"
        color="white"
        icon="more_vert"
        :class="isOpen ? 'active' : ''"
        @click.stop="toggle"
      >
        <q-tooltip>
          {{ isOpen ? t('buttons.hide') : t('buttons.show') + ' ' + t('buttons.more') }}
        </q-tooltip>
      </q-btn>
    </slot>
  </div>
</template>

<style scoped>
.q-btn {
  --slide-width: 48px
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.slide-left-enter-from,
.slide-left-leave-to,
.slide-right-enter-from,
.slide-right-leave-to{
  width: 0;
  opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from {
  width: var(--slide-width, 120px);
  opacity: 1;
}

.slide-container {
  white-space: nowrap;
}
.active:before {
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4) !important;
}
</style>
