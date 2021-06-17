<template>
    <div class="center">
      <div class="explainer">{{ text }}</div>
      <div class="status">
        <div class="watched">
          <div class="word">
            {{ watched }}
          </div>
          <div class="img">
            <img v-bind:src="state.watch_img" alt="" />
          </div>
        </div>
        <div class="like">
          <div class="word">
            {{ like }}
          </div>
          <div class="img">
            <img v-bind:src="state.pushlike_img" alt="" />
          </div>
        </div>
        <div class="favorite">
          <div class="word">
            {{ favorite }}
          </div>
          <div class="img">
            <img v-bind:src="state.clicklike_img" alt="" />
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ArticleItem",
  props: {
    text: String,
    watched: String,
    like: String,
    favorite: String,
  },
  setup() {
    const state = reactive({
      watch_img: require("../../static/img/watch.png"),
      pushlike_img: require("../../static/img/pushlike.png"),
      clicklike_img: require("../../static/img/clicklike.png"),
    });

    return {
      state,
    };
  },
};
</script>
<style scoped>
.explainer {
  font-weight: 300;
  font-size: 2rem;
  color: #fff;
  transition: all 0.6s ease;
  height: 100%;
  border-radius: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  margin: 10px;
  /* width: 300px; */
  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: contents; */
}
.center {
  width: 100%;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
}

.center:hover {
  transform: scale(0.9, 0.9);
}

/* 案讚收藏點閱 */
.status {
  display: flex;
}
.status:hover {
  transform: scale(0.9, 0.9);
}
/* 圖片大小 */
.status > div > div > img {
  width: 20px;
}

.watched {
  display: flex;
  flex-direction: column;
}
.like > div {
  display: flex;
  flex-direction: column;
}
.favorite > div {
  display: flex;
  flex-direction: column;
}
.img {
  border-radius: 100px;
  border: 2px solid #ffffff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>