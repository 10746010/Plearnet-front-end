<template>
  <div class="wrapper">
    <Header />
    <router-view />
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
