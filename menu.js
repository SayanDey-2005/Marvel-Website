// Get elements
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
});
