<template >
  <div class="bg-blue-grey-9 text-white q-pa-md" style="height: 15vh">
    <div class="fit row no-wrap justify-between items-center">
      <div class="p-icon col" > <img class="img" src="../../static/img/logo.png" />Plearnet</div>
      <div class="withus col">聯絡我們</div>
      <div class="col"><q-btn class="test" icon="fab fa-instagram" flat round stack /></div>
      <div class="col"><q-btn class="test" icon="fab fa-line" flat round /></div>
    </div>
  </div>
</template>
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

<style lang="sass" scoped>
.p-icon
  font-size: 2rem
  @media (max-width: 599px)
    font-size: .3rem
  // @media (max-width: 1023px)
  //   font-size: 1rem
  img
    width:15%
    // @media (max-width: 1023px)
    //   width:15%

   

.withus
  font-size: 2rem
  @media (max-width: 599px)
    font-size: .3rem

.test
  font-size:200%
  @media (max-width: 599px)
    font-size:100%
</style>