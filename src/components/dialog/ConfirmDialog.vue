<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()

  import { useConfirmDialogStore } from 'stores/confirm-dialog-store'

  const confirmDialogStore = useConfirmDialogStore()
  const { isShowDialog, title, text } = storeToRefs(confirmDialogStore);
  const { callFunctionYes } = confirmDialogStore
</script>

<template>
  <q-dialog dense v-model="isShowDialog" backdrop-filter="blur(4px)">
    <q-card dense class="glass">
      <q-card-section dense class="row items-center q-pb-none">
        <h2 class="text-white" v-html="title"/>
        <q-space />
        <q-btn dense
               flat
               color="white"
               icon="close"
               class="btn-icon"
               v-close-popup >
          <q-tooltip>
            {{t('buttons.cancel')}}
          </q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section dense>
        <q-form @submit="callFunctionYes">
          <div class="row q-mb-lg">
            <p class="text-white" v-html="text"/>
          </div>
          <div class="row justify-between">
            <div class="col-auto">
              <q-btn
                outline
                rounded
                class="btn-glass--black"
                color="orange"
                :label="t('buttons.cancel')"
                v-close-popup
              />
            </div>
            <div class="col-auto">
              <q-btn
                outline
                rounded
                class="btn-glass--primary"
                color="primary"
                :label="t('buttons.confirm')"
                type="submit"
              />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
  h2 {
    font-size: 1rem;

    @media (min-width: 64em) {
      font-size: 1.5rem;
    }

    @media (min-width: 158.75em) {
      font-size: 2rem;
    }
  }

  p {
    opacity: 0.75;
    font-size: 0.8rem;
    line-height: 120%;

    @media (min-width: 64em) {
      font-size: 1rem;
    }

    @media (min-width: 158.75em) {
      font-size: 1.4rem;
    }
  }

  form .q-btn-item {
    font-size: 16px;
    line-height: 18px;
    text-transform: capitalize;
  }

  .glass {
    border-radius: 16px;
  }
</style>
