<template>
<!-- Paint.vue -->
  <div class="paint">
    <ListContent headcolor="#01dcff" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="#01dcff" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="#01dcff" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="#01dcff" color="white" text="需要文字嗎?"/>
    <ListContent headcolor="#01dcff" color="white" text="需要文字嗎?"/>
  </div>
</template>

<script>
import ListContent from "./ListContent"

export default {
  name: "Paint",
  components: {
    ListContent
  },
};
</script>
<style scoped>
.paint{
  position: relative;
  z-index: 1;
}
</style>