document.addEventListener('DOMContentLoaded', () => {

  // ─── DOM ELEMENTS ──────────────────────────────────────────────
  const signupForm = document.getElementById('signupForm');
  const nameInput = document.getElementById('signupName');
  const emailInput = document.getElementById('signupEmail');
  const phoneInput = document.getElementById('signupPhone');
  const passwordInput = document.getElementById('signupPassword');
  const confirmPasswordInput = document.getElementById('signupConfirmPassword');

  const nameGroup = nameInput ? nameInput.closest('.input-group') : null;
  const emailGroup = emailInput ? emailInput.closest('.input-group') : null;
  const phoneGroup = phoneInput ? phoneInput.closest('.input-group') : null;
  const passwordGroup = passwordInput ? passwordInput.closest('.input-group') : null;
  const confirmPasswordGroup = confirmPasswordInput ? confirmPasswordInput.closest('.input-group') : null;

  const passwordToggleBtn = document.getElementById('passwordToggleBtn');
  const confirmToggleBtn = document.getElementById('confirmToggleBtn');
  const passwordEyeIcon = document.getElementById('passwordEyeIcon');
  const confirmEyeIcon = document.getElementById('confirmEyeIcon');

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

  // ─── PASSWORD VISIBILITY TOGGLES ─────────────────────────────
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

  if (confirmToggleBtn && confirmPasswordInput && confirmEyeIcon) {
    confirmToggleBtn.addEventListener('click', () => {
      const currentType = confirmPasswordInput.getAttribute('type');
      if (currentType === 'password') {
        confirmPasswordInput.setAttribute('type', 'text');
        confirmEyeIcon.className = 'fas fa-eye-slash';
      } else {
        confirmPasswordInput.setAttribute('type', 'password');
        confirmEyeIcon.className = 'fas fa-eye';
      }
    });
  }

  // ─── PASSWORD STRENGTH INDICATOR ─────────────────────────────
  const strengthBars = [
    document.getElementById('strength-bar-1'),
    document.getElementById('strength-bar-2'),
    document.getElementById('strength-bar-3')
  ];
  const strengthLabel = document.getElementById('strength-label');

  const checkPasswordStrength = (password) => {
    // Reset classes
    strengthBars.forEach(bar => {
      bar.className = 'strength-bar';
    });

    if (password === '') {
      strengthLabel.textContent = 'Password strength';
      return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;

    if (password.length < 6) {
      // Very Weak
      strengthBars[0].classList.add('weak');
      strengthLabel.textContent = 'Weak password (add numbers/letters)';
      strengthLabel.style.color = '#ff6b6b';
    } else if (score <= 1) {
      // Weak / Medium
      strengthBars[0].classList.add('weak');
      strengthLabel.textContent = 'Weak password (add numbers/letters)';
      strengthLabel.style.color = '#ff6b6b';
    } else if (score === 2) {
      // Medium
      strengthBars[0].classList.add('medium');
      strengthBars[1].classList.add('medium');
      strengthLabel.textContent = 'Medium password (add uppercase/special characters)';
      strengthLabel.style.color = '#ffd166';
    } else if (score === 3) {
      // Strong
      strengthBars[0].classList.add('strong');
      strengthBars[1].classList.add('strong');
      strengthBars[2].classList.add('strong');
      strengthLabel.textContent = 'Strong premium password';
      strengthLabel.style.color = '#2ec4b6';
    }
  };

  if (passwordInput) {
    passwordInput.addEventListener('input', (e) => {
      checkPasswordStrength(e.target.value);
    });
  }

  // ─── FORM VALIDATIONS ────────────────────────────────────────
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Basic validation allowing plus sign, brackets, numbers, and spaces
  const phoneRegex = /^\+?[\d\s\-()]{7,18}$/;

  const validateName = () => {
    if (!nameInput || !nameGroup) return false;
    const value = nameInput.value.trim();

    if (value === '') {
      nameGroup.classList.remove('valid');
      nameGroup.classList.add('invalid');
      document.getElementById('nameError').textContent = 'Full name is required';
      return false;
    } else if (value.length < 3) {
      nameGroup.classList.remove('valid');
      nameGroup.classList.add('invalid');
      document.getElementById('nameError').textContent = 'Name must be at least 3 characters long';
      return false;
    } else {
      nameGroup.classList.remove('invalid');
      nameGroup.classList.add('valid');
      return true;
    }
  };

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

  const validatePhone = () => {
    if (!phoneInput || !phoneGroup) return false;
    const value = phoneInput.value.trim();

    if (value === '') {
      phoneGroup.classList.remove('valid');
      phoneGroup.classList.add('invalid');
      document.getElementById('phoneError').textContent = 'Phone number is required';
      return false;
    } else if (!phoneRegex.test(value)) {
      phoneGroup.classList.remove('valid');
      phoneGroup.classList.add('invalid');
      document.getElementById('phoneError').textContent = 'Please enter a valid phone number (min 7 digits)';
      return false;
    } else {
      phoneGroup.classList.remove('invalid');
      phoneGroup.classList.add('valid');
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

  const validateConfirmPassword = () => {
    if (!confirmPasswordInput || !confirmPasswordGroup || !passwordInput) return false;
    const passwordVal = passwordInput.value;
    const confirmVal = confirmPasswordInput.value;

    if (confirmVal === '') {
      confirmPasswordGroup.classList.remove('valid');
      confirmPasswordGroup.classList.add('invalid');
      document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
      return false;
    } else if (confirmVal !== passwordVal) {
      confirmPasswordGroup.classList.remove('valid');
      confirmPasswordGroup.classList.add('invalid');
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
      return false;
    } else {
      confirmPasswordGroup.classList.remove('invalid');
      confirmPasswordGroup.classList.add('valid');
      return true;
    }
  };

  // Real-time checking setup
  if (nameInput) {
    nameInput.addEventListener('input', validateName);
    nameInput.addEventListener('blur', validateName);
  }
  if (emailInput) {
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
  }
  if (phoneInput) {
    phoneInput.addEventListener('input', validatePhone);
    phoneInput.addEventListener('blur', validatePhone);
  }
  if (passwordInput) {
    passwordInput.addEventListener('input', () => {
      validatePassword();
      if (confirmPasswordInput.value !== '') validateConfirmPassword();
    });
    passwordInput.addEventListener('blur', validatePassword);
  }
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);
    confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
  }

  // ─── FORM SUBMISSION HANDLING ────────────────────────────────
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Trigger all validations
      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isPasswordValid = validatePassword();
      const isConfirmValid = validateConfirmPassword();

      if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid) {
        // Form is valid - loading spinner state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-spinner"></span> Creating Account...';

        setTimeout(() => {
          showToast('Account successfully created! Welcoming you to the Shelf community...');

          setTimeout(() => {
            // Redirect to dashboard
            window.location.href = './dashboard.html';
          }, 1200);

        }, 1500);
      } else {
        showToast('Please correct the validation errors in the registration form.');
      }
    });
  }

});
