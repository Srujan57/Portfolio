/**
 * Srujan Shedimane Portfolio Logic
 * Handles: Theme Toggle, Sticky Nav, and Persistence
 */

const initializeTheme = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.getElementById('main-nav');

  if (!themeBtn) {
    console.error("Theme toggle button not found! Check if id='theme-toggle' exists in your HTML.");
    return;
  }

  // 1. Theme Toggle Logic
  const currentTheme = localStorage.getItem('portfolio-theme');

  // Apply saved theme on load
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Update Button Icon
    themeBtn.textContent = isDark ? '☀️' : '🌙';

    // Save preference
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    console.log("Theme changed to:", isDark ? "dark" : "light");
  });

  // 2. Navbar Scroll Logic
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
};

// Ensures the DOM is ready before running the script
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTheme);
} else {
  initializeTheme();
}
