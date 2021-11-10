<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen " style="z-index: 0">
      <div class="q-pa-md bg-black">
          <!-- 星球排名 -->
        <q-carousel        
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          swipeable
          padding
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          control-color="orange"
          height="300px"
          class="bg-black"
        >
          <q-carousel-slide :name="1">
            <div class="row flex flex-center">
              <q-img
                class="rounded-borders col-6 full-height"
                style="width: 180px"
                src="../../static/img/1.png"
              >
                <div
                  class="round absolute-full text-subtitle2 flex flex-center"
                  style="background: rgba(0, 0, 0, 0); font-size: 50px"
                >
                  國小
                </div>
              </q-img>
              <q-img
                class="rounded-borders col-6 full-height"
                style="width: 180px"
                src="../../static/img/2.png"
              >
                <div
                  class="round absolute-full text-subtitle2 flex flex-center"
                  style="background: rgba(0, 0, 0, 0); font-size: 50px"
                >
                  國中
                </div>
              </q-img>
              <q-img
                class="rounded-borders col-6 full-height"
                style="width: 180px"
                src="../../static/img/3.png"
              >
                <div
                  class="round absolute-full text-subtitle2 flex flex-center"
                  style="background: rgba(0, 0, 0, 0); font-size: 50px"
                >
                  高中
                </div>
              </q-img>
              <q-btn flat round to="/header">
                <q-img
                  class="rounded-borders col-6 full-height"
                  style="width: 180px"
                  src="../../static/img/4.png"
                >
                  <div
                    class="round absolute-full text-subtitle2 flex flex-center"
                    style="background: rgba(0, 0, 0, 0); font-size: 50px"
                  >
                    交流
                  </div>
                </q-img>
              </q-btn>
              <q-btn flat round to="/header/menu2">
                <q-img
                  class="rounded-borders col-6 full-height"
                  style="width: 180px"
                  src="../../static/img/5.png"
                >
                  <div
                    class="round absolute-full text-subtitle2 flex flex-center"
                    style="background: rgba(0, 0, 0, 0); font-size: 50px"
                  >
                    興趣
                  </div>
                </q-img>
              </q-btn>
            </div>
          </q-carousel-slide>
        </q-carousel>

        <div class="fit row justify-center items-center content-center">
          <div class="col-6">
              <!-- 左邊 -->
            <div
              class="
                q-pa-md
                row
                text-center
                rounded-borders
                justify-center
                items-center
                content-center
              "
            >
              <q-card
                class="my-card bg-grey-8 text-white"
                style="max-width: 300px"
              >
                <q-card-section>
                  <div class="text-h6">交流星球</div>
                </q-card-section>

                <q-card-section style="height: 200px">
                  <p style="font-size: 20px">還在為看不懂的公式煩惱嗎？</p>
                  <p style="font-size: 20px">還在為看不懂的古文煩惱嗎？</p>
                  <p class="q-pr-md q-pl-md" style="font-size: 20px">
                    來和大家一起交流討論解決煩惱吧
                  </p>

                </q-card-section>


                <q-card-actions
                  class="q-gutter-md q-pr-xl q-pl-xl justify-between"
                >
                  <q-icon
                    class="text-black"
                    name="fas fa-rocket"
                    style="font-size: 2rem"
                  />
                  <q-btn
                    rounded
                    style="width: 80px"
                    color="primary"
                    label="GO"
                    to="/header/swap"
                  />
                </q-card-actions>
              </q-card>
            </div>
          </div>
          <!-- 右邊 -->
          <div class="col-6">
            <div class="column">
              <h4 class="q-pl-xl">試閱筆記</h4>
              <div class="row q-gutter-sm">
                <q-intersection
                  class="item example-item col-4"
                  v-for="n in 4"
                  :key="`sm-${n}`"
                  once
                  transition="scale"
                >
                  <div class="my-content">
                    <q-card class="q-ma-sm">
                      <img :src="notes[n - 1].img" />

                      <q-card-section>
                        <div class="text-h6">
                          Card #{{ notes[n - 1].title }}
                        </div>
                        <div class="text-subtitle2">
                          {{ notes[n - 1].class }}
                        </div>
                      </q-card-section>
                    </q-card>
                  </div>
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
import { ref } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v5";

export default {
  name: "PageHomeSwap",
  components: {

  },
  props: {
    display_type: String,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const search = ref("");

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }
    return {
      fabYoutube,
      search,
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      links1: [
        { icon: "home", text: "首頁", to: "/main/" },
        { icon: "fas fa-portrait", text: "個人資料", to: "/main/info" },
        { icon: "fas fa-key", text: "變更密碼", to: "/main/changepassword" },
      ],
      links2: [
        { icon: "restore", text: "歷史", to: "/main/history" },
        { icon: "thumb_up_alt", text: "收藏", to: "/main/like" },
        { icon: "fas fa-pen", text: "塗鴉", to: "/main/paint" },
      ],
      links3: [
        { icon: "fas fa-cloud-upload-alt", text: "上傳", to: "/main/upload" },
        { icon: "fas fa-magic", text: "許願", to: "/main/wish" },
      ],
      notes: [
        {
          title: "番茄炒蛋1",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋2",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋3",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋4",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋5",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋6",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
      ],
      slide: ref(1),
      autoplay: ref(true),
      lorem:
        "還在為看不懂的公式煩惱嗎？還在為看不懂的古文煩惱嗎？來和大家一起交流討論解決煩惱吧",
    };
  },
};
</script>

<style lang="sass">
.YL
    &__toolbar-input-container
        min-width: 100px
        width: 55%
    &__toolbar-input-btn
        border-radius: 0
        border-style: solid
        border-width: 1px 1px 1px 0
        border-color: rgba(0,0,0,.24)
        max-width: 60px
        width: 100%
    &__drawer-footer-link
        color: inherit
        text-decoration: none
        font-weight: 500
        font-size: .75rem
        &:hover
            color: #000

.my-card
  width: 100%
  max-width: 250px


@media (max-width: 850px)
  .my-card
    max-width:300px
    height:330px

  .item
    width:80%
  
@media (min-width: 691px)
  .my-card
    max-width:300px
    height:330px

  .item
    width:80%
</style>