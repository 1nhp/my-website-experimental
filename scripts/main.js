const pod_navi = document.querySelector(".pod-nav") 
const overlaycontent = document.querySelector(".overlay-content");
const overlay = document.querySelector(".overlay");
const pod_gui_projects = document.querySelector(".pod-gui-projects")
const pod_gui_blog = document.querySelector(".pod-gui-blog")
const pod_gui_about_me = document.querySelector(".pod-gui-about-me")
const pod_gui_contact = document.querySelector(".pod-gui-contact")
const pod_gui_stuff = document.querySelector(".pod-gui-stuff")
const pod_gui_links = document.querySelector(".pod-gui-links")

window.pod_navi = document.querySelector(".pod-nav");
window.pod_gui_blog = document.querySelector(".pod-gui-blog");
window.pod_gui_about_me = document.querySelector(".pod-gui-about-me");
window.pod_gui_projects = document.querySelector(".pod-gui-projects")
window.pod_gui_contact = document.querySelector(".pod-gui-projects")
window.pod_gui_stuff = document.querySelector(".pod-gui-stuff")
window.pod_gui_links = document.querySelector(".pod-gui-links")

pod_navi.style.display = "none"
pod_gui_projects.style.display = "none"
pod_gui_blog.style.display = "none"
pod_gui_about_me.style.display = "none"
pod_gui_contact.style.display = "none"
pod_gui_stuff.style.display = "none"
pod_gui_links.style.display = "none"

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function switch_ui(prev, next, time = 100) {
    if (prev) {
        prev.style.scale = '0';
        prev.style.filter = 'blur(30px)';
        prev.style.zIndex = "-9";
        prev.style.opacity = "0"
        await delay(400);
        prev.style.display = "none"
    }

    next.style.display = 'flex';
    next.style.scale = '0';
    next.style.filter = 'blur(30px)';
    next.offsetHeight;
    next.style.scale = '1';
    next.style.filter = 'blur(0px)';
    next.style.zIndex = "9999"
    next.style.opacity = 1
}

window.addEventListener("click", async () => {
    playsound("audio/pod_select.wav", 0.5)
    overlaycontent.style.opacity = "0";
    overlaycontent.style.transform = "scale(0)";

    await delay(400);
    overlay.style.opacity = 0
    playsound("audio/podcomputerenter.ogg", 0.8)

    
    switch_ui(pod_gui_projects, pod_navi)
    preloadMusic()
    music(music_amb)
    await delay(400);
    overlay.remove()
}, { once: true });