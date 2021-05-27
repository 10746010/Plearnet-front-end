<template>
<!-- ListContent.vue -->
  <div class="list" >
    <div class="head-frame" :style="{background: headcolor}"/>
    <button :style="{ background: color }" class="btn">{{ text }}</button>
  </div>
</template>

<script>
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
  components: {},
};
</script>
<style scoped>
.list{
    display: flex;
    background-color: white;
    margin:0px 0px 5px 5px;
    padding:8px;
}
.head-frame{
    width: 50px;
}

</style>