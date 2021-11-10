<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-grey-4 relative-position" :style="style">
        <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
          <div class="q-pa-xl">
            <div class="column items-center">
              <q-item
                clickable
                v-ripple
                class="column justify-center items-center content-center"
                to="/main/changeinfo"
              >
                <q-item-section>
                  <q-avatar size="100px">
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>
                <q-item-section class="text-caption"
                  >編輯個人資料</q-item-section
                >
              </q-item>

              <div class="fit q-gutter-md">
                <div class="full-width row items-center">
                  <div class="col-2 text-left q-pr-lg">姓名</div>
                  <div class="col-9">
                    <q-field outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline"
                          tabindex="0"
                        >
                          測
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>

                <div class="full-width row items-center">
                  <div class="col-2 text-left q-pr-lg">用戶名稱</div>
                  <div class="col-9">
                    <q-field outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline"
                          tabindex="0"
                        >
                          測試
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>

                <div class="full-width row items-center">
                  <div class="col-2 text-left q-pr-lg">電子郵件</div>
                  <div class="col-9">
                    <q-field outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline"
                          tabindex="0"
                        >
                          test@test.com
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>

                <div class="full-width row items-center">
                  <div class="col-2 text-left q-pr-lg">性別</div>
                  <div class="col-9">
                    <q-field outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline"
                          tabindex="0"
                        >
                          未知
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>

                <div class="full-width row items-center">
                  <div class="col-2 text-left q-pr-lg">註冊時間</div>
                  <div class="col-9">
                    <q-field outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline"
                          tabindex="0"
                        >
                          2021/11/2
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>
              </div>

              <div class="q-mt-sm">
                <q-btn color="primary" label="登出" />
              </div>
            </div>
            <div class="fixed-bottom q-ma-md">
              <q-separator size="5px" color="grey-2" />

              <div class="q-pt-md items-center row">
                <q-icon name="place" label="123" size="50px" />
                <div class="text-subtitle1">宜蘭市</div>
              </div>
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
  name: "PageInfo",
  components: {},
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
.WAL
  width: 100%
  height: 100%
  padding-top: 20px
  padding-bottom: 20px
  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
    background-color: #009688
  &__layout
    margin: 0 auto
    // z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px
  &__field.q-field--outlined .q-field__control:before
    border: none
  .q-drawer--standard
    .WAL__drawer-close
      display: none
@media (max-width: 850px)
  .WAL
    padding: 0
    &__layout
      width: 100%
      border-radius: 0
@media (min-width: 691px)
  .WAL
    &__drawer-open
      display: none
</style>