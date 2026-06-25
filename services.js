document.addEventListener('DOMContentLoaded', () => {

  // ─── SCROLL REVEAL SYSTEM ───────────────────────────────────
  const revealElements = document.querySelectorAll('.fade-in-on-scroll');
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 10) * 8.8;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  revealOnScroll();
  setTimeout(revealOnScroll, 100);
  setTimeout(revealOnScroll, 400);

  // ─── TOAST NOTIFICATION SYSTEM ────────────────────────────────
  const toast = document.getElementById('toast-notification');
  const toastMessage = toast ? toast.querySelector('.toast-message') : null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  window.triggerToast = function(message) {
    showToast(message);
  };

  // ─── FAQ ACCORDION LOGIC ──────────────────────────────────────
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      
      faqTriggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          otherTrigger.nextElementSibling.style.maxHeight = null;
        }
      });

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });

  // ─── NEWSLETTER FORM INTERCEPTORS ─────────────────────────────
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
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg>
      `;
      
      setTimeout(() => {
        showToast('Successfully joined the literary services news circle!');
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
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
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

  // ─── SCROLLED NAVBAR HEADER CLASS ─────────────────────────────
  const mainHeader = document.getElementById('main-header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll);
  handleHeaderScroll();

  // ─── INITIALIZE SYNCED THEME AND DIRECTION ──────────────────
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  const savedDir = localStorage.getItem('bookstore-dir') || 'ltr';

  // Apply theme on load
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-sun';
    });
  } else {
    document.body.classList.remove('light-mode');
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-moon';
    });
  }

  // Apply layout direction on load
  document.documentElement.setAttribute('dir', savedDir);
  document.documentElement.setAttribute('lang', savedDir === 'rtl' ? 'ar' : 'en');

  // ─── THEME TOGGLER (DARK / LIGHT MODE) ────────────────────────
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

  // ─── RTL TOGGLER ──────────────────────────────────────────────
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

  // ─── MOBILE DRAWER MENU TOGGLE ────────────────────────────────
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
});
