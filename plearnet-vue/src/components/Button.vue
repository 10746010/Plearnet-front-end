<template>
  <div class="options">
    <button class="btn">update</button>
    <router-link to="/user/like"><button class="btn">like</button></router-link>
    <router-link to="/user/history"><button class="btn">history</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Button',
  porops: {
    text: String,
    color: String,
  },
};
</script>
<style scoped>
 .options{
     text-align: center;
 }
</style>