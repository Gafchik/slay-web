<script setup>
// Тут можно будет подтянуть ссылки на релизы из конфига или API
const downloads = [
  { os: "Windows", link: "https://slay.dev/download/windows", icon: "mdi-microsoft-windows" },
  { os: "MacOS", link: "https://slay.dev/download/macos", icon: "mdi-apple" },
  { os: "Linux", link: "https://slay.dev/download/linux", icon: "mdi-linux" }
]
</script>

<template>
  <q-page padding class="flex flex-center column q-gutter-md">
    <div class="text-h4 text-bold">Download Slay</div>
    <div class="text-subtitle2 text-grey-7 q-mb-md">
      Choose your platform and start building faster
    </div>

    <div class="row q-col-gutter-md q-mb-xl">
      <div
        v-for="item in downloads"
        :key="item.os"
        class="col-12 col-sm-4"
      >
        <q-card class="flex flex-center column q-pa-lg shadow-3">
          <q-icon :name="item.icon" size="64px" class="q-mb-md" />
          <div class="text-h6 q-mb-sm">{{ item.os }}</div>
          <q-btn
            :label="`Download for ${item.os}`"
            :href="item.link"
            color="primary"
            unelevated
          />
        </q-card>
      </div>
    </div>

    <div class="text-subtitle1 text-bold q-mb-sm">Getting Started</div>
    <q-list bordered separator class="bg-grey-1 rounded-borders" style="max-width: 500px;">
      <q-item>
        <q-item-section>1. Download and install Slay</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>2. Run <code>slay --help</code> to check CLI</q-item-section>
      </q-item>
      <q-item>
        <q-item-section>3. Enjoy faster access to devtools 🚀</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style scoped>
.q-page {
  text-align: center;
}
</style>
