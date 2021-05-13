<template>
  <div class="register">
    <div class="text">
      <div class="left">
        <div class="reg">
          Plearnet
          <br />
        </div>
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
          <img src="../../static/img/registerbutton.png" width="100px" />
        </div>
      </div>
      <div class="right">
        <img src="../../static/img/loginBg.png" width="1000px" />
      </div>
    </div>
  </div>
</template>

<script>

</script>
<style scoped>
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
}

.inputbox {
  padding-top: 100px;
}

.right {
  position: relative;
  top: -200px;
  right: -200px;
}

.left {
  margin-left: 20px;
}
</style>
