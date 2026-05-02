import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAppStore } from 'src/stores/app-store'

export const useConfirmDialogStore = defineStore('confirmDialog', () => {
  const appStore = useAppStore()
  const { notifyError } = appStore

  const isShowDialog = ref(false)
  const title = ref('')
  const text = ref('')

  const onConfirm = ref(async () => {})
  const onConfirmCallback = ref(() => {})
  const confirmParams = ref(null)

  function openConfirmDialog(
    dialogTitle,
    dialogText,
    confirmFn,
    callbackFn,
    params
) {
    isShowDialog.value = true
    title.value = dialogTitle
    text.value = dialogText
    onConfirm.value = confirmFn
    onConfirmCallback.value = (callbackFn || (() => {}))
    confirmParams.value = params
  }

  async function callFunctionYes() {
    try {
      const result = await onConfirm.value(confirmParams.value)
      onConfirmCallback.value(result)
    } catch (err) {
      const error = err
      notifyError(error.message)
    } finally {
      closeConfirmDialog()
    }
  }

  function closeConfirmDialog() {
    isShowDialog.value = false
    title.value = ''
    text.value = ''
    onConfirm.value = async () => {}
    onConfirmCallback.value = () => {}
    confirmParams.value = null
  }

  return {
    isShowDialog,
    title,
    text,
    openConfirmDialog,
    closeConfirmDialog,
    callFunctionYes,
  }
})
