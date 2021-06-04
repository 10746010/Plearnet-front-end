<template>
  <!--Self.vue,是使用者的個人資訊 -->

  <div class="message">
    <img v-bind:src="avatar" alt="" class="avatar" />
    <!-- 使用者的資訊 -->
    <div class="user__info">
      <input id="info" value="個人資料" readonly />
    </div>
    <div class="user__info" v-if="!infoUpdate">
      <input id="userInfo" v-model="user.info.name" readonly />
      <input id="userInfo" v-model="user.info.email" readonly />
      <input id="userInfo" v-model="user.info.phone" readonly />
    </div>
    <div class="user__info" v-else>
      <input id="userInfo" v-model="user.info.name" />
      <input id="userInfo" v-model="user.info.email" />
      <input id="userInfo" v-model="user.info.phone" />
    </div>

    <!-- 登出的按鈕 -->
    <div class="logout__button">
      <div v-if="!infoUpdate">
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="修改資料"
        />
      </div>
      <div v-else>
        <Button
          @click.prevent="update"
          color="linear-gradient(90deg,#e5e603, #fff59b)"
          text="確定"
        />
      </div>
      <Button
        @click.prevent="logout"
        color="linear-gradient(90deg,#e5e603, #fff59b)"
        text="登出"
      />
    </div>
  </div>
</template>

<script>
import Button from "./Button";

export default {
  name: "Self",
  data() {
    return {
      avatar: require("../../static/img/lop.png"),
      user: {
        info: {
          name: "test1",
          email: "test@gmail.com",
          phone: "0912345678",
        },
      },
      infoUpdate: false,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
    update() {
      if (!this.infoUpdate) {
        this.infoUpdate = true;
      } else {
        window.alert("已修改完成");
        this.user.info;
        this.infoUpdate = false;
        this.user.info = {
          name: this.user.info.name,
          email: this.user.info.email,
          phone: this.user.info.phone,
        };
      }
    },
  },
  components: {
    Button,
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
/* 使用者的資訊 */
.user__info {
  display: flex;
  flex-direction: column;
  width: 25%;
  z-index: 1;
  /* margin: 28px; */
}
#userInfo {
  margin: 10px;
}

#info{
  color:#131d50;
   margin: 10px;
}

/* 登出的按鈕 */
.logout__button {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 200px;
  top: -50px;
  z-index: 0;
}
.btn {
  border-radius: 30px;
}
</style>