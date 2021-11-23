<template >
  <q-page class="flex column justify-center items-center content-center">
    <div class="form  q-pa-md rounded-borders" style="width: 352px; max-width: 400px;background-color: #ffffffad;border-radius: 15px;z-index:1;">
      <div class="row items-center">
        <div class="col-4"><q-btn icon="fas fa-chevron-left" flat round to="/main/login" /></div>
        <div class="col-8 text-h5">register</div>
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

        <q-input
          filled
          type="password"
          v-model="confirm_password"
          label="confirm password *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="email"
          v-model="email"
          label="email *"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
        <div>
          <q-btn
            class="full-width"
            label="註冊"
            type="submit"
            color="primary"
            glossy
            to="/main/login"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "PageRegister",
  setup() {
    const $q = useQuasar();

    const account = ref(null);
    const password = ref(null);
    const confirm_password = ref(null);
    const email = ref(null);
    const accept = ref(false);

    return {
      account,
      password,
      confirm_password,
      accept,
      email,

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
        confirm_password.value = null;
        email.value = null;
        accept.value = false;
      },
    };
  },
};
</script>
<style lang="sass">
.form
    width: 350px
    max-width: 400px
</style>
