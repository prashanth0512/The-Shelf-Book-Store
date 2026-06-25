document.addEventListener('DOMContentLoaded', () => {


  const revealElements = document.querySelectorAll('.fade-in-on-scroll');
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight         LIGHT MODE) ────────────────────────
  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');

    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
    });

    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  const themeBtnMobile = document.getElementById('themeBtnMobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', applyThemeToggle);


  function applyRtlToggle() {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';

    document.documentElement.setAttribute('dir', newDir);
    document.documentElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem('bookstore-dir', newDir);

    showToast(newDir === 'rtl' ? 'تم تحويل اتجاه النص إلى اليمين (RTL).' : 'Text layout set to LTR (English).');
  }

  const rtlBtn = document.getElementById('rtlBtn');
  if (rtlBtn) rtlBtn.addEventListener('click', applyRtlToggle);

  const rtlBtnMobile = document.getElementById('rtlBtnMobile');
  if (rtlBtnMobile) rtlBtnMobile.addEventListener('click', applyRtlToggle);


  const mainHeader = document.getElementById('main-header');
  const handleHeaderScroll = () => {
    if (mainHeader) {
      if (window.scrollY > 20) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  };
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();


  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        const parentLi = link.parentElement;
        if (parentLi.classList.contains('dropdown') && window.innerWidth <= 900) {
          return;
        }
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }


  const newsletterFormMain = document.getElementById('newsletter-form-main');
  const newsletterFormFooter = document.getElementById('newsletter-form');

  if (newsletterFormMain) {
    newsletterFormMain.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterFormMain.querySelector('input[type="email"]');
      const submitBtn = newsletterFormMain.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="display:inline-block; vertical-align:middle;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg>
      `;

      setTimeout(() => {
        showToast('Thank you for subscribing to The Shelf Journal!');
        if (emailInput) emailInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }

  if (newsletterFormFooter) {
    newsletterFormFooter.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterFormFooter.querySelector('input[type="email"]');
      const submitBtn = newsletterFormFooter.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin" style="display:inline-block; vertical-align:middle;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg>
      `;

      setTimeout(() => {
        showToast('Successfully subscribed! Check your inbox for updates.');
        if (emailInput) emailInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 1200);
    });
  }
});
