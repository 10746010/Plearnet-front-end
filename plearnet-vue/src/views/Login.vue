<template>
  <div class="login">
    <div class="content">
      <div class="back">
        <button @click.passive="back">＜</button>
        <div>
          <h1>login</h1>
        </div>
        <div style="width: 10%" />
      </div>

      <form @submit.prevent="login" name="formLogin" class="form-login">
        <div class="account">
          <!-- 帳號 -->
          <label>account</label>
          <AccountInput
            account_type="text"
            placeholder_text="請輸入帳號"
            :model_input="state.account"
            @update:model_input="state.account = $event"
          />
        </div>
        <div class="password">
          <!-- 密碼 -->
          <label>password</label>
          <AccountInput
            account_type="password"
            placeholder_text="請輸入密碼"
            :model_input="state.password"
            @update:model_input="state.password = $event"
          />
        </div>
        <div class="button">
          <Button color="linear-gradient(#0e2289, #90e5f2)" text="登入" />
        </div>
      </form>
      <div class="register">
        <router-link to="/register"
          ><Button color="rgba(255, 255, 255, 0)" text="註冊帳號"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AccountInput from "../components/AccountInput.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
import Button from "../components/Button.vue";
import axios from "axios";

export default {
  name: "Login",
  components: {
    AccountInput,
    Button,
  },
  setup() {
    const state = reactive({
      account: "",
      password: "",
    });

    const router = useRouter();
        console.log(router)

    const login = async () => {
      const response = await axios
        .get("register", {
          params: {
            account: state.account,
          },
        })
        .then((res) => {
          //  console.log(res.data[0])
          return res.data[0];
        })
        .catch((err) => {
          return err;
        });

      if (
        state.account == response.account &&
        state.password == response.password
      ) {
        localStorage.setItem("token", response.id);
        router.push('/');
      } else {
        alert("帳號密碼錯誤");
      }
    };

    const back = async () => {
      router.push('/');
    };
    return {
      state,
      login,
      back,
    };
  },
};
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
/* 放內容 */
.content {
  width: 400px;
  height: 450px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffffad;
  position: relative;
  z-index: 1;
}

/* 表單 */
.form-login {
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -10%;
}

/* .content > button {
  height: 30px;
  position: relative;
  right: 70px;
} */

/* 標題和回上一頁 */
.back {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 3;
}
.back > button {
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: white;
  font-size: 30px;
}
.button {
  width: 75%;
}
.btn {
  color: white;
  width: 100%;
  margin: 0;
}

/* 帳號 */
.account {
  margin: 0 0 30px 0;
  width: 75%;
}

.password {
  margin: 0 0 30px 0;
  width: 75%;
}
/* 註冊 */
.register > a > .btn {
  color: #707579;
  position: relative;
  left: 120px;
  top: -110px;
}
</style>
