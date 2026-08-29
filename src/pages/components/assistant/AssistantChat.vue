<script setup>
import { nextTick, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useAssistantStore } from 'src/stores/assistant-store'

marked.setOptions({ breaks: true })

const { t, tm } = useI18n()
const assistantStore = useAssistantStore()

const renderMarkdown = (content) => DOMPurify.sanitize(marked.parse(content))

const body = ref(null)

const scrollToBottom = () => {
  if (body.value) {
    body.value.scrollTop = body.value.scrollHeight
  }
}

watch(() => assistantStore.messages.length, () => nextTick(scrollToBottom))
watch(() => assistantStore.isOpen, (isOpen) => {
  if (isOpen) nextTick(scrollToBottom)
})

const submit = () => {
  assistantStore.sendMessage()
}

const pickSuggestion = (text) => {
  assistantStore.draft = text
}
</script>

<template>
  <div class="assistant-panel" :class="{ 'assistant-panel--open': assistantStore.isOpen }">
    <div class="assistant-panel__head">
      <div class="assistant-panel__avatar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1.5L10.4 6.6L15.5 8L10.4 9.4L9 14.5L7.6 9.4L2.5 8L7.6 6.6L9 1.5Z" fill="#00333C" />
        </svg>
      </div>
      <div class="assistant-panel__head-text">
        <div class="assistant-panel__title">{{ t('assistant.panelTitle') }}</div>
        <div class="assistant-panel__status">{{ t('assistant.status') }}</div>
      </div>
      <button type="button" class="assistant-panel__close" :aria-label="t('assistant.closeLabel')" @click="assistantStore.close()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div ref="body" class="assistant-panel__body">
      <div class="assistant-bubble assistant-bubble--assistant">{{ t('assistant.greeting') }}</div>

      <div
        v-for="(message, index) in assistantStore.messages"
        :key="index"
        class="assistant-bubble"
        :class="`assistant-bubble--${message.role}`"
      >
        <div v-if="message.role === 'assistant'" class="assistant-bubble__markdown" v-html="renderMarkdown(message.content)" />
        <template v-else>{{ message.content }}</template>
      </div>

      <div v-if="assistantStore.isSending" class="assistant-bubble assistant-bubble--assistant assistant-bubble--typing">
        <span class="assistant-dot" />
        <span class="assistant-dot" />
        <span class="assistant-dot" />
      </div>
    </div>

    <div v-if="!assistantStore.hasMessages" class="assistant-suggestions">
      <button
        v-for="text in tm('assistant.suggestions')"
        :key="text"
        type="button"
        class="assistant-suggestion"
        @click="pickSuggestion(text)"
      >
        {{ text }}
      </button>
    </div>

    <form class="assistant-panel__foot" @submit.prevent="submit">
      <input
        v-model="assistantStore.draft"
        type="text"
        :placeholder="t('assistant.placeholder')"
        :disabled="assistantStore.isSending"
      >
      <button type="submit" class="assistant-panel__send" :disabled="assistantStore.isSending || !assistantStore.draft.trim()">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#00333C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.assistant-panel {
  position: fixed;
  right: 32px;
  bottom: 108px;
  z-index: 3999;
  width: 480px;
  height: 680px;
  max-height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: rgba(0, 51, 60, 0.95);
  backdrop-filter: blur(30px) saturate(180%);
  box-shadow: 0 0 0 1px rgba(228, 205, 113, 0.25), 0 24px 64px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform-origin: bottom right;
  transform: scale(0.9) translateY(12px);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.assistant-panel--open {
  transform: scale(1) translateY(0);
  opacity: 1;
  pointer-events: auto;
}

.assistant-panel__head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex: none;
}

.assistant-panel__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00e1ff, #00ffaa);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}

.assistant-panel__head-text {
  flex: 1;
  min-width: 0;
}

.assistant-panel__title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}

.assistant-panel__status {
  font-size: 12px;
  color: #6ee7ff;
  display: flex;
  align-items: center;
  gap: 6px;

  &:before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #6ee7ff;
    box-shadow: 0 0 6px #6ee7ff;
  }
}

.assistant-panel__close {
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.6);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
}

.assistant-panel__body {
  flex: 1;
  overflow-y: auto;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.assistant-bubble {
  max-width: 84%;
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 152%;
  white-space: pre-line;
}

.assistant-bubble--assistant {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  border-bottom-left-radius: 4px;
}

.assistant-bubble--user {
  align-self: flex-end;
  background: #E4CD71;
  color: #00333C;
  font-weight: 600;
  border-bottom-right-radius: 4px;
}

.assistant-bubble__markdown {
  white-space: normal;

  :deep(*) {
    margin: 0;
    padding: 0;
  }

  :deep(p) {
    margin: 0 0 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    margin: 0 0 6px;
    font-size: 15px;
    font-weight: 700;
    color: #E4CD71;
  }

  :deep(strong) {
    color: #E4CD71;
    font-weight: 700;
  }

  :deep(ul),
  :deep(ol) {
    margin: 0 0 10px;
    padding-left: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  :deep(li) {
    margin-bottom: 4px;

    > p {
      margin: 0;
    }
  }

  :deep(a) {
    color: #03d5ff;
  }

  :deep(code) {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 6px;
    border-radius: 4px;
  }

  :deep(pre) {
    margin: 0 0 10px;
    padding: 12px 14px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.3);
    overflow-x: auto;

    code {
      background: none;
      padding: 0;
    }
  }
}

.assistant-bubble--typing {
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 14px 18px;
}

.assistant-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  animation: assistant-dot-bounce 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.15s; }
  &:nth-child(3) { animation-delay: 0.3s; }
}

@keyframes assistant-dot-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-4px); opacity: 1; }
}

.assistant-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 20px 16px;
  flex: none;
}

.assistant-suggestion {
  appearance: none;
  cursor: pointer;
  font-family: inherit;
  border-radius: 999px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: rgba(228, 205, 113, 0.5);
    color: #E4CD71;
  }
}

.assistant-panel__foot {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  input {
    flex: 1;
    min-width: 0;
    font-family: inherit;
    font-size: 14px;
    color: #fff;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    padding: 12px 16px;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }

    &:disabled {
      opacity: 0.5;
    }
  }
}

.assistant-panel__send {
  flex: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: #E4CD71;
  color: #00333C;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }
}

@media (max-width: 37.5em) {
  .assistant-panel {
    inset: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    transform: translateY(100%);

    &.assistant-panel--open {
      transform: translateY(0);
    }
  }

  .assistant-panel__head {
    padding-top: max(18px, env(safe-area-inset-top));
  }

  .assistant-panel__foot {
    padding-bottom: max(14px, env(safe-area-inset-bottom));
  }
}
</style>
