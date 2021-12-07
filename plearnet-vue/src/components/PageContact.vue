<template >
  <div class="bg-black text-white q-pa-md">
    <div class="column text-center" style="height: 60vh">
      <div class="subscription q-pa-md" style="font-size: 3rem">聯絡我們</div>
      <div class="row">
                <!-- <div class="col">   -->
                    <div class="col" font-size="10px">                        
                            <q-btn icon="fab fa-instagram" 
                            flat round size="150px"                           
                            stack />             
                    </div>
                    
                <!-- </div> -->
                <div class="col">
                   <q-btn icon="fab fa-line" flat round size="150px"/>
                 </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "PageContact",
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style lang="sass" scoped>
.subscription
  font-size: 3rem
  @media (max-width: 1439px)
    font-size: 2rem
  @media ( max-width: 1023px)
    font-size: 1rem
  @media ( max-width: 599px)
    font-size: 0.5rem

// .my-card
//   width: 300px
//   @media (max-width :1439px)
//     width: 200px

//   @media ( max-width: 1023px)
//     width: 145px

//     @media ( max-width: 599px)
//       width: 125px
</style>