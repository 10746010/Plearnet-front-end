<template>
  <button :style="{ background: color}"
  class="btn">{{text}}</button>
</template>

<script>
export default {
  name: "Test",
  props: {
      text: String,
      color: String,
  }
};
</script>
<style scoped>

</style>