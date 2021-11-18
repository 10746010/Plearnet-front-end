<template >
  <q-img src="../../static/img/bgspace.jpg">
    <div
      class="flex row full-width full-height"
      style="background: rgba(0, 0, 0, 0)"
    >
      <div
        class="col column justify-center items-center content-center text-white"
      >
        <h2 class="q-mt-none q-mb-md">Plearnet學習網</h2>
        <p class="q-mb-xl">提供各式各樣的優良筆記，幫助您提升自學能力！</p>
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
