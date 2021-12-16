<template>
  <div class="bg-grey-3 q-pa-md">
    <div class="column items-center" style="height: 95vh">
      <div class="subscription q-pa-md" style="font-size: 3rem">立即訂閱Plearnet</div>
      <div class="text-center content-center row">
        <div class="q-pl-xl q-pr-xs">
          <q-card class="my-sub" style="width:300px">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <div class="no-wrap items-center">
                <div class="col text-h6 ellipsis">初階太空人</div>

                <div class="col text-h4 ellipsis">NT$ 300</div>

                per month
              </div>
              <div
                class="
                  col-auto
                  text-grey text-caption
                  q-pt-md
                  row
                  no-wrap
                  items-center
                "
              ></div>
              <q-btn unelevated rounded color="primary" label="我要訂閱" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-caption text-grey">
                基礎板平台使用 <br />解鎖部分筆記、課程影音<br />
                解鎖論壇討論功能
              </div>
            </q-card-section>

            <q-separator />
          </q-card>
        </div>

        <div class="q-pl-xl q-pr-xl">
          <q-card class="my-sub" style="width:300px">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <div class="no-wrap items-center">
                <div class="col text-h6 ellipsis">高階太空人</div>

                <div class="col text-h4 ellipsis">NT$ 500</div>

                per month
              </div>
              <div
                class="
                  col-auto
                  text-grey text-caption
                  q-pt-md
                  row
                  no-wrap
                  items-center
                "
              ></div>
              <q-btn unelevated rounded color="primary" label="我要訂閱" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-caption text-grey">
                開放全部筆記、課程影音
                <br />解鎖聊天室、職播功能、夜晚模式<br />
                優先參與每月特殊活動
              </div>
            </q-card-section>

            <q-separator />
          </q-card>
        </div>

        <div class="q-pl-xs q-pr-xl">
          <q-card class="my-sub" style="width:300px">
            <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

            <q-card-section>
              <div class="no-wrap items-center">
                <div class="col text-h6 ellipsis">培訓太空人</div>

                <div class="col text-h4 ellipsis">NT$ 150</div>

                per month
              </div>
              <div
                class="
                  col-auto
                  text-grey text-caption
                  q-pt-md
                  row
                  no-wrap
                  items-center
                "
              ></div>
              <q-btn unelevated rounded color="primary" label="我要訂閱" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-caption text-grey">
                學生專案 <br />驗證學生身分，利用更優惠的價格，<br />
                取得更多學習筆記及獲得學生裡包。
              </div>
            </q-card-section>

            <q-separator />
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
    };
  },
};
</script>

<style lang="sass" scoped>
.subscription
  font-size: 3rem
  @media (max-width :1439px)
    font-size: 2rem
  @media ( max-width: 1023px)
    font-size: 1rem
  @media ( max-width: 599px)
    font-size: 0.5rem


.my-sub
  width: 300px
  @media (max-width :1439px)
    width: 200px

  @media ( max-width: 1023px)
    width: 145px

  @media ( max-width: 599px)
    width: 125px
</style>