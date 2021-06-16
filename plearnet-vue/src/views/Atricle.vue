<template>
  <div class="content__box">
    <div class="atricle__box">
      <div class="atricle__title">{{ state.atricle }}</div>
      <div class="atricle__content">{{ state.content }}</div>
    </div>

    <div class="user-message">
      <div class="message-item">
        <div v-for="item in state.items" :key="item.id">
          {{ item.content }}
        </div>
        <!-- {{state.items}} -->
      </div>
      <div class="message-content">
        <input v-model="userMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

export default {
  name: "Atricle",
  data() {
    const state = reactive({
      atricle: "",
      content: "",
      items: [],
    });
    // 文章
    axios
      .get("plearnets", {
        params: {
          id: 1,
        },
      })
      .then(function (response) {
        (state.atricle = response.data[0].title),
          (state.content = response.data[0].content);
      })
      .catch(function (error) {
        console.log(error);
      });
    //   留言
    axios
      .get("message", {
        params: {
          article: 2,
        },
      })
      .then(function (response) {
        state.items = response.data;
        console.log(state.items )
      })
      .catch(function (error) {
        console.log(error);
      });
    return {
      state,
    };
  },
  components: {},
};
</script>
<style scoped>
.content__box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

/* 放文章的地方 */
.atricle__box {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 500px;
  height: 80%;
}
/* 文章標題 */

.atricle__title {
  width: 80%;
  height: 10%;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}
/* 文章內容 */

.atricle__content {
  width: 100%;
  height: 100%;
  background-color: #ffffffb5;
  border-radius: 20px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

/* 留言 */
.user-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 80%;
  margin: 20px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #4a4a4a;
  border-radius: 20px;
}
/* 使用者的留言 */
.message-item {
    height: 100%;
    /* display: flex; */
}
/* 使用者想要留言的地方 */
/* .user-message > .message-content{
    justify-content: flex-end;
} */
</style>
