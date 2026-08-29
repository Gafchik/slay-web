import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api } from 'src/boot/axios'

const STORAGE_KEY = 'slay-assistant-conversation'
const HISTORY_TTL_MS = 30 * 60 * 1000

const loadStoredConversation = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null

    const stored = JSON.parse(raw)
    if (!stored.savedAt || Date.now() - stored.savedAt > HISTORY_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }

    return stored
  } catch {
    return null
  }
}

export const useAssistantStore = defineStore('useAssistantStore', () => {
  const stored = loadStoredConversation()

  const isOpen = ref(false)
  const isSending = ref(false)
  const draft = ref('')
  const conversationId = ref(stored?.conversationId || null)
  const messages = ref(stored?.messages || [])

  const hasMessages = computed(() => messages.value.length > 0)

  const persist = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      conversationId: conversationId.value,
      messages: messages.value,
      savedAt: Date.now(),
    }))
  }

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  const sendMessage = async (text) => {
    const content = (text ?? draft.value).trim()
    if (!content || isSending.value) return

    messages.value.push({ role: 'user', content })
    draft.value = ''
    isSending.value = true
    persist()

    try {
      const { data } = await api.post('assistant/ask', {
        message: content,
        conversation_id: conversationId.value,
      })

      conversationId.value = data.conversation_id
      messages.value.push({ role: 'assistant', content: data.answer })
    } catch {
      messages.value.pop()
    } finally {
      isSending.value = false
      persist()
    }
  }

  const reset = () => {
    conversationId.value = null
    messages.value = []
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    isOpen,
    isSending,
    draft,
    conversationId,
    messages,
    hasMessages,
    open,
    close,
    toggle,
    sendMessage,
    reset,
  }
})
