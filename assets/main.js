(function () {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }

  // FAQ accordion
  document.querySelectorAll('[data-accordion]').forEach((root) => {
    root.querySelectorAll('button[data-acc-btn]').forEach((b) => {
      b.addEventListener('click', () => {
        const id = b.getAttribute('data-acc-btn');
        const panel = root.querySelector(`[data-acc-panel="${id}"]`);
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        // close others
        root.querySelectorAll('[data-acc-panel]').forEach(p => p.classList.add('hidden'));
        if (isHidden) panel.classList.remove('hidden');
      });
    });
  });
})();