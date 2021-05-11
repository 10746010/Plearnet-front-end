<template>
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
    /* background-color: white; */
}
/* .btn {
  display: inline-block;
  background: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
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
} */
</style>