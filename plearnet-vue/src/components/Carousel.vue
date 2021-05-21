<template>
<!-- 前10名熱門 -->
  <div class="container">
    <div class="wrap-flex">
      <div class="wrap-flex-item">
        
      </div>
      <div class="wrap-flex-item">
        <div class="content">
          <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide">
              <img v-bind:src="slide.src" alt="" />
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>
      </div>
      <div class="wrap-flex-item">
        
      </div>
    </div>
  </div>

</template>


<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Top",
  data() {
    return {
      slides: [
        { src: require("../../static/img/top1.png") },
        { src: require("../../static/img/top2.png") },
        { src: require("../../static/img/top3.png") },
        { src: require("../../static/img/top4.png") },
        { src: require("../../static/img/top5.png") },
        { src: require("../../static/img/top6.png") },
        { src: require("../../static/img/top7.png") },
        { src: require("../../static/img/top8.png") },
        { src: require("../../static/img/top9.png") },
        { src: require("../../static/img/top10.png") },
      ],      
    };
    
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<style scoped>
.wrap-flex-item {
  flex: 1;
}

.wrap-flex-item:nth-of-type(1) {
  padding-right: 50px;
}

.wrap-flex-item:nth-of-type(2) {
  padding-left: 25px;
  padding-right: 25px;
}

.wrap-flex-item:nth-of-type(3) {
  padding-left: 50px;
}

.content {
  padding: 50px;
}
img {
  width: 200px;
}
</style>