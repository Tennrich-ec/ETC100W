(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.getAttribute('data-open') === 'true';
      nav.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav-link]').forEach((link) => {
    if (link.getAttribute('data-nav-link') === page) {
      link.setAttribute('aria-current', 'page');
    }
  });
})();
