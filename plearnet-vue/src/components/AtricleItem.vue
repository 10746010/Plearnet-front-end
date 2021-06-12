<template>
  <div class="center">
    <div class="explainer">{{text}}</div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "ArticleItem",
  props: {
    text: String,
  },
  setup() {
    const state = reactive({});

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
}
.center {
  width: 100%;
  height: 100px;
  position: relative;
}

.explainer:hover {
  transform: scale(0.9, 0.9);
}
</style>