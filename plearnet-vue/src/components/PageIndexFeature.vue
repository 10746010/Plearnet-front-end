<template>
  <div class="bg-blue-grey-9 q-pa-md" >
        <q-toolbar class="text-white">
             <q-avatar>
              <img
                src="../../static/img/logo.png"
              />
              
            </q-avatar>
          <q-toolbar-title> Plearnet </q-toolbar-title>
        </q-toolbar>


    <div
      class="fit row wrap justify-center items-center content-center text-white"
      style="font-size: 2rem"
    >
      <div class="col fit justify-center items-center content-center">
        <div class="column justify-center items-center content-center text-center">
          <q-img width="80%" src="../../static/img/p2_left.png" />
          <div class="text">多元內容</div>
        </div>
      </div>
      <div class="col fit justify-center items-center content-center">
        <div class="column justify-center items-center content-center text-center">
          <q-img width="80%" src="../../static/img/p2_middle.png" />
          <div class="text">豐富筆記</div>
        </div>
      </div>
      <div class="col fit justify-center items-center content-center">
        <div class="column justify-center items-center content-center text-center">
          <q-img width="80%" src="../../static/img/p2_right.png" />
          <div class="text">學習討論</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageIndexFeature",
};
</script>
<style lang="sass">
.text
  @media(max-width:599px)
    font-size:1.3rem
</style>

