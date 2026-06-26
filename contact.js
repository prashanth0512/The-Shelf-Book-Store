document.addEventListener('DOMContentLoaded', () => {


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


    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isLight = document.body.classList.contains('light-mode');
          leafletMap.removeLayer(mapTileLayer);
          mapTileLayer = getMapTileLayer(!isLight);
          mapTileLayer.addTo(leafletMap);
        }
      });
    });
    observer.observe(document.body, { attributes: true });
  }


  const contactForm = document.getElementById('contact-main-form');
  const formStatusMsg = document.getElementById('form-status-msg');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnLabelText = document.getElementById('btn-label-text');
  const btnArrow = document.getElementById('btn-arrow-icon');
  const btnSpinner = document.getElementById('btn-spinner');


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

        const firstError = contactForm.querySelector('.has-error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }


      submitBtn.disabled = true;
      btnLabelText.textContent = 'Sending…';
      btnArrow.classList.add('hidden');
      btnSpinner.classList.remove('hidden');
      if (formStatusMsg) formStatusMsg.style.display = 'none';


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
        if (window.triggerToast) {
          window.triggerToast('Message sent! We\'ll reply within 24 hours.');
        }

        setTimeout(() => {
          formStatusMsg.style.display = 'none';
        }, 8000);
      }, 1800);
    });
  }


  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');


      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherPanel = other.querySelector('.faq-panel');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherPanel) otherPanel.style.maxHeight = null;
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });


      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });


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
