// Cache overlay elements
const overlaycontent = document.querySelector(".overlay-content");
const overlay = document.querySelector(".overlay");
const bg_video = document.querySelector(".bg-video");
const music_toggle = true;
let overlayclicked = false;

// Dismiss startup overlay after initial load
window.addEventListener("click", async () => {
  if (loading_finished && !overlayclicked) {
    overlayclicked = true; // lock immediately
    try {
      // Play selection sound and animate overlay content out
      playsound(pod_select, 0.5);
      overlaycontent.style.opacity = "0";
      overlaycontent.style.transform = "scale(0)";

      await delay(400);
      overlay.style.opacity = 0;

      // Initialize ambient audio
      playsound(podcomputerenter, 0.8);
      preloadMusic();
      music(music_amb);

      createPodNav();
      bg_video.play();
      switch_ui("pod-nav-root", "pod-nav-root", "pod");

      await delay(400);
      overlay.remove();
    } catch (err) {
      console.error(err);
    }
  }
});
