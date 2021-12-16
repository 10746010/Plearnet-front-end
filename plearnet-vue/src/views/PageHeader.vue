<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header
      elevated
      class="header bg-black text-white q-py-xs"
      height-hint="58"
    >
      <q-toolbar>
        {{ token }}
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />
        <q-btn
          flat
          no-caps
          no-wrap
          class="q-ml-xs"
          v-if="$q.screen.gt.xs"
          to="/"
        >
          <q-avatar>
            <img src="../../static/img/logo.png" />
          </q-avatar>
          <q-toolbar-title shrink class="text-weight-bold">
            Plearnet
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="bg-white col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="black"
            text-color="white"
            icon="search"
            unelevated
            to="/main/search/${this.search.value}"
            @click.prevent="toSearch"
          />
        </div>

        <q-space />

        <!-- 如果有登入 -->
        <div
          class="q-gutter-sm row items-center no-wrap"
          v-if="state.token == true"
        >
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat to="/main/info">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
        <!-- 如果沒登入 -->
        <div class="q-gutter-sm row items-center no-wrap" v-else>
          <!-- <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn> -->
          <q-btn round flat to="/login">
            <q-avatar size="26px">
              <img src="../../static/img/lop.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <!-- 左邊側欄 -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-2"
      :width="250"
    >
      <!-- <q-scroll-area class="fit bg-grey-5"> -->
      <q-list padding>
        <q-item
          v-for="link in links1"
          :key="link.text"
          v-ripple
          clickable
          :to="link.to"
          header
          exact
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item
          v-for="link in links2"
          :key="link.text"
          v-ripple
          clickable
          :to="link.to"
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item
          v-for="link in links3"
          :key="link.text"
          v-ripple
          clickable
          :to="link.to"
        >
          <q-item-section avatar>
            <q-icon color="grey" :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.text }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <!-- </q-scroll-area> -->
    </q-drawer>

    <q-page-container>
      <router-view v-if="isShow" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref, reactive,nextTick  } from "vue";
import { fabYoutube } from "@quasar/extras/fontawesome-v5";
import { useRouter } from "vue-router";

export default {
  name: "PageHeader",
  components: {},
  data() {
    return {
      // 控制router-view的隱藏與展示
      
    };
  },
  // 提供可注入子組件屬性
  provide() {
    return {
      reload: this.reload,
    };
  },
  // 定義reload方法
  methods: {
    
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);
    const search = ref("");
    const isShow = ref(true);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }
    const state = reactive({
      token: false,
    });
    console.log(localStorage.getItem("token"));
    // if(localStorage.getItem("token") != null){
    state.token = Boolean(localStorage.getItem("token"));
    // }

    
    function reload() {
      // 先隱藏
      isShow.value = false;
        router.push(`/main/search/${search.value}`);

      // $nextTick() 將回調延遲到下次 DOM 更新循環之後執行
      nextTick(() => {
        isShow.value = true;
      });
    }
      const router = useRouter();

    function toSearch() {
      reload()



    }
    return {
      fabYoutube,
      reload,
      toSearch,
      search,
      isShow,
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      links1: [
        { icon: "home", text: "首頁", to: "/main" },
        { icon: "fas fa-portrait", text: "個人資料", to: "/main/info" },
        { icon: "fas fa-key", text: "變更密碼", to: "/main/changepassword" },
      ],
      links2: [
        { icon: "restore", text: "歷史", to: "/main/history" },
        { icon: "thumb_up_alt", text: "收藏", to: "/main/like" },
      ],

      links3: [
        { icon: "fas fa-cloud-upload-alt", text: "上傳", to: "/main/upload" },
        { icon: "fas fa-magic", text: "許願", to: "/main/wish" },
      ],
      state,
      
    };
  },
};
</script>

<style lang="sass" scoped>
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
    &__toolbar-input-btn
      border-radius: 0
      border-style: solid
      border-width: 1px 1px 1px 0
      border-color: rgba(0,0,0,.24)
      max-width: 60px
      width: 100%
    &__drawer-footer-link
      color: inherit
      text-decoration: none
      font-weight: 500
      font-size: .75rem
      &:hover
        color: #000

.my-content
  margin: 10px
  padding: 10px 15px
  background: rgba(86,61,124,.15)
  border: 1px solid rgba(86,61,124,.2)

.header
  border-bottom: 1px solid
</style>