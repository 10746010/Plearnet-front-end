<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen" style="z-index: 0">
      <div class="q-pa-xl bg-black relative-position" >
        <div class="WAL__layout shadow-3" container style="min-height:1000px;border:1px solid;border-color:white">
          <div class="row">
            <img class="star" src="../../static/img/5.png" />
            <h4 class="tit q-pl-xl text-white" style="font-size: 3rem">
              興趣區
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
            to="/main/savor"
          />

          <div class="row justify-center q-gutter-sm">
            <q-intersection
              class="example-item col-3"
              v-for="n in 6"
              :key="`sm-${n}`"
              once
              transition="scale"
            >
              <div class="my-content">
                <q-card class="q-ma-sm">
                  <img :src="notes[n - 1].img" />

                  <q-card-section>
                    <div class="text-h6">Card #{{ notes[n - 1].title }}</div>
                    <div class="text-subtitle2">{{ notes[n - 1].class }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </q-intersection>
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>
<script>
import { useQuasar } from "quasar";
import { computed } from "vue";
export default {
  name:"PageSavor",
  setup() {
    const $q = useQuasar();

    const style = computed(() => ({
      height: $q.screen.height + "px",
    }));
    return {
      style,
      notes: [
        {
          title: "番茄炒蛋1",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋2",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋3",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋4",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋5",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
        {
          title: "番茄炒蛋6",
          img: "https://cdn.quasar.dev/img/mountains.jpg",
          class: "料理",
        },
      ],
      selected: "A",
      options: [
        { text: "依熱門度排序", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
    };
  },
};
</script>
<style lang="sass">
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