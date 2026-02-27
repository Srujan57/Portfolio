// Function to handle navbar background change
function handleScroll() {
  const nav = document.getElementById('main-nav');

  // If user scrolls more than 50px, add the 'scrolled' class
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 1. Check for saved user preference on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️'; // Change icon to sun
}

// 2. Handle the button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  let theme = 'light';
  if (body.classList.contains('dark-mode')) {
    theme = 'dark';
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }

  // 3. Save choice to local storage
  localStorage.setItem('theme', theme);
});

// Listen for scroll events
window.addEventListener('scroll', handleScroll);
