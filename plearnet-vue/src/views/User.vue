<template>
  <!-- User.vue -->
  <div class="user">
    <div class="user-button">
      <UserButton />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import UserButton from "../components/UserButton";

export default {
  name: "User",
  components: {
    UserButton,
  },
};
</script>
<style scoped>
.user {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 80%;
  width: 100%;
}
.user-button {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 10%;
  z-index: 1;
  min-height: 320px;
  max-height: 320px;
}
.content {
  width: 60%;
  height: 100%;
}
</style>
