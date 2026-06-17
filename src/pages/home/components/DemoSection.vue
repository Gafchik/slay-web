<script setup>
  import { ref } from 'vue'
  import DemoAliases from 'pages/home/demo/DemoAliases.vue'
  import DemoLauncher from 'pages/home/demo/DemoLauncher.vue'
  import DemoPasswords from 'pages/home/demo/DemoPasswords.vue'
  import DemoProjects from 'pages/home/demo/DemoProjects.vue'
  import DemoServer from 'pages/home/demo/DemoServer.vue'

  const tab = ref('projects')
</script>

<template>
  <section class="section column full-width">
    <div class="section__head">

    </div>
    <div class="section__main column">
      <div class="tabs flex justify-center q-pa-md">
        <q-tabs dense v-model="tab" inline-label class="text-white">
          <q-tab name="projects"
                 icon="folder"
                 label="Project Manager" />
          <q-tab name="launcher"
                 icon="workspaces"
                 label="Launcher Workspace" />
          <q-tab name="aliases"
                 icon="terminal"
                 label="Console Aliases" />
          <q-tab name="password"
                 icon="key"
                 label="Passwords" />
          <q-tab name="server"
                 icon="cloud"
                 label="Server" />
        </q-tabs>
      </div>
      <div class="tabs__content">
        <q-tab-panels v-model="tab" animated class="transparent">
          <DemoProjects name="projects" />
          <DemoLauncher name="launcher" />
          <DemoAliases name="aliases" />
          <DemoPasswords name="password" />
          <DemoServer name="server" />
        </q-tab-panels>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  height: 100vh;
  padding: 68px 0 24px;

  &__main {
    flex: 1
  }
}

.tabs {
  --c-light: #fff;
  --c-glass: #bbbbbc;
  --c-dark: #000;

  --glass-reflex-dark: 1;
  --glass-reflex-light: 1;

  &__content {
    flex: 1;
    width: 100%;
    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(30px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    box-shadow: 0 10px 40px rgba(0, 255, 200, 0.05), inset 0 1px 10px rgba(255, 255, 255, 0.05);
    transition: all 0.4s ease;
  }

  .q-tab {
    border-radius: 18px;
  }
}

.q-tabs {
  padding: 8px;
  background-color: color-mix(in srgb, var(--c-light) 12%, transparent);
  border-radius: 26px;
  backdrop-filter: blur(8px) url(#switcher) saturate(150%);
  box-shadow: inset 0 0 0 1px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 10%), transparent), inset 1.8px 3px 0px -2px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -2px -2px 0px -2px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -3px -8px 1px -6px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -0.3px -1px 4px 0px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 12%), transparent), inset -1.5px 2.5px 0px -2px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 0px 3px 4px -2px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 2px -6.5px 1px -4px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 1px 5px 0px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 6px 16px 0px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 8%), transparent);
  transition: background-color 400ms
  cubic-bezier(1, 0, 0.4, 1), box-shadow 400ms
  cubic-bezier(1, 0, 0.4, 1);
  box-sizing: border-box;
}

.q-tab-panels {
  height: 100%;
}

.tabs:deep(.q-tab__indicator) {
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background-color: color-mix(in srgb, var(--c-glass) 36%, transparent);
  box-shadow: inset 0 0 0 1px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 10%), transparent), inset 2px 1px 0px -1px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 90%), transparent), inset -1.5px -1px 0px -1px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 80%), transparent), inset -2px -6px 1px -5px
  color-mix(in srgb, var(--c-light) calc(var(--glass-reflex-light) * 60%), transparent), inset -1px 2px 3px -1px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 20%), transparent), inset 0px -4px 1px -2px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 10%), transparent), 0px 3px 6px 0px
  color-mix(in srgb, var(--c-dark) calc(var(--glass-reflex-dark) * 8%), transparent);
}

.q-tab:hover {
  color: #03d5ff;
  opacity: 1;
}

.q-tab:deep(.q-focus-helper) {
  display: none;
}

.q-tab:deep(.q-tab__content) {
  z-index: 1;
}


</style>
