// Twisha Mehta — site behaviour
// Mobile nav toggle · sparkline draw-in · scroll reveal · back-to-top · Reach Out modal

document.addEventListener('DOMContentLoaded', () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('[data-nav-toggle]');
  const mobileNav = document.querySelector('.mobile-nav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  /* ---------- Sparkline draw-in ---------- */
  document.querySelectorAll('.sparkline-field path').forEach((path, i) => {
    if (prefersReduced) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = `stroke-dashoffset ${1.4 + i * 0.3}s ease ${0.15 * i}s`;
    requestAnimationFrame(() => { path.style.strokeDashoffset = '0'; });
  });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.pursuit-card, .tl-item, .collab-card, .gallery-slot, .stat-cell, .conf-list > li, .pub-list > li'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if (prefersReduced) {
    revealTargets.forEach(el => el.classList.add('in-view'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Back to top ---------- */
  const toTop = document.querySelector('[data-to-top]');
  if (toTop) {
    const onScroll = () => {
      if (window.scrollY > 480) toTop.classList.add('visible');
      else toTop.classList.remove('visible');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    toTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* ---------- Reach Out modal ---------- */
  const openBtn = document.querySelector('[data-modal-open]');
  const overlay = document.querySelector('[data-modal-overlay]');
  const closeBtn = document.querySelector('[data-modal-close]');
  const form = document.getElementById('reachForm');
  let lastFocused = null;

  const openModal = () => {
    if (!overlay) return;
    lastFocused = document.activeElement;
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('open'));
    const firstField = overlay.querySelector('input, select, textarea');
    if (firstField) firstField.focus();
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { overlay.hidden = true; }, 220);
    if (lastFocused) lastFocused.focus();
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const topic = (data.get('topic') || 'General Correspondence').toString();
      const message = (data.get('message') || '').toString().trim();

      const subject = encodeURIComponent(`[Website] ${topic} — from ${name || 'a visitor'}`);
      const body = encodeURIComponent(
        `${message}\n\n—\nName: ${name}\nEmail: ${email}\nNature of query: ${topic}`
      );

      window.location.href = `mailto:twishamehta03@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
