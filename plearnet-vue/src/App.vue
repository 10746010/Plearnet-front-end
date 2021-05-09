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
      bg: {
        backgroundImage: "url(" + require("../static/img/bg.jpg") + ")",
        backgroundRepeat: "no-reqpeat",
        backgroundSize: "auto",
      },
    };
  },
  components: {

  },
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
  height: 100%;
  margin: 0px;
}
/* Footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  color: #7a7a7a;
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
img{
  -webkit-user-drag: none;
  user-select: none;
}
</style>
