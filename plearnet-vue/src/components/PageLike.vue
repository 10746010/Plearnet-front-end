<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen bg-black text-white" style="
    z-index: 0;">
      <h4 class="q-pl-xl">我的收藏</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl">
          <div class="q-pl-lg q-gutter-sm">
            <q-btn flat color="white" text-color="white" label="網頁" />
            <q-btn flat color="white" text-color="white" label="畫圖" />
            <q-btn flat color="white" text-color="white" label="國家" />
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn icon="add" flat color="white" text-color="black" />
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mr-xl">
          <div class="q-ml-xl q-mr-xl ">
            <q-separator dark class="q-my-md q-ml-md q-mr-md" />
          </div>
      </div>

      <div class="row justify-center q-gutter-sm text-black">
        <q-intersection
          class="example-item col-3"
          v-for="note in state.notes"
          :key="note"
          once
          transition="scale"
        >
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">{{ note.title }}</div>
                <div class="text-subtitle2">by {{ note.by }}</div>
              </q-card-section>
            </q-card>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { reactive } from "vue";


export default {
  name: "PageLike",
  components: {

  },
  props: {

  },
  setup() {
const state = reactive({
      notes: [
        { title: "筆記", date: 1636472865852,by:"John Doe" },
        { title: "筆記", date: 1637254937118,by:"John John" },
        { title: "筆記", date: 1637254943967,by:"Doe Doe" },
        { title: "筆記", date: 1637254973899,by:"Lin" },
        { title: "筆記", date: 1637254953820,by:"Lin" },
        { title: "筆記", date: 1637254953825,by:"Chen Doe" }, 
        { title: "筆記", date: 1637254953829,by:"Doe" },
        { title: "筆記", date: 1637254953860,by:"John" },
        { title: "筆記", date: 1637254953865,by:"John" },

      ],
    });
    return {
      state
    };
  },
};
</script>

<style lang="sass">

</style>