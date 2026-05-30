
const element = document.querySelector(".overlay-loading-globe-icon");
const overlayclickh1 = document.querySelector(".overlay-click-h1")

let angle = 0;

overlayclickh1.style.opacity = 0

function rotate() {
  angle = (angle + 1) % 360;
  element.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}
rotate();

document.addEventListener('DOMContentLoaded', () => {
  overlayclickh1.style.opacity = 1
});