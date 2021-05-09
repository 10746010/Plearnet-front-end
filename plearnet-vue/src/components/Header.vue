<template>
  <header>
    <div class="search-box">
      <router-link to="/"
        ><img v-bind:src="img" alt="" id="home" class="home"
      /></router-link>
      <Search />
    </div>
    <div class="button-box">
      <Login />
    </div>
  </header>
</template>

<script>
import Login from "./Login";
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
.search-box {
  display: flex;
  align-items: center;
}

.search-box > .search-control {
  display: flex;
  width: 200px;
  height: 25px;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: white;
}
.search-control > .search {
  border: none;
  outline: none;
}
.search-control > .search-select {
  border-radius: 50%;
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