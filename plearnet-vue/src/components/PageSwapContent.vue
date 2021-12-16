<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position">
        <div
          class="bg-white WAL__layout shadow-3"
          container
          style="min-height: 1000px"
        >
          <q-btn
            class="back"
            unelevated
            color="white"
            text-color="grey-9"
            icon="fas fa-arrow-left"
            round
            to="/main/pageswap"
          />
          <div class="fit row justify-center">
            <q-card class="my-card justify-center" flat>
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label class="text-subtitle1">
                    <strong>暱稱006</strong>
                    <span class="text-grey-7">@test006</span>
                  </q-item-label>
                </q-item-section>
              </q-item>

              <q-card-section horizontal>
                <q-card-section>
                  希望有人能幫我看一下作業的微積分公式對不對
                </q-card-section>
              </q-card-section>
              <q-card-section class="flex flex-center">
                <q-img
                  class="rounded-borders"
                  src="https://cdn.quasar.dev/img/parallax2.jpg"
                />
              </q-card-section>
            </q-card>
          </div>

          <q-separator color="grey-4" size="10px" />

          <q-list separator>
            <q-item
              v-for="swap in swaps"
              :key="swap.date"
              class="q-py-md"
              style="max-width: 445px"
            >
              <q-item-section avatar top>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label class="text-subtitle1">
                  <strong>測試</strong>
                  <span class="text-grey-7">@test_test</span>
                </q-item-label>
                <q-item-label class="content">
                  {{ swap.content }}
                  <div>
                    <img class="full-width" :src="swap.img" />
                  </div>
                </q-item-label>
                <div class="row">
                  <q-space />
                  <q-btn
                    @click="deleteSwap(swap)"
                    color="grey"
                    icon="fas fa-trash"
                    size="sm"
                    flat
                    round
                  />
                </div>
              </q-item-section>

              <q-item-section side top>{{ swap.date }}</q-item-section>
            </q-item>
          </q-list>

          <div class="send q-py-lg q-px-md row items-end q-col-gutter-md">
            <div class="col" style="max-width: 380px">
              <q-input
                class="new-content"
                v-model="newSwapContent"
                placeholder="我要留言..."
                counter
                bottom-slots
                maxlength="280"
                autogrow
              >
                <template v-slot:before>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
                  </q-avatar>
                </template>
                <template v-slot:hint>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    @change="previewImage"
                  />
                </template>
              </q-input>
            </div>

            <div class="col col-shrink">
              <div class="row">
                <q-btn
                  class="q-mb-lg"
                  :disable="!newSwapContent"
                  round
                  dense
                  flat
                  icon="send"
                  unelevated
                  no-caps
                  @click="addNewSwap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { computed } from "vue";

export default {
  name: "PageSwapContent",
  data() {
    return {
      newSwapContent: "",
      swaps: [
        { content: "測試測試測試", date: 1636472865852, img: null },
        { content: "你好你好你好", date: 1636472887405, img: null },
      ],
      imageUpload: [],
      preview: null,
      image: null,
    };
  },
  methods: {
    addNewSwap() {
      let newSwap = {
        content: this.newSwapContent,
        date: Date.now(),
        img: this.preview,
      };
      this.swaps.push(newSwap);
      this.newSwapContent = "";
    },
    deleteSwap(swap) {
      let dateToDelete = swap.date;
      let index = this.swaps.findIndex((swap) => swap.date === dateToDelete);
      this.swaps.splice(index, 1);
    },
    previewImage(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
  },

  setup() {
    const style = computed(() => ({
      height: screen.height + "%",
    }));
    console.log(screen.height);
    return {
      style,
      selected: "A",
      options: [
        { text: "依熱門度排序", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      swaplists: [
        {
          img: "https://cdn.quasar.dev/img/avatar2.jpg",
          name: "暱稱006",
          content: "希望有人能幫我看一下作業的微積分公式對不對",
          views: "view 60",
        },
        {
          img: "https://cdn.quasar.dev/img/avatar2.jpg",
          name: "name_1102",
          content: "現在小學生的作業都那麼難的嗎",
          views: "view 221",
        },
        {
          img: "https://cdn.quasar.dev/img/avatar2.jpg",
          name: "uuu",
          content: "我就是想發個帖子",
          views: "view 3",
        },
      ],
    };
  },
};
</script>
<style lang="sass" scoped>

.star
    width:150px
    height:150px
    position: relative
    top: -50px
    right: 70px

.tit
    position: relative
    top: -50px
    font-size: 3rem
    left: -180px

.back 
    position: relative
    right: 50px

.new-contetn
    textarea
        font-size: 19px
        line-height:1.4 !important

.content
    white-space:pre-line

.q-item
    margin :0 auto

.send
    justify-content: center

</style>