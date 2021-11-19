<template >
  <div class="bg-blue-grey-9 text-white q-pa-md" style="height: 15vh">
    <div class="row items-center">
      <div class="col" style="font-size: 3rem"> <img  src="../../static/img/logo.png" style="width:25%;"/>Plearnet</div>
      <div class="col" style="font-size: 2rem">聯絡我們</div>
      <div class="col"><q-btn icon="fab fa-instagram" flat round stack size="200%"/></div>
      <div class="col"><q-btn icon="fab fa-line" flat round size="200%"/></div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { ref } from "vue";
export default {
  name: "PageIndexFooter",
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style lang="sass">
</style>