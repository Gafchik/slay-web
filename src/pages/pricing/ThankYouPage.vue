<script setup>
import { onMounted, ref } from 'vue'

const transactionData = ref(null)

onMounted(() => {
  transactionData.value = history.state?.transactionData

  if (transactionData.value) {
    console.log('Transaction data:', transactionData.value)
  }
})
</script>

<template>
  <q-page class="column justify-center q-pb-xl">
    <section class="section">
      <div class="container">
        {{transactionData}}
      </div>
    </section>
  </q-page>
</template>

<style scoped lang="scss">

</style>
