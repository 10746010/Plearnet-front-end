<template>
  <header>
    <div >
      <router-link to="/"
        ><img v-bind:src="img" alt="" id="home" class="home"
      /></router-link>      
      
    </div>
    <div class="button-box">
      <Search text=""/>
      <Login />
    </div>
  </header>
</template>

<script>
import Login from "./Login"
import Search from "./Search"

export default {
  name: "Header",
  data() {
    return {
      img: require("../../static/img/icon.png"),
      prompt: "請輸入",
      selected: "標題",
      show: false,
    };
  },

  components: {
    Login,
    Search
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 200px 3px 200px;
}

.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {
  width: 50px;
  margin: 3px 20px 0px 0px;
}
</style>