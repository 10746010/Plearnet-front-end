<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen bg-black text-white" style="z-index: 0">
      <h4 class="q-pl-xl">我上傳的筆記</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl ">
          <div class="q-pl-lg q-gutter-sm ">
            <q-btn flat color="white" text-color="white" label="全部" />
            <!-- <q-btn flat color="white" text-color="white" label="學術科" /> -->
            <!-- <q-btn flat color="white" text-color="white" label="非學術科" /> -->
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn
              class="glossy q-mr-md"
              rounded
              color="indigo-14"
              label="新增"
              to="/main/uploadnote"
            />
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
        <div class="q-ml-xl q-mr-xl ">
          <q-separator dark class="q-my-md q-ml-md q-mr-md " />
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
                <div class="text-subtitle2 row">by My Self <q-space /></div>
              </q-card-section>

              <q-slide-transition>
                <div v-show="deleteButton">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    <div class="row">
                       <q-space/>
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
            </q-card>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "vue";

export default {
  name: "PageUpload",
  components: {},
  props: {},
  setup() {
    const state = reactive({
      notes: [
        { title: "筆記", date: 1636472865852 },
        { title: "筆記", date: 1637254937118 },
        { title: "筆記", date: 1637254943967 },
        { title: "筆記", date: 1637254973899 },
        { title: "筆記", date: 1637254953820 },
        { title: "筆記", date: 1637254953825 },
      ],
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
    axios
      .get("topic/tagList", {
        params: {
          name: "擊劍",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {
      state,
      onDelete,
      deleteButton,
      deleteNote,
    };
  },
};
</script>

<style lang="sass">
</style>