<template >
  <q-img src="../../static/img/p1_pg.jpg" style="height: 100vh">
    <div
      class="flex row full-width full-height"
      style="background: rgba(0, 0, 0, 0)"
    >
      <div
        class="col column justify-center items-center content-center text-white"
      >
        <div class="flex justify-center items-center text-center title">
          <h3>Plearnet學習網</h3>
          <img src="../../static/img/logo.png" style="width: 10%" />
        </div>
        <h5 class="q-mb-xl">提供各式各樣的優良筆記，幫助您提升自學能力！</h5>
        <q-btn
          unelevated
          rounded
          color="primary"
          label="探索筆記"
          to="/main"
        />
      </div>
      <div class="col column justify-center items-center content-center large-screen-only" ></div>
    </div>
  </q-img>
</template>

<script>
export default {
  name: "PageHome",
  computed: {},
};
</script>

<style lang="sass" scoped>
.title
  h3
    @media (max-width: 799px)
      font-size:2rem

.large-screen-only  
  @media (max-width: 599px)
    display: none
</style>
