<script setup>
  import { ref } from 'vue'

  import aesIcon from 'src/assets/AES.png'
  import Folder from 'src/assets/Folder.png'
  import PasswordIcon from 'src/assets/Password.png'
  import SafetyIcon from 'src/assets/Safety.png'

  const passwordFeatures = ref([
    {
      title: 'Надежное AES-256-GCM шифрование',
      description: 'Максимальная защита ваших учетных данных с использованием передового стандарта шифрования.',
      icon: aesIcon
    },
    {
      title: 'Иерархическая структура папок',
      description: 'Организуйте пароли и конфиденциальные данные в удобные папки и подпапки.',
      icon: Folder
    },
    {
      title: 'Защита мастер-паролем',
      description: 'Ваши данные шифруются уникальным мастер-паролем, который знаете только вы.',
      icon: PasswordIcon
    },
    {
      title: 'Безопасное хранение любой информации',
      description: 'Храните не только пароли, но и заметки, ключи API и другие конфиденциальные данные.',
      icon: SafetyIcon
    }
  ])
</script>

<template>
  <section class="section q-py-lg">
    <div class="container">
      <div class="section__body flex">
        <div class="section__main q-my-auto full-width">
          <div class="q-mb-xl text-center text-white">
            <h2 class="q-mb-lg">Менеджер паролей</h2>
            <p class="description-big">Безопасное хранение и удобная организация паролей</p>
          </div>
          <div class="row flex-center">
            <div class="col-10">
              <q-list class="row text-white" ref="listDataEl">
                <q-item v-for="(item, index) in passwordFeatures"
                        :key="index" class="col-6 q-pb-md q-px-md">
                  <q-item-section avatar class="flex flex-center q-pa-md text-center">
                    <q-img
                      :src="item.icon"
                      width="128px"
                      height="128px"
                    />
                    <span class="q-mb-md">{{ item.title }}</span>
                    <p>{{ item.description }}</p>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .q-list {
    .q-item__section {
      border: 1px solid white;
      border-radius: 20px;
    }

    span {
      font-size: 20px;
      line-height: 24px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      opacity: 0.7;
    }
  }
</style>
