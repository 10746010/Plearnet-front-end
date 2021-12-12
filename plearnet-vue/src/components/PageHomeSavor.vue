<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-md bg-black">
           <!-- 星球排名 -->
  <!-- 大 -->
  <div class="large-screen-only">
    <div class="row flex flex-center">
      <q-img
        class="rounded-borders col-6 full-height"
        style="width: 300px"
        src="../../static/img/3.png"
      >
        <div
          class="round absolute-full text-subtitle2 flex flex-center"
          style="background: rgba(0, 0, 0, 0); font-size: 50px"
        >
          考試
        </div>
      </q-img>
      <q-btn flat round to="/main">
        <q-img
          class="rounded-borders col-6 full-height"
          style="width: 300px"
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
      <q-btn flat round to="/main/savor">
        <q-img
          class="rounded-borders col-6 full-height"
          style="width: 300px"
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
  </div>
  <!-- 中 -->
  <div class="middle-screen-only">
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
            style="width: 300px"
            src="../../static/img/3.png"
          >
            <div
              class="round absolute-full text-subtitle2 flex flex-center"
              style="background: rgba(0, 0, 0, 0); font-size: 50px"
            >
              考試
            </div>
          </q-img>
          <q-btn flat round to="/main">
            <q-img
              class="rounded-borders col-6 full-height"
              style="width: 300px"
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
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="row flex flex-center">
          <q-btn flat round to="/main">
            <q-img
              class="rounded-borders col-6 full-height"
              style="width: 300px"
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
          <q-btn flat round to="/main/savor">
            <q-img
              class="rounded-borders col-6 full-height"
              style="width: 300px"
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
  </div>
  <!-- 小 -->
  <div class="small-screen-only">
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
            style="width: 300px"
            src="../../static/img/3.png"
          >
            <div
              class="round absolute-full text-subtitle2 flex flex-center"
              style="background: rgba(0, 0, 0, 0); font-size: 50px"
            >
              考試
            </div>
          </q-img>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="row flex flex-center">
          <q-btn flat round to="/main">
            <q-img
              class="rounded-borders col-6 full-height"
              style="width: 300px"
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
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <div class="row flex flex-center">
          <q-btn flat round to="/main/savor">
            <q-img
              class="rounded-borders col-6 full-height"
              style="width: 300px"
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
  </div>
        <div class="fit row wrap justify-center items-center content-center">
      
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
                class="my-content bg-grey-8 text-white"    
              >
                <q-card-section>
                  <div class="text-h6">興趣星球</div>
                </q-card-section>

                <q-card-section >
                  <p style="font-size: 18px">想要有個第二專長嗎？</p>
                  <p style="font-size: 18px">想要尋找感興趣的事物嗎？</p>
                  <p class="q-pr-md q-pl-md" style="font-size: 18px">
                    來興趣星球探索吧
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
                    to="/main/savorcontent"
                  />
                </q-card-actions>
              </q-card>
            </div>
          <!-- 右邊 -->
          <div class="col-9 col-md-6">
            <div class="column">
              <h4 class="q-pl-xl text-white">試閱筆記</h4>
              <div class="row q-gutter-sm">
                <q-intersection
                  class="item example-item col-12 col-sm-5 col-md-5"
                  v-for="n in 4"
                  :key="`sm-${n}`"
                  once
                  transition="scale"
                >
                  <q-card class="q-ma-sm">
                    <img :src="notes[n - 1].img" />

                    <q-card-section>
                      <div class="text-h6">Card #{{ notes[n - 1].title }}</div>
                      <div class="text-subtitle2">
                        {{ notes[n - 1].class }}
                      </div>
                    </q-card-section>
                  </q-card>
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

export default {
  name: "PageHomeSavor",
  components: {},
  props: {},
  setup() {
    return {
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

<style lang="sass" scoped>
.my-content
  width: 300px
  height: 200px
  max-width: 250px
  @media (max-width: 850px)
    max-width: 300px
    height: 330px
  @media (min-width: 691px)
    max-width: 300px
    height: 330px
    
.item
  @media (max-width: 850px)
    width: 80%


.large-screen-only
  @media (max-width: 1181px)
    display: none

.middle-screen-only
  display: none
  @media (max-width: 1181px)
    display: block
  @media (max-width: 800px)
    display: none

.small-screen-only
  display: none
  @media (max-width:800px)
    display: block
</style>