<template>
  <router-link to="/user/self"><img v-bind:src="lop" alt="" id="lop" /></router-link>
  <!-- <router-link to="/user/self"><button class="btn">登入</button></router-link> -->
  <!-- <Test text="Add Task" color="red" /> -->
</template>

<script>
// import Test from './Test'

export default {
  name: "AccountButton",
  data() {
    return {
      lop: require("../../static/img/lop.png"),     
    };
  },
  porops: {
    text: String,
    color: String,
  },
  components: {
    // Test,
  },
};
</script>
<style scoped>
#lop{
    width:70px;
}
</style>

// Used by Header