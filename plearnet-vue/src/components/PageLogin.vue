<template>
  <q-page class="flex column justify-center items-center content-center">
    <div
      class="q-pa-md rounded-borders"
      style="
        width: 352px;
        max-width: 400px;
        background-color: #ffffffad;
        border-radius: 15px;
        z-index: 1;
      "
    >
      <div class="row items-center">
        <div class="col-4"><q-btn icon="fas fa-chevron-left" flat round to="/main"/></div>
        <div class="col-8 text-h5">login</div>
      </div>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="account"
          label="account *"
          hint=""
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="password *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <div>
          <q-btn
            class="full-width"
            label="登入"
            type="submit"
            color="primary"
            glossy
            @click.prevent="login"
          />
          <q-btn
            flat
            style="color: #ff0080"
            size="xs"
            label="註冊帳號"
            to="/register"
          />
        </div>
      </q-form>
      <q-dialog v-model="small">
        <q-card style="width: 300px">
           <q-card-section>
          <div class="text-h6"></div>
        </q-card-section>
          <q-card-section class="fit row text-center justify-center items-center content-center">
            {{state.warning}}
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "PageLogin",
  setup() {
    const $q = useQuasar();
    const small= ref(false);
    const account = ref(null);
    const password = ref(null);
    const accept = ref(false);
   
    const state = reactive({
      warning:""
    });


    const router = useRouter();
    const login = async () => {   
      await axios.post("/loginUserAccount", {
        account: account.value,
        password: password.value,       
      })
      .then(function (response) {       
        if (response.data.message != "登入成功"){
          small.value=true
          state.warning = response.data.message
        }
        else{
          localStorage.setItem("token", response.data.data.token);
          router.push("/main"); 
        }
      })     
      .catch(function (error) {
        console.log(error)
        })
           
    };
    return {
      account,
      password,
      accept,
      login,
      small,
      state,
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

      onReset() {
        account.value = null;
        password.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style lang="sass" scoped>
</style>
