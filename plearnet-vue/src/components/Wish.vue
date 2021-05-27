<template>
  <!-- Wish.vue -->
  <div class="wish">
    <div class="input">
      <input id="input" v-model="text" placeholder="希望增設的科目" required />
    </div>
    <div class="wanna">
      <textarea
        id="wanna"
        v-model="message"
        placeholder="詳細描述想增設的理由"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wish",
  components: {},
};
</script>
<style scoped>
.wish {
  display: flex;
  flex-direction: column;
}
.input {
  margin: 0px 0px 10px 20px;
}
#input {
  border-radius: 9px;
  width: 450px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.8);
}
.wanna {
  margin: 10px 0px 0px 20px;
}
#wanna {
  border-radius: 9px;
  width: 450px;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>