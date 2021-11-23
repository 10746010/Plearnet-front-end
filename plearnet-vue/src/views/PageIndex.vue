
<template>
  <q-layout view="lHh lpr lFf"  style="height: 100vh">
  <PageHome />
  <PageIndexFeature />
  <PageIndexAbout />
  <PageIndexVideo />
  <PageIndexFuture/>
  <PageIndexFooter />
  </q-layout>

</template>

<script>
import PageHome from "../components/PageHome.vue";
import PageIndexFeature from "../components/PageIndexFeature.vue";
import PageIndexAbout from "../components/PageIndexAbout.vue";
import PageIndexVideo from "../components/PageIndexVideo.vue";
import PageIndexFuture from "../components/PageIndexFuture.vue";

import PageIndexFooter from "../components/PageIndexFooter.vue";



export default {
  name: "PageIndex",
  components: {
    PageHome,
    PageIndexFeature,
    PageIndexAbout,
    PageIndexVideo,
    PageIndexFuture,
    PageIndexFooter,

  },
  setup() {    
    return {

    };
  },
};
</script>

