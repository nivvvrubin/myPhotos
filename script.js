// List of image URLs (host your images or use valid links)
const images = [
  'https://github.com/nivvvrubin/myPhotos/blob/main/a2.jpg', // replace with your actual image paths
  'a3.jpg',
  'myPhotos/a4.jpg'
  'a5.jpg'
];

let currentIndex = 0;

// Function to switch to the next image
function switchImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('profileImage').src = images[currentIndex];
}
