<template>
  <div class="bg-blue-grey-8 q-pa-md text-white" style="height: 85vh">
    <q-toolbar>
      <q-avatar>
        <img src="../../static/img/logo.png" />
      </q-avatar>
      <q-toolbar-title>
        <div class="text-h5">未來展望</div>
        <div class="text-subtitle2">Future outlook</div>
      </q-toolbar-title>
    </q-toolbar>
    <div class="column items-center">
      <div class="text-center content-center row">
        <!-- 左 -->
        <div class="col">
          <q-card
            class="bg-blue-grey-8 my-card"
            flat
            style="width: 100%; height: 80%"
          >
            <q-img class="img" src="../../static/img/INVITED.jpg" />
            <q-card-section>
              <div class="future-text text-cyan">Invite</div>
              <div class="future-title q-mt-sm q-mb-xs">召集各路好手</div>
            </q-card-section>
            <q-card-section class="future-content">
              召集各校讀書達人、筆記好手替本平台製作示範案例
            </q-card-section>

            <q-btn label="➝欣賞精選筆記" flat  />
          </q-card>
        </div>

        <!-- 中 -->
        <div class="col">
          <q-card
            class="bg-blue-grey-8 my-card"
            flat
            style="width: 100%; height: 80%"
          >
            <q-img class="img" src="../../static/img/OPINION.jpg" />

            <q-card-section>
              <div class="future-text text-cyan">Opinion</div>
              <div class="future-title q-mt-sm q-mb-xs">收集使用者反饋</div>
            </q-card-section>
            <q-card-section class="future-content">
              持續更新網站內容、增添更多實用筆記<br />
              推出本平台自製學習影音<br />
              並參考使用者的意見進行改善
            </q-card-section>

             <q-btn label="➝看看Plearnet的影音" flat @click="dialog = true" />

            <q-dialog
              v-model="dialog"
              persistent
              :maximized="maximizedToggle"
              transition-show="slide-up"
              transition-hide="slide-down"
            >
              <q-card class="bg-primary text-white">
                <q-bar>
                  <q-space />

                  <q-btn
                    dense
                    flat
                    icon="minimize"
                    @click="maximizedToggle = false"
                    :disable="!maximizedToggle"
                  >
                    <q-tooltip
                      v-if="maximizedToggle"
                      class="bg-white text-primary"
                      >縮小</q-tooltip
                    >
                  </q-btn>
                  <q-btn
                    dense
                    flat
                    icon="crop_square"
                    @click="maximizedToggle = true"
                    :disable="maximizedToggle"
                  >
                    <q-tooltip
                      v-if="!maximizedToggle"
                      class="bg-white text-primary"
                      >放大</q-tooltip
                    >
                  </q-btn>
                  <q-btn dense flat icon="close" v-close-popup>
                    <q-tooltip class="bg-white text-primary">Close</q-tooltip>
                  </q-btn>
                </q-bar>

                <q-card-section>
                 <q-video
                    :ratio="16 / 9"
                    src="https://www.youtube.com/embed/Y8f-ELvDXgA?rel=0"
                  />
                </q-card-section>
              </q-card>
            </q-dialog>
          </q-card>
        </div>

        <!-- 右 -->
        <div class="col">
          <q-card
            class="bg-blue-grey-8 my-card"
            flat
            style="width: 100%; height: 80%"
          >
            <q-img class="img" src="../../static/img/COOPERATE.jpg" />

            <q-card-section>
              <div class="future-text text-cyan">Cooperate</div>
              <div class="future-title q-mt-sm q-mb-xs">尋求合作開發</div>
            </q-card-section>
            <q-card-section class="future-content">
              尋求合作開發<br />
              推出學習APP、和補教業者合作<br />
              進行多角化經營
            </q-card-section>

             <q-btn label="➝聯絡我們" flat />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "PageSubscription",
  setup() {
    return {
      stars: ref(4),
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
};
</script>
<style lang="sass" scoped>
.img
  border-radius: 10px !important
  width:50%

.future-text
  font-size:2.5rem
  @media (max-width :1439px)
    font-size:1.7rem
  @media ( max-width: 1023px)
    font-size:1.4rem
  @media ( max-width: 599px)
    font-size:1rem

.future-title
  font-size:2rem
  @media (max-width :1439px)
    font-size:1.5rem
  @media ( max-width: 1023px)
    font-size:1.3rem
  @media ( max-width: 599px)
    font-size:0.7rem

.future-content
  font-size:2rem
  @media (max-width :1439px)
    font-size:1rem
  @media ( max-width: 1023px)
    font-size:0.5rem
  @media ( max-width: 599px)
    font-size:0.3rem

// .my-card
//   width: 100%!important
//   @media (max-width :1439px)
//     width: 10%

//   @media ( max-width: 1023px)
//     width: 10%

//   @media ( max-width: 599px)
//     width: 10%
</style>