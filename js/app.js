

const initPortfolio = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const nav = document.getElementById('main-nav');

  // Wait for DOM if necessary
  if (!themeBtn) {
    setTimeout(initPortfolio, 100);
    return;
  }

  // 1. Theme Logic
  const savedTheme = localStorage.getItem('portfolio-theme');

  // Default is dark (no class). Only add light-mode if specifically saved.
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '🌙';
  } else {
    themeBtn.textContent = '☀️'; // Sun icon for Dark Mode
  }

  themeBtn.onclick = () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');

    themeBtn.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  };

  // 2. Navbar Scroll Logic
  window.onscroll = () => {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
};

// Initial run
initPortfolio();
