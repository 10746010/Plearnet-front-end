<template>
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
  height: 80%;
  width: 100%;
}
.user-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  /* height: 100%; */
  width: 10%;
}
.content {
  /* background-color: tomato; */
  width: 60%;
  height: 100%;
}
/* .content > div {
  color: white;
  font-size: 50px;
} */
</style>
