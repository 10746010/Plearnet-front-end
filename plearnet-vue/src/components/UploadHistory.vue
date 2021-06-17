<template>
  <!-- Like.vue -->

  <div class="upload">
    <h1>我的收藏</h1>
    <div class="upload__content">
      <ListContent
        v-for="data in state.data"
        :key="data.id"
        headcolor="green"
        color="white"
        :text="data.title"
        @click.prevent="click(data.type,data.forum,data.id)"
      />
      <!-- <ListContent headcolor="green" color="white" :text="data.title" />
      <ListContent headcolor="green" color="white" :text="data.title" />
      <ListContent headcolor="green" color="white" :text="data.title" />
      <ListContent headcolor="green" color="white" :text="data.title" /> -->
    </div>
  </div>
</template>

<script>
import ListContent from "./ListContent";
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "Upload",
  components: {
    ListContent,
  },
  setup() {
    const state = reactive({
      data: [],
    });
    const router = useRouter();

    let usernameid = localStorage.getItem("token");
    axios
      .get("plearnets", {
        params: {
          username: usernameid,
        },
      })
      .then(function (response) {
        console.log(response.data);
        state.data = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    const click = async (type,forum,id) => {
        router.push(`/${type}/${forum}/${id}`)
    };
    return {
      state,
      click
    };
  },
};
</script>
<style scoped>
.upload {
  position: relative;
  z-index: 1;
  margin: 0 0 0 30px;
}
.upload > h1 {
  color: white;
  margin: 0 0 10px 0;
}
.upload__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>