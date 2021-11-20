<template>
  <div class="bg-blue-grey-8 q-pa-md text-white" style="height:85vh">
    <q-toolbar>
      <q-avatar>
        <img src="../../static/img/logo.png" />
      </q-avatar>
      <q-toolbar-title> Plearnet </q-toolbar-title>
    </q-toolbar>
    <div class="column items-center">
      <div class="q-pa-md text-center" style="font-size: 3rem">
        未來展望<br />
        <div style="font-size: 2rem">Future Outlook</div>
      </div>
      <div class="text-center content-center row">
        <!-- 左 -->
        <div class="col">
          <q-card class="bg-blue-grey-8 my-card" flat style="max-width: 400px;height:400px">
             <q-icon name="fas fa-paper-plane" class="text-black" style="font-size: 4rem;" />
            <q-card-section>
              <div class="text-h3 text-cyan">Invite</div>
              <div class="text-h3 q-mt-sm q-mb-xs">召集各路好手</div>

            </q-card-section>
                <q-card-section class="text-h5">
                  召集各校讀書達人、筆記好手替本平台製作示範案例
                </q-card-section>
          </q-card>
        </div>
        <!-- 中 -->
        <div class="col">
          <q-card class="bg-blue-grey-8 my-card" flat style="max-width: 400px;height:400px">
             <q-icon name="question_answer" class="text-black" style="font-size: 4rem;" />
            <q-card-section>
              <div class="text-h3 text-cyan">Opinion</div>
              <div class="text-h3 q-mt-sm q-mb-xs">收集使用者反饋</div>
          
            </q-card-section>
                <q-card-section class="text-h5">
                  持續更新網站內容、增添更多實用筆記<br>
                  推出本平台自製學習影音<br>
                  並參考使用者的意見進行改善
                </q-card-section>
          </q-card>
        </div>
        <!-- 右 -->
        <div class="col">
          <q-card class="bg-blue-grey-8 my-card" flat style="max-width: 400px;height:400px">
             <q-icon name="fas fa-users" class="text-black" style="font-size: 4rem;" />
            <q-card-section>
              <div class="text-h3 text-cyan">Cooperate</div>
              <div class="text-h3 q-mt-sm q-mb-xs">尋求合作開發</div>

            </q-card-section>
                <q-card-section class="text-h5">
                  尋求合作開發<br>
                  推出學習APP、和補教業者合作<br>
                  進行多角化經營
                </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { ref } from "vue";
export default {
  name: "PageSubscription",
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style lang="sass">
.my-card
  width: 100%

</style>