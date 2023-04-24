const loader = document.querySelector(".loader");
const sound__car = document.querySelector(".sound__car");
const button__sound = document.querySelector(".button__sound");

window.addEventListener("load", () => {
  loader.classList.add("loader__active");
});

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const conditions__sounds = document.querySelector(".conditions__sounds");

yesButton.addEventListener("click", () => {
  localStorage.setItem("sound__enabled", "true");
  console.log(localStorage.getItem("sound__enabled"));
  loader.classList.add("loader__finish");
  sound__car.play();
});

noButton.addEventListener("click", () => {
  localStorage.setItem("sound__enabled", "false");
  console.log(localStorage.getItem("sound__enabled"));
  loader.classList.add("loader__finish");
  sound__car.pause();
});

button__sound.addEventListener("click", () => {
  if (localStorage.getItem("sound__enabled") === "true") {
    localStorage.setItem("sound__enabled", "false");
    console.log(localStorage.getItem("sound__enabled"));
    // button__sound.classList.remove("button__sound__active");
  } else {
    localStorage.setItem("sound__enabled", "true");
    console.log(localStorage.getItem("sound__enabled"));
    // button__sound.classList.add("button__sound__active");
  }
});
