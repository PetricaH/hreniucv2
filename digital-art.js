const gallery = document.getElementById('gallery');
const focusedImageContainer = document.getElementById('focusedImageContainer');
const focusedImage = document.getElementById('focusedImage');
const closeButton = document.getElementById('closeButton');

// Array of image URLs
const imageUrls = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg',
    'images/15.jpg',
    'images/16.jpg',
    'images/17.jpg',
    'images/18.jpg',
    'images/19.jpg',
    'images/20.jpg',
    'images/21.jpg',
    'images/22.jpg',
    'images/23.jpg',
    'images/24.jpg',
];

// Function to add images to the gallery
function addImages() {
  imageUrls.forEach(url => {
    const image = document.createElement('img');
    image.classList.add('image');
    image.src = url;
    image.alt = 'Image';
    image.addEventListener('click', () => {
      focusedImage.src = image.src;
      focusedImageContainer.style.display = 'flex';
    });
    gallery.appendChild(image);
  });
}

addImages();

closeButton.addEventListener('click', () => {
  focusedImageContainer.style.display = 'none';
});