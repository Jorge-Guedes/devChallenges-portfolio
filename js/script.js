/* PROJECTS */ 

// import './slide.js';

projectsJson.map((item, index) => {
    let projectItem = document.querySelector("#projects-container .project").cloneNode(true);

    projectItem.setAttribute("data-key", index);
    projectItem.querySelector("[data-name-project]").innerHTML = item.name;
    projectItem.querySelector(".project-img img").alt = item.name;
    projectItem.querySelector(".project-img img").src = item.img;
    projectItem.querySelector("[data-link-source]").href = item.urlProject;
    projectItem.querySelector("[data-link-code]").href = item.urlCode;

    document.querySelector('#projects-container').append(projectItem);

    numberProjects.innerHTML = index+1;
});

let projectsContainer = document.querySelectorAll("#projects-container .project");
projectsContainer[0].remove();

/* BLOGS */ 
const arrayBlogs = document.querySelectorAll('#blogs .blog');
numberBlogs.innerHTML = arrayBlogs.length;
