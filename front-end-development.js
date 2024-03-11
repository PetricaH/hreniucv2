function addProject(imageUrl, projectTitle, description, projectUrl) {
    const projectPanel = document.getElementById('project-panel');

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    const projectName = document.createElement('div');
    projectName.classList.add('project-name');
    projectName.textContent = projectTitle;
    projectContainer.appendChild(projectName);

    const projectImage = document.createElement('img');
    projectImage.src = imageUrl;
    projectImage.alt = 'Project Image';
    projectContainer.appendChild(projectImage);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = description;
    projectContainer.appendChild(projectDescription);

    const projectButton = document.createElement('a');
    projectButton.href = projectUrl;
    projectButton.textContent = 'View Project';
    projectButton.classList.add('button', 'view-project-btn');
    projectContainer.appendChild(projectButton);

    projectPanel.appendChild(projectContainer);
}

addProject('front-end-development-images/project-1-img.png', 'E-commerce Website', 'HTML, CSS, JS', 'https://petricah.github.io/Foli-V2/');
addProject('front-end-development-images/Project-2.png', 'Marketing Club Website', 'HTML, CSS, JS', 'https://petricah.github.io/clubuldemarketing/');
addProject('front-end-development-images/Project-3.png', 'Education Platform Website', 'HTML, CSS, JS', 'https://petricah.github.io/EduVisionHub/');
addProject('front-end-development-images/Project-4.png', 'Sweets Online Shop Website', 'HTML, CSS, JS', 'https://petricah.github.io/sweetWebsite/');
addProject('front-end-development-images/Project-5.png', 'Landing Website Photovoltaic Business', 'HTML, CSS, JS', 'https://petricah.github.io/electric-website/');

