document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const themeBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // 1. Scroll Effect for Navbar
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // 2. Dark Mode Toggle Logic
  const toggleTheme = () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  };

  themeBtn.addEventListener('click', toggleTheme);

  // 3. Apply saved theme on load
  if (localStorage.getItem('portfolio-theme') === 'dark') {
    body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }
});
