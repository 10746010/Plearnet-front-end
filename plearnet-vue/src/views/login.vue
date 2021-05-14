<template>
  <div class="login">
    <form name="formLogin">
      <div class="contents">
        <div class="left">
          <div class="title">Plearnet</div>
          <div class="text">
            <label>登入</label>
          </div>
          <div class="inputbox">
            <div class="account">
              <input type="text" placeholder="請輸入帳號" value="" />
            </div>
            <div class="password">
              <input type="password" placeholder="請輸入密碼" value="" />
            </div>
            <div class="loginImg">
              <img src="../../static/img/lb.png" style="width: 100px" />
            </div>
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
        <div class="right">
          <div class="imgBg">
            <router-link to="/">
              <img src="../../static/img/icon.png" style="width: 1000px" />
            </router-link>
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
  margin-top: 30px;
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
  color: white;
}

.imgBg {
  position: relative;
  top: -200px;
  right: -5px;
}

.inputbox {
  text-align: left;
  padding-top: 100px;
}

.contents {
  display: flex;
}

.left {
  margin-left: 120px;
}
.registerImg {
  margin-left: 130px;
}
</style>
