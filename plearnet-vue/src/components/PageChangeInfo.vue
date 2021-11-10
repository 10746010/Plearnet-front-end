<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0!">
      <div class="q-pa-xl bg-grey-4 relative-position" :style="style">
        <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-xl">
            <div class="q-gutter-md column items-center">
              <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">姓名</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">用戶名稱</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

              <div class="full-width row items-center">
                <div class="col-2 text-left q-pr-lg">電子郵件</div>
                <div class="col-9">
                  <q-input outlined v-model="text" dense />
                </div>
              </div>

                  <q-btn color="primary" label="確定" />

            </div>
          </div>
        </q-layout>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>


import { useQuasar } from "quasar";
import { computed } from "vue";


export default {
  name: "WhatsappLayout",
  components: {
    // PageInfo
  },
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    return {
      style,
    };
  },
};
</script>

<style lang="sass">

</style>