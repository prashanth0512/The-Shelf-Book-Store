document.addEventListener('DOMContentLoaded', () => {

  // ─── DOM ELEMENTS ──────────────────────────────────────────────
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const emailGroup = emailInput ? emailInput.closest('.input-group') : null;
  const passwordGroup = passwordInput ? passwordInput.closest('.input-group') : null;

  const passwordToggleBtn = document.getElementById('passwordToggleBtn');
  const passwordEyeIcon = document.getElementById('passwordEyeIcon');
  const submitBtn = document.getElementById('submitBtn');

  const rtlBtn = document.getElementById('rtlBtn');
  const themeBtn = document.getElementById('themeBtn');
  const themeBtnIcon = document.getElementById('themeBtnIcon');
  const themeBtnMobile = document.getElementById('themeBtnMobile');
  const themeBtnMobileIcon = document.getElementById('themeBtnMobileIcon');

  const toast = document.getElementById('toast-notification');
  const toastMessage = toast ? toast.querySelector('.toast-message') : null;

  // ─── TOAST NOTIFICATION SYSTEM ────────────────────────────────
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  window.triggerToast = function(msg) {
    showToast(msg);
  };

  // ─── THEME & RTL PREFERENCE SYNCING ───────────────────────────
  const savedTheme = localStorage.getItem('bookstore-theme') || 'light';
  const savedDir = localStorage.getItem('bookstore-dir') || 'ltr';

  // Apply saved theme
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeBtnIcon) themeBtnIcon.className = 'fas fa-sun';
  } else {
    document.body.classList.remove('light-mode');
    if (themeBtnIcon) themeBtnIcon.className = 'fas fa-moon';
  }

  // Apply saved text direction
  document.documentElement.setAttribute('dir', savedDir);
  document.documentElement.setAttribute('lang', savedDir === 'rtl' ? 'ar' : 'en');

  // Theme click toggling
  if (themeBtnMobile) {
    themeBtnMobile.addEventListener('click', () => {
      themeBtn.click(); // reuse desktop click
    });
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      
      if (themeBtnIcon) {
        themeBtnIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
      
      localStorage.setItem('bookstore-theme', isLight ? 'light' : 'dark');
      if (themeBtnMobileIcon) {
        themeBtnMobileIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
      }
      showToast(isLight ? 'Switched to Light Library mode.' : 'Switched to Midnight Archive mode.');
    });
  }

  // RTL click toggling
  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      
      document.documentElement.setAttribute('dir', newDir);
      document.documentElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
      
      localStorage.setItem('bookstore-dir', newDir);
      showToast(newDir === 'rtl' ? 'تم تحويل الاتجاه إلى اليمين (RTL).' : 'Text layout set to LTR (English).');
    });
  }

  // ─── PASSWORD VISIBILITY TOGGLE ──────────────────────────────
  if (passwordToggleBtn && passwordInput && passwordEyeIcon) {
    passwordToggleBtn.addEventListener('click', () => {
      const currentType = passwordInput.getAttribute('type');
      if (currentType === 'password') {
        passwordInput.setAttribute('type', 'text');
        passwordEyeIcon.className = 'fas fa-eye-slash';
      } else {
        passwordInput.setAttribute('type', 'password');
        passwordEyeIcon.className = 'fas fa-eye';
      }
    });
  }

  // ─── FORM INPUT REAL-TIME VALIDATION ─────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!emailInput || !emailGroup) return false;
    const value = emailInput.value.trim();

    if (value === '') {
      emailGroup.classList.remove('valid');
      emailGroup.classList.add('invalid');
      document.getElementById('emailError').textContent = 'Email address is required';
      return false;
    } else if (!emailRegex.test(value)) {
      emailGroup.classList.remove('valid');
      emailGroup.classList.add('invalid');
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      return false;
    } else {
      emailGroup.classList.remove('invalid');
      emailGroup.classList.add('valid');
      return true;
    }
  };

  const validatePassword = () => {
    if (!passwordInput || !passwordGroup) return false;
    const value = passwordInput.value;

    if (value === '') {
      passwordGroup.classList.remove('valid');
      passwordGroup.classList.add('invalid');
      document.getElementById('passwordError').textContent = 'Password is required';
      return false;
    } else if (value.length < 8) {
      passwordGroup.classList.remove('valid');
      passwordGroup.classList.add('invalid');
      document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
      return false;
    } else {
      passwordGroup.classList.remove('invalid');
      passwordGroup.classList.add('valid');
      return true;
    }
  };

  if (emailInput) {
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
  }

  if (passwordInput) {
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);
  }

  // ─── FORM SUBMISSION HANDLING ────────────────────────────────
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Run validation checks on both inputs
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (isEmailValid && isPasswordValid) {
        // Validation passed - trigger loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-spinner"></span> Verifying Shelf...';

        setTimeout(() => {
          showToast('Sign-in authorized! Synchronizing your shelf...');
          
          setTimeout(() => {
            // Redirect to dashboard
            window.location.href = './dashboard.html';
          }, 1200);

        }, 1500);
      } else {
        // Validation failed
        showToast('Please correct the validation errors in the login form.');
      }
    });
  }

});
