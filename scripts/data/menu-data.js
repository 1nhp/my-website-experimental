const windowContentMap = {
  "pod-gui-about-me": (header) => {
    header.textContent = "About me";
    return createIframe("/pages/about_me.html");
  },
  "pod-gui-projects": (header) => {
    header.textContent = "My Projects";
    return createIframe("/pages/projects.html");
  },
  "pod-gui-blog": (header) => {
    header.textContent = "My Blogs";
    return createIframe("/pages/blog.html");
  },
  "pod-gui-contact": (header) => {
    header.textContent = "Contact me";
    return createIframe("/pages/contact.html");
  },
  "pod-gui-guestbook": (header) => {
    header.textContent = "My Guestbook";
    return createIframe("https://glitchyzulfur4.atabook.org");
  },
  "pod-gui-links": (header) => {
    header.textContent = "Links";
    return createIframe("/pages/links.html");
  },
};
