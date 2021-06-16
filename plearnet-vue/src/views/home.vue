<template>
  <canvas class="webgl"></canvas>
</template>

<script>
import * as THREE from "three";
import { InteractionManager } from "three.interactive";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  components: {},
  setup() {
    const router = useRouter();
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
      //   document.body.appendChild(renderer.domElement);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      //  背景
      renderer.setClearColor(new THREE.Color("#21282a"), 1);

      // Objects
      //   const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

      const geometry = new THREE.SphereGeometry(0.5, 50, 50);

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

      //   星球1
      const planet = new THREE.ShaderMaterial({
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

      const sphere = new THREE.Mesh(geometry, planet);
      sphere.position.x = -1;
      //   星球2
      const planetTwo = new THREE.ShaderMaterial({
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

      const sphereTwo = new THREE.Mesh(geometry, planetTwo);

      sphereTwo.position.x = 1;

      //星球的光
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
          "float intensity = pow(0.8 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);",
          "gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;",
          "}",
        ].join("\n"),
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      });

      const atmosphere = new THREE.Mesh(geometry, atmosphereMaterial);

      // 群組
      const group = new THREE.Group();
      const group2 = new THREE.Group();
      const group3 = new THREE.Group();

      const groupTwo = new THREE.Group();
      const groupTwo2 = new THREE.Group();
      const groupTwo3 = new THREE.Group();

      //文字
      const ambientLight = new THREE.AmbientLight(0xaaaaaa);
      scene.add(ambientLight);

      const fontLoader = new THREE.FontLoader();
      fontLoader.load("fonts/Taipei Sans TC Beta_Bold.json", function (font) {
        const geometrySetting = {
          font: font,
          size: 0.15,
          height: 0.01,
          curveSegments: 20,
          bevelEnabled: false,
          bevelThickness: 0.01,
          bevelSize: 0.1,
          bevelSegments: 2,
        };
        let textGeoClassification = new THREE.TextGeometry("學術", geometrySetting);
        let textGeoNonClassification = new THREE.TextGeometry("非學術", geometrySetting);

        let textMatClassification = new THREE.MeshLambertMaterial({ color: 0xffffff });
        let textMatNonClassification = new THREE.MeshLambertMaterial({ color: 0xffffff });

        let textClassification = new THREE.Mesh(textGeoClassification, textMatClassification);
        let textClassification2 = new THREE.Mesh(textGeoClassification, textMatClassification);
        let textClassification3 = new THREE.Mesh(textGeoClassification, textMatClassification);

        let textNonClassification = new THREE.Mesh(textGeoNonClassification, textMatNonClassification);
        let textNonClassification2 = new THREE.Mesh(textGeoNonClassification, textMatNonClassification);
        let textNonClassification3 = new THREE.Mesh(textGeoNonClassification, textMatNonClassification);

        textClassification.position.set(-0.15, 0, 0.5);
        textClassification2.position.set(-0.15, 0, 0.5);
        textClassification3.position.set(-0.15, 0, 0.5);

        textNonClassification.position.set(-0.35, 0, 0.5);
        textNonClassification2.position.set(-0.35, 0, 0.5);
        textNonClassification3.position.set(-0.35, 0, 0.5);



        group.add(textClassification);
        group2.add(textClassification2);
        group3.add(textClassification3);

        groupTwo.add(textNonClassification);
        groupTwo2.add(textNonClassification2);
        groupTwo3.add(textNonClassification3);
      });
      // group.scale.set(1);
      // groupTwo.scale.set(1);

      group.position.x = -1;
      group2.position.x = -1;
      group3.position.x = -1;

      groupTwo.position.x = 1;
      groupTwo2.position.x = 1;
      groupTwo3.position.x = 1;



      scene.add(group,group2,group3, groupTwo,groupTwo2,groupTwo3);

      scene.add(sphere, sphereTwo, particlesMesh);

      let objs = [];

      scene.traverse((object) => {
        if (object.isMesh) objs.push(object);
      });

      // Lights
      const pointLight = new THREE.PointLight(0xffffff, 0.1);
      pointLight.position.x = 2;
      pointLight.position.y = 3;
      pointLight.position.z = 4;
      scene.add(pointLight);

      //   new Interaction(renderer, scene, camera);
      // 擴充點擊功能
      const interactionManager = new InteractionManager(
        renderer,
        camera,
        renderer.domElement
      );

      interactionManager.add(sphere);
      sphere.addEventListener("click", () => {
        router.push("/academic/test");
      });
      interactionManager.add(sphereTwo);
      sphereTwo.addEventListener("click", () => {
        router.push("/non-academic/test");
      });
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

        // Update objects
        sphere.rotation.y = 0.5 * elapsedTime;
        sphereTwo.rotation.y = -0.5 * elapsedTime;

        const raycaster = new THREE.Raycaster();

        // Raycaster
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(objs);

        scene.add(atmosphere);
        atmosphere.scale.set(0);
        // 文字
        group.rotation.y = 0.5 * elapsedTime;
        group2.rotation.y = 2+ 0.5 * elapsedTime;
        group3.rotation.y = 4+ 0.5 * elapsedTime;


        groupTwo.rotation.y = -0.5 * elapsedTime;
        groupTwo2.rotation.y = -2 + -0.5 * elapsedTime;
        groupTwo3.rotation.y = -4 + -0.5 * elapsedTime;


        // 觸碰到星球後atmosphere才放大
        for (const intersect of intersects) {
          atmosphere.scale.set(1.1, 1.1, 1.1);

          atmosphere.position.x = intersect.object.position.x;
        }

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
.webgl {
  position: fixed;
  top: 0;
  left: 0;
  outline: none;
}
</style>
