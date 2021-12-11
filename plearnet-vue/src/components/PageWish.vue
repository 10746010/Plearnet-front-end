<template>
  <q-page class="flex column justify-center items-center content-center">
    <img src="../../static/img/wishbg.jpg" class="bg-wish" />
    <div class="q-pa-md ">
      <div class="q-gutter-y-md " style="width: 550px; max-width: 600px">
        <q-card class="bg-grey">
          <q-tabs
            v-model="tab"
            dense
            class="text-white"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="note" label="筆記" />
            <q-tab name="class" label="分類" />
          </q-tabs>

          <q-separator />
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md ">
            <q-tab-panels v-model="tab" animated class="bg-grey">
              <q-tab-panel name="note">
                <q-input
                  outlined         
                  rounded           
                  v-model="name"
                  bg-color="white"
                  label="輸入希望增設的筆記 *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div class="fit">
                  <q-input v-model="text" bg-color="white" outlined rounded type="textarea" />
                </div>
              </q-tab-panel>

              <q-tab-panel name="class">
                <q-input
                  outlined
                  rounded 
                  v-model="name"
                  bg-color="white"
                  label="輸入希望增設的分類 *"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Please type something',
                  ]"
                />
                <div class="fit">
                  <q-input v-model="text" bg-color="white" outlined rounded type="textarea" />
                </div>
              </q-tab-panel>
            </q-tab-panels>
            <div class="q-pa-md row reverse">
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="Reset"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const text = ref(null);

    const accept = ref(false);
    return {
      tab: ref("note"),
      name,
      text,
      accept,

      onSubmit() {
        $q({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      },

      onReset() {
        name.value = null;
        text.value = null;
      },
    };
  },
};
</script>

<style scoped>
  .bg-wish {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
