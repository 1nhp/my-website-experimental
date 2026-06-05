async function loadBlog(id) {
  const blog = blogs.find((b) => b.id === id);
  const blog_content = document.getElementById("blog-content");
  const blog_buttons = document.getElementById("blog-buttons");

  blog_content.innerHTML = DOMPurify.sanitize(`
    <div class="iframe-content">
      <h1 class="blog-article-header">${blog.title}</h1>
      <h2 class="blog-author-date-header-2">${blog.date}</h1>
      <h2 class="blog-author-date-header-2">${blog.author}</h1>
      <hr class="line"></hr>
      <div>${blog.content}</div>
    </div>
  `);

  blog_buttons.style.display = "none";

  const back_button = document.createElement("button");
  back_button.className = "pod-window-button, blog-back-button";
  back_button.textContent = "Back to blogs";
  back_button.id = "back";

  back_button.addEventListener("click", () => {
    blog_buttons.style.display = "flex";
    blog_content.innerHTML = "";
    back_button?.remove();
  });

  document.body.prepend(back_button);
  parent.playsound(pod_search);
}
