<template>
  <div class="bg-blue-grey-8 q-pa-md text-white">
      <q-toolbar>
             <q-avatar>
              <img
                src="../../static/img/logo.png"
              />
              
            </q-avatar>
          <q-toolbar-title> Plearnet </q-toolbar-title>
        </q-toolbar>
    <div class="column items-center">
      <div class="q-pa-md text-center" style="font-size: 3rem">未來展望<br><div style="font-size:2rem">Future Outlook</div></div>
      <div class="text-center content-center row">
        <div class="q-pl-xl q-pr-xs">
          <q-card class="my-card" flat bordered>
      <q-img
        src="https://cdn.quasar.dev/img/parallax2.jpg"
      />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div>
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
        </div>

        <div class="q-pl-xl q-pr-xl">
         
        </div>

        <div class="q-pl-xs q-pr-xl">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { ref } from "vue";
export default {
  name: "PageSubscription",
  setup() {
    return {
      stars: ref(4),
    };
  },
};
</script>

<style lang="sass">

</style>