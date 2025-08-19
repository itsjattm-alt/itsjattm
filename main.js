
// Year
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  // Count-up
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    let n = 0;
    const step = Math.max(1, Math.round(target/80));
    const tick = () => {
      n += step;
      if (n>=target){ n=target; }
      el.textContent = n + (el.dataset.suffix || '');
      if (n<target) requestAnimationFrame(tick);
    };
    tick();
  });
  // Active nav highlight
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
