const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.getElementById('showFormBtn').addEventListener('click', function() {
    document.getElementById('contactFormPopup').style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('contactFormPopup').style.display = 'none';
  });
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Form submission logic here
    // You can use AJAX or any other method to send form data to the specified email
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
    document.getElementById('contactFormPopup').style.display = 'none';
  });
  