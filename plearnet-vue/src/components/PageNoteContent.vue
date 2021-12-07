<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-black text-white q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
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
          />
        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="video_call"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Create a video or post</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="apps"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Apps</q-tooltip>
          </q-btn>
          <q-btn
            round
            dense
            flat
            color="grey-8"
            icon="message"
            v-if="$q.screen.gt.sm"
          >
            <q-tooltip>Messages</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
        <q-btn
          dense
          flat
          round
          icon="fas fa-chevron-down"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" bordered model-value:false>
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            v-for="link in links1"
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
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      class=""
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      bordered
    >
    <q-form @submit="sendMessage">
        <q-input
        v-model="state.newMessage"
        placeholder="傳送訊息"
        outlined
        rounded
        class="q-ma-md"
        dense
      >
        <template v-slot:append>
          <q-btn
            round
            dense
            flat
            @click="sendMessage"
            color="black"
            icon="send"
          />
        </template>
      </q-input>
    </q-form>

      <q-separator class="q-my-md" />
      <q-scroll-area  class="column col justify-end" style="height: 90%;" >

        <div class="q-pa-md column col justify-end">
          <div style="width: 100%; max-width: 400px">
            <div
              v-for="message in state.messages"
              :key="message.text"
              class="q-message-container row items-end no-wrap"
            >
              <div >
                <div class="q-message-name q-message-name--received">
                  {{ message.user_name }}
                </div>
                <div
                  v-if="message.user_name == 'me'"
                  class="q-message-text q-message-text--received"
                >
                  <div
                    class="
                      q-message-text-content q-message-text-content--received
                    "
                  >
                    {{ message.message_content }}
                  </div>
                </div>

                <div
                  v-else
                  class="q-message-text q-message-text--received"
                  style="color: #e0e0e0"
                >
                  <div
                    class="
                      q-message-text-content q-message-text-content--received
                    "
                  >
                    {{ message.message_content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </q-scroll-area>
    </q-drawer>

    <q-page-container class="column content-center">
      <div class="row items-center">
        <div class="col-2 q-pl-xl">
          <q-btn icon="fas fa-chevron-left" flat round />
        </div>
        <div class="col-8 q-pl-sm">
          <div class="q-pa-md bg-white text-black">
            <q-list
              padding
              bordered
              class="rounded-borders"
              style="max-width: 328px"
            >
              <q-expansion-item icon="perm_identity" :label="state.note.title">
                <q-card class="bg-white">
                  <q-card-section>
                    {{ state.note.content }}<br />

                    作者：{{ state.note.author_name }}<br />
                    上傳日期：{{ state.note.create_date }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
      <div class="row q-mb-sm">
        <div class="q-mr-sm">
          <q-btn
            @click="like"
            flat
            round
            color="primary"
            icon="far fa-thumbs-up"
          />
          <label>{{ state.note.view }}</label>
        </div>
        <div class="q-mr-sm">
          <q-btn
            @click="love"
            flat
            round
            color="primary"
            icon="fab fa-gratipay"
          />
          <label>{{ state.note.likes }}</label>
        </div>
        <q-btn
          class="q-mr-sm"
          unelevated
          rounded
          size="md"
          color="primary"
          label="subscribe"
          @click="subscribe"
        />
      </div>
      <div class="row content-center">
        <q-img
          src="https://placeimg.com/500/300/nature"
          :ratio="1"
          style="width: 500px"
        />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { reactive } from "vue";
import axios from "axios";

export default {
  name: "PageNoteContent",

  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const state = reactive({
      newMessage: "",
      messages: [
        {
          message_content: "Hey Jim,how are you?",
          user_name: "me",
        },
        {
          message_content: "Good thanks, Danny! How are you?",
          user_name: "them",
        },
        {
          message_content: "Pretty good",
          user_name: "me",
        },
      ],
      // messages:[],
      note: [],
      like: 0,
      love: 0,
    });

    function like() {
      state.like += 1;
    }
    function love() {
      state.love += 1;
      axios
      .get("http://localhost:8080/topic/pressLike?topicId=1", {})
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    function sendMessage() {
      if (state.newMessage != "") {
        state.messages.unshift({
          message_content: state.newMessage,
          user_name: "me",
        });
        state.newMessage = "";
      }
    }
    function subscribe(){
       axios.post("http://localhost:8080/topic/addCollect", {
        "topicId": "7",
        "userId": "1"
      });
    }

    axios
      .get("http://localhost:8080/topic/topic?topicID=1&userID=1", {})
      .then(function (response) {
        console.log('hi')
        console.log(response.data.data)
        state.note = response.data.data.pop();
        // state.messages = response.data.data
      })
      .catch(function (error) {
        console.log(error);
      });

    // const sendMessage = async () => {
    //   await axios.post("/topic/postMessage", {
    //     topicId : "1",
    //     content : "很棒",
    //     userId : "2"
    //   });
    // };

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      links1: [
        { icon: "home", text: "首頁", to: "/main" },
        { icon: "fas fa-portrait", text: "個人資料", to: "/main/info" },
        { icon: "fas fa-key", text: "變更密碼", to: "/main/changepassword" },
      ],
      links2: [
        { icon: "restore", text: "歷史", to: "/main/history" },
        { icon: "thumb_up_alt", text: "收藏", to: "/main/like" },
        { icon: "fas fa-pen", text: "塗鴉", to: "/main/paint" },
      ],

      links3: [
        { icon: "fas fa-cloud-upload-alt", text: "上傳", to: "/main/upload" },
        { icon: "fas fa-magic", text: "許願", to: "/main/wish" },
      ],
      state,
      sendMessage,
      like,
      love,
      subscribe
    };
  },
};
</script>
<style lang="sass" scoped>
.q-chat-message
    position: static
    flex-direction: inherit
</style>