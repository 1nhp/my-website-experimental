let isAnyButtonHovered = false;

document.addEventListener("mouseover", (event) => {
  const button = event.target.closest("button");
  const imgButton = event.target.closest(".img-button");

  if (button || imgButton) {
    playsound(pod_cursor_move, 0.7);
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const imgButton = event.target.closest(".img-button");
  const backButton = event.target.closest("button#back");

  if ((button || imgButton) && !backButton) {
    playsound(pod_select, 0.7);
  }

  if (backButton) {
    playsound(pod_back, 0.7);
  }
});
