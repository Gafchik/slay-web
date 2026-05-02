<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useConfirmDialogStore } from 'stores/confirm-dialog-store'

const confirmDialogStore = useConfirmDialogStore()
const { isShowDialog, title, text } = storeToRefs(confirmDialogStore);
const { callFunctionYes, closeDialog } = confirmDialogStore
</script>

<template>
  <q-dialog dense v-model="isShowDialog" backdrop-filter="blur(4px)">
    <q-card dense class="glass">
      <q-card-section dense class="row items-center q-pb-none">
        <div class="text-h6 text-white" v-html="title"/>
        <q-space />
        <q-btn dense
               flat
               color="white"
               icon="close"
               class="btn-icon"
               @click="closeDialog" >
          <q-tooltip>
            Close
          </q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section dense>
        <q-form @submit="callFunctionYes">
          <div class="row q-mb-lg">
            <div class="text-h6 text-white" v-html="text"/>
          </div>
          <div class="row justify-between">
            <div class="col-auto">
              <q-btn
                outline
                rounded
                class="btn-glass--black"
                color="orange"
                :label="t('confirmDialog.cancel')"
                @click="closeDialog"
              />
            </div>
            <div class="col-auto">
              <q-btn
                outline
                rounded
                class="btn-glass--primary"
                color="primary"
                :label="t('confirmDialog.confirm')"
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
  form .q-btn-item {
    font-size: 16px;
    line-height: 18px;
    text-transform: capitalize;
  }
</style>
