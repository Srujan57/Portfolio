const initPortfolio = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.getElementById('main-nav');

  if (!themeBtn) return;

  // Set the button icon correctly based on current state
  if (body.classList.contains('light-mode')) {
    themeBtn.textContent = '🌙';
  } else {
    themeBtn.textContent = '☀️';
  }

  // Toggle Handler
  themeBtn.onclick = () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    themeBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  };

  // Navbar Scroll Logic
  window.onscroll = () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
};

// Run when the DOM is ready
document.addEventListener('DOMContentLoaded', initPortfolio);
