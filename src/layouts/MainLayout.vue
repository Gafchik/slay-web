<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const linksList = [
  {
    title: t('routes.download'),
    icon: 'list',
    route_name: 'download',
  },
  {
    title: t('routes.membership'),
    icon: 'list',
    route_name: 'membership',
  },
  {
    title: t('routes.faq'),
    icon: 'list',
    route_name: 'faq',
  },
  {
    title: t('routes.contact_us'),
    icon: 'list',
    route_name: 'contact_us',
  },
  {
    title: t('routes.terms_privacy'),
    icon: 'list',
    route_name: 'terms_privacy',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated bordered class="bg-grey-3 text-primary">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-avatar>
          <img src="~assets/3.png">
        </q-avatar>

        <q-toolbar-title>Smart Launcher for All Your devtools</q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>


