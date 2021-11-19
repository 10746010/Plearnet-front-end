
<template>
  <PageHome />
  <PageIndexFeature />
  <PageIndexAbout />
  <PageIndexVideo />
  <PageIndexFuture/>
  <PageIndexFooter />
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

