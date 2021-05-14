<template>
  <div class="login">
    <form name="formLogin">
      <div class="contents">
        <div class="left">
          <div class="title">
            Plearnet
            <br />
          </div>
          <div class="text">
            <label>登入</label>
          </div>
          <div class="inputbox">
            <div class="account">
              <br />
              <input type="text" placeholder="請輸入帳號" value="" />
            </div>

            <div class="password">
              <br />
              <input type="password" placeholder="請輸入密碼" value="" />
            </div>
            <div class="loginImg">
              <img src="../../static/img/lb.png" width="100px" />
            </div>
            <div class="registerImg">
              <router-link to="/register">
                <img src="../../static/img/registerbutton.png" width="80px" />
              </router-link>
            </div>
          </div>
          <div class="right">
            <div class="imgBg">
              <img src="../../static/img/loginBg.png" width="1000px" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
</script>
<style scoped>
.login {
  text-align: left;
}

.account {
  align-items: left;
}

.password {
  align-items: left;
}

.loginImg {
  margin-left: 90px;
}

.title {
  text-align: left;
  color: white;
  font-size: 50px;
}

.text {
  text-align: start;
  margin-left: 60px;
}

.imgBg {
  position: relative;
  top: -500px;
  right: -600px;
}

.inputbox {
  text-align: left;
  padding-top: 100px;
}

.content {
  display: flex;
}

.left {
  margin-left: 50px;
}

.registerImg {
  margin-left: 120px;
}
</style>
