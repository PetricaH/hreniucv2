const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);

            addEyeIconToWoorkShowCards();
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const addEyeIconToWoorkShowCards = () => { 
    var workShowCards = document.querySelectorAll(".work-show-card");

    workShowCards.forEach(function(card) {
        var eyeIcon = document.createElement("span");
        
        var styleElement = document.createElement('style');

        styleElement.innerHTML = `
        .eye-icon:hover {
            cursor: pointer;
        }
        `;

        document.head.appendChild(styleElement);

        eyeIcon.className = "eye-icon";
        eyeIcon.innerHTML = "&#128065";

        eyeIcon.style.position = "absolute";
        eyeIcon.style.right = "30px";
        eyeIcon.style.bottom = "20px";
        eyeIcon.style.color = "red";
        eyeIcon.style.fontSize = "35px";

        card.appendChild(eyeIcon);
    });
};

fetch('front-end-latest-projects.json')
.then(Response => Response.json())
.then(data => {
    document.querySelector('#first-img-digital-marketing-svs').innerHTML = `<img src="${data[0].image}" alt="${data[0].title}">`;
    document.querySelector('#second-img-digital-marketing-svs').innerHTML = `<img src="${data[1].image}" alt="${data[1].title}">`;
})

.catch(error => console.error('Error fetching latest projects for Front End Development:', error));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollTopButton").classList.add("show");
    } else {
        document.getElementById("scrollTopButton").classList.remove("show");
    }
}

window.addEventListener('scroll', function() {
    var scrollTopButton = document.getElementById("scrollTopButton");
    if (window.scrollY > 20) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

