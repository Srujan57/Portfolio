/**
 * Srujan Shedimane Portfolio Logic - Default Dark Mode
 */

const initPortfolio = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.getElementById('main-nav');

  if (!themeBtn) {
    setTimeout(initPortfolio, 100);
    return;
  }

  // 1. Theme Logic
  const savedTheme = localStorage.getItem('portfolio-theme');

  // Check if user previously preferred Light Mode
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
  } else {
    // Default State (Dark)
    themeBtn.textContent = '☀️';
  }

  themeBtn.onclick = () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    themeBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
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

// Initialization
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPortfolio);
} else {
  initPortfolio();
}
