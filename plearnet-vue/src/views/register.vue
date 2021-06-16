<template>
  <div class="register">
    <div class="content">
      <div class="back">
        <button>＜</button>
        <div>
          <h1>register</h1>
        </div>
        <div style="width: 10%" />
      </div>

      <form
        @submit.prevent="createNewAccount"
        name="formRegister"
        class="form-register"
      >
        <div class="nickname">
          <label>nickname</label>
          <AccountInput
            type="text"
            placeholder_text="輸入名字"
            :model_input="state.username"
            @update:model_input="state.username = $event"
          />
        </div>
        <div class="account">
          <label>account</label>
          <AccountInput
            type="text"
            placeholder_text="輸入帳號"
            :model_input="state.account"
            @update:model_input="state.account = $event"
          />
        </div>
        <div class="password">
          <label>password</label>
          <AccountInput
            type="password"
            placeholder_text="輸入密碼"
            :model_input="state.password"
            @update:model_input="state.password = $event"
          />
        </div>

        <div class="password-confirm">
          <label>confirm account</label>
          <AccountInput
            type="password"
            placeholder_text="確認密碼"
            :model_input="state.password_confirm"
            @update:model_input="state.password_confirm = $event"
          />
        </div>

        <div class="email">
          <label>e-mail</label>
          <AccountInput
            type="email"
            placeholder_text="輸入電子信箱"
            :model_input="state.email"
            @update:model_input="state.email = $event"
          />
        </div>

        <div class="button">
          <Button color="linear-gradient(#0e2289, #90e5f2)" text="註冊" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AccountInput from "../components/AccountInput.vue";
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";

import axios from "axios";

export default {
  name: "Register",
  components: {
    AccountInput,
    Button
  },
  setup() {
    const state = reactive({
      username: "",
      account: "",
      password: "",
      password_confirm: "",
      email: "",
    });

    const router = useRouter();

    const createNewAccount = async () => {
      await axios.post("register", {
        username: state.username,
        account: state.account,
        password: state.password,
        password_confirm: state.password_confirm,
        email: state.email,
      });

      await router.push("/login");
    };

    return {
      state,
      createNewAccount,
    };
  },
};
</script>
<style scoped>
/* 註冊 */
.register {
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

/* 標題和回上一頁 */
.back {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
/* 註冊表單 */
.form-register {
  height: 85%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -5%;
}

.contents > button {
  height: 30px;
  position: relative;
  right: 70px;
}

/* 帳號 */
.nickname {
  margin: 0 0 15px 0;
  width: 75%;
}

.account {
  margin: 0 0 15px 0;
  width: 75%;
}

.password {
  margin: 0 0 15px 0;
  width: 75%;
}

.password-confirm {
  margin: 0 0 15px 0;
  width: 75%;
}
.email {
  margin: 0 0 15px 0;
  width: 75%;
}
/* .reg {
  color: white;
  font-size: 50px;
} */
/* 註冊送出 */
/* button {
  margin-left: 350px;
  background-color: transparent;
  border: none;
} */
/* .inputbox {
  padding-top: 100px;
} */
</style>
