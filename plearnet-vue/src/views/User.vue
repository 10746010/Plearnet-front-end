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
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 10%;
}
.content {
  width: 60%;
  height: 100%;
}


.btn {
  display: inline-block;
  background: rgba(255, 255, 255, 0);
  color: rgb(33, 10, 161);
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-weight:bold;
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
}
</style>
