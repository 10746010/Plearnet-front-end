<template>
  <div :style="bg" id="app">
    
      <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    
    };
  },
  components: {},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
html,
body,
#app {
  /* display: flex;
  flex-direction: column; */
  height: 100%;
  margin: 0;
  padding: 0;
  background: url(../static/img/bg.jpg) no-repeat;
  background-attachment:fixed;
}

img {
  -webkit-user-drag: none;
  user-select: none;
  vertical-align: middle;

}
</style>
