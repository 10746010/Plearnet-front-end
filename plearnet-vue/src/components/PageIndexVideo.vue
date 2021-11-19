<template >
  <div class="bg-blue-grey-10 q-pa-md">
      <q-toolbar class="text-white">
             <q-avatar>
              <img
                src="../../static/img/logo.png"
              />
              
            </q-avatar>
          <q-toolbar-title> Plearnet </q-toolbar-title>
        </q-toolbar>
        
    <div
      class="flex row full-width full-height"
      style="background: rgba(0, 0, 0, 0)"
    >
      <div
        class="col-4 column justify-center items-center content-center text-white"
      >
       <q-img style="width:100%" src="../../static/img/p4_left.png" />
      </div>
      <div class="col-8 column justify-center items-center content-center">
        <video
          style="width: 100% !important"
          controls
          autoplay
          src="../../static/img/Plearnet.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndexVideo",
  computed: {},
};
</script>
