<template>
  <!-- Atricle.vue -->
  <div class="content__box">
    <div class="atricle__box">
      <div class="back">
        <button @click.passive="back">＜</button>
        <div class="title">
          <div class="atricle__title">{{ state.atricle }}</div>
        </div>
        <div style="width: 10%" />
      </div>

      <div class="atricle__content">{{ state.content }}</div>
    </div>

    <div class="user-message">
      <div class="message-item">
        <div v-for="message in state.message" :key="message.id">
          {{ message.content }}
        </div>
        <!-- {{state.items}} -->
      </div>
      <div class="message-content">
        <input v-model="state.userMessage" />
        <Button color="#ffffff" text="送出" @click.prevent="submit()" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";

export default {
  name: "Atricle",
  data() {
    const state = reactive({
      atricle: "",
      content: "",
      message: [],
      ifWatched: false,
      userMessage: "",
    });

    const route = useRoute();
    const router = useRouter();

    let nowId = route.params.id;

    // 文章
    axios
      .get("plearnets", {
        params: {
          id: nowId,
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
          atricle: nowId,
          _sort: "id",
          _order: "desc",
        },
      })
      .then(function (response) {
        console.log(response.data);
        state.message = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    let usernameid = localStorage.getItem("token");

    const submit = async () => {
      axios.post("message", {
        username: usernameid,
        content: state.userMessage,
        atricle: nowId,
      });
      router.go(0);
    };
    const back = async () => {
      router.back(-1);
    };
    return {
      state,
      submit,
      back,
    };
  },
  components: { Button },
};
</script>
<style scoped>
.content__box {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
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
.title{
  width: 100%;
}
.atricle__title {
  width: 100%;
  height: 40px;
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
  /* align-items: center; */
  width: 500px;
  height: 80%;
  margin: 20px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #4a4a4a;
  border-radius: 20px;
  color: white;
}
/* 使用者的留言 */
.message-item {
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
}
.message-item > div {
  margin: 10px;
}
/* 使用者想要留言的地方 */
.message-content {
  display: flex;
  align-items: center;
}
.message-content > input {
  border-radius: 20px;
  width: 100%;
  height: 25px;
}
.message-content > .btn {
  height: 30px;
  width: 80px;
  padding: 0;
}
/* .user-message > .message-content{
    justify-content: flex-end;
} */
.back {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 3;
}
.back > button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: white;
  font-size: 30px;
}
</style>
