// List of image URLs (host your images or use valid links)
const images = [
  'myphotos/a2.jpg', // replace with your actual image paths
  'myphotos/a3.jpg',
  'myphotos/a4.jpg'
  'myphotos/a5.jpg'
];

let currentIndex = 0;

// Function to switch to the next image
function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('profileImage').src = images[currentIndex];
}
