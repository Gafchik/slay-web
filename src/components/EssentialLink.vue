<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  route_name: {
    type: String,
    default: '#',
  },

  icon: {
    type: String,
    default: '',
  },
})
</script>


<template>
  <q-item clickable
          v-ripple
          :to="{ name: props.route_name }">
    <q-item-section v-if="props.icon" avatar>
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ props.title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

