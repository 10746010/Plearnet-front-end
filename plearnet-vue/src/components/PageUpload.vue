<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="
    z-index: 0;">
      <h4 class="q-pl-xl">我上傳的筆記</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl">
          <div class="q-pl-lg q-gutter-sm">
            <q-btn flat color="white" text-color="black" label="全部" />
            <q-btn flat color="white" text-color="black" label="學術科" />
            <q-btn flat color="white" text-color="black" label="非學術科" />
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn class="glossy q-mr-md" rounded color="indigo-14" label="新增" to="/main/uploadnote"/>
            <q-btn class="glossy" rounded color="deep-orange" label="刪除" />
          
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mr-xl">
          <div class="q-ml-xl q-mr-xl ">
            <q-separator class="q-my-md q-ml-md q-mr-md" />
          </div>
      </div>

      <div class="row justify-center q-gutter-sm">
        <q-intersection
          class="example-item col-3"
          v-for="note in state.notes"
          :key="note"
          once
          transition="scale"
        >
          <div class="my-content">
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">{{ note.title }}</div>
              </q-card-section>
            </q-card>
          </div>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>

import axios from "axios";
import { reactive } from "vue";

export default {
  name: "PageUpload",
  components: {

  },
  props: {

  },
  setup() {

    const state = reactive({
      notes:[]
    });
     
     axios
      .get("topic/tagSearch?tag=1", {
        
      })
      .then(function (response){
        state.notes = response.data.data
      })
      .catch(function (error){
        console.log(error);
      })
    return {
      state
    };
  },
};
</script>

<style lang="sass">

</style>