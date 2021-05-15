<template>
  <div>
    <Header type="row-reverse" display_type="none" />

    <div class="login">
      <form name="formLogin">
        <div class="contents">
          <div class="title">Plearnet</div>
          <div class="text">
            <label>登入</label>
          </div>
          <div class="inputbox">
            
            <!-- 帳號 -->
            <AccountInput top_num="295px" left_num="480px" placeholder_text="請輸入帳號"/>
            <!-- <div class="account">
              <div class="login_background">
                <img :src="loginBackgroundg" alt="" />
              </div>
              <div class="account_input">
                <input
                  type="text"
                  placeholder="請輸入帳號"
                  value=""
                  id="input"
                />
              </div>
            </div> -->
            <!-- 密碼 -->
            <AccountInput top_num="445px" left_num="480px" placeholder_text="請輸入帳號"/>
            <!-- <div class="password">
              <div class="login_background">
                <img :src="loginBackgroundg" alt="" />
              </div>
              <div class="password_input">
                <input
                  type="password"
                  placeholder="請輸入密碼"
                  value=""
                  id="input"
                />
              </div>
            </div> -->
            <!-- 登入按鈕 -->
            <div class="loginImg">
              <img src="../../static/img/lb.png" style="width: 100px" />
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
  </div>
</template>

<script>
import Header from "../components/Header";

import AccountInput from "../components/AccountInput"

export default {
  name: "Login",
  data() {
    return {
      loginBackgroundg: require("../../static/img/login_ap.png"),
      // loginBackgroundg: {
      //   backgroundImage:
      //     "url(" + require("../../static/img/login_ap.png") + ") ",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "300px 100px",
      // },
    };
  },
  components: {
    Header,
    AccountInput
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

/* .inputbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#input {
  border: none;
  outline: none;
}
.login_background > img {
  width: 500px;
  height: 150px;
}

.account_input {
  position: absolute;
  z-index: 1;
  top: 295px;
  left: 480px;
}

.password_input {
  position: absolute;
  z-index: 1;
  top: 445px;
  left: 480px;
} */

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
</style>
