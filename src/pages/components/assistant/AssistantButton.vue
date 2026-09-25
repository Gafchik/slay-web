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
    :aria-label="assistantStore.isOpen ? t('assistant.closeLabel') : t('assistant.btn')"
    @click="assistantStore.toggle()"
  >
    <div class="assistant-fab__icon"
         :class="{ 'assistant-fab__icon--unread': assistantStore.hasUnreadReply }">
      <span>AI</span>
    </div>
    <span class="assistant-fab__label q-pl-sm q-pr-xl">{{ t('assistant.btn') }}</span>
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
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #2E5763;
  background: #061825;
  box-shadow: 0 8px 18px 0 rgba(0, 0, 0, 0.28);
  font-family: inherit;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  transition: 0.25s;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    visibility: hidden;
    opacity: 0;
    border-radius: inherit;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px dashed #38ADA3;
    pointer-events: none;
    transition: 0.25s;
  }

  &__icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 34px;
    height: 34px;
    padding: 9px;
    border-radius: 12px;
    border: 1px solid #2E5763;
    background: #09202D;
    font-size: 11px;
    line-height: 15px;
    color: #38ADA3;
    text-transform: uppercase;
    transition: 0.25s;

    &--unread::after {
      content: '';
      position: absolute;
      top: -3px;
      right: -3px;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border: 2px solid #061825;
      border-radius: 50%;
      background: #38ADA3;
      pointer-events: none;
    }
  }

  &__label {
    display: none;

    @media (min-width: 37.5em) {
      display: inline-flex;
    }
  }

  &:hover {
    background: #0B2B36;
    box-shadow: 0 8px 22px 0 rgba(0, 0, 0, 0.38);
  }

  &:active {
    .assistant {
      &-fab {
        &__icon {
          border-radius: 12px;
          border-color: #2E5763;
          background: #1A8F8C;
          color: #040E1B;
        }
      }
    }
  }

  &:focus-visible {
    border-color: #38ADA3;
    outline: none;

    &:before {
      visibility: visible;
      opacity: 1;
    }
  }

  &--open {
    border-color: #2E5763;
    outline: none;

    &:before {
      display: none;
    }

    .assistant {
      &-fab {
        &__icon {
          border-radius: 12px;
          border-color: #2E5763;
          background: #1A8F8C;
          color: #040E1B;
        }
      }
    }
  }
}
</style>
