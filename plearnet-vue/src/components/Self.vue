<template>
  <!-- 使用者的個人資訊 -->

  <div class="message">
    <img v-bind:src="avatar" alt="" class="avatar" />
    <div class="user_info">
      <h1>name:{{ user.name }}</h1>

      <h1>email:{{ user.email }}</h1>

      <h1>phone:{{ user.phone }}</h1>
    </div>

    <div class="logout_button">
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
  display: flex;
  flex-direction: column;
  color: white;
}
.avatar {
  width: 15%;
}

.user_info {
  margin-left: 30px;
}

.logout_button {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 200px;
}
</style>