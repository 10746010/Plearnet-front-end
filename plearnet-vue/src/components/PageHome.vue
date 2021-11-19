<template >
  <q-img src="../../static/img/p1_pg.jpg">
    <div
      class="flex row full-width full-height"
      style="background: rgba(0, 0, 0, 0)"
    >
      <div
        class="col column justify-center items-center content-center text-white"
      >
        <div class="flex justify-center items-center text-center">
          <h3 >Plearnet學習網</h3>
          <img  src="../../static/img/logo.png" style="width:10%;"/>
        </div>
          
            

        <h5 class="q-mb-xl">提供各式各樣的優良筆記，幫助您提升自學能力！</h5>
        <q-btn unelevated rounded color="primary" label="探索筆記" />
      </div>
      <div class="col column justify-center items-center content-center">
        <video
          style="width: 90% !important"
          controls
          autoplay
          src="../../static/img/Plearnet.mp4"
        ></video>
      </div>
    </div> 
  </q-img>
</template>

<style>
</style>

<script>
export default {
  name: "PageHome",
  computed: {

  },
};
</script>
