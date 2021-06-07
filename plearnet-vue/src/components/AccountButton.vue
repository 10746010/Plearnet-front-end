<template>
  <!--AccountButton.vue， 登入按鈕 -->
  <div>
    <!-- 檢查有沒有登入 -->
    <div v-if="state.notLogin">
      <router-link to="/login"
        ><img v-bind:src="state.login" alt="" id="lop"
      /></router-link>
    </div>
    <!-- 如果有就進入 -->
    <div v-else>
      <router-link to="/user/self"
        ><img v-bind:src="state.lop" alt="" id="lop"
      /></router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "AccountButton",
  props: {
    text: String,
    color: String,
  },
  components: {},
  setup() {
    const state = reactive({
      lop: require("../../static/img/lop.png"),
      login: require("../../static/img/login.png"),
      notLogin: true,
    });

    state.notLogin = !localStorage.getItem("token")
    console.log(state.notLogin)
    return {
      state,
    };
  }, 
 
};
</script>
<style scoped>
#lop {
  width: 70px;
}
</style>

// Used by Header