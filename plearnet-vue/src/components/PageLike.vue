<template>
  <q-page class="relative-position">
    <q-scroll-area
      class="absolute fullscreen bg-black text-white"
      style="z-index: 0"
    >
      <h4 class="q-pl-xl">我的收藏</h4>
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
            <q-btn
              flat
              color="white"
              text-color="white"
              v-for="tag in state.tags"
              :key="tag"
              @click.prevent="show(tag.tag_name)"
              >{{ tag.tag_name }}</q-btn
            >
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn
              class="glossy"
              rounded
              color="deep-orange"
              label="刪除"
              @click="onDelete"
            />
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mr-xl">
        <div class="q-ml-xl q-mr-xl">
          <q-separator dark class="q-my-md q-ml-md q-mr-md" />
        </div>
      </div>

      <div class="row justify-center q-gutter-sm text-black">
        <q-intersection
          class="like-item col-6 col-md-3 col-sm-4"
          v-for="note in state.showNotes"
          :key="note"
          once
          transition="scale"
        >
          <div>
            <q-btn @click.prevent="watch(note.topic_id)">
              <q-card class="q-ma-sm">
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />

  
                <q-card-section v-if="note.title.length < 9">
                  <div class="text-h6">{{ note.title }}</div>
                <div class="text-subtitle2">by {{ note.author }}</div>
                </q-card-section>
                <q-card-section v-else>
                  <div class="text-h6">{{ note.title.slice(0, 8) }}...</div>
                <div class="text-subtitle2">by {{ note.author }}</div>
                </q-card-section>
              </q-card>
            </q-btn>
            <q-slide-transition
              class="fit row justify-center items-center content-center"
            >
              <div v-show="deleteButton">
                <q-card-section class="text-subitle2">
                  <div class="row">
                    <q-space />
                    <q-btn
                      round
                      color="primary"
                      icon="delete"
                      dense
                      @click="deleteNote(note)"
                    />
                  </div>
                </q-card-section>
              </div>
            </q-slide-transition>
          </div>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "PageLike",
  components: {},
  props: {},
  setup() {
    const state = reactive({
      notes: [],
      userId: null,
      tags: [],
      showNotes: [],
    });
    const deleteButton = ref(false);

    function onDelete() {
      deleteButton.value = !deleteButton.value;
    }

    function deleteNote(note) {
      let noteToDelete = note.date;
      let index = state.notes.findIndex((note) => note.date === noteToDelete);
      state.notes.splice(index, 1);
    }

    axios.defaults.headers.common["token"] = localStorage.getItem("token");
    // 找使用者ID

    axios
      .get("/userAccount/getUserId", {})
      .then(function (response) {
        state.userId = response.data.data.user_id;
      })
      .catch(function (error) {
        console.log(error);
      });
    // 找收藏的筆記
    axios
      .get(`/userAccount/collectSearch?userId=${state.userId}`, {})
      .then(function (response) {
        const set = new Set();
        const arr = response.data.data;
        state.notes = arr.filter((item) =>
          !set.has(item.topic_id) ? set.add(item.topic_id) : false
        );
        state.tags = arr.filter((item) =>
          !set.has(item.tag_name) ? set.add(item.tag_name) : false
        );
        state.notes = state.notes.reverse();
        state.showNotes = state.notes;
      })
      .catch(function (error) {
        console.log(error);
      });
    // 分類
    function show(tag) {
      if (tag != "全部") {
        state.showNotes = [];
        for (const [key, value] of Object.entries(state.notes)) {
          state.key = key;
          if (value.tag_name == tag) {
            state.showNotes.push(value);
          }
        }
      } else {
        state.showNotes = state.notes;
      }
    }

    const router = useRouter();
    const watch = async (id) => {
      await router.push(`${id}`);
    };
    return {
      state,
      onDelete,
      deleteButton,
      deleteNote,
      watch,
      show,
    };
  },
};
</script>

<style lang="sass" scoped>
.like-item
  height: 290px
  width: 290px
</style>