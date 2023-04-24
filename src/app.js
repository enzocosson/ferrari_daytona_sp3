const frontButton = document.getElementById("front");
const backButton = document.getElementById("back");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const topButton = document.getElementById("top");

const aiguille = document.querySelector(".aiguille");

leftButton.addEventListener("click", () => {
  aiguille.style.transform = "translate(-50%, 0) rotate(-84deg)";
  leftButton.classList.toggle("button__position__active");

  frontButton.classList.remove("button__position__active");
  backButton.classList.remove("button__position__active");
  rightButton.classList.remove("button__position__active");
  topButton.classList.remove("button__position__active");
});

frontButton.addEventListener("click", () => {
  aiguille.style.transform = "translate(-50%, 0) rotate(-45deg)";
  frontButton.classList.toggle("button__position__active");

  leftButton.classList.remove("button__position__active");
  backButton.classList.remove("button__position__active");
  rightButton.classList.remove("button__position__active");
  topButton.classList.remove("button__position__active");
});

topButton.addEventListener("click", () => {
  aiguille.style.transform = "translate(-50%, 0) rotate(0deg)";
  topButton.classList.toggle("button__position__active");

  leftButton.classList.remove("button__position__active");
  backButton.classList.remove("button__position__active");
  rightButton.classList.remove("button__position__active");
  frontButton.classList.remove("button__position__active");
});

backButton.addEventListener("click", () => {
  aiguille.style.transform = "translate(-50%, 0) rotate(45deg)";
  backButton.classList.toggle("button__position__active");

  leftButton.classList.remove("button__position__active");
  topButton.classList.remove("button__position__active");
  rightButton.classList.remove("button__position__active");
  frontButton.classList.remove("button__position__active");
});

rightButton.addEventListener("click", () => {
  aiguille.style.transform = "translate(-50%, 0) rotate(84deg)";
  rightButton.classList.toggle("button__position__active");

  leftButton.classList.remove("button__position__active");
  backButton.classList.remove("button__position__active");
  backButton.classList.remove("button__position__active");
  frontButton.classList.remove("button__position__active");
});

manette__button = document.querySelector(".manette__button");
compteur__button = document.querySelector(".compteur__button");
compteur__vitesse = document.querySelector(".compteur__vitesse");
manette = document.querySelector(".manette");

manette__button.addEventListener("click", () => {
  manette__button.classList.toggle("manette__button__active");
  compteur__button.classList.remove("compteur__button__active");

  manette.classList.toggle("manette__active");
  compteur__vitesse.classList.remove("compteur__vitesse__active");
});

compteur__button.addEventListener("click", () => {
  manette__button.classList.remove("manette__button__active");
  compteur__button.classList.toggle("compteur__button__active");

  manette.classList.remove("manette__active");
  compteur__vitesse.classList.toggle("compteur__vitesse__active");
});

function animationStats() {
  // animaiton statistics
  const zero__to__100 = document.getElementById("zero__to__100");
  const nm = document.getElementById("nm");
  const hp = document.getElementById("hp");

  let duration__100 = 2800;
  let duration_nm = 3300;
  let duration_hp = 4000;

  let value__100 = 0;
  let value_nm = 0;
  let value_hp = 0;

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    // Animation pour zero__to__100
    if (elapsed < duration__100) {
      const progress = elapsed / duration__100;
      const interpolated = easeInOut(progress);
      value__100 = interpolated * 2.8;
      zero__to__100.innerHTML = value__100.toFixed(1) + "s";
    } else {
      value__100 = 2.8;
      zero__to__100.innerHTML = value__100.toFixed(1) + "s";
    }

    // Animation pour nm
    if (elapsed < duration_nm) {
      const progress = elapsed / duration_nm;
      const interpolated = easeInOut(progress);
      value_nm = interpolated * 697;
      nm.innerHTML = Math.floor(value_nm);
    } else {
      value_nm = 697;
      nm.innerHTML = value_nm;
    }

    // Animation pour hp
    if (elapsed < duration_hp) {
      const progress = elapsed / duration_hp;
      const interpolated = easeInOut(progress);
      value_hp = interpolated * 829;
      hp.innerHTML = Math.floor(value_hp);
    } else {
      value_hp = 829;
      hp.innerHTML = value_hp;
    }

    if (elapsed < duration_hp) {
      requestAnimationFrame(animate);
    }
  }

  let start = null;
  requestAnimationFrame(animate);
}

yesButton.addEventListener("click", () => {
  setTimeout(() => {
    animationStats();
  }, 6500);
});

noButton.addEventListener("click", () => {
  setTimeout(() => {
    animationStats();
  }, 6500);
});
