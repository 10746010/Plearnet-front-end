<template>
  <div class="AccountInput">
    <div class="input_background">
      <img :src="inputBackgroundg" alt="" />
    </div>
    <div class="input" :style="{top: top_num,left: left_num}">
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
}
.input {
  position: absolute;
  z-index: 1;  
}
#input {
  border: none;
  outline: none;
}
</style>
