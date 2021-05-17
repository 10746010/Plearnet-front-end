<template>
  <div class="login">
    <Header type="row-reverse" display_type="none" />

    <form @submit.prevent="login" name="formLogin">
      <div class="contents">
        <div class="title">Plearnet</div>
        <div class="text">
          <label>登入</label>
        </div>

        <div class="inputbox">
          <!-- <AccountInput
            account_type="text"
            placeholder_text="test"
            :model_input="userName"
            @update:model_input="userName = $event"
          /> -->
          <!-- 帳號 -->
           <AccountInput
            account_type="text"
            placeholder_text="請輸入帳號"
            :model_input="userName"
            @update:model_input="userName = $event"
          />

          <!-- 密碼 -->
          <AccountInput
            account_type="password"
            placeholder_text="請輸入密碼"
            :model_input="password"
            @update:model_input="password = $event"
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
    </form>
  </div>
</template>

<script>
import Header from "../components/Header";

import AccountInput from "../components/AccountInput";

export default {
  name: "Login",
  data() {
    return {
      inputBackgroundg: require("../../static/img/login_ap.png"),
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.userName == "test1" && this.password == "1234") {
        localStorage.setItem("token", "ImLogin");
        this.$router.push("/");
      } else {
        alert("login failed");
      }
    },
  },
  components: {
    Header,
    AccountInput,
  },
};
</script>
<style scoped>
.contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
