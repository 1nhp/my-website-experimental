const projectsContainer = document.getElementById("projects-container");

async function loadProjects() {
  const response = await fetch("/scripts/data/projects-data.json");
  const projects = await response.json();

  console.log(projects);

  projects.forEach((project) => {
    const projectDiv = document.createElement("div");

    projectDiv.innerHTML = `
      <div class="window" style="width: 330px;">
          <h1 class="project-name-header">${project.name}</h1>
          <div>
              <img class="project-img" src=${project.icon}></img>
          </div>
          <button style="margin-bottom: 10px;" class="pod-window-button" onclick='window.open("${project.link}")'>Check out!</button>
      </div>
      `;

    projectsContainer.appendChild(projectDiv);
  });
}

loadProjects();
