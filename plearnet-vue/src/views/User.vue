<template>
  <!-- User.vue -->
  <div class="user">
    <div class="user__features">
      <div class="user-button">
        <UserButton />
      </div>
      <Button        
        color="rgba(255, 255, 255, 0)"
        text="上傳紀錄"
      />
      <Button
        @click.prevent="logout"
        color="#ffffff"
        text="登出"
      />
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import UserButton from "../components/UserButton";
import Button from "../components/Button.vue";

import { useRouter } from "vue-router";

export default {
  name: "User",
  components: {
    UserButton,
    Button,
  }, setup() {
    const router = useRouter();

    const logout = async () => {
      localStorage.removeItem("token");
      await router.push("/login");
    };

    return {      
      logout,
    };
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
  background-color: #434880;
  border-radius: 10px;
  /* width: 10%; */
  z-index: 1;
  min-height: 320px;
  max-height: 320px;
  width: 150px;
}
.content {
  width: 60%;
  height: 100%;
}
.btn:nth-child(2) {

  color: #f1e58b;
  border-radius: 1px;
  font-size: 28px;
  /* width: 70px; */
}
.btn:nth-child(3) {
  color: #7b7c7d;
  border-radius: 1px;
  font-size: 20px;
  border: 2px solid #4ca3af;
  /* width: 70px; */
}
.user__features{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
