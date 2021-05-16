<template>
    <div class="login">
    <Header type="row-reverse" display_type="none" />
      
      <form name="formLogin">
        <div class="contents">
          <div class="title">Plearnet</div>
          <div class="text">
            <label>登入</label>
          </div>
          <div class="inputbox">
            
            <!-- 帳號 -->
            <AccountInput placeholder_text="請輸入帳號"/>
           
            <!-- 密碼 -->
            <AccountInput placeholder_text="請輸入密碼"/>
            
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
</template>

<script>
import Header from "../components/Header";
import AccountInput from "../components/AccountInput"

export default {
  name: "Login",
  data() {
    return {
      
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
