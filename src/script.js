import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import gsap from "gsap";

// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as dat from "dat.gui";
import "./assets/styles/main.scss";

const gltfLoader = new GLTFLoader();
// Debug
// const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

let loadedCount = 0;
const expectedLoadCount = 2; // deux fichiers GLTF sont attendus

// Fonction pour activer la classe "loader__active" lorsque tous les fichiers sont chargés
function activateLoader() {
  if (loadedCount === expectedLoadCount) {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader__active");
  }
}

// Object Loader GLTF

gltfLoader.load("./ferrari.gltf", (gltfLoader) => {
  gltfLoader.scene.scale.set(0.5, 0.5, 0.5);
  gltfLoader.scene.rotation.set(0, -1.5708, 0);
  gltfLoader.scene.position.set(0.04, -1.56, -100);
  gltfLoader.scene.opacity = "1";
  scene.add(gltfLoader.scene);

  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");

  yesButton.addEventListener("click", () => {
    const webgl = document.querySelector(".webgl");
    setTimeout(() => {
      webgl.classList.add("webgl__active");
    }, 3000);

    var tl = gsap.timeline();
    tl.to(gltfLoader.scene.position, {
      delay: 0,
      duration: 3,
      y: -1.56,
      z: 20,
      ease: "Power1.easeIn",
    });
  });
  noButton.addEventListener("click", () => {
    const webgl = document.querySelector(".webgl");
    setTimeout(() => {
      webgl.classList.add("webgl__active");
    }, 3000);
    var tl = gsap.timeline();
    tl.to(gltfLoader.scene.position, {
      delay: 1,
      duration: 3,
      y: -1.56,
      z: 20,
      ease: "Power1.easeIn",
    });
  });

  loadedCount++;
  activateLoader();
});

// Object GLTF
gltfLoader.load("./ferrari.gltf", (gltf) => {
  gltf.scene.scale.set(0.5, 0.5, 0.5);
  gltf.scene.rotation.set(0, 0, 0);
  gltf.scene.position.set(-20, -1.56, 0);
  gltf.scene.opacity = "1";
  scene.add(gltf.scene);

  function animationMouseMove() {
    // Ajouter un écouteur d'événement pour la souris
    window.addEventListener("mousemove", onMouseMove, false);

    let mouseX = 0;
    let mouseY = 0;
    let animate = true;

    function onMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
      animate = true;
    }

    document.addEventListener("mousemove", onMouseMove, false);

    function update() {
      requestAnimationFrame(update);

      if (animate) {
        // Mettre à jour la rotation de l'objet en fonction de la position de la souris
        gltf.scene.rotation.x = mouseY * 0.2;
        gltf.scene.rotation.y = mouseX * 0.2;
      }

      // Render la scène
      renderer.render(scene, camera);
    }

    update();
  }

  const frontButton = document.getElementById("front");
  const backButton = document.getElementById("back");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const topButton = document.getElementById("top");
  const swoosh__transition = document.querySelector(".swoosh__transition");

  yesButton.addEventListener("click", () => {
    setTimeout(() => {
      gsap.to(gltf.scene.position, {
        duration: 5,
        x: 0,
        ease: "Power4.easeInOut",
      });
    }, 3500);
  });

  noButton.addEventListener("click", () => {
    setTimeout(() => {
      gsap.to(gltf.scene.position, {
        duration: 5,
        x: 0,
        ease: "Power4.easeInOut",
      });
    }, 3500);
  });

  frontButton.addEventListener("click", () => {
    if (localStorage.getItem("sound__enabled") === "true") {
      swoosh__transition.play();
    } else {
      swoosh__transition.pause();
    }
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
    if (localStorage.getItem("sound__enabled") === "true") {
      swoosh__transition.play();
    } else {
      swoosh__transition.pause();
    }
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
      y: 1.5708,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });

  leftButton.addEventListener("click", () => {
    if (localStorage.getItem("sound__enabled") === "true") {
      swoosh__transition.play();
    } else {
      swoosh__transition.pause();
    }
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
    if (localStorage.getItem("sound__enabled") === "true") {
      swoosh__transition.play();
    } else {
      swoosh__transition.pause();
    }
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
    if (localStorage.getItem("sound__enabled") === "true") {
      swoosh__transition.play();
    } else {
      swoosh__transition.pause();
    }
    gsap.to(gltf.scene.position, {
      duration: 2,
      x: 0,
      y: -0.2,
      z: 0,
      ease: "Power2.easeInOut",
    });
    gsap.to(gltf.scene.rotation, {
      duration: 2,
      x: 1.53,
      y: 0,
      z: 0,
      ease: "Power2.easeInOut",
    });
  });

  const buttonTopLeft = document.getElementById("buttonTopLeft");
  const buttonTopMiddle = document.getElementById("buttonTopMiddle");
  const buttonTopRight = document.getElementById("buttonTopRight");
  const buttonMiddleLeft = document.getElementById("buttonMiddleLeft");
  const buttonMiddleRight = document.getElementById("buttonMiddleRight");
  const buttonBottomLeft = document.getElementById("buttonBottomLeft");
  const buttonBottomMiddle = document.getElementById("buttonBottomMiddle");
  const buttonBottomRight = document.getElementById("buttonBottomRight");

  buttonTopLeft.addEventListener("mousedown", () => {
    autoIncrement("topLeft");
  });

  buttonTopLeft.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonTopMiddle.addEventListener("mousedown", () => {
    autoIncrement("topMiddle");
  });

  buttonTopMiddle.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonTopRight.addEventListener("mousedown", () => {
    autoIncrement("topRight");
  });

  buttonTopRight.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonMiddleLeft.addEventListener("mousedown", () => {
    autoIncrement("middleLeft");
  });

  buttonMiddleLeft.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonMiddleRight.addEventListener("mousedown", () => {
    autoIncrement("middleRight");
  });

  buttonMiddleRight.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonBottomLeft.addEventListener("mousedown", () => {
    autoIncrement("bottomLeft");
  });

  buttonBottomLeft.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonBottomMiddle.addEventListener("mousedown", () => {
    autoIncrement("bottomMiddle");
  });

  buttonBottomMiddle.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  buttonBottomRight.addEventListener("mousedown", () => {
    autoIncrement("bottomRight");
  });

  buttonBottomRight.addEventListener("mouseup", () => {
    stopAutoIncrement();
  });

  let autoIncrementIntervalId;

  function autoIncrement(direction) {
    gsap.to(gltf.scene.rotation, {
      duration: 0.5,
      x: "+=0",
      y: "+=0",
      z: "+=0",
      ease: "Power2.easeInOut",
    });
    autoIncrementIntervalId = setInterval(() => {
      gsap.to(gltf.scene.rotation, {
        duration: 1,
        x: `${
          direction === "topLeft"
            ? "-=0.5"
            : direction === "topMiddle"
            ? "-=0.5"
            : direction === "topRight"
            ? "-=0.5"
            : direction === "middleLeft"
            ? "+=0"
            : direction === "middleRight"
            ? "+=0"
            : direction === "bottomLeft"
            ? "+=0.5"
            : direction === "bottomMiddle"
            ? "+=0.5"
            : direction === "bottomRight"
            ? "+=0.5"
            : "0"
        }`,
        y: `${
          direction === "topLeft"
            ? "-=0.5"
            : direction === "topMiddle"
            ? "+=0"
            : direction === "topRight"
            ? "+=0.5"
            : direction === "middleLeft"
            ? "-=0.5"
            : direction === "middleRight"
            ? "+=0.5"
            : direction === "bottomLeft"
            ? "-=0.5"
            : direction === "bottomMiddle"
            ? "+=0"
            : direction === "bottomRight"
            ? "+=0.5"
            : "0"
        }`,
        z: "+=0",
        ease: "Power2.easeOut",
      });
    }, 10);
  }

  function stopAutoIncrement() {
    clearInterval(autoIncrementIntervalId);
  }
  clearInterval(autoIncrementIntervalId);

  loadedCount++;
  activateLoader();
});

// Lights
const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.scale.set(0.3, 0.3, 0.3);
pointLight.position.x = 0.2;
pointLight.position.y = 4.9;
pointLight.position.z = 6.5;
pointLight.intensity = 0;
scene.add(pointLight);

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

yesButton.addEventListener("click", () => {
  var tlLight = gsap.timeline();
  tlLight.to(pointLight, {
    delay: 0,
    duration: 3,
    intensity: 30,
    ease: "Power4.easeInOut",
  });
});
noButton.addEventListener("click", () => {
  var tlLight = gsap.timeline();
  tlLight.to(pointLight, {
    delay: 0,
    duration: 3,
    intensity: 30,
    ease: "Power4.easeInOut",
  });
});
const frontButton = document.getElementById("front");
const backButton = document.getElementById("back");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const topButton = document.getElementById("top");

leftButton.addEventListener("click", () => {
  console.log("click");
  gsap
    .timeline()
    .to(pointLight.position, {
      duration: 3,
      x: -30,
      y: 4.9,
      z: -10,
      intensity: 30,
      ease: "Power2.easeInOut",
    })
    .to(
      pointLight.position,
      {
        duration: 3,
        x: 0,
        y: 4.9,
        z: 10,
        intensity: 0,
        ease: "Power2.easeInOut",
      },
      "-=1.5"
    );
});

frontButton.addEventListener("click", () => {
  console.log("click");
  gsap
    .timeline()
    .to(pointLight.position, {
      duration: 3,
      x: 0,
      y: -10,
      z: 10,
      intensity: 5,
      ease: "Power2.easeInOut",
    })
    .to(
      pointLight.position,
      {
        duration: 4,
        x: 0,
        y: 5,
        z: 10,
        intensity: 30,
        ease: "Power2.easeInOut",
      },
      "-=2"
    );
});

rightButton.addEventListener("click", () => {
  console.log("click");
  gsap
    .timeline()
    .to(pointLight.position, {
      duration: 2,
      x: -10,
      y: 4.9,
      z: -30,
      intensity: 30,
      ease: "Power2.easeInOut",
    })
    .to(
      pointLight.position,
      {
        duration: 3,
        x: 0,
        y: 4.9,
        z: 10,
        intensity: 30,
        ease: "Power2.easeInOut",
      },
      "-=1"
    );
});

backButton.addEventListener("click", () => {
  console.log("click");
  gsap
    .timeline()
    .to(pointLight.position, {
      duration: 5,
      x: 0,
      y: -10,
      z: 10,
      intensity: 30,
      ease: "Power2.easeInOut",
    })
    .to(
      pointLight.position,
      {
        duration: 3,
        x: 0,
        y: -1,
        z: 10,
        intensity: 30,
        ease: "Power2.easeInOut",
      },
      "-=2"
    );
});

topButton.addEventListener("click", () => {
  console.log("click");
  gsap
    .timeline()
    .to(pointLight.position, {
      duration: 3,
      x: -10,
      y: -10,
      z: 10,
      intensity: 30,
      ease: "Power2.easeInOut",
    })
    .to(
      pointLight.position,
      {
        duration: 3,
        x: 3,
        y: -1,
        z: 10,
        intensity: 30,
        ease: "Power2.easeInOut",
      },
      "-=2"
    );
});

// const light1 = gui.addFolder("light1");

// light1.add(pointLight.position, "x").min(-10).max(10).step(0.1);
// light1.add(pointLight.position, "y").min(-10).max(10).step(0.1);
// light1.add(pointLight.position, "z").min(-50).max(10).step(0.1);
// light1.add(pointLight, "intensity").min(-10).max(100).step(0.1);

// const light1Color = {
//   color: 0xffffff,
// };

// light1.addColor(light1Color, "color").onChange(() => {
//   pointLight.color.set(light1Color.color);
// });
// const pointLightHelper = new THREE.PointLightHelper(pointLight, 2);
// scene.add(pointLightHelper);

// Lights 2

const pointLight2 = new THREE.AmbientLight(0xffffff, 10);
pointLight2.scale.set(0.3, 0.3, 0.3);
pointLight2.position.x = -0.2;
pointLight2.position.y = -1.1;
pointLight2.position.z = 7.2;
pointLight2.intensity = 10;
scene.add(pointLight2);

// const light2 = gui.addFolder("PointLight2");

// light2.add(pointLight2.position, "x").min(-10).max(10).step(0.1);
// light2.add(pointLight2.position, "y").min(-10).max(10).step(0.1);
// light2.add(pointLight2.position, "z").min(-50).max(10).step(0.1);
// light2.add(pointLight2, "intensity").min(-10).max(100).step(0.1);

// const light2Color = {
//   color: 0xffffff,
// };

// light2.addColor(light2Color, "color").onChange(() => {
//   light2Color.color.set(light2Color.color);
// });
// const pointLightHelper2 = new THREE.PointLightHelper(pointLight2, 2);
// scene.add(pointLightHelper2);

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

camera.far = 10000;

scene.add(camera);

// const cameraSettings = gui.addFolder("camera");
// gui.add(camera.position, "x", -10, 10).step(0.1);
// gui.add(camera.position, "y", -10, 10).step(0.1);
// gui.add(camera.position, "z", -10, 10).step(0.1);
// gui.add(camera.rotation, "x", -10, 10).step(0.1);
// gui.add(camera.rotation, "y", -10, 10).step(0.1);
// gui.add(camera.rotation, "z", -10, 10).step(0.1);
// gui.add({ distance: camera.far }, "distance", 0, 10000).onChange((value) => {
//   camera.far = value;
//   camera.updateProjectionMatrix();
// });

// gui
//   .add(camera, "fov", 50, 150)
//   .name("Focal Length")
//   .onChange(() => {
//     camera.updateProjectionMatrix();
//   });

gsap.to(camera, {
  far: 10001,
  duration: 1, // durée de l'animation
  onUpdate: function () {
    camera.updateProjectionMatrix(); // mise à jour de la projection de la caméra pendant l'animation
  },
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
  antialias: true,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

// Activer le ray tracing
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.physicallyCorrectLights = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 3;

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

// Loader -------------------------------------------

window.addEventListener("load", () => {
  activateLoader();
});
