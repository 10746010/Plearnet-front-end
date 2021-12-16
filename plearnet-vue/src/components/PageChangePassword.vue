<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position">
        <div
          class="WAL__layout shadow-3"
          container
          style="min-height: 1000px; border: 1px solid; border-color: white"
        >
          <q-page class="flex column q-gutter-y-md q-pa-md text-white">
            <!-- <div class="full-width row items-center">
              <div class="col-2 text-right q-pr-lg">舊密碼</div>
              <div class="col-9">
                <q-input
                  dark
                  outlined
                  type="password"
                  v-model="state.old_password"
                  dense
                />
              </div>
            </div> -->

            <div class="full-width row items-center">
              <div class="col-2 text-right q-pr-lg">新密碼</div>
              <div class="col-9">
                <q-input
                  dark
                  outlined
                  type="password"
                  v-model="state.new_password"
                  dense
                />
              </div>
            </div>

            <div class="full-width row items-center">
              <div class="col-2 text-right q-pr-lg">確認新密碼</div>
              <div class="col-9">
                <q-input
                  dark
                  outlined
                  type="password"
                  v-model="state.repeat_password"
                  dense
                />
              </div>
            </div>

            <div class="full-width row items-center">
              <div class="col-2 text-right q-pr-lg"></div>
              <div class="col-9">
                <q-btn
                  color="primary"
                  label="更改密碼"
                  @click.prevent="change"
                />
              </div>
            </div>

            <!-- <div class="full-width row items-center">
              <div class="col-2 text-right q-pr-lg"></div>
              <div class="col-9">
                <q-btn flat style="color: #ff0080" label="忘記密碼" />
              </div>
            </div> -->
            <q-dialog v-model="state.small">
              <q-card style="width: 300px">
                <q-card-section>
                  <div class="text-h6"></div>
                </q-card-section>
                <q-card-section
                  class="
                    fit
                    row
                    text-center
                    justify-center
                    items-center
                    content-center
                  "
                >
                  {{ state.warning }}
                </q-card-section>

                <q-card-actions align="right" class="bg-white text-teal">
                  <q-btn flat label="OK" v-close-popup @click.prevent="next" />
                </q-card-actions>
              </q-card>
            </q-dialog>
          </q-page>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "PageChangePassword",
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));

    const state = reactive({
      old_password: "",
      new_password: "",
      repeat_password: "",
      small: false,
      userId: null,
      warning: "",
    });
    axios.defaults.headers.common["token"] = localStorage.getItem("token");
    const router = useRouter();
    axios
      .get("http://localhost:8080/userAccount/getUserId", {})
      .then(function (response) {
        state.userId = response.data.data.user_id;
      })
      .catch(function (error) {
        console.log(error);
      });

    function change() {
      state.small = true;
      if (
        state.new_password == state.repeat_password &&
        (state.new_password != "" || state.repeat_password != "")
      ) {
        axios.patch("http://localhost:8080/userAccount/editUser", {
          id: state.userId,
          password: state.new_password,
        });
        state.warning = "修改成功";
      } else {
        if (state.new_password == "" || state.repeat_password == "") {
          state.warning = "密碼不能為空";
        } else {
          state.warning = "密碼不一致";
        }
      }
    }
    function next() {
      if (state.warning == "修改成功") {
        router.push("/main/info");
      }
    }
    return {
      state,
      ph: ref(""),
      dense: ref(false),
      style,
      change,
      next,
    };
  },
};
</script>
<style lang="sass" scoped>
</style>