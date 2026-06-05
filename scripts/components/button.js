let isAnyButtonHovered = false;

document.addEventListener("mouseover", (event) => {
  const button = event.target.closest("button");
  const a = event.target.closest("a");
  const area = event.target.closest("area");
  const imgButton = event.target.closest(".img-button");

  if (button || imgButton || a || area) {
    playsound(pod_cursor_move, 0.7);
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const a = event.target.closest("a");
  const area = event.target.closest("area");
  const imgButton = event.target.closest(".img-button");
  const backButton = event.target.closest("button#back");

  if ((button || imgButton || a || area) && !backButton) {
    playsound(pod_select, 0.7);
  }

  if (backButton) {
    playsound(pod_back, 0.7);
  }
});

document.body.addEventListener("click", (event) => {
  const btn = event.target.closest(".link-btn");
  window.open(btn.dataset.url, "_blank");
});
