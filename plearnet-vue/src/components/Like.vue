<template>
  <!-- Like.vue -->

  <div class="like">
    <h1>我的收藏</h1>
    <div class="like__content">
      <ListContent headcolor="green" color="white" text="標題" />
      <ListContent headcolor="green" color="white" text="標題" />
      <ListContent headcolor="green" color="white" text="標題" />
      <ListContent headcolor="green" color="white" text="標題" />
      <ListContent headcolor="green" color="white" text="標題" />
    </div>
  </div>
</template>

<script>
import ListContent from "./ListContent";

export default {
  name: "Like",
  components: {
    ListContent,
  },
};
</script>
<style scoped>
.like {
  position: relative;
  z-index: 1;
  margin: 0 0 0 30px;
}
.like > h1 {
  color: white;
  margin: 0 0 10px 0;
}
.like__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>