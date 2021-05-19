<template>
<!-- 登入按鈕 -->
  <div>
    <!-- 檢查有沒有登入 -->
    <div v-if="notLogin">
      <router-link to="/login"
        ><img v-bind:src="login" alt="" id="lop"
      /></router-link>

      
    </div>
    <!-- 如果有就進入 -->
    <div v-else>
      <router-link to="/user/self"
        ><img v-bind:src="lop" alt="" id="lop"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountButton",
  data() {
    return {
      lop: require("../../static/img/lop.png"),
      login: require("../../static/img/login.png"),
      notLogin: true,
    };
  },
  mounted() {
    const isLogin = localStorage.getItem("token") == "ImLogin";
    this.isLogin = isLogin ? isLogin : "未登入";
    this.notLogin = isLogin ? false : true;
  },
  props: {
    text: String,
    color: String,
  },
  components: {
  },
};
</script>
<style scoped>
#lop {
  width: 70px;
}
</style>

// Used by Header