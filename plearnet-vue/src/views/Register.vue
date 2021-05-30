<template>
  <div class="register">
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
          <AccountInput placeholder_text="電子信箱" />
          <AccountInput placeholder_text="密碼" />
          <AccountInput placeholder_text="確認密碼" />

          <div class="button">
            <img
              src="../../static/img/registerbutton.png"
              style="width: 100px"
            />
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
  </div>
</template>

<script>
import AccountInput from "../components/AccountInput";

export default {
  name: "Register",
  data() {
    return {};
  },
  components: {
    AccountInput,
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

.button {
  margin-left: 350px;
}

.inputbox {
  padding-top: 100px;
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
