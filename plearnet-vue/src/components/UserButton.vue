<template>
  <div class="options">
    <router-link to="/user/update"><button class="btn">上傳</button></router-link>
    <router-link to="/user/like"><button class="btn">收藏</button></router-link>
    <router-link to="/user/history"><button class="btn">紀錄</button></router-link>
    <router-link to="/user/paint"><button class="btn">塗鴉</button></router-link>
    <router-link to="/user/self"><button class="btn">設定</button></router-link>

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
img{
  width: 50px;
}
</style>