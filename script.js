// List of image URLs (host your images or use valid links)
const images = [
  'myPhotos/a2.jpg', // replace with your actual image paths
  'myPhotos/a3.jpg',
  'myPhotos/a4.jpg'
  'myPhotos/a5.jpg'
];

let currentIndex = 0;

// Function to switch to the next image
function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('profileImage').src = images[currentIndex];
}
