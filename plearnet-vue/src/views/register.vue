<template>
  <div class="register">
    <Header type="row-reverse" display_type="none" />

    <div class="contents">
      <div class="reg">Plearnet</div>
      <div class="registertext">
        <label>註冊</label>
      </div>
      <div class="inputbox">
        <AccountInput placeholder_text="電子信箱" />
        <AccountInput placeholder_text="密碼" />
        <AccountInput placeholder_text="確認密碼" />

        <div class="button">
          <img src="../../static/img/registerbutton.png" style="width: 100px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import AccountInput from "../components/AccountInput";

export default {
  name: "Register",
  data() {
    return {};
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

.register {
  color: white;
}

.reg {
  font-size: 50px;
}

.button {
  margin-left: 350px;
}

.inputbox {
  padding-top: 100px;
}
</style>
