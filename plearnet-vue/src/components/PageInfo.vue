<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position">
        <div
          class="WAL__layout shadow-3"
          container
          style="min-height: 1000px; border: 1px solid; border-color: white"
        >
          <div class="q-pa-xl bg-black text-white">
            <div class="row items-center fit">
              <div class="col">
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
                  <q-item-section class="text-caption larg-screen-only"
                    >編輯個人資料</q-item-section
                  >
                </q-item>
              </div>
              <div class="col-6">
                <div class="row items-center q-mb-sm">
                  <div class="col large-screen">用戶名稱</div>
                  <div class="col-9 col-md-9 q-pr-lg">
                    <q-field dark outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline text-white"
                          tabindex="0"
                        >
                          {{ state.userInfo.name }}
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div>
                <!-- 
                <div class="row items-center q-mt-sm">
                  <div class="col large-screen">積分</div>
                  <div class="col-9 col-md-9 q-pr-lg">
                    <q-field dark outlined dense>
                      <template v-slot:control>
                        <div
                          class="self-center full-width no-outline text-white"
                          tabindex="0"
                        >
                          0
                        </div>
                      </template>
                    </q-field>
                  </div>
                </div> -->
              </div>

              <div class=" col">
                <q-btn
                  rounded
                  color="primary "
                  label="登出"
                  @click.prevent="logout"
                />
              </div>            
            </div>
              <div class="column items-center">
                <p style="font-size: 2rem">我的筆記</p>
                <div class="row justify-center q-gutter-sm">
                  <q-intersection
                    class="example-item col-6 col-md-4 text-black"
                    v-for="note in state.notes"
                    :key="note"
                    once
                    transition="scale"
                  >
                    <q-btn @click.prevent="watch(note.id)">
                      <q-card class="q-ma-sm">
                        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

                        <q-card-section>
                          <div class="text-h6">{{ note.title }}</div>
                          <div class="text-subtitle2 row">
                            by My Self <q-space />
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-btn>
                  </q-intersection>
                </div>
              </div>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "PageInfo",
  components: {},
  setup() {
    const state = reactive({
      notes: [
      
      ],
      userId: null,
      userInfo: [],
    });

    axios.defaults.headers.common["token"] = localStorage.getItem("token");

    axios
      .get("/userAccount/userSearch", {})
      .then(function (response) {
        state.userInfo = response.data.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("/userAccount/myNote", {})
      .then(function (response) {
        state.notes = response.data.data.slice(-5).reverse();
      })
      .catch(function (error) {
        console.log(error);
      });

  
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    const router = useRouter();

    const logout = async () => {
      localStorage.removeItem("token");
      router.push("/login");
    };
    const watch = async (id) => {
      await router.push(`${id}`);
    }
    return {
      style,
      state,
      logout,
      watch
    };
  },
};
</script>

<style  scoped>
.WAL {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.WAL__layout {
  margin: 0 auto;
  height: 100%;
  width: 90%;
  max-width: 950px;
  border-radius: 5px;
}

@media (max-width: 733px) {
  .larg-screen-only {
    display: none;
  }
  .large-screen {
    opacity: 0;
  }
}
@media (min-width: 1023px) {
  .larg-screen-only {
    display: block;
  }
}
</style>