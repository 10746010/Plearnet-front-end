<template>
  <div class="wrapper">
    <div class="flex-classification">
      <div>
        <div>學術</div>
        <img v-bind:src="academic" alt="" />
      </div>

      <div>
        <div>非學術</div>
        <img v-bind:src="non_academic" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Classification",
  data() {
    return {
      academic: require("../../static/img/academic.png"),
      non_academic: require("../../static/img/non-academic.png"),
    };
  },
};
</script>

<style scoped>
.wrapper {
  flex-grow: 1;
}

.flex-container > div {
  width: 100%;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

.flex-classification {
  display: flex;
  height: 100%;
  text-align: center;
}

.flex-classification > div {
  color: white;
  width: 100%;
  line-height: 75px;
  font-size: 30px;
}
.flex-classification > div > img:hover {
  transform: scale(1.1);
}
.flex-classification > div > img {
  width: 45%;
  transform: rotateY(6deg);
  cursor: pointer;
  transition: 0.5s;

  
}
</style>