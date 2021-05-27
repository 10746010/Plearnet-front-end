<template>
  <!-- UserButton.vue，登入後的使用者的按鈕框 -->

  <div class="options">
    <!-- 上傳 -->
    <router-link to="/user/update">
      <div class="img">
        <img v-bind:src="update" alt="" />
        <button class="btn">上傳</button>
      </div>
    </router-link>
    <!-- 收藏 -->
    <router-link to="/user/like">
      <div class="img">
        <img v-bind:src="like" alt="" />
        <button class="btn">收藏</button>
      </div>
    </router-link>
    <!-- 紀錄 -->
    <router-link to="/user/history">
      <div class="img">
        <img v-bind:src="history" alt="" />
        <button class="btn">紀錄</button>
      </div>
    </router-link>
    <!-- 塗鴉 -->
    <router-link to="/user/paint">
      <div class="img">
        <img v-bind:src="paint" alt="" />
        <button class="btn">塗鴉</button>
      </div>
    </router-link>
    <!-- 設定 -->
    <router-link to="/user/self">
      <div class="img">
        <img v-bind:src="set" alt="" />
        <button class="btn">設定</button>
      </div>
    </router-link>
    <!-- 許願 -->
    <router-link to="/user/wish">
      <div class="img">
        <img v-bind:src="wish" alt="" />
        <button class="btn">許願</button>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      like: require("../../static/img/like.png"),
      lop: require("../../static/img/lop.png"),
      history: require("../../static/img/history.png"),
      update: require("../../static/img/update.png"),
      paint: require("../../static/img/paint.png"),
      set: require("../../static/img/set.png"),
      wish:require("../../static/img/wish.png"),
    };
  },
  porops: {
    text: String,
    color: String,
  },
};
</script>
<style scoped>
.options {
  display: flex;
  flex-direction: column;
  text-align: center;
}
img {
  width: 50px;
}

.btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0);
  color: rgb(33, 10, 161);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight:bold;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>