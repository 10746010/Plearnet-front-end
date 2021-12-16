<template>
  <!-- Paint.vue -->
  <div class="paint">
    <h1>我的筆記重點</h1>
    <div class="paint__content">
      <ListContent headcolor="#01dcff" color="white" text="標題" />
      <ListContent headcolor="#01dcff" color="white" text="標題" />
      <ListContent headcolor="#01dcff" color="white" text="標題" />
      <ListContent headcolor="#01dcff" color="white" text="標題" />
      <ListContent headcolor="#01dcff" color="white" text="標題" />
    </div>
  </div>
</template>

<script>
import ListContent from "./ListContent";

export default {
  name: "Paint",
  components: {
    ListContent,
  },
};
</script>
<style scoped>
.paint {
  position: relative;
  z-index: 1;
  margin: 0 0 0 30px;
}
.paint > h1 {
  color: white;
  margin: 0 0 10px 0;
}
.paint__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>