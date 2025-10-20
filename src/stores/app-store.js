import { defineStore } from 'pinia';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios'

export const useAppStore = defineStore('appStore', () => {
  const $q = useQuasar();

  function notifySuccess(message) {
    $q.notify({
      message: message,
      icon: 'check_circle',
      textColor: 'black',
      position: 'top',
      timeout: 1000,
      classes: 'glass',
      actions: [{ icon: 'close', color: 'black' }]
    });
  }

  function notifyError(message) {
    const cleanMessage = message.replace(
      /^(Error invoking remote method '.+': )|(Error: )/,
      ''
    );

    $q.notify({
      message: cleanMessage,
      textColor: 'black',
      classes: 'glass',
      icon: 'error',
      position: 'top',
      timeout: 1000,
      actions: [{ icon: 'close', color: 'black' }]
    });
  }

  function showLoading() {
    $q.loading.show();
  }
  function hideLoading() {
    $q.loading.hide();
  }

  const copyToClipboard = async (text, message) => {
    await navigator.clipboard.writeText(text)
      .then(() => {
        notifySuccess(message);
      })
      .catch(() => {});
  };

  return {
    notifySuccess,
    notifyError,
    showLoading,
    hideLoading,
    copyToClipboard,
    api,
  };
});
