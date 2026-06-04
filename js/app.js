/**
 * Srujan Shedimane — Portfolio JS
 * Theme persistence, navbar scroll, tag cycling, project filter
 */

const init = () => {
  const themeBtn = document.getElementById('theme-toggle');
  const body     = document.body;
  const nav      = document.getElementById('main-nav');

  if (!themeBtn) { setTimeout(init, 80); return; }

  // ── Theme ──────────────────────────────────────────────────
  // Ensure correct class on load (set in inline script but normalize here)
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  body.classList.remove('light-mode', 'dark-mode');
  body.classList.add(saved === 'light' ? 'light-mode' : 'dark-mode');

  themeBtn.onclick = () => {
    const isLight = body.classList.contains('light-mode');
    body.classList.toggle('light-mode', !isLight);
    body.classList.toggle('dark-mode', isLight);
    localStorage.setItem('portfolio-theme', isLight ? 'dark' : 'light');
  };

  // ── Navbar scroll ──────────────────────────────────────────
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Hero tag cycling ───────────────────────────────────────
  const cycle = document.getElementById('tagCycle');
  if (cycle) {
    const words = ['AI systems', 'ML models', 'RAG pipelines', 'full-stack apps'];
    let i = 0;
    setInterval(() => {
      cycle.style.opacity = '0';
      cycle.style.transform = 'translateY(6px)';
      cycle.style.transition = 'opacity 0.3s, transform 0.3s';
      setTimeout(() => {
        i = (i + 1) % words.length;
        cycle.textContent = words[i];
        cycle.style.opacity = '1';
        cycle.style.transform = 'translateY(0)';
      }, 320);
    }, 2400);
  }

  // ── Project filter (projects.html) ────────────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projCards  = document.querySelectorAll('.projects-grid .proj-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const f = btn.dataset.filter;
      projCards.forEach(card => {
        const cat = (card.dataset.cat || '').toLowerCase();
        const show = f === 'all' || cat.includes(f);
        card.style.opacity    = show ? '1' : '0.2';
        card.style.transform  = show ? '' : 'scale(0.97)';
        card.style.pointerEvents = show ? '' : 'none';
        card.style.transition = 'opacity 0.25s, transform 0.25s';
      });
    });
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
