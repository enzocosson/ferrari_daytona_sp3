import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";
import { TweenMax } from "gsap";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as dat from "dat.gui";
import "./assets/styles/main.scss";

const gltfLoader = new GLTFLoader();
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
// const geometry = new THREE.TorusGeometry(0.7, 0.05, 16, 100);

// Object GLTF

let t1 = gsap.timeline();

gltfLoader.load("./ferrari.gltf", (gltf) => {
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  gltf.scene.rotation.set(0, 0, 0);
  gltf.scene.position.set(0, -1.56, 0);
  gltf.scene.opacity = "1";
  scene.add(gltf.scene);

  const car = gui.addFolder("car");

  car.add(gltf.scene.rotation, "x").min(0).max(9).step(0.01);
  car.add(gltf.scene.rotation, "y").min(0).max(9).step(0.01);
  car.add(gltf.scene.rotation, "z").min(0).max(9).step(0.01);

  car.add(gltf.scene.position, "x").min(-10).max(10).step(0.01);
  car.add(gltf.scene.position, "y").min(-10).max(10).step(0.01);
  car.add(gltf.scene.position, "z").min(-30).max(10).step(0.01);

  const frontButton = document.getElementById("front");
  const backButton = document.getElementById("back");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const topButton = document.getElementById("top");

  frontButton.addEventListener("click", () => {
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -1.56,
      z: 5,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 0,
      y: -1.5708,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });
  backButton.addEventListener("click", () => {
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -1.56,
      z: 10,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 0,
      y: 1.5708,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });

  leftButton.addEventListener("click", () => {
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -1.56,
      z: 0,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 0,
      y: -3.21,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });

  rightButton.addEventListener("click", () => {
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -1.56,
      z: 0,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 0,
      y: 0,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });

  topButton.addEventListener("click", () => {
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -0.84,
      z: 0,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 1.53,
      y: -0.65,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });
});

// Lights
const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.scale.set(0.3, 0.3, 0.3);
pointLight.position.x = -0.2;
pointLight.position.y = 4.9;
pointLight.position.z = 2.5;
pointLight.intensity = 10;
scene.add(pointLight);

const light1 = gui.addFolder("light1");

light1.add(pointLight.position, "x").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "y").min(-10).max(10).step(0.1);
light1.add(pointLight.position, "z").min(-50).max(10).step(0.1);
light1.add(pointLight, "intensity").min(-10).max(100).step(0.1);

const light1Color = {
  color: 0xffffff,
};

light1.addColor(light1Color, "color").onChange(() => {
  pointLight.color.set(light1Color.color);
});
const pointLightHelper = new THREE.PointLightHelper(pointLight, 2);
scene.add(pointLightHelper);
// Lights 2
const pointLight2 = new THREE.AmbientLight(0xffffff, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = -0.2;
pointLight2.position.y = -1.1;
pointLight2.position.z = 7.2;
pointLight2.intensity = 10;
scene.add(pointLight2);

const light2 = gui.addFolder("PointLight2");

light2.add(pointLight2.position, "x").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "y").min(-10).max(10).step(0.1);
light2.add(pointLight2.position, "z").min(-50).max(10).step(0.1);
light2.add(pointLight2, "intensity").min(-10).max(100).step(0.1);

const light2Color = {
  color: 0xffffff,
};

light2.addColor(light2Color, "color").onChange(() => {
  light2Color.color.set(light2Color.color);
});
const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 2);
scene.add(pointLightHelper2);

/**
 * Sizes
 */
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

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  28,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0;
camera.position.y = -0.7;
camera.position.z = 15;

camera.rotation.x = 0;
camera.rotation.y = 0;
camera.rotation.z = 0;

scene.add(camera);

const cameraSettings = gui.addFolder("camera");
gui.add(camera.position, "x", -10, 10).step(0.1);
gui.add(camera.position, "y", -10, 10).step(0.1);
gui.add(camera.position, "z", -10, 10).step(0.1);

gui.add(camera.rotation, "x", -10, 10).step(0.1);
gui.add(camera.rotation, "y", -10, 10).step(0.1);
gui.add(camera.rotation, "z", -10, 10).step(0.1);

gui
  .add(camera, "fov", 50, 150)
  .name("Focal Length")
  .onChange(() => {
    camera.updateProjectionMatrix();
  });

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 4));

function render() {
  requestAnimationFrame(render);
  TWEEN.update();
  renderer.render(scene, camera);
}

render();

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  // sphere.rotation.y = 1 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
