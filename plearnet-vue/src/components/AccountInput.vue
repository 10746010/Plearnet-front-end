<template>
<!-- 登入和註冊用的文字輸入框 -->
  <div class="AccountInput">
    <div class="input_background">
      <img :src="inputBackgroundg" alt="" />
    </div>
    <div class="input">
      <input
        id="input_css"
        :type="account_type"
        :placeholder="placeholder_text"
        :value="model_input"
        @input="$emit('update:model_input', $event.target.value)"
        required
      />
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
    placeholder_text: String,
    account_type: String,
    model_input: String,
  },
  components: {},
};
</script>
<style scoped>
.input_background > img {
  width: 500px;
  height: 150px;
  margin: -30px 0px;
}
.input {
  position: relative;
  z-index: 1;
  top: -60px;
  left: 88px;
}
#input_css {
  border: none;
  outline: none;
}
</style>
