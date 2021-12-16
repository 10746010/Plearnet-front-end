<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position">
        <div
          class="WAL__layout shadow-3"
          container
          style="min-height: 1000px; border: 1px solid; border-color: white"
        >
          <div class="row">
            <img class="star" src="../../static/img/3.png" />
            <h4 class="tit q-pl-xl text-white" style="font-size: 3rem">
              考試區
            </h4>
            <q-space />
            <div class="q-pa-md">
              <q-input
                dense
                outlined
                square
                v-model="search"
                placeholder="Search"
                class="bg-white"
                style="height: 40px"
                ><template v-slot:prepend>
                  <q-icon name="fas fa-search" />
                </template>
                <template v-slot:append>
                  <select v-model="selected" style="border: none">
                    <option
                      v-for="option in options"
                      :key="option"
                      v-bind:value="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </template>
              </q-input>
            </div>
          </div>

          <q-btn
            class="back"
            unelevated
            color="white"
            text-color="grey-9"
            icon="fas fa-arrow-left"
            round
            to="/main/exam"
          />

          <div class="row justify-center q-gutter-sm">
            <q-intersection
              class="note-item col-6 col-md-3 col-sm-4"
              v-for="note in state.notes"
              :key="note"
              once
              transition="scale"
            >
              <q-btn flat @click="watch(note.id)">
                <div class="my-content">
                  <q-card class="q-ma-sm">
                    <!-- <img :src="notes[n - 1].img" /> -->
                    <img src="https://cdn.quasar.dev/img/mountains.jpg" />               
                     <q-card-section v-if="note.title.length < 9">
                      <div class="text-h6">{{ note.title }}</div>                     
                    </q-card-section>
                    <q-card-section v-else>
                      <div class="text-h6">{{ note.title.slice(0,8)}}...</div>                     
                    </q-card-section>
                  </q-card>
                </div>
              </q-btn>
            </q-intersection>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { computed, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "PageSavor",
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    const state = reactive({
      notes: [
        
      ],
    });
    const router = useRouter();

    const watch = async (id) => {
      await router.push(`/main/${id}`);
    };
    // 找興趣所有的筆記
    axios
      .get("topic/tagTypeSearch?tagType=0", {})
      .then(function (response) {
        state.notes = response.data.data.reverse();
        console.log(state.notes);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {
      style,
      state,
      selected: "A",
      options: [
        { text: "依熱門度排序", value: "A" },
        { text: "依上傳時間排序", value: "B" },
        { text: "依按讚數排序", value: "C" },
      ],
      watch,
    };
  },
};
</script>
<style lang="sass" scoped>
.star

  height: 150px
  position: relative
  top: -50px
  right: 110px

.tit
  position: relative
  top: -50px
  font-size: 3rem
  left: -281px

.back
  position: relative
  right: 50px

.note-item
  height: 290px
  width: 290px
</style>