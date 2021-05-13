<template>
  <div class="self">
    <div class="top">
      <div class="icon">
        <img src="../static/img/icon.png" width="50" />
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div>
          <img src="../static/img/update.png" width="50" />
        </div>
        <div>
          <img src="../static/img/like.png" width="50" />
        </div>
        <div>
          <img src="../static/img/history.png" width="50" />
        </div>
      </div>
      <div class="right">
        <div class="img">
          <img src="../static/img/lop.png" width="150" />
        </div>
        <div class="text">
          <p><label>name</label></p>
          <p><label>g-mail</label></p>
          <p><label>phone</label></p>
        </div>
        <div class="button">
          <button>change</button>
          <button>out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.content {
  display: flex;
  width: 100vh;
}

.left {
  margin-top: 50px;
  height: 100vh;
  width: 150px;
  align-items: center;
}

.text {
  color: white;
  height: 500px;
  margin-left: 30px;
}

.img {
  width: auto;
  text-align: left;
}
.button {
  margin-left: 150px;
}
</style>
