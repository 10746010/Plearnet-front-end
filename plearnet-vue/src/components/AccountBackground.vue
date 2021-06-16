<template>
  <!--AccountBackground.vue， 登入和註冊的背景 -->
  <div>
    <router-view></router-view>
    <canvas class="webgl2"></canvas>
  </div>
</template>

<script>
import * as THREE from "three";

export default {
  name: "AccountBackground",
  props: {},
  components: {},
  setup() {
    return {};
  },
  mounted() {
    this.initThree();
  },
  methods: {
    initThree() {
      // Canvas
      const canvas = document.querySelector("canvas");
      canvas.style.filter = "blur(10px)";

      const camera = new THREE.PerspectiveCamera(
        75,
        innerWidth / innerHeight,
        0.1,
        1000
      );

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
      });

      renderer.setSize(innerWidth, innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      const scene = new THREE.Scene();
      {
        const near = 10000;
        const far = 1000;
        const color = "lightblue";
        scene.fog = new THREE.Fog(color, near, far);
        scene.background = new THREE.Color(color);
      }

      const geometry = new THREE.SphereGeometry(13, 50, 50);

      const material = new THREE.ShaderMaterial({
        vertexShader: [
          "varying vec2 vertexUV;",
          "varying vec3 vertexNormal;",
          "void main() {",
          "vertexUV = uv;",
          "vertexNormal = normalize(normalMatrix * normal);",
          "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
          "}",
        ].join("\n"),
        fragmentShader: [
          "uniform sampler2D globeTexture;",
          "varying vec2 vertexUV;",
          "varying vec3 vertexNormal;",
          "void main() {",
          "float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));",
          "vec3 atmosphere = vec3(0.3, 0.6, 1.0) * pow(intensity, 1.5);",
          "gl_FragColor = vec4(atmosphere + texture2D(globeTexture,vertexUV).xyz,1.0);",
          "}",
        ].join("\n"),
        uniforms: {
          globeTexture: {
            value: new THREE.TextureLoader().load("/earth.jpg"),
          },
        },
      });

      const sphere = new THREE.Mesh(geometry, material);
      // sphere.position.z = -1
      scene.add(sphere);

      const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: [
          "varying vec3 vertexNormal;",
          "void main() {",
          "vertexNormal = normalize(normalMatrix * normal);",
          "gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);",
          "}",
        ].join("\n"),
        fragmentShader: [
          "varying vec3 vertexNormal;",
          "void main() {",
          "float intensity = pow(0.5 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);",
          "gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;",
          "}",
        ].join("\n"),
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });

      const atmosphere = new THREE.Mesh(geometry, atmosphereMaterial);

      atmosphere.scale.set(1.1, 1.1, 1.1);

      scene.add(atmosphere);

      scene.position.y = -15;
      scene.position.z = -1;

      // function createSkyBox(scene) {

      const loader = new THREE.CubeTextureLoader();
      const texture = loader.load([
        "/space_right.png",
        "/space_left.png",
        "/space_top.png",
        "/space_bot.png",
        "/space_front.png",
        "/space_back.png",
      ]);
      scene.background = texture;

      const group = new THREE.Group();
      group.add(sphere);
      scene.add(group);

      const mouse = {
        x: undefined,
        y: undefined,
      };

      camera.position.z = 15;

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        sphere.rotation.y += 0.001;
         group.rotation.x = -mouse.y * 0.3;
        group.rotation.y = mouse.x * 0.5;
      }
      animate();

      // Sizes
      const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      addEventListener("mousemove", () => {
        // Update sizes
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        // Update camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

          // 星球跟著滑鼠轉動
        mouse.x = (event.clientX / innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / innerHeight) * 2 + 1;
      });
    },
  },
};
</script>
<style scoped>
.webgl2 {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>

// Used by Header