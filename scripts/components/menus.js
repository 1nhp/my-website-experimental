// Parent container
const parent = document.querySelector(".pod-ui");

// Switch UI function
async function switch_ui(prev, next, type) {
  // Get previous element and check if it exists
  const prev_el = document.getElementById(prev);
  if (!prev_el) return;

  // Play scale down animation
  // FIXME: Might have to use css for reusability later
  prev_el.style.transform = "scale(0.4)";
  prev_el.style.filter = "blur(30px)";
  prev_el.style.opacity = 0;
  prev_el.inert = true;
  await delay(300);
  deleteMenu(prev);

  let next_el;

  // If type is pod nav create pod nav menu
  if (type === "pod") {
    createPodNav();
    const pod_nav = document.getElementById("pod-nav-root");
    // Initial pod nav scale
    if (pod_nav) {
      pod_nav.style.transform = "scale(0)";
    }
  } else {
    // If else create gui window
    createWindow(next);
  }

  next_el = document.getElementById(next);
  if (!next_el) return;

  // Animate incoming window
  prev_el.style.opacity = 0;
  next_el.style.transform = "scale(0)";
  next_el.style.filter = "blur(10px)";
  await delay(100);
  prev_el.style.opacity = 1;
  next_el.style.transform = "scale(1)";
  next_el.style.filter = "blur(0)";
}

// Create window function for windows
function createWindow(id, windowTitle, windowBody) {
  const windowEl = document.createElement("div");

  windowEl.id = id;
  windowEl.className = "pod-window";

  const header = document.createElement("h1");
  header.className = "pod-window-header";

  const content = document.createElement("div");
  content.className = "pod-window-content";

  // Populate content using the registered window renderer
  if (windowContentMap[id]) {
    content.append(...windowContentMap[id](header));
  }

  if (windowBody) {
    content.append(windowBody);
  }

  // Create back button
  const button = document.createElement("button");
  button.className = "pod-window-button";
  button.id = "back";
  button.textContent = "Close";

  // When back button is pressed
  button.addEventListener("click", () => {
    music(music_amb);
    switch_ui(id, "pod-nav-root", "pod");
  });

  // Append button,header,content and Window element
  content.append(button);
  windowEl.append(header, content);
  parent.appendChild(windowEl);
}

// Creates an iframe and loading heading
function createIframe(src) {
  const iframe = document.createElement("iframe");
  iframe.src = src;
  iframe.style.transition = "0.3s";
  iframe.style.transform = "scale(0)";

  const h1 = document.createElement("h1");
  h1.classList.add("iframe-loading-heading");
  h1.textContent = "Downloadinating...";

  iframe.addEventListener("load", () => {
    playsound(pod_pop, 0.5);
    iframe.style.transform = "scale(1)";
    h1.remove();
  });

  return [iframe, h1];
}

// Create Pod Computer navigation menu
function createPodNav() {
  const pod_nav_root = document.createElement("div");
  pod_nav_root.className = "pod-nav-root";
  pod_nav_root.id = "pod-nav-root";
  parent.append(pod_nav_root);

  const pod_nav = document.createElement("div");
  pod_nav.className = "pod-nav";
  pod_nav_root.append(pod_nav);

  // Left pod buttons list
  const pod_buttons_list = document.createElement("ul");
  pod_buttons_list.className = "pod-buttons-list";

  // Create pod button function for reusability
  function createPodButton(
    name,
    classname = "about-me-button",
    onClick = null,
    container = pod_buttons_list,
  ) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.classList.add("pod-button", classname);
    button.textContent = name;

    if (onClick) {
      button.addEventListener("click", onClick);
    }

    li.appendChild(button);
    container.appendChild(li);

    return button;
  }

  // Create left side buttons
  createPodButton("About me", "about-me-button", () => {
    music(music_earth);
    switch_ui("pod-nav-root", "pod-gui-about-me");
  });

  createPodButton("Projects", "projects-button", () => {
    music(music_earth);
    switch_ui("pod-nav-root", "pod-gui-projects");
  });

  createPodButton("Blog", "blog-button", () => {
    music(music_earth);
    switch_ui("pod-nav-root", "pod-gui-blog");
  });

  pod_nav.appendChild(pod_buttons_list);

  const polaroid = document.createElement("div");
  polaroid.className = "polaroid";
  const polaroid_img = document.createElement("img");
  polaroid_img.src = "/assets/images/ui/polaroid.webp";

  const polaroid_pfp_img = document.createElement("img");
  polaroid_pfp_img.src = "/assets/images/ui/pfp.png";

  pod_nav.appendChild(polaroid);
  polaroid.appendChild(polaroid_img);
  polaroid.appendChild(polaroid_pfp_img);

  const pod_buttons_list_right = document.createElement("ul");
  pod_buttons_list_right.className = "pod-buttons-list";

  // Right side Buttons
  createPodButton(
    "Contact",
    "contact-button",
    () => {
      music(music_earth);
      switch_ui("pod-nav-root", "pod-gui-contact");
    },
    pod_buttons_list_right,
  );

  createPodButton(
    "Guest Book",
    "guestbook-button",
    () => {
      music(music_earth);
      switch_ui("pod-nav-root", "pod-gui-guestbook");
    },
    pod_buttons_list_right,
  );

  createPodButton(
    "Links",
    "links-button",
    () => {
      music(music_earth);
      switch_ui("pod-nav-root", "pod-gui-links");
    },
    pod_buttons_list_right,
  );

  pod_nav.appendChild(pod_buttons_list_right);

  // Updates container
  const updatesContainer = document.createElement("div");
  updatesContainer.className = "updates-container";

  const updatesHeader = document.createElement("h1");
  updatesHeader.textContent = "Updates";
  updatesHeader.className = "updates-header";

  // Line
  const line = document.createElement("div");
  line.className = "line";

  const updateBody = document.createElement("p");

  // TODO: Make this dynamic and fetch updates from a file or database instead of hardcoding it
  updateBody.textContent = "Nintendo Direct is about to be premiered!";

  updatesContainer.append(updatesHeader, line, updateBody);
  pod_nav_root.appendChild(updatesContainer);
}

// Removes a menu element by ID
function deleteMenu(id) {
  document.getElementById(id)?.remove();
}
