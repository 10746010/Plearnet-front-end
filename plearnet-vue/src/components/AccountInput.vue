<template>
  <div class="AccountInput">
    <div class="input_background">
      <img :src="inputBackgroundg" alt="" />
    </div>
    <div class="input">
      <input type="text" :placeholder="placeholder_text" value="" id="input" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountInput",
  data() {
    return {
      inputBackgroundg: require("../../static/img/login_ap.png"),
    };
  },
  props: {
      top_num:String,
      left_num:String,
      placeholder_text:String,
  },
  components: {},
};
</script>
<style scoped>
.input_background > img {
  width: 500px;
  height: 150px;
  margin:-30px 0px;
}
.input {
  position: relative;
  z-index: 1;  
  top:-60px;
  left:88px;
}
#input {
  border: none;
  outline: none;
}
</style>
