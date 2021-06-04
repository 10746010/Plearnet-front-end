<template>
<!-- ListContent.vue -->
  <div class="list" >
    <!-- 標題圖片 -->
    <div class="title__img" :style="{background: headcolor}"/>
    <Button :color="color" :text="text"/>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "ListContent",
  data() {
    return {};
  },
  props: {
    text: String,
    color: String,
    headcolor:String,
  },
  components: {
    Button
  },
};
</script>
<style scoped>
.list{
    display: flex;
    background-color: white;
    margin:0px 0px 5px 5px;
    padding:8px;
}
/* 標題圖片 */
.title__img{
    width: 50px;
}

</style>