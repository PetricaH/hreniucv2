const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
         observer.unobserve(entry.target);
         addEyeIconToWorkShowCards()
      }
   })
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    .eye-icon:hover {
        cursor: pointer;
    }
    `;
document.head.appendChild(styleElement);
const addEyeIconToWorkShowCards = () => {
   var workShowCards = document.querySelectorAll(".work-show-card");
   workShowCards.forEach(function (card) {
      var eyeIcon = document.createElement("i");
      eyeIcon.classList.add("fas", "fa-eye", "eye-icon");
      eyeIcon.style.right = "30px";
      eyeIcon.style.bottom = "30px";
      eyeIcon.style.fontSize = "15px";
      eyeIcon.style.color = "#1e1e1e";
      eyeIcon.style.backgroundColor = "red";
      eyeIcon.style.position = "absolute";
      eyeIcon.style.padding = "10px 15px";
      eyeIcon.style.borderRadius = "20px";
      var projectUrl = card.getAttribute('data-project-url');
      eyeIcon.setAttribute('data-project-url', projectUrl);
      eyeIcon.addEventListener('click', handleClick);
      card.appendChild(eyeIcon)
   })
};

function handleClick(event) {
   event.preventDefault();
   var projectUrl = this.getAttribute('data-project-url');
   window.open(projectUrl, '_blank')
}
var eyeIcons = document.querySelectorAll('.eye-icon');
eyeIcons.forEach(function (eyeIcon) {
   eyeIcon.addEventListener('click', handleClick)
});
fetch('front-end-latest-projects.json').then(response => response.json()).then(data => {
   const frontendCard = document.querySelectorAll('.front-end-dev-work .work-show-card');
   frontendCard.forEach((card, index) => {
      card.style.backgroundImage = `url('${data[index].image}')`;
      card.style.backgroundSize = 'cover';
      card.setAttribute('alt', data[index].title)
   })
}).catch(error => console.error('Error fetching latest projects for Front End Development:', error));
fetch('digital-marketing-latest-projects.json').then(response => response.json()).then(data => {
   const frontendCard = document.querySelectorAll('.digital-marketing-work .work-show-card');
   frontendCard.forEach((card, index) => {
      card.style.backgroundImage = `url('${data[index].image}')`;
      card.style.backgroundSize = 'cover';
      card.setAttribute('alt', data[index].title)
   })
}).catch(error => console.error('Error fetching latest projects for Digital Marketing:', error));
fetch('digital-art-latest-projects.json').then(response => response.json()).then(data => {
   const frontendCard = document.querySelectorAll('.digital-art-work .work-show-card');
   frontendCard.forEach((card, index) => {
      card.style.backgroundImage = `url('${data[index].image}')`;
      card.style.backgroundSize = 'cover';
      card.setAttribute('alt', data[index].title)
   })
}).catch(error => console.error('Error fetching latest projects for Digital Art:', error));
window.onscroll = function () {
   scrollFunction()
};

function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollTopButton").classList.add("show")
   } else {
      document.getElementById("scrollTopButton").classList.remove("show")
   }
}
window.addEventListener('scroll', function () {
   var scrollTopButton = document.getElementById("scrollTopButton");
   if (window.scrollY > 20) {
      scrollTopButton.classList.add("show")
   } else {
      scrollTopButton.classList.remove("show")
   }
});

function scrollToTop() {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
}
