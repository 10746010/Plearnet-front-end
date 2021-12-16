<template>
  <div class="page-text w-richtext">
    <div class="plearnet__titile-img">{{title_img}}</div>
    <div class="plearnet__title">{{title}}</div>
    <div class="plearnet__favorite">{{favorite}}</div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "PlearnetArticleItem",
  props: {
    title_img: String,
    title: String,
    favorite:String,
  },
  setup() {
    const state = reactive({});
    return {
      state,
    };
  },
};
</script>
<style scoped>
.page-text{
    padding:20px;
    /* background-color: white; */
    border-radius: 5px;
    border-bottom:1px solid #DFE3E8;
    box-sizing:border-box;
    cursor:pointer;
    transition: all 0.25s ease;
}

/* .page-text:hover{
    transform: scale(0.9, 0.9);
} */
</style>