<template >
  <q-page class="flex column justify-center items-center content-center">
    <div
      class="form q-pa-md rounded-borders"
      style="
        width: 352px;
        max-width: 400px;
        background-color: #ffffffad;
        border-radius: 15px;
        z-index: 1;
      "
    >
      <div class="row items-center">
        <div class="col-4">
          <q-btn icon="fas fa-chevron-left" flat round to="/main/login" />
        </div>
        <div class="col-8 text-h5">register</div>
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="state.account"
          label="account *"
          hint=""
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="state.password"
          label="password *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="state.confirm_password"
          label="confirm password *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          v-model="state.username"
          label="name *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="email"
          v-model="state.email"
          label="email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-select
          class="q-mb-sm bg-white text-black"
          color="teal"
          v-model="state.sex"
          :options="state.sexOptions"
          label="性別"
        />
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
        <div>
          <q-btn
            class="full-width"
            label="註冊"
            type="submit"
            color="primary"
            glossy
            @click.prevent="register"
          />
        </div>
      </q-form>
      <q-dialog v-model="state.small">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6"></div>
          </q-card-section>
          <q-card-section
            class="
              fit
              row
              text-center
              justify-center
              items-center
              content-center
            "
          >
            {{ state.warning }}
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup @click.prevent="next" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "PageRegister",
  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const state = reactive({
      account: null,
      password: null,
      confirm_password: null,
      email: null,
      sexOptions: [
        {
          value: 0,
          label: "男生",
        },
        {
          value: 1,
          label: "女生",
        },
      ],
      sex: "",
      username: "",
      small: false,
      warning: "",
    });

    const accept = ref(false);

    function register() {
      state.small = true;
      if (
        state.password == state.confirm_password &&
        (state.password != "" || state.confirm_password != "") &&
        state.sex != ""
      ) {
        state.warning = "註冊成功";
        axios
          .post("/register", {
            account: state.account,
            password: state.password,
            email: state.email,
            name: state.username,
            sex: state.sex.value,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        if (state.sex == "") {
          state.warning = "性別不為空";
        } else {
          state.warning = "密碼不一致";
        }
      }
    }

    function next() {
      if (state.warning == "註冊成功") {
        router.push("/login");
      }
    }

    return {
      accept,
      register,
      state,
      next,
      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },
     
    };
  },
};
</script>
<style lang="sass" scoped>
.form
  width: 350px
  max-width: 400px
</style>
