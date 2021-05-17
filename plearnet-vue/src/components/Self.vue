<template>
  <div class="message">
    <img v-bind:src="avatar" alt="" class="avatar" />

    <h1>name:{{ user.name }}</h1>

    <h1>email:{{ user.email }}</h1>

    <h1>phone:{{ user.phone }}</h1>
    <div>
      <button class="btn" @click.prevent="logout">登出</button>
    </div>
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
   methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.message {
  color: white;
}
.avatar {
  width: 15%;
}
</style>