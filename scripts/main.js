// Pod menu references fetched once
const overlaycontent = document.querySelector(".overlay-content");
const overlay = document.querySelector(".overlay");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function switch_ui(prev, next, type) {
  const prev_el = document.getElementById(prev);
  if (!prev_el) return;

  prev_el.style.transform = "scale(0.4)";
  prev_el.style.filter = "blur(30px)";
  prev_el.style.opacity = 0;
  await delay(300);
  deleteMenu(prev);

  let next_el;

  if (type === "pod") {
    createPodNav();

    const pod_nav = document.getElementById("pod-nav");
    if (pod_nav) {
      pod_nav.style.transform = "scale(0)";
    }
  } else {
    createWindow(next);
  }

  next_el = document.getElementById(next);
  if (!next_el) return;

  prev_el.style.opacity = 0;
  next_el.style.transform = "scale(0)";
  next_el.style.filter = "blur(10px)";
  await delay(100);
  prev_el.style.opacity = 1;
  next_el.style.transform = "scale(1)";
  next_el.style.filter = "blur(0)";
}

let overlayclicked = false;

window.addEventListener("click", async () => {
  if (loading_finished && !overlayclicked) {
    overlayclicked = true; // lock immediately
    try {
      playsound(pod_select, 0.5);
      overlaycontent.style.opacity = "0";
      overlaycontent.style.transform = "scale(0)";

      await delay(400);
      overlay.style.opacity = 0;
      playsound(podcomputerenter, 0.8);

      preloadMusic();
      music(music_amb);

      createPodNav();
      switch_ui("pod-nav", "pod-nav", "pod");

      await delay(400);
      overlay.remove();
    } catch (err) {
      console.error(err);
    }
  }
});
