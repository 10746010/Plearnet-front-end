<template>
  <div>
    <router-link to="/user/self"
      ><img v-bind:src="lop" alt="" id="lop"
    /></router-link>

    <!-- <Test text="Add Task" color="green" /> -->
  </div>
  <!-- <router-link to="/user/self"><button class="btn">登入</button></router-link> -->
</template>

<script>
// import Test from "./Test";

export default {
  name: "AccountButton",
  data() {
    return {
      lop: require("../../static/img/lop.png"),
    };
  },
  props: {
    text: String,
    color: String,
  },
  components: {
    // Test,
  },
};
</script>
<style scoped>
#lop {
  width: 70px;
}
</style>

// Used by Header