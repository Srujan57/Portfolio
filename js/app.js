document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('main-nav');
  const themeBtn = document.getElementById('theme-toggle');
  // Typewriter Effect for your title
  const title = document.querySelector('.main-title');
  const text = "Srujan Shedimane";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      title.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Speed in milliseconds
    }
  }

// Clear the title first then start typing
  title.innerHTML = "";
  typeWriter();

  // Scroll Effect: Add background when moving away from top
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Dark Mode: Minimalist toggle
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Load saved theme
  if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.textContent = '☀️';
  }
});
