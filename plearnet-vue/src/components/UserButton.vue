<template>
  <div class="options">
    <button class="btn">update</button>
    <router-link to="/user/update"><img v-bind:src="update" alt="" /></router-link>
    <router-link to="/user/like"><img v-bind:src="like" alt="" /></router-link>
    <router-link to="/user/history"><img v-bind:src="history" alt="" /></router-link>
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