// Time to admi fuck JavaScript at all costs cause this shit took 92
// lines

// This will be the internet checkpoint for me
// 3 Non-resting nights spent trying to code shit in javascript i do it
// and... lines of code how? blame JavaScript i dont want to start
// with frameworks because this website's challenge was to make it in just
// Plain HTML CSS, JS
// Coming from Godot developer... not suprised
// If i used godot i would be able to not bother with layout shit!!!

//According to all known laws of aviation, there is no way a JavaScript should be able to be clean.
//Its code are too big to get its fat little body off the ground.
//The code, of course, flies anyway because code don't care what humans think is impossible.
//Orange, black. Orange, black. Orange, black. Orange, black.
//Ooh, black and Orange!
//Let's shake it up a little.
//JavaScript! Breakfast is ready!
//Coming!
//Hang on a second.
//Hello?
//Javascript?
//Adam?
//Can you believe this is happening?
//I can't.
//I'll pick you up.
//Looking fat.
//Use the sanitizer, Your father paid good money for those.
//Sorry. I'm excited.
//Here's the 999999999999999999999 lines.
//We're very proud of you, son.
//A perfect report card, all B's.
//Very proud.
//Ma! I got a thing going here.
//You got lint on your Code!.

// Parent container
const parent = document.querySelector(".pod-ui");

// Create window function for windows
function createWindow(id, windowTitle, windowBody) {
  // Create div
  const windowEl = document.createElement("div");

  // Give it an id and class
  windowEl.id = id;
  windowEl.className = "pod-window";

  // Create window header
  const header = document.createElement("h1");
  header.className = "pod-window-header";

  // Create content container
  const content = document.createElement("div");
  content.className = "pod-window-content";

  // I think this is where spaghetti code goes no seriously
  // MENUS
  const windowContentMap = {
    "pod-gui-about-me": () => {
      header.textContent = "About me";
      return createIframe("/pages/about_me.html");
    },
    "pod-gui-projects": () => {
      const h1 = document.createElement("h1");
      header.textContent = "My Projects";
      return createIframe("/pages/projects.html");
    },
    "pod-gui-blog": () => {
      const h1 = document.createElement("h1");
      header.textContent = "My Blog";
      h1.textContent = "Nothing here...";
      return [h1];
    },
    "pod-gui-contact": () => {
      header.textContent = "Contact me";
      return createIframe("/pages/contact.html");
    },
    "pod-gui-guestbook": () => {
      header.textContent = "My Guestbook";
      return createIframe("https://glitchyzulfur4.atabook.org");
    },
    "pod-gui-links": () => {
      header.textContent = "Links";
      return createIframe("/pages/links.html");
    },
  };

  // Append it from that table
  if (windowContentMap[id]) {
    content.append(...windowContentMap[id]());
  }

  // Check
  if (windowBody) {
    content.append(windowBody);
  }

  // Create back button
  const button = document.createElement("button");
  button.className = "pod-window-button";
  button.id = "back";
  button.textContent = "Go back";

  button.addEventListener("click", () => {
    music(music_amb);
    switch_ui(id, "pod-nav", "pod");
  });

  content.append(button);
  windowEl.append(header, content);
  parent.appendChild(windowEl);
}

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

//FIXME: This is a little hacky cause im using inline HTML might move to
//       constructors later

// Create Pod Computer navigation menu
function createPodNav() {
  parent.insertAdjacentHTML(
    "beforeend",
    `
            <div id="pod-nav" class="pod-nav">
            <ul class="pod-buttons-list">
                <li style="rotate: 10deg">
                <button class="pod-button" style="width: 120%"
                    onclick="music(music_earth); switch_ui('pod-nav', 'pod-gui-about-me')">
                    About me
                </button>
            </li>
                <li style="rotate: 3deg">
                    <button class="pod-button" style="width: 100%; position: relative; left: 40px"
                    onclick="music(music_moon); switch_ui('pod-nav', 'pod-gui-projects')">
                    Projects</button>
                <li style="rotate: -7deg; padding-top: 10px">
                    <button class="pod-button" style="width: 150%; position: relative; left: 50px; bottom: 5px"
                    onclick="music(music_earth); switch_ui('pod-nav', 'pod-gui-blog')">
                    Blog</button>
                </li>
            </ul>
            <div class="polaroid">
                <img src="assets/images/polaroid.webp">
                <img src="assets/images/pfp.png" >
            </div>

            <ul class="pod-buttons-list">
                <li style="rotate: -10deg">
                    <button class="pod-button" style="width: 140%; position: relative; right: 50px"
                    onclick="music(music_moon); switch_ui('pod-nav', 'pod-gui-contact')">
                    Contact</button>
                </li>
                <li style="rotate: -3deg">
                    <button class="pod-button" style="width: 100%; position: relative; left: 20px;"
                    onclick="music(music_earth); switch_ui('pod-nav', 'pod-gui-guestbook')">
                    Guest Book</button>
                <li style="rotate: 7deg;">
                    <button class="pod-button" style="width: 140%; position: relative; right: 50px;"
                    onclick="music(music_earth); switch_ui('pod-nav', 'pod-gui-links')">
                    Links</button>
                </li>
            </ul>
            </div>
`,
  );
}

// Delete function
function deleteMenu(id) {
  document.getElementById(id).remove();
}
