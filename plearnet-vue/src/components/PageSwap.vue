<template>
  <q-page class="relative-position ">
    <q-scroll-area class="absolute fullscreen " style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position " >
        <div class="WAL__layout shadow-3" container style="min-height:1000px;border:1px solid;border-color:white">
          <div class="row">
            <img class="star" src="../../static/img/4.png" />
            <h4 class="tit q-pl-xl text-white" style="font-size: 3rem">
              交流區
            </h4>
            <q-space />
            <div class="q-pa-md">
              <q-input
                dense
                outlined
                square
                v-model="search"
                placeholder="Search"
                class="bg-white"
                style="height: 40px"
                ><template v-slot:prepend>
                  <q-icon name="fas fa-search" />
                </template>
                <template v-slot:append>
                  <select v-model="selected" style="border: none">
                    <option
                      v-for="option in options"
                      :key="option"
                      v-bind:value="option.value"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </template>
              </q-input>
            </div>
          </div>

          <q-btn
            class="back"
            unelevated
            color="white"
            text-color="grey-9"
            icon="fas fa-arrow-left"
            round
            to="/main/"
          />

   <q-item 
      clickable 
      v-ripple 
      class="bg-white q-pa-md q-ma-md"
      v-for="swaplist in swaplists"
      :key="swaplist.name"
      to="/main/swapcontent"
    >

        <q-item-section avatar >
          <q-avatar>
            <img :src="swaplist.img" />            
          </q-avatar>
        </q-item-section>

        <q-item-section>
                <q-item-label class="text-subtitle1">
                  <strong>{{swaplist.name}}</strong>
                  <span class="text-grey-7">{{swaplist.email}}</span>
                </q-item-label>    
        
          <q-item-label caption class="bg-amber-3">     
           {{swaplist.content}}
          </q-item-label>
        </q-item-section>
  
        <q-item-section side top>
          {{swaplist.views}}
        </q-item-section>
      </q-item> 

        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
    name:"PageSwap",
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    return {
      style,     
      selected: "A",
      options: [
        { text: "依熱門度排序", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      swaplists:[
        {img:"https://cdn.quasar.dev/img/avatar2.jpg",name:"暱稱006",email:"@test006",content:"希望有人能幫我看一下作業的微積分公式對不對",views:"view 60"},
        {img:"https://cdn.quasar.dev/img/avatar2.jpg",name:"name_1102",email:"@1102",content:"現在小學生的作業都那麼難的嗎",views:"view 221"},
        {img:"https://cdn.quasar.dev/img/avatar2.jpg",name:"uuu",email:"@uuu",content:"我就是想發個帖子",views:"view 3"},
      ]
    };
  },
};
</script>
<style lang="sass" scoped>
 
.star
    width:150px
    height:150px
    position: relative
    top: -50px
    right: 70px

.tit
    position: relative
    top: -50px
    font-size: 3rem
    left: -180px

.back 
    position: relative
    right: 50px
</style>