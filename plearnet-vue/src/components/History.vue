<template>
<!-- History.vue -->

  <div class="history">
    <ListContent headcolor="red" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="red" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="red" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="red" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="red" color="white" text="需要文字嗎?"/>
  </div>
</template>

<script>
import ListContent from "./ListContent"

export default {
  name: "History",
  components: {
    ListContent
  },
};
</script>
<style scoped>
.history{
  position: relative;
  z-index: 1;
}
</style>