<template>
  <div>
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Main",
  data() {
    return {
      img: require("../../static/img/icon.png"),
    };
  },
  components: {
    Header,
  },
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
  position: relative;
  background: #030b2f;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
}
</style>
