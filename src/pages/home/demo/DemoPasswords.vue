<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <q-tab-panel
    dense
    :name="props.name"
    class="tab flex column flex-max q-pa-none q-ma-none"
  >
    <div>AAAAAAAAAAAAAAAA</div>
  </q-tab-panel>
</template>

<style scoped lang="scss">

</style>
