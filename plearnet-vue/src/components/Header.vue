<template>
<!-- Header.vue -->

  <header :style="{'flex-flow':type}">
    <div>
      <router-link to="/"
        ><img v-bind:src="img" alt="" class="home"
      /></router-link>      
      
    </div>
    <!-- 放搜尋框及使用者按鈕的地方 -->
    <div class="user-search__box" :style="{display:display_type}">
      <Search text=""/>
      <AccountButton />
    </div>
  </header>
</template>

<script>
import AccountButton from "./AccountButton"
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
  props: {
    type:String,
    display_type:String
  },
  components: {
    AccountButton,
    Search
  },
};
</script>

<style scoped>
header {
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 200px 3px 200px;
  /* background-attachment:fixed; */
}
/* 放搜尋框及使用者按鈕的地方 */
.user-search__box {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {
  width: 50px;
  /* margin: 3px 20px 0px 0px; */
}
</style>