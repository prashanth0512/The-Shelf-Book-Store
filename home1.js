

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
  const revealElements = document.querySelectorAll('.fade-in-on-scroll');
  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 10) * 8.8;
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
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
  
  revealOnScroll();
  setTimeout(revealOnScroll, 100);
  setTimeout(revealOnScroll, 400);
  setTimeout(revealOnScroll, 1000);

  function animateCounter(counterEl) {
    if (!counterEl) return;
    const target = parseInt(counterEl.getAttribute('data-target'), 10);
    const duration = 1500;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      if (target >= 1000) {
        counterEl.textContent = currentVal.toLocaleString() + '+';
      } else if (target === 99) {
        counterEl.textContent = currentVal + '%';
      } else {
        counterEl.textContent = currentVal;
      }
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (target >= 1000) {
          counterEl.textContent = target.toLocaleString() + '+';
        } else if (target === 99) {
          counterEl.textContent = target + '%';
        } else {
          counterEl.textContent = target;
        }
      }
    }
    requestAnimationFrame(updateCounter);
  }

  const filterButtons = document.querySelectorAll('.filter-btn');
  const bookCards = document.querySelectorAll('.book-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      bookCards.forEach(card => {
        const category = card.getAttribute('data-category');
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        
        setTimeout(() => {
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        }, 300);
      });
    });
  });

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

  const acquisitionForm = document.getElementById('acquisition-form');
  const newsletterForm = document.getElementById('newsletter-form');
  const toast = document.getElementById('toast-notification');
  const toastMessage = toast.querySelector('.toast-message');

  function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  if (acquisitionForm) {
    acquisitionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = acquisitionForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="btn-text">Sending Inquiry...</span>';
      
      setTimeout(() => {
        showToast('Private inquiry submitted. Our curator will contact you shortly.');
        acquisitionForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }, 1500);
    });
  }


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


  // ── NEW NAVBAR: RTL toggle ──────────────────────────────────
  function applyRtlToggle() {
    const currentDir = document.documentElement.getAttribute('dir');
    if (currentDir === 'rtl') {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    }
  }

  const rtlBtn = document.getElementById('rtlBtn');
  if (rtlBtn) rtlBtn.addEventListener('click', applyRtlToggle);

  const rtlBtnMobile = document.getElementById('rtlBtnMobile');
  if (rtlBtnMobile) rtlBtnMobile.addEventListener('click', applyRtlToggle);

  // ── NEW NAVBAR: Theme toggle ────────────────────────────────
  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    // Update all theme icons (desktop + mobile)
    const iconIds = ['themeBtnIcon', 'themeBtnMobileIcon'];
    iconIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  const themeBtnMobile = document.getElementById('themeBtnMobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', applyThemeToggle);

  // OLD theme-toggle (kept as fallback)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  if (themeToggle && themeIcon) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      
      if (isLight) {

        themeIcon.innerHTML = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
      } else {

        themeIcon.innerHTML = `
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
      }
    });
  }


  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalContent = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
          <path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path>
        </svg>
      `;
      
      setTimeout(() => {
        showToast('Successfully subscribed to the newsletter!');
        if (emailInput) emailInput.value = '';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
      }, 1200);
    });
  }
  // ── NEW NAVBAR: Mobile menu toggle ─────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open')
          ? 'fas fa-times'
          : 'fas fa-bars';
      }
    });

    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });

    // Close menu on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }


  // OLD hamburger (kept for fallback)
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const headerMenuWrapper = document.getElementById('header-menu-wrapper');
  if (hamburgerBtn && headerMenuWrapper) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburgerBtn.classList.toggle('active');
      headerMenuWrapper.classList.toggle('active');
    });


    document.addEventListener('click', (e) => {
      if (!headerMenuWrapper.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        headerMenuWrapper.classList.remove('active');
      }
    });


    const menuLinks = headerMenuWrapper.querySelectorAll('.nav-link, .btn-login, .control-btn');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        headerMenuWrapper.classList.remove('active');
      });
    });
  }
});
