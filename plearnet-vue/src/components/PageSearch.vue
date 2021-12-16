<template>
  <q-page class="relative-position" >
    <q-scroll-area
      class="absolute fullscreen bg-black text-white"
      style="z-index: 0"
    >
      <h4 class="q-pl-xl">Search</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl">
          <div class="q-pl-lg q-gutter-sm">
            <q-btn
              flat
              color="white"
              text-color="white"
              label="全部"
              @click.prevent="show('全部')"
            />
            <!-- <q-btn
              flat
              color="white"
              text-color="white"
              v-for="tag in state.tags"
              :key="tag"
              @click.prevent="show(tag.tag_name)"
              >{{ tag.tag_name }}</q-btn
            >          -->
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn icon="add" flat color="white" text-color="black" />
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mfdasfdasfadsr-xl">
        <div class="q-ml-xl q-mr-xl">
          <q-separator dark class="q-my-md q-ml-md q-mr-md" />
        </div>
      </div>

      <div class="row justify-center q-gutter-sm text-black">
        <q-intersection
          class="history-item col-6 col-md-3 col-sm-4"
          v-for="note in state.showNotes"
          :key="note"
          once
          transition="scale"
        >
          <q-btn @click.prevent="watch(note.id)">
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">{{ note.title }}</div>
                <div class="text-subtitle2">by {{ note.author }}</div>
              </q-card-section>
            </q-card>
          </q-btn>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "PageSearch",
  components: {},
  props: {},

  setup() {
    const state = reactive({
      notes: [
        { title: "筆記", date: 1636472865852, by: "John Doe" },
        { title: "筆記", date: 1637254937118, by: "John John" },
        { title: "筆記", date: 1637254943967, by: "Doe Doe" },
        { title: "筆記", date: 1637254973899, by: "Lin" },
        { title: "筆記", date: 1637254953820, by: "Lin" },
        { title: "筆記", date: 1637254953825, by: "Chen Doe" },
        { title: "筆記", date: 1637254953829, by: "Doe" },
        { title: "筆記", date: 1637254953860, by: "John" },
        { title: "筆記", date: 1637254953865, by: "John" },
      ],
      tags: [],
      showNotes: [],
      key: null,
    });
    axios.defaults.headers.common["token"] = localStorage.getItem("token");
    const route = useRoute();
    let keyword = route.params.keyword;

    const router = useRouter();
    const watch = async (id) => {
      router.push(`${id}`);
    };
    // 找所有筆記
    axios
      .get("/topic/keySearch", {
        params: {
          key: keyword,
        },
      })
      .then(function (response) {
        const set = new Set();
        const arr = response.data.data;
        state.notes = arr.reverse();
        state.tags = arr.filter((item) =>
          !set.has(item.tag_name) ? set.add(item.tag_name) : false
        );
        state.showNotes = state.notes;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    // function show(tag) {
    //   if(tag != "全部"){
    //     state.showNotes=[]
    //     for (const [key, value] of Object.entries(state.notes)) {
    //     state.key = key
    //     if(value.tag_name == tag){
    //       state.showNotes.push(value)
    //     }
    //     }
    //   }else{
    //     state.showNotes=state.notes
    //   }
    // }
    return {
      state,
      watch,
    };
  },
};
</script>

<style lang="sass" scoped>
.history-item
    height: 290px
    width: 290px
</style>