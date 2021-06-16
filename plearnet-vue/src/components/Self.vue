<template>
  <!--Self.vue,是使用者的個人資訊 -->

  <div class="message">
    <div class="avatar__box">
      <img v-bind:src="state.avatar" alt="" class="avatar" />
      <label>暱稱</label>
      <div v-if="!state.infoUpdate">
        <input id="nickname" v-model="state.user.username" readonly />
      </div>
      <div v-else>
        <input id="nickname" v-model="state.user.username" />
      </div>

      <!-- <Button color="rgba(255, 255, 255, 0.5)" /> -->
    </div>

    <!-- 使用者的資訊 -->

    <div class="info">
      <div v-if="!state.infoUpdate" class="change__button">
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="修改個人資料"
        />
      </div>
      <div v-else class="change__button">
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="確定"
        />
      </div>
      <div class="info__content">
        <div class="info__user">
          <div class="info__title">暱稱</div>
          <div class="info__message">{{ state.user.username }}</div>
        </div>
        <div class="info__user">
          <div class="info__title">帳號</div>
          <div class="info__message">{{ state.user.account }}</div>
        </div>
        <div class="info__user">
          <div class="info__title">信箱</div>
          <div class="info__message">{{ state.user.email }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";

export default {
  name: "Self",
  components: {
    Button,
  },
  setup() {
    const state = reactive({
      avatar: require("../../static/img/lop.png"),
      user: {
        username: "",
        account: "",
        email: "",
      },
      infoUpdate: false,
    });
    const router = useRouter();
    const token = localStorage.getItem("token");
    axios
      .get("register", {
        params: {
          id: token,
        },
      })
      .then((res) => {
        (state.user.username = res.data[0].username),
          (state.user.account = res.data[0].account),
          (state.user.email = res.data[0].email);
      })
      .catch((err) => {
        console.log(err);
      });

    const logout = async () => {
      localStorage.removeItem("token");
      await router.push("/login");
    };

    const update = async () => {
      if (!state.infoUpdate) {
        state.infoUpdate = true;
      } else {
        window.alert("已修改完成");
        state.infoUpdate = false;
        await axios.patch(`register/${token}`, {
          username: state.user.username,
        });
      }
    };
    return {
      state,
      logout,
      update,
    };
  },
};
</script>
<style scoped>
.message {
  display: flex;
  flex-direction: column;
  color: white;
}
/* 大頭像 */
.avatar__box {
  display: flex;
  align-items: center;
}
.avatar__box > label {
  margin: 0 0 0 10px;
  font-size: 28px;
}
.avatar {
  width: 15%;
  border-radius: 100px;
  border: 2px solid #ffffff;
}

/* 暱稱 */
#nickname {
  border-radius: 30px;
  height: 30px;
  text-align: center;
}
/* 使用者的資訊 */


.info {
  width: 800px;
  height: 300px;
  /* background: linear-gradient(#a4d6db, #748e7a78); */
  /* border-radius: 20px; */
}

/* 更改資訊 */
.change__button {
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: 170px;
}

/* 使用者資訊 */
.info__content {
  width: 100%;
  height: 100%;
  background: linear-gradient(#a4d6db, #748e7a78);
  border-radius: 20px;
  padding: 20px;
}

.info__user {
  display: flex;
  width: 100%;
  /* height: 100%; */
}

.info__user > div {
  border: 1px solid #ffffff;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.info__title {
  width: 10%;
}
.info__message {
  width: 100%;
}

.btn {
  border-radius: 30px;
  position: relative;
  width: 177px;
  height: 36px;
  right: 182px;
}
</style>