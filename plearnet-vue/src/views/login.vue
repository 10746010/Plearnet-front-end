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

          <!-- 帳號 -->
          <div class="input_background">
            <img :src="inputBackgroundg" alt="" />
          </div>
          <div class="input">
            <input
              type="text"
              placeholder="請輸入帳號"
              id="input"
              v-model="userName"
              required
            />
          </div>
          <!-- 密碼 -->
          <div class="input_background">
            <img :src="inputBackgroundg" alt="" />
          </div>
          <div class="input">
            <input
              type="password"
              placeholder="請輸入密碼"
              id="input"
              v-model="password"
              required
            />
          </div>
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

.input_background > img {
  width: 500px;
  height: 150px;
  margin: -30px 0px;
}
.input {
  position: relative;
  z-index: 1;
  top: -60px;
  left: 88px;
}
#input {
  border: none;
  outline: none;
}
button {
  background-color: unset;
  border: none;
}
</style>
