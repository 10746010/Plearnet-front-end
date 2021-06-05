<template>
  <div class="register">
    <form @submit.prevent="createNewAccount" name="formRegister">
      <div class="contents">
        <!-- 左邊 -->
        <div class="left">
          <router-link to="/" style="text-decoration: none">
            <div class="reg">Plearnet</div>
          </router-link>
          <div class="registertext">
            <label>註冊</label>
          </div>
          <div class="inputbox">
            <Input
              type="text"
              placeholder_text="輸入名字"
              :model_input="state.username"
              @update:model_input="state.username = $event"
            />

            <Input
              type="text"
              placeholder_text="輸入帳號"
              :model_input="state.account"
              @update:model_input="state.account = $event"
            />

            <Input
              type="password"
              placeholder_text="輸入密碼"
              :model_input="state.password"
              @update:model_input="state.password = $event"
            />

            <Input
              type="password"
              placeholder_text="確認密碼"
              :model_input="state.password_confirm"
              @update:model_input="state.password_confirm = $event"
            />

            <Input
              type="email"
              placeholder_text="輸入電子信箱"
              :model_input="state.email"
              @update:model_input="state.email = $event"
            />
          </div>
          <!-- 註冊送出 -->
          <button class="submit__btn">
            <img
              src="../../static/img/registerbutton.png"
              style="width: 100px"
            />
          </button>
        </div>
        <!-- 右邊 -->
        <div class="right">
          <div class="imgBg">
            <img src="../../static/img/icon.png" style="width: 1000px" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Input from "../components/Input.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

import axios from "axios";

export default {
  name: "Register",
  components: {
    Input,
  },
  setup() {
    const state = reactive({
      username:"",
      account: "",
      password: "",
      password_confirm: "",
      email: "",
    });

    const router = useRouter();

    const createNewAccount = async () => {
      await axios.post("register", {
        username: state.username,
        account: state.account,       
        password: state.password,
        password_confirm: state.password_confirm,
        email: state.email,
      });     
      
      await router.push("/login");
    };
  
    return {
      state,
      createNewAccount,
    };
  },
};
</script>
<style scoped>
.contents {
  display: flex;
}

.register {
  color: white;
}

.reg {
  color: white;
  font-size: 50px;
}
/* 註冊送出 */
button {
  margin-left: 350px;
  background-color: transparent;
  border: none;
}
/* .inputbox {
  padding-top: 100px;
} */

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 120px;
  z-index: 1;
}

.imgBg {
  position: relative;
  top: -100px;
  right: -5px;
}
</style>
