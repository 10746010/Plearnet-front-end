<template>
  <header>
    <div>
      <a href="#" class="brand"></a>
      <input class="search" />
      <select>
        <option>標題</option>
        <option>作者</option>
        <option>日期</option>
      </select>
    </div>
    <div class="button-box">
      <Login />
      <router-link to="/"
        ><img v-bind:src="img" alt="" id="home"
      /></router-link>
    </div>
  </header>
</template>

<script>
import Login from "./Login";

export default {
  name: "Header",
  data() {
    return {
      img: require("../../static/img/icon.png"),
    };
  },
  props: {
    title: String,
  },
  components: {
    Login,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 250px 3px;
}
.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
#home {
  width: 50px;
}
</style>