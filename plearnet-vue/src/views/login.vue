<template>
  <div class="login">
    <form @submit.prevent="login" name="formLogin">
      <div class="contents">
        <!-- 左邊 -->
        <div class="left">
          <router-link to="/" style="text-decoration: none">
            <div class="title">Plearnet</div>
          </router-link>
          <div class="text">
            <label>登入</label>
          </div>

          <div class="inputbox">
            <!-- 帳號 -->
            <AccountInput
              account_type="text"
              placeholder_text="請輸入帳號"
              :model_input="state.account"
              @update:model_input="state.account = $event"
            />

            <!-- 密碼 -->
            <AccountInput
              account_type="password"
              placeholder_text="請輸入密碼"
              :model_input="state.password"
              @update:model_input="state.password = $event"
            />

            <!-- 登入按鈕 -->
            <div class="loginImg">
              <button type="submit">
                <img src="../../static/img/lb.png" style="width: 100px" />
              </button>
            </div>
            <!-- 註冊按鈕  -->
            <div class="registerImg">
              <router-link to="/register">
                <img
                  src="../../static/img/registerbutton.png"
                  style="width: 80px"
                />
              </router-link>
            </div>
          </div>
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
import AccountInput from "../components/AccountInput";
import { useRouter } from "vue-router";
import { reactive } from "vue";

import axios from "axios";

export default {
  name: "Login",
  components: {
    AccountInput,
  },
  setup() {
    const state = reactive({
      inputBackgroundg: require("../../static/img/login_ap.png"),
      account: "",
      password: "",
    });

    const router = useRouter();    
  
    const login = async () => {
      const response = await axios.get("register")
       .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
      if(state.account == response.account && state.password == response.password){
        localStorage.setItem("token", "ImLogin");
        await router.push("/");
      } else {
        alert('帳號密碼錯誤');
      }
    };

    return {
      state,
      login,
    };
  },
 
};
</script>
<style scoped>
.contents {
  display: flex;
}

.loginImg {
  margin-left: 350px;
}

.title {
  color: white;
  font-size: 50px;
}

.text {
  text-align: start;
  color: white;
}

.inputbox {
  padding-top: 100px;
}

.registerImg {
  margin-left: 400px;
}

button {
  background-color: unset;
  border: none;
}

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
