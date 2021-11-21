<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen bg-black text-white" style="
    z-index: 0;">
      <h4 class="q-pl-xl">歷史紀錄</h4>
      <div class="row justify-between q-pl-xl q-pr-xl">
        <div class="q-pl-xl">
          <div class="q-pl-lg q-gutter-sm">
            <q-btn flat color="white" text-color="white" label="全部" />
            <q-btn flat color="white" text-color="white" label="學術科" />
            <q-btn flat color="white" text-color="white" label="非學術科" />
          </div>
        </div>
        <div class="q-pr-xl">
          <div class="q-pr-lg">
            <q-btn icon="add" flat color="white" text-color="black" />
          </div>
        </div>
      </div>

      <div class="q-ml-xl q-mr-xl">
          <div class="q-ml-xl q-mr-xl ">
            <q-separator dark class="q-my-md q-ml-md q-mr-md" />
          </div>
      </div>

      <div class="row justify-center q-gutter-sm text-black">
        <q-intersection
          class="example-item col-3"
          v-for="n in 9"
          :key="`sm-${n}`"
          once
          transition="scale"
        >
            <q-card class="q-ma-sm">
              <img src="https://cdn.quasar.dev/img/mountains.jpg" />

              <q-card-section>
                <div class="text-h6">Card #{{ index }}</div>
                <div class="text-subtitle2">by John Doe</div>
              </q-card-section>
            </q-card>
        </q-intersection>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>


export default {
  name: "PageHistory",
  components: {

  },
  props: {

  },
  setup() {   
    return {
      
    };
  },
};
</script>

<style lang="sass">

</style>