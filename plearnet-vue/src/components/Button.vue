<template>
  <!-- Button.vue，通用的按鈕 -->
    <button :style="{ background: color}"
  class="btn">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
        
    };
  },
  props: {
      text: String,
      color: String,
  }
};
</script>
<style scoped>
.btn {
  display: inline-block;
  color: rgb(33, 10, 161);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>