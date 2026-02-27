/**
 * Srujan Shedimane Portfolio Logic
 * Handles: Theme Persistence, Icon Swapping, and Navbar Scrolling
 */

const initPortfolio = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.getElementById('main-nav');

  // If button doesn't exist yet, wait and try again
  if (!themeBtn) {
    setTimeout(initPortfolio, 100);
    return;
  }

  // 1. Persistent Theme Logic
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }

  // Theme Toggle Handler
  themeBtn.onclick = () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    // Update button text/icon
    themeBtn.textContent = isDark ? '☀️' : '🌙';

    // Save to browser memory
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  };

  // 2. Navbar Scroll Effect
  window.onscroll = () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
};

// Start the initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
