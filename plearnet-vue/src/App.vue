<template>
  <div :style="bg" id="app" class="container">
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
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url(../static/img/bg.jpg) no-repeat;
}

/* html {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
} */

.btn {
  display: inline-block;
  background: #fff;
  color: #000;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
img {
  -webkit-user-drag: none;
  user-select: none;
  vertical-align: middle;
  /* border:0px; */
}
</style>
