<template>
  <!--Self.vue,是使用者的個人資訊 -->

  <div class="message">
    <img v-bind:src="state.avatar" alt="" class="avatar" />
    <!-- 使用者的資訊 -->
    <div class="user__info">
      <input id="info" value="個人資料" readonly />
    </div>
    <div class="user__info" v-if="!state.infoUpdate">
      <input id="userInfo" v-model="state.user.info.name" readonly />
      <input id="userInfo" v-model="state.user.info.email" readonly />
      <input id="userInfo" v-model="state.user.info.phone" readonly />
    </div>
    <div class="user__info" v-else>
      <input id="userInfo" v-model="state.user.info.name" />
      <input id="userInfo" v-model="state.user.info.email" />
      <input id="userInfo" v-model="state.user.info.phone" />
    </div>

    <!-- 登出的按鈕 -->
    <div class="logout__button">
      <div v-if="!state.infoUpdate">
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="修改資料"
        />
      </div>
      <div v-else>
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="確定"
        />
      </div>
      <Button
        @click.prevent="logout"
        color="linear-gradient(90deg,#e5e603, #fff59b)"
        text="登出"
      />
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
        info: {
          name: "",
          email: "",
          phone: "0912345678",
        },
      },
      infoUpdate: false,
    });

    const router = useRouter();

    axios
      .get("register",{
        params: {
          id: localStorage.getItem("token")
        }
      })
      .then((res) => {
        console.log(res)
        state.user.info.name = res.data[0].username;
        state.user.info.email = res.data[0].email;
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
        await axios.post("register", {
          username: state.user.info.name,
          account: "a",
          password: "a",
          password_confirm: "a",
          email: state.user.info.email,
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
.avatar {
  width: 15%;
}
/* 使用者的資訊 */
.user__info {
  display: flex;
  flex-direction: column;
  width: 25%;
  z-index: 1;
  /* margin: 28px; */
}
#userInfo {
  margin: 10px;
}

#info {
  color: #131d50;
  margin: 10px;
}

/* 登出的按鈕 */
.logout__button {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 200px;
  top: -50px;
  z-index: 0;
}
.btn {
  border-radius: 30px;
}
</style>