import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { useAppStore } from 'src/stores/app-store'

export const useBillingStore = defineStore('useBillingStore', () => {
  const appStore = useAppStore()
  const { showLoading, hideLoading, notifyError } = appStore
  const priceCards = ref([])


  const getPrices = async () => {
    showLoading()
    try {
      const { data } = await api.get('billing/get-prices')
      priceCards.value = data.data
      return data.data
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'error'
      notifyError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      hideLoading()
    }
  }

  const toPayment = async (linkKey) => {
    const { data } = await api.get(`billing/get-payment-url/${linkKey}`)
    window.location.href = data.payLink
  }

  return {
    getPrices,
    priceCards,
    toPayment,
  }
})
