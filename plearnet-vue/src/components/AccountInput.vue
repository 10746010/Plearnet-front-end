<template>
<!-- Accountinput.vue，文字輸入框 -->
<!-- 輸入框 -->
  <div class="account-input">
    <!-- 輸入框的背景 -->
    <div class="account-input__background" >
      <img :src="inputBackgroundg" alt="" />
    </div>
    <div class="input">
      <!-- 輸入帳號密碼的輸入框 -->
      <input
        id="inputCss"
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
/* 輸入框的背景 */
.account-input__background > img {
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
/* 輸入帳號密碼的輸入框 */
#inputCss {
  border: none;
  outline: none;
}
</style>
