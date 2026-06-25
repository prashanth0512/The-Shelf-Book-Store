document.addEventListener('DOMContentLoaded', () => {
  // Apply synced theme on load
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    ['themeBtnIcon', 'themeBtnMobileIcon'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-sun';
    });
  } else {
    document.body.classList.remove('light-mode');
    ['themeBtnIcon', 'themeBtnMobileIcon'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = 'fas fa-moon';
    });
  }

  // ─── SCROLL REVEAL & COUNTERS SYSTEM ─────────────────────────
  const revealElements = document.querySelectorAll('.fade-in-on-scroll');
  
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 10) * 8.8;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
        
        // Trigger stat counter if it's a stat card
        if (el.classList.contains('stat-card') && !el.classList.contains('counted')) {
          el.classList.add('counted');
          animateCounter(el.querySelector('.stat-value'));
        }
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // Initial check
  revealOnScroll();
  setTimeout(revealOnScroll, 100);
  setTimeout(revealOnScroll, 400);

  // Stats Counter Animation
  function animateCounter(counterEl) {
    if (!counterEl) return;
    const target = parseInt(counterEl.getAttribute('data-target'), 10);
    const duration = 1500;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      if (target >= 1000) {
        counterEl.textContent = currentVal.toLocaleString() + '+';
      } else {
        counterEl.textContent = currentVal;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (target >= 1000) {
          counterEl.textContent = target.toLocaleString() + '+';
        } else {
          counterEl.textContent = target;
        }
      }
    }
    requestAnimationFrame(updateCounter);
  }

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

  // Expose toast to global window context so inline HTML event handlers can use it
  window.triggerToast = function(message) {
    showToast(message);
  };

  // ─── FORM SUBMISSION INTERCEPTORS ─────────────────────────────
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
        showToast('Thank you! Welcome to The Shelf newsletter reading circle.');
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
        showToast('Successfully subscribed! check your inbox for reading logs.');
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

  // ─── THEME TOGGLER (DARK / LIGHT MODE) ────────────────────────
  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    
    // Synchronize Sun/Moon icons for desktop and mobile buttons
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
    });
    
    showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  const themeBtnMobile = document.getElementById('themeBtnMobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', applyThemeToggle);

  // ─── RTL TOGGLER ──────────────────────────────────────────────
  function applyRtlToggle() {
    const currentDir = document.documentElement.getAttribute('dir');
    if (currentDir === 'rtl') {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
      showToast('Text layout set to LTR (English).');
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
      showToast('تم تحويل اتجاه النص إلى اليمين (RTL).');
    }
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

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });

    // Close menu when a link inside it is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Only close if it's not a top-level dropdown trigger on mobile (except if it links somewhere)
        const parentLi = link.parentElement;
        if (parentLi.classList.contains('dropdown') && window.innerWidth <= 900) {
          // If width is mobile, we let the submenu display
          return;
        }
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
});
