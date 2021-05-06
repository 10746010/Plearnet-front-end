<template>
  <div class="message">
    <img v-bind:src="avatar" alt="" class="avatar"/>

    <h1>name:{{ user.name }}</h1>
    
    <h1>email:{{ user.email }}</h1>
    
    <h1>phone:{{ user.phone }}</h1>
    
  </div>
</template>

<script>
export default {
  name: "Self",
  data() {
    return {
      avatar: require("../../static/img/lop.png"),
      user: {
        name: "test1",
        email: "test@gmail.com",
        phone: "0912345678",
      },
    };
  },
};
</script>
<style scoped>
.message {
  color: white;
}
.avatar{
  width: 15%;
}
</style>