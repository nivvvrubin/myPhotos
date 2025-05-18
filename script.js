// List of image URLs (host your images or use valid links)
const images = [
  'images/photo1.jpg', // replace with your actual image paths
  'images/photo2.jpg',
  'images/photo3.jpg'
];

let currentIndex = 0;

// Function to switch to the next image
function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('profileImage').src = images[currentIndex];
}
