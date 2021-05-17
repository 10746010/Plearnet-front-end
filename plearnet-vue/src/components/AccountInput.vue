<template>
    <div class="AccountInput">
      <div class="input_background">
        <img :src="inputBackgroundg" alt="" />
      </div>
      <div class="input">
        <input
          :type="account_type"
          :placeholder="placeholder_text"
          id="input"
          ref="input"
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
  },
  methods:{
    focusInput() {
      this.$refs.input.focus()
    }
  },
  mounted() {
    this.focusInput()
  },
  emits: ['update:firstName', 'update:lastName'],
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
#input {
  border: none;
  outline: none;
}
</style>
