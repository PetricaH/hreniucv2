const gallery = document.getElementById('gallery');
const focusedImageContainer = document.getElementById('focusedImageContainer');
const focusedImage = document.getElementById('focusedImage');
const closeButton = document.getElementById('closeButton');

// Array of image URLs
const imageUrls = [
    'digital-art-images/latest-project.jpg',
    'digital-art-images/second-latest-project.jpg',
    'digital-art-images/3.jpg',
    'digital-art-images/4.jpg',
    'digital-art-images/5.jpg',
    'digital-art-images/6.jpg',
    'digital-art-images/7.jpg',
    'digital-art-images/8.jpg',
    'digital-art-images/9.jpg',
    'digital-art-images/10.jpg',
    'digital-art-images/11.jpg',
    'digital-art-images/12.jpg',
    'digital-art-images/13.jpg',
    'digital-art-images/14.jpg',
    'digital-art-images/15.jpg',
    'digital-art-images/16.jpg',
    'digital-art-images/17.jpg',
    'digital-art-images/18.jpg',
    'digital-art-images/19.jpg',
    'digital-art-images/20.jpg',
    'digital-art-images/21.jpg',
    'digital-art-images/22.jpg',
    'digital-art-images/23.jpg',
    'digital-art-images/24.jpg',
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