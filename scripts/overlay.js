
const element = document.querySelector(".overlay-loading-globe-icon");
const overlayclickh1 = document.querySelector(".overlay-click-h1")

let angle = 0;
let loading_finished = false

overlayclickh1.style.opacity = 0

function rotate() {
  angle = (angle + 1) % 360;
  element.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}

rotate();

window.addEventListener('load', (event) => {
  overlayclickh1.style.opacity = 1
  element.style.transition = "0.3s"
  element.style.opacity = 0
  loading_finished = true
});