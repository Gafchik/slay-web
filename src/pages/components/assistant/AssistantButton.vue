<script setup>
import { useI18n } from 'vue-i18n'
import { useAssistantStore } from 'src/stores/assistant-store'

const { t } = useI18n()
const assistantStore = useAssistantStore()
</script>

<template>
  <button
    type="button"
    class="assistant-fab"
    :class="{ 'assistant-fab--open': assistantStore.isOpen }"
    :aria-label="assistantStore.isOpen ? t('assistant.closeLabel') : t('assistant.openLabel')"
    @click="assistantStore.toggle()"
  >
    <svg v-if="assistantStore.isOpen" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
    <svg v-else width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9.5C3 5.91 6.36 3 10.5 3S18 5.91 18 9.5 14.64 16 10.5 16c-.86 0-1.68-.12-2.44-.35L4 17l1.06-3.19A6.4 6.4 0 013 9.5z" stroke="#00333C" stroke-width="1.6" stroke-linejoin="round" />
    </svg>
    <span v-if="!assistantStore.isOpen" class="assistant-fab__label">{{ t('assistant.openLabel') }}</span>
  </button>
</template>

<style scoped lang="scss">
.assistant-fab {
  position: fixed;
  right: 32px;
  bottom: 32px;
  z-index: 4000;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 22px 16px 18px;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: #E4CD71;
  color: #00333C;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 0 0 1px rgba(228, 205, 113, 0.3), 0 12px 32px rgba(228, 205, 113, 0.25), 0 0 24px rgba(228, 205, 113, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  animation: assistant-fab-pulse 2.8s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 0 1px rgba(228, 205, 113, 0.4), 0 16px 36px rgba(228, 205, 113, 0.35), 0 0 30px rgba(228, 205, 113, 0.45);
  }
}

.assistant-fab--open {
  background: #00333C;
  color: #fff;
  border: 1px solid rgba(228, 205, 113, 0.5);
  animation: none;
}

@keyframes assistant-fab-pulse {
  0%, 100% { box-shadow: 0 0 0 1px rgba(228, 205, 113, 0.3), 0 12px 32px rgba(228, 205, 113, 0.25), 0 0 20px rgba(228, 205, 113, 0.3); }
  50% { box-shadow: 0 0 0 1px rgba(228, 205, 113, 0.3), 0 12px 32px rgba(228, 205, 113, 0.25), 0 0 34px rgba(228, 205, 113, 0.55); }
}

@media (max-width: 37.5em) {
  .assistant-fab {
    right: 20px;
    bottom: 24px;
    width: 60px;
    height: 60px;
    padding: 0;
    justify-content: center;
  }

  .assistant-fab__label {
    display: none;
  }
}
</style>
