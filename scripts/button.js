let isAnyButtonHovered = false;

document.addEventListener('mouseover', (event) => {
  if (event.target.closest('button')) {
    isAnyButtonHovered = true;
    playsound(pod_cursor_move, 0.7)
  }
});

document.addEventListener('click', (event) => {
  if (event.target.closest('button') !== event.target.closest('button#back')) {
    isAnyButtonHovered = true;
    playsound(pod_select, 0.7)
  }
  if (event.target.closest('button#back')) {
    playsound(pod_back, 0.7)
  }
});
