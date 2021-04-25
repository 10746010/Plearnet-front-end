<template>
  <div class="message">
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
  padding: 50px 5%;
  color: white;
}
</style>