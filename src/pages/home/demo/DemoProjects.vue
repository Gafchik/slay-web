<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ExpandableActions from 'pages/components/helpers/ExpandableActions.vue'

import project1Folder from 'src/assets/demo/projects/Project-1__folder.png'
import project1Idea from 'src/assets/demo/projects/Project-1__idea.png'
import project2Folder from 'src/assets/demo/projects/Project-2__folder.png'
import project2Idea from 'src/assets/demo/projects/Project-2__idea.png'
import project3Folder from 'src/assets/demo/projects/Project-2__folder3.png'
import project3Idea from 'src/assets/demo/projects/Project-3__idea.png'
import projectNewFolder from 'src/assets/demo/projects/Project-new__folder.png'
import projectNewIdea from 'src/assets/demo/projects/Project-new__idea.png'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})

const { t } = useI18n()

const options = [
  {
    label: 'Intellij IDEA',
    value: 'intellij',
  },
  {
    label: 'VS Code',
    value: 'vs-code',
  },
]

const program = ref(options[0])
const searchProject = ref('')

const draggedProject = {
  title: 'M',
  name: 'My Project',
  path: 'D:/Projects/My-project',
  img: {
    folder: projectNewFolder,
    idea: projectNewIdea,
  },
}

const projects = ref([
  {
    title: 'A',
    name: 'App Dashboard',
    path: 'D:\\Projects\\Project-1',
    img: {
      folder: project1Folder,
      idea: project1Idea
    }
  },
  {
    title: 'B',
    name: 'Billing Portal',
    path: 'D:\\Projects\\Project-2',
    img: {
      folder: project2Folder,
      idea: project2Idea
    }
  },
  {
    title: 'C',
    name: 'Client Console',
    path: 'D:\\Projects\\Project-3',
    img: {
      folder: project3Folder,
      idea: project3Idea
    }
  },
])

const isDragActive = ref(false)
const isAddingProject = ref(false)
const deletingProjectPath = ref(null)
const isPreviewOpen = ref(false)
const previewImage = ref(null)

const filteredProjects = computed(() => {
  const search = searchProject.value.trim().toLowerCase()

  if (!search) return projects.value

  return projects.value.filter(({ name }) => name.toLowerCase().includes(search))
})

const handleDragStart = (event) => {
  event.dataTransfer.effectAllowed = 'copy'
  event.dataTransfer.setData('text/plain', draggedProject.name)
  event.dataTransfer.setData('application/slay-project', JSON.stringify(draggedProject))
}

const handleDrag = (event, active = false) => {
  event.preventDefault()
  event.stopPropagation()
  isDragActive.value = active
}

const handleDrop = (event) => {
  handleDrag(event, false)

  const project = JSON.parse(event.dataTransfer.getData('application/slay-project') || 'null')

  if (!project || projects.value.some(({ path }) => path === project.path)) return

  isAddingProject.value = true

  setTimeout(() => {
    projects.value.push(project)
    isAddingProject.value = false
  }, 1200)
}

const deleteProject = (project) => {
  deletingProjectPath.value = project.path

  setTimeout(() => {
    projects.value = projects.value.filter(({ path }) => path !== project.path)
    deletingProjectPath.value = null
  }, 800)
}

const showProjectPreview = (project, type) => {
  previewImage.value = {
    src: project.img[type],
    title: project.name,
  }
  isPreviewOpen.value = true
}

const closeProjectPreview = () => {
  isPreviewOpen.value = false
  previewImage.value = null
}

const openProject = () => {}
</script>

<template>
  <q-tab-panel
    dense
    :name="props.name"
    class="column q-pa-none"
  >
    <div class="tab-card flex no-wrap full-height full-width">
      <div class="tab-info full-height q-pa-md q-pb-xl">
        <h2 class="q-mb-sm">{{t('sections.project.title')}}</h2>
        <p class="q-mb-md">{{t('sections.project.subtitle')}}</p>
        <p>{{t('sections.project.description')}}</p>

        <q-btn unelevated
               rounded
               class="btn-glass--primary q-mt-auto q-mb-md">
          Добавь свой первый проект
        </q-btn>
        <q-icon name="south" size="lg" class="q-mb-md self-center" color="primary"/>
        <div class="flex justify-center">
          <div
            class="example column items-center"
            draggable="true"
            @dragstart="handleDragStart"
          >
            <q-icon name="folder" size="xl"/>
            <span>{{ draggedProject.name }}</span>
          </div>
        </div>
      </div>
      <q-card dense class="flex column full-height q-pa-sm text-white tab-content no-wrap transparent">

        <q-card-section class="tab-card--header full-width row justify-start items-center content-start q-pa-sm">
          <div class="flex justify-between full-width">
            <div class="flex justify-start col-auto q-pa-sm">
              <q-select
                dark
                dense
                rounded
                outlined
                v-model="program"
                class="btn-glass btn-select q-mr-sm"
                color="white"
                input-debounce="0"
                option-label="label"
                option-value="value"
                label-color="white"
                :options="options"
                label="Open with:"
                transition-show="jump-down"
                transition-hide="jump-up"
                @popup-hide="$el.querySelector('input')?.blur()"
              >
                <template v-slot:no-option>
                  <q-item dense>
                    <q-item-section >
                      {{ t('validation.noResults') }}
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
              <expandable-actions animation="slide-right">
                <q-btn dense
                       flat
                       color="white"
                       icon="add"
                       class="btn-icon"
                       @click.stop="">
                  <q-tooltip>
                    {{ t('buttons.add') }}
                  </q-tooltip>
                </q-btn>
                <q-btn dense
                       flat
                       color="white"
                       icon="edit"
                       class="btn-icon"
                       @click.stop="" >
                  <q-tooltip>
                    {{ t('buttons.edit') }}
                  </q-tooltip>
                </q-btn>
                <q-btn dense
                       flat
                       color="white"
                       icon="delete"
                       class="btn-icon"
                       @click.stop="" >
                  <q-tooltip>
                    {{ t('buttons.delete') }}
                  </q-tooltip>
                </q-btn>
              </expandable-actions>
            </div>
            <div class="flex justify-end col-auto q-pa-sm">
              <q-input
                placeholder="Search project"
                dense
                outlined
                rounded
                dark
                color="white"
                label-color="white"
                debounced
                class="btn-glass"
                v-model="searchProject"
              >
                <template #append>
                  <q-icon
                    name="search"
                    class="cursor-pointer"
                  />
                </template>
              </q-input>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="tab-card--main flex full-width scroll">
          <div class="full-width">
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6 col-xl-4" v-for="project in filteredProjects" :key="project.path">
                <q-card
                  dense
                  @click="openProject(project.path)"
                  class="project-card text-white full-height glass"
                >
                  <q-card-section class="q-pa-sm full-height">
                    <div class="row full-height items-center">
                      <div class="col-auto">
                        <div class="letter-icon flex flex-center liquid-glass">
                          {{ project.title }}
                        </div>
                      </div>
                      <div class="col q-px-md">
                        <div class="text-title wrap-text full-width">
                          {{ project.name }}
                        </div>
                        <div @click.stop=""
                             class="text-subtitle text-caption text-grey-4 wrap-text q-mt-xs full-width cursor-pointer">
                          {{ project.path }}
                        </div>
                      </div>
                      <div class="col-auto">
                        <div class="row full-height justify-end flex-center">
                          <q-btn
                            @click.stop="showProjectPreview(project, 'idea')"
                            flat
                            dense
                            class="btn-icon"
                            color="white"
                            icon="play_arrow">
                            <q-tooltip>{{ t('buttons.start') }}</q-tooltip>
                          </q-btn>
                          <expandable-actions :id="project.path" animation="slide-left">
                            <q-btn
                              @click.stop="showProjectPreview(project, 'folder')"
                              flat
                              dense
                              class="btn-icon"
                              color="white"
                              icon="folder_open">
                              <q-tooltip>
                                {{ t('buttons.open') }} {{ t('text.inExplorer') }}
                              </q-tooltip>
                            </q-btn>
                            <q-btn
                              @click.stop=""
                              flat
                              dense
                              class="btn-icon"
                              color="white"
                              icon="edit">
                              <q-tooltip>
                                {{ t('buttons.edit') }}
                              </q-tooltip>
                            </q-btn>
                            <q-btn
                              @click.stop="deleteProject(project)"
                              flat
                              dense
                              class="btn-icon"
                              color="white"
                              icon="delete"
                              :loading="deletingProjectPath === project.path">
                              <q-tooltip>
                                {{ t('buttons.delete') }}
                              </q-tooltip>
                            </q-btn>
                          </expandable-actions>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="tab-card--foot flex">
          <q-btn
            outline
            stack
            color="white"
            class="btn btn-add drop-target text-capitalize"
            :class="{ 'drag-enter': isDragActive }"
            icon="create_new_folder"
            label="Drag & Drop Project"
            :loading="isAddingProject"
            :disable="isAddingProject"
            @dragover.prevent
            @dragenter.prevent="e => handleDrag(e, true)"
            @dragleave.prevent="e => handleDrag(e, false)"
            @drop="handleDrop"/>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog
      v-model="isPreviewOpen"
      maximized
      transition-show="fade"
      transition-hide="fade"
    >
      <q-card class="preview-dialog flex flex-center">
        <q-btn
          round
          flat
          dense
          color="white"
          icon="close"
          class="preview-close"
          @click="closeProjectPreview"
        />

        <q-img
          v-if="previewImage"
          :src="previewImage.src"
          :alt="previewImage.title"
          fit="contain"
          class="preview-image"
        />
      </q-card>
    </q-dialog>
  </q-tab-panel>
</template>

<style scoped lang="scss">
  .q-card {
    box-shadow: none;
    padding: 0;
    flex: 1;
  }

  .tab-info {
    display: flex;
    flex-direction: column;
    width: 20vw;
    border-right: 1px solid rgba(255,255,255, 0.2);

    h2 {
      font-size: 1.5rem;

      @media (min-width: 64em) {
        font-size: 2rem;
      }

      @media (min-width: 158.75em) {
        font-size: 2.5rem;
      }
    }

    p {
      font-size: 1rem;
      line-height: 110%;
      opacity: 0.8;

      @media (min-width: 64em) {
        font-size: 1.25rem;
        line-height: 120%;
      }

      @media (min-width: 158.75em) {
        font-size: 1.75rem;
      }

      &:first-of-type {
        opacity: 0.9;
      }
    }
  }

  .btn-add {
    flex: 1;
    border-radius: 30px;

    :deep {
      &:before {
        border-style: dashed;
        border-width: 2px;
      }
    }
  }

  .drag-enter :deep(.q-focus-helper) {
    background: red;
    opacity: 0.05;
  }

  .letter-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: bold;
    flex-shrink: 0;
  }

  .example {
    cursor: grab;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(255,255,255, 0.5);
  }

  .btn-glass--primary {
    &:before {
      box-shadow: 0 0 18px #03d5ff, inset 0 0 6px #03d5ff;
    }

    & + .q-icon {
      animation: ping 2s linear infinite;
    }
  }

  @keyframes ping {
    0% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(5px);
    }

    100% {
      transform: translateY(-5px);
    }
  }

  .preview-dialog {
    background: rgba(0, 0, 0, 0.92);
    padding: 32px;
  }

  .preview-close {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;
    background: rgba(255, 255, 255, 0.12);
  }

  .preview-image {
    width: 100%;
    height: 100%;
    max-width: 95vw;
    max-height: 92vh;
  }
</style>
