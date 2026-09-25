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
  assistantStore.draft = text;
  submit();
}
</script>

<template>
  <div class="assistant-panel" :class="{ 'assistant-panel--open': assistantStore.isOpen }">
    <div class="assistant-panel__head">
      <div class="assistant-panel__avatar"
           :class="{ 'assistant-panel__avatar--unread': assistantStore.hasUnreadReply }">
        <span>AI</span>
      </div>
      <div class="assistant-panel__head-text">
        <div class="assistant-panel__title q-mb-xs">{{ t('assistant.title') }}</div>
        <div class="assistant-panel__subtitle">{{ t('assistant.subtitle') }}</div>
      </div>
      <button type="button" class="assistant-panel__close"
              :aria-label="t('assistant.closeLabel')"
              @click="assistantStore.close()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <div class="assistant-panel__body" ref="body" >
      <div class="assistant-bubble assistant-bubble--assistant">
        <span class="q-mb-xs">{{ t('assistant.title') }}</span>
        <p>{{ t('assistant.greeting') }}</p>
      </div>

      <div
        v-for="(message, index) in assistantStore.messages"
        :key="index"
        class="assistant-bubble"
        :class="`assistant-bubble--${message.role}`"
      >
        <span>{{message.role === 'assistant' ?  t('assistant.title') : message.role}}</span>
        <div class="assistant-bubble__markdown"
             v-if="message.role === 'assistant'"
             v-html="renderMarkdown(message.content)" />
          <template v-else>
            <p>{{ message.content }}</p>
          </template>
        </div>

      <div class="assistant-bubble assistant-bubble--assistant assistant-bubble--typing"
           v-if="assistantStore.isSending" >
        <span class="assistant-dot" />
        <span class="assistant-dot" />
        <span class="assistant-dot" />
        <span>{{ t('assistant.typing') }}</span>
      </div>

      <div v-if="!assistantStore.hasMessages" class="assistant-suggestions">
        <q-btn flat
               rounded
               dense
               icon-right="keyboard_arrow_right"
               align="left"
               class="assistant-suggestion"
               v-for="text in tm('assistant.suggestions')"
               :key="text"
               @click="pickSuggestion(text)"
        >
          {{ text }}
        </q-btn>
      </div>
    </div>

    <form class="assistant-panel__foot" @submit.prevent="submit">
      <textarea
        v-model="assistantStore.draft"
        :class="{ 'assistant-panel__textarea--error': assistantStore.hasSendError }"
        :placeholder="t('assistant.placeholder')"
        :disabled="assistantStore.isSending"
        @focus="assistantStore.markReplyRead()"
      ></textarea>
      <button type="submit" class="assistant-panel__send"
              :disabled="assistantStore.isSending || !assistantStore.draft.trim()">
        <q-icon :name="assistantStore.isSending ? 'stop' : assistantStore.hasSendError ? 'refresh' : 'arrow_upward'"/>
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.assistant {
  &-panel {
    position: fixed;
    right: 32px;
    bottom: 108px;
    z-index: 3999;
    width: 480px;
    height: 680px;
    max-height: calc(100vh - 140px);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform-origin: bottom right;
    transform: scale(0.9) translateY(12px);
    opacity: 0;
    border-radius: 22px;
    border: 1px solid #2E5763;
    background: #061825;
    box-shadow: 0 16px 34px 0 rgba(0, 0, 0, 0.42);
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;

    &__head {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px 20px;
      border-bottom: 1px solid #2E5763;
      flex: none;

      &-text {
        flex: 1;
        min-width: 0;
      }
    }

    &__body,
    &__foot textarea {
      scrollbar-width: thin;
      scrollbar-color: #1A8F8C #09202D;

      @supports selector(::-webkit-scrollbar) {
        scrollbar-width: auto;
        scrollbar-color: auto;

        &::-webkit-scrollbar {
          width: 6px;
        }

        &::-webkit-scrollbar-track {
          background: #09202D;
          border-radius: 999px;
        }

        &::-webkit-scrollbar-thumb {
          background: #1A8F8C;
          border-radius: 999px;

          &:hover {
            background: #38ADA3;
          }
        }
      }
    }

    &__body {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;

      span {
        color: #38ADA3;
        font-size: 10px;
        line-height: 14px;
        font-weight: 600;
        text-transform: capitalize;
      }

      :deep(p) {
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: #F0FAFC;
      }
    }

    &__foot {
      flex: none;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 16px 16px;

      textarea {
        flex: 1;
        min-width: 0;
        border: 1px solid #2E5763;
        background: #09202D;
        border-radius: 16px;
        padding: 18px 14px;
        outline: 1px solid transparent;
        font-family: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: #F0FAFC;
        transition: 0.25s;
        resize: none;
        max-height: calc(18px * 4 + 36px + 2px);
        field-sizing: content;
        scrollbar-color: #1A8F8C transparent;

        @supports selector(::-webkit-scrollbar) {
          scrollbar-color: auto;

          &::-webkit-scrollbar {
            background: transparent;
          }

          &::-webkit-scrollbar-track {
            margin-block: 16px;
            background: transparent;
          }
        }

        &::placeholder {
          color: #91B0BA;
        }

        &:hover {
          border-color: #1A8F8C;
          outline-color: #1A8F8C;
        }

        &.assistant-panel__textarea--error {
          border-color: #E47D86;
          background: #241923;
        }
      }
    }

    &__avatar {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      width: 34px;
      height: 34px;
      border-radius: 12px;
      border: 1px solid #2E5763;
      background: #1A8F8C;
      font-size: 11px;
      font-weight: 600;
      line-height: 15px;
      color: #040E1B;
      text-transform: uppercase;

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

    &__title {
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      color: #fff;
    }

    &__subtitle {
      font-size: 12px;
      line-height: 16px;
      font-weight: 400;
      color: #91B0BA;
    }

    &__close {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      width: 34px;
      height: 34px;
      border-radius: 10px;
      border: 1px solid #2E5763;
      background: #09202D;
      appearance: none;
      cursor: pointer;
      color: #91B0BA;
      transition: 0.25s;

      &:hover {
        color: #fff;
      }
    }

    &__send {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: none;
      width: 40px;
      height: 40px;
      padding: 6px;
      border: none;
      border-radius: 12px;
      background: #1A8F8C;
      color: #040E1B;
      transition: 0.25s;
      cursor: pointer;

      &:disabled {
        cursor: default;
      }
    }

    &--open {
      transform: scale(1) translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  }

  &-bubble {
    max-width: 84%;
    padding: 11px 14px;
    border-radius: 16px;
    font-size: 14px;
    line-height: 152%;
    white-space: pre-line;

    &--assistant {
      border: 1px solid #2E5763;
      background: #09202D;
    }

    &--user {
      align-self: flex-end;
      border: 1px solid #1A8F8C;
      background: #0C333C;
    }

    &--typing {
      display: flex;
      gap: 5px;
      align-items: center;
      padding: 14px 18px;

      span:not(.assistant-dot) {
        font-size: 10px;
        line-height: 14px;
        font-weight: 400;
        color: #91B0BA;
      }
    }

    &__markdown {
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
  }

  &-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #38ADA3;
    animation: assistant-dot-bounce 1.2s infinite ease-in-out;

    &:nth-child(2) { animation-delay: 0.15s; }
    &:nth-child(3) { animation-delay: 0.3s; }
  }

  &-suggestions {
    display: flex;
    flex-direction: column;
    flex: none;
    gap: 12px;
    padding: 14px 0;
  }

  &-suggestion {
    padding: 8px 14px;
    border-radius: 12px;
    border: 1px solid #2E5763;
    background: #09202D;
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    transition: border-color 0.2s ease, color 0.2s ease;
    appearance: none;
    cursor: pointer;
    text-align: left;
    text-transform: none;

    &:hover {
      border-color: #1A8F8C;
    }

    :deep {
      .q-icon {
        margin-left: auto;
      }
    }
  }
}

@keyframes assistant-dot-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-4px); opacity: 1; }
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
}
</style>
