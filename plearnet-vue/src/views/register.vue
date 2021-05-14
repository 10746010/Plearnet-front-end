<template>
  <div class="register">
    <div class="contents">
      <div class="text">
        <div class="left">
          <div class="reg">Plearnet</div>
          <div class="registertext">
            <label>註冊</label>
          </div>
          <div class="inputbox">
            <input type="e-mail" placeholder="電子信箱" />
            <br />
            <br />
            <input type="password" placeholder="密碼" />
            <br />
            <br />
            <input type="password" placeholder="確認密碼" />
            <br />
          </div>
          <div class="button">
            <img
              src="../../static/img/registerbutton.png"
              style="width: 100px"
            />
          </div>
        </div>
        <div class="right">
          <router-link to="/">
            <img src="../../static/img/icon.png" style="width: 1000px" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.register {
  color: white;
}
.text {
  display: flex;
}

.reg {
  text-align: left;
  font-size: 50px;
}

.registertext {
  text-align: left;
  margin-left: 60px;
}

.button {
  margin-left: 100px;
  margin-top: 10px;
}

.inputbox {
  padding-top: 100px;
}

.right {
  position: relative;
  top: -200px;
  right: -5px;
}
.contents {
  display: flex;
}
.left {
  margin-left: 120px;
}
</style>
