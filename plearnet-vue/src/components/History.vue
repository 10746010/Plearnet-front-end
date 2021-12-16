<template>
  <!-- History.vue -->

  <div class="history">
    <h1>我的歷史紀錄</h1>
    <div class="history__content">
      <ListContent
        v-for="data in state.data"
        :key="data.id"
        headcolor="red"
        color="white"
        :text="data.title"
        @click.prevent="click(data.type, data.forum, data.atricle)"
      />
      <!-- <ListContent headcolor="red" color="white" text="收藏" />
      <ListContent headcolor="red" color="white" text="收藏" />
      <ListContent headcolor="red" color="white" text="收藏" />
      <ListContent headcolor="red" color="white" text="收藏" /> -->
    </div>
  </div>
</template>

<script>
import ListContent from "./ListContent";
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "History",
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
      .get("watched", {
        params: {
          username: usernameid,
        },
      })
      .then(function (response) {
        state.data = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const click = async (type, forum, atricle) => {
      router.push(`/${type}/${forum}/${atricle}`);
    };
    return {
      state,
      click,
    };
  },
};
</script>
<style scoped>
.history {
  position: relative;
  z-index: 1;
  margin: 0 0 0 30px;
}
.history > h1 {
  color: white;
  margin: 0 0 10px 0;
}
.history__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>