<template v-slot:body-cell-name="props">
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-black text-white">
      <div class="q-pa-md">
        <q-toolbar class="bg-black text-white">
          <q-btn flat round dense class="q-mr-sm">
            <q-avatar>
              <img
                src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
              />
            </q-avatar>
          </q-btn>

          <q-toolbar-title> Plearnet </q-toolbar-title>

          <q-space />

          <q-btn
            type="a"
            href="#a1"
            stretch
            flat
            label="首頁"
            @click="index"
          />

          <q-btn
            type="a"
            href="#a2"
            stretch
            flat
            label="關於Plearnet"
            @click="about"
          />

          <q-btn
            type="a"
            href="#a3"
            stretch
            flat
            label="訂閱計畫"
            @click="subscription"
          />

          <q-btn
            type="a"
            href="#a4"
            stretch
            flat
            label="聯絡我們"
            @click="contact"
          />

          <q-btn to="/header/login" stretch flat label="登入" />
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "PageIndexHeader",

  components: {
    // HelloWorld
  },

  setup() {
    const index = () => {
      // 获取DOM元素
      let el = document.querySelector("a1");
      // chrome
      document.body.scrollTop = el;
      // firefox
      document.documentElement.scrollTop = el;
    };
    const about = () => {
      // 获取DOM元素
      let el = document.querySelector("a2");
      // chrome
      document.body.scrollTop = el;
      // firefox
      document.documentElement.scrollTop = el;
    };
    const subscription = () => {
      // 获取DOM元素
      let el = document.querySelector("a3");
      // chrome
      document.body.scrollTop = el;
      // firefox
      document.documentElement.scrollTop = el;
    };
    const contact = () => {
      // 获取DOM元素
      let el = document.querySelector("a4");
      // chrome
      document.body.scrollTop = el;
      // firefox
      document.documentElement.scrollTop = el;
    };
    return {
      // leftDrawerOpen: ref(false)
      index,
      about,
      subscription,
      contact,
    };
  },
};
</script>
<style lang="sass">
.q-toolbar__title
  @media (max-width: screen--sm)
    text-align: center
    body.screen--sm
      text-align: center
</style>