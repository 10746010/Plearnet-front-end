<template>
<!-- Like.vue -->

  <div class="like">
    <ListContent headcolor="green" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="green" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="green" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="green" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="green" color="white" text="需要文字嗎?"/>
  </div>
</template>

<script>
import ListContent from "./ListContent"

export default {
  name: "Like",
  components: {
    ListContent
  },
};
</script>
<style scoped>
.like{
  position: relative;
  z-index: 1;
}
</style>