/* ═══════════════════════════════════════════════════════════════════
   CONTACT PAGE JS — The Shelf: Curated Reads
   Matches design system of about.js / services.js
   Features: Theme, RTL, Mobile Nav, Scroll Reveal, FAQ Accordion,
             Contact Form Validation, Leaflet Map, Newsletter CTA
═══════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────── THEME SYSTEM ──────────────────────
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    setThemeIcons(true);
  } else {
    document.body.classList.remove('light-mode');
    setThemeIcons(false);
  }

  function setThemeIcons(isLight) {
    ['themeBtnIcon', 'themeBtnMobileIcon'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    });
  }

  function applyThemeToggle() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
    setThemeIcons(isLight);
    showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');

    // Update map tiles when theme changes
    if (mapTileLayer && leafletMap) {
      leafletMap.removeLayer(mapTileLayer);
      mapTileLayer = getMapTileLayer(!isLight);
      mapTileLayer.addTo(leafletMap);
    }
  }

  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', applyThemeToggle);

  const themeBtnMobile = document.getElementById('themeBtnMobile');
  if (themeBtnMobile) themeBtnMobile.addEventListener('click', applyThemeToggle);

  // ─────────────────────────── RTL SYSTEM ────────────────────────
  const savedDir = localStorage.getItem('bookstore-dir') || 'ltr';
  document.documentElement.setAttribute('dir', savedDir);

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
    localStorage.setItem('bookstore-dir', document.documentElement.getAttribute('dir'));
  }

  const rtlBtn = document.getElementById('rtlBtn');
  if (rtlBtn) rtlBtn.addEventListener('click', applyRtlToggle);

  const rtlBtnMobile = document.getElementById('rtlBtnMobile');
  if (rtlBtnMobile) rtlBtnMobile.addEventListener('click', applyRtlToggle);

  // ─────────────────────────── MOBILE NAV ────────────────────────
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', e => {
      e.stopPropagation();
      navLinks.classList.toggle('open');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('open')
          ? 'fas fa-times'
          : 'fas fa-bars';
      }
    });

    document.addEventListener('click', e => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', e => {
        const parentLi = link.parentElement;
        if (parentLi.classList.contains('dropdown') && window.innerWidth <= 768) return;
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }

  // ─────────────────────────── NAVBAR SCROLL ─────────────────────
  const mainHeader = document.getElementById('main-header');
  const handleHeaderScroll = () => {
    if (window.scrollY > 20) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ─────────────────────────── SCROLL REVEAL ─────────────────────
  const revealElements = document.querySelectorAll('.fade-in-on-scroll');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = entry.target.style.animationDelay
            ? parseFloat(entry.target.style.animationDelay) * 1000
            : 0;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // ─────────────────────────── TOAST NOTIFICATION ────────────────
  const toast = document.getElementById('toast-notification');
  const toastMessage = toast ? toast.querySelector('.toast-message') : null;
  let toastTimer = null;

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
  }

  window.triggerToast = showToast;

  // ─────────────────────────── LEAFLET MAP ───────────────────────
  let leafletMap = null;
  let mapTileLayer = null;
  const storeCoords = [51.513364, -0.129068];

  function getMapTileLayer(isDark) {
    const url = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
    return L.tileLayer(url, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    });
  }

  const mapEl = document.getElementById('leaflet-map');
  if (mapEl && typeof L !== 'undefined') {
    const isDark = !document.body.classList.contains('light-mode');

    leafletMap = L.map('leaflet-map', {
      center: storeCoords,
      zoom: 15,
      scrollWheelZoom: false,
      zoomControl: true
    });

    mapTileLayer = getMapTileLayer(isDark);
    mapTileLayer.addTo(leafletMap);

    // Custom marker
    const markerIcon = L.divIcon({
      className: '',
      html: `
        <div style="
          width: 44px; height: 44px;
          background: linear-gradient(135deg, #C89B3C, #A07028);
          border-radius: 50%;
          border: 3px solid #fff;
          box-shadow: 0 4px 16px rgba(200,155,60,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        ">
          <svg style="width:22px;height:22px;fill:#fff" viewBox="0 0 24 24">
            <path d="M12 11.5c.83 0 1.5-.67 1.5-1.5S12.83 8.5 12 8.5 10.5 9.17 10.5 10s.67 1.5 1.5 1.5zm0-9C8.96 2.5 6.5 4.96 6.5 8c0 4.25 5.5 10.5 5.5 10.5S17.5 12.25 17.5 8c0-3.04-2.46-5.5-5.5-5.5z"/>
          </svg>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -44]
    });

    const marker = L.marker(storeCoords, { icon: markerIcon }).addTo(leafletMap);
    marker.bindPopup(`
      <div style="font-family:'Poppins',sans-serif; padding:4px; min-width:170px">
        <strong style="font-size:0.95rem; color:#4A2C2A; display:block; margin-bottom:6px">The Shelf Bookstore</strong>
        <p style="font-size:0.83rem; color:#6B5550; margin:0 0 4px">84 Charing Cross Road, London</p>
        <p style="font-size:0.83rem; color:#6B5550; margin:0"><strong>Open:</strong> Mon–Sat 10am–8pm</p>
      </div>
    `);
    marker.openPopup();
  }

  // ─────────────────────────── CONTACT FORM ──────────────────────
  const contactForm = document.getElementById('contact-main-form');
  const formStatusMsg = document.getElementById('form-status-msg');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnLabelText = document.getElementById('btn-label-text');
  const btnArrow = document.getElementById('btn-arrow-icon');
  const btnSpinner = document.getElementById('btn-spinner');

  // Character counter for message textarea
  const messageField = document.getElementById('field-message');
  const charCount = document.getElementById('char-count');
  if (messageField && charCount) {
    messageField.addEventListener('input', () => {
      const len = messageField.value.length;
      charCount.textContent = `${len} / 1000`;
      charCount.style.color = len > 900 ? '#E5534B' : '';
      if (len > 1000) messageField.value = messageField.value.slice(0, 1000);
    });
  }

  function getFieldParent(el) {
    return el.closest('.form-field') || el.parentElement;
  }

  function setError(inputId, errorId, message) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (!input || !error) return;
    const parent = getFieldParent(input);
    parent.classList.add('has-error');
    error.textContent = message;
    error.style.display = 'block';
  }

  function clearError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (!input || !error) return;
    const parent = getFieldParent(input);
    parent.classList.remove('has-error');
    error.style.display = 'none';
    error.textContent = '';
  }

  function clearAllErrors() {
    ['field-name', 'field-email', 'field-inquiry', 'field-message'].forEach((id, i) => {
      const errorIds = ['error-name', 'error-email', 'error-inquiry', 'error-message'];
      clearError(id, errorIds[i]);
    });
  }

  function validateForm() {
    let valid = true;
    const name = document.getElementById('field-name').value.trim();
    const email = document.getElementById('field-email').value.trim();
    const inquiry = document.getElementById('field-inquiry').value;
    const message = document.getElementById('field-message').value.trim();
    const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    clearAllErrors();

    if (!name || name.length < 2) {
      setError('field-name', 'error-name', 'Please enter your full name (at least 2 characters).');
      valid = false;
    }
    if (!email || !emailRgx.test(email)) {
      setError('field-email', 'error-email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!inquiry) {
      setError('field-inquiry', 'error-inquiry', 'Please select an inquiry type.');
      valid = false;
    }
    if (!message || message.length < 10) {
      setError('field-message', 'error-message', 'Please enter a message with at least 10 characters.');
      valid = false;
    }
    return valid;
  }

  // Live validation on blur
  ['field-name', 'field-email', 'field-inquiry', 'field-message'].forEach((id, i) => {
    const el = document.getElementById(id);
    const errorIds = ['error-name', 'error-email', 'error-inquiry', 'error-message'];
    if (!el) return;
    el.addEventListener('blur', () => {
      const val = el.value.trim();
      if (id === 'field-name' && (!val || val.length < 2)) {
        setError(id, errorIds[i], 'Please enter your full name (at least 2 characters).');
      } else if (id === 'field-email') {
        const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!val || !rgx.test(val)) setError(id, errorIds[i], 'Please enter a valid email address.');
        else clearError(id, errorIds[i]);
      } else if (id === 'field-inquiry' && !val) {
        setError(id, errorIds[i], 'Please select an inquiry type.');
      } else if (id === 'field-message' && (!val || val.length < 10)) {
        setError(id, errorIds[i], 'Please enter a message with at least 10 characters.');
      } else {
        clearError(id, errorIds[i]);
      }
    });
    el.addEventListener('input', () => clearError(id, errorIds[i]));
  });

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!validateForm()) {
        // Scroll to first error
        const firstError = contactForm.querySelector('.has-error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // Show loading state
      submitBtn.disabled = true;
      btnLabelText.textContent = 'Sending…';
      btnArrow.classList.add('hidden');
      btnSpinner.classList.remove('hidden');
      if (formStatusMsg) formStatusMsg.style.display = 'none';

      // Simulate async submission
      setTimeout(() => {
        submitBtn.disabled = false;
        btnLabelText.textContent = 'Send Message';
        btnArrow.classList.remove('hidden');
        btnSpinner.classList.add('hidden');

        formStatusMsg.className = 'form-status-msg success';
        formStatusMsg.textContent = '✦ Thank you! Your message has been sent to our bookkeepers. We will get back to you within 24 hours.';
        formStatusMsg.style.display = 'block';
        formStatusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        contactForm.reset();
        if (charCount) charCount.textContent = '0 / 1000';
        clearAllErrors();
        showToast('Message sent! We\'ll reply within 24 hours.');

        setTimeout(() => {
          formStatusMsg.style.display = 'none';
        }, 8000);
      }, 1800);
    });
  }

  // ─────────────────────────── FAQ ACCORDION ─────────────────────
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherPanel = other.querySelector('.faq-panel');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherPanel) otherPanel.style.maxHeight = null;
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it wasn't open)
      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ─────────────────────────── NEWSLETTER FORMS ──────────────────
  function handleNewsletterSubmit(formEl, btnEl, btnTextId, btnArrowId) {
    if (!formEl) return;
    formEl.addEventListener('submit', e => {
      e.preventDefault();
      const emailInput = formEl.querySelector('input[type="email"]');
      const submitButton = formEl.querySelector('button[type="submit"]');
      if (!emailInput || !submitButton) return;

      const email = emailInput.value.trim();
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast('Please enter a valid email address.');
        return;
      }

      const originalText = submitButton.innerHTML;
      submitButton.disabled = true;
      submitButton.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite; display:block;">
          <circle cx="12" cy="12" r="10" stroke-opacity="0.3"/><path d="M4 12a8 8 0 0 1 8-8" stroke-linecap="round"/>
        </svg>
      `;

      setTimeout(() => {
        showToast('Welcome to The Shelf! Curated reads coming to your inbox.');
        emailInput.value = '';
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }, 1400);
    });
  }

  handleNewsletterSubmit(
    document.getElementById('newsletter-form-main'),
    document.getElementById('nl-submit-btn')
  );
  handleNewsletterSubmit(document.getElementById('newsletter-form'));

  // ─────────────────────────── SMOOTH SCROLL ─────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
