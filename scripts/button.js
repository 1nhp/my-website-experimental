let isAnyButtonHovered = false;

document.addEventListener('mouseover', (event) => {
  if (event.target.closest('button')) {
    isAnyButtonHovered = true;
    playsound("/audio/pod_cursor_move.wav", 0.7)
  }
});

document.addEventListener('click', (event) => {
  if (event.target.closest('button')) {
    isAnyButtonHovered = true;
    playsound("/audio/pod_select.wav", 0.7)
  }
});