<template>
  <!-- Accountinput.vue，文字輸入框 -->
  <!-- 輸入框 -->
  <div class="account-input">
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
    return {};
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
.input {
  position: relative;
  z-index: 1;
}
/* 輸入帳號密碼的輸入框 */
#inputCss {
  border: none;
  outline: none;
  height: 30px;
  border-radius: 5px;
  width: 100%;
}
</style>
