<template>
  <!-- UserButton.vue，登入後的使用者的按鈕框 -->

  <div class="options">
    <!-- 上傳 -->
    <router-link to="/update">
      <div class="img">
        <img v-bind:src="upload" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="上傳" /> -->
      </div>
    </router-link>
    <!-- 收藏 -->
    <router-link to="/user/like">
      <div class="img">
        <img v-bind:src="like" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="收藏" /> -->
      </div>
    </router-link>
    <!-- 紀錄 -->
    <router-link to="/user/history">
      <div class="img">
        <img v-bind:src="history" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="紀錄" /> -->
      </div>
    </router-link>
    <!-- 塗鴉 -->
    <router-link to="/user/paint">
      <div class="img">
        <img v-bind:src="paint" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="塗鴉" /> -->
      </div>
    </router-link>
    <!-- 設定 -->
    <router-link to="/user/self">
      <div class="img">
        <img v-bind:src="set" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="設定" /> -->
      </div>
    </router-link>
    <!-- 許願 -->
    <router-link to="/user/wish">
      <div class="img">
        <img v-bind:src="wish" alt="" />
        <!-- <Button color="rgba(255, 255, 255, 0)" text="許願" /> -->
      </div>
    </router-link>
  </div>
</template>

<script>
// import Button from "./Button";

export default {
  name: "UserButton",
  data() {
    return {
      like: require("../../static/img/like.png"),
      lop: require("../../static/img/lop.png"),
      history: require("../../static/img/history.png"),
      upload: require("../../static/img/upload.png"),
      paint: require("../../static/img/paint.png"),
      set: require("../../static/img/set.png"),
      wish: require("../../static/img/wish.png"),
    };
  },
  porops: {
    text: String,
    color: String,
  },
  components: {
    // Button,
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
  width: 70%;
}
.btn{
  color:#fffeff;
}
</style>