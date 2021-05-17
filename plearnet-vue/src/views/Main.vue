<template>
  <div class="wrapper">
    <Header />
    <router-view :isLogin="isLogin"/>
  </div>
</template>

<script>
import Header from "../components/Header";


export default {
  name: "Main",
  data() {
    return {
      img: require("../../static/img/icon.png"),

    }
  },
  components: {
    Header,
  },
};
</script>
<style scoped>

</style>
