<script setup>
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from 'stores/auth-store.js'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()
const {getUserData, setAccessToken} = authStore

onMounted(async () => {
  const accessToken = route.query.access_token

  if (accessToken) {
      setAccessToken(accessToken)
      getUserData().then(() => router.push('/profile')).catch(() => router.push('/auth/login'))
  }
})
</script>

<template>
 <div></div>
</template>

<style scoped>

</style>
