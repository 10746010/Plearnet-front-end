<template>
  <div>
    <Header />
    <div class="wrapper">
      <router-view></router-view>
      <canvas class="webgl"></canvas>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import * as THREE from "three";

export default {
  name: "Main",
  components: {
    Header,
  },
  setup() {
    const initThree = async () => {
      // Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      window.addEventListener("resize", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      // Canvas
      const canvas = document.querySelector("canvas.webgl");

      const loader = new THREE.TextureLoader();
      const cross = loader.load("/star.png");
      // Scene
      const scene = new THREE.Scene();

      // Base camera
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
      );

      camera.position.x = 0;
      camera.position.y = 0;
      camera.position.z = 2;
      scene.add(camera);
      // Renderer 動畫循環函數，每一幀都會執行
      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
      });
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      //  背景
      renderer.setClearColor(new THREE.Color("#21282a"), 1);

      // Objects
      //   const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

      const particlesGeometry = new THREE.BufferGeometry();
      //   白色點點數量
      const particlesCnt = 5000;
      //   const particlesCnt = 2500;

      const posArray = new Float32Array(particlesCnt * 3);
      // 點點
      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * (Math.random() * 5);
      }
      // 位置
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(posArray, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        map: cross,
      });

      // 星空
      const particlesMesh = new THREE.Points(
        particlesGeometry,
        particlesMaterial
      );

      scene.add(particlesMesh);

      // Lights
      const pointLight = new THREE.PointLight(0xffffff, 0.1);
      pointLight.position.x = 2;
      pointLight.position.y = 3;
      pointLight.position.z = 4;
      scene.add(pointLight);
      // Mouse
      const mouse = new THREE.Vector2();

      window.addEventListener("mousemove", (event) => {
        mouse.x = (event.clientX / sizes.width) * 2 - 1;
        mouse.y = (event.clientY / sizes.height) * 2 - 1;
      });

      /**
       * Animate
       */
      const clock = new THREE.Clock();
      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // 自動往左邊
        particlesMesh.rotation.y = -0.1 * elapsedTime;

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();
    };

    return {
      initThree,
    };
  },
  mounted() {
    this.initThree();
  },
};
</script>
<style scoped>
.wrapper {
  height: 100vh;
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */
}
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
