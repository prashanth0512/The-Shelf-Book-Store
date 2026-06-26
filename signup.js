document.addEventListener('DOMContentLoaded', () => {


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


  const strengthBars = [
    document.getElementById('strength-bar-1'),
    document.getElementById('strength-bar-2'),
    document.getElementById('strength-bar-3')
  ];
  const strengthLabel = document.getElementById('strength-label');

  const checkPasswordStrength = (password) => {

    strengthBars.forEach(bar => {
      bar.className = 'strength-bar';
    });

    if (password === '') {
      strengthLabel.textContent = 'Password strength';
      return;
    }

    let score = 0;
    if (password.length >= 8) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[A-Z]/.test(password) || /[^A-Za-z0-9]/.test(password)) score++;

    if (password.length < 6) {

      strengthBars[0].classList.add('weak');
      strengthLabel.textContent = 'Weak password (add numbers/letters)';
      strengthLabel.style.color = '#ff6b6b';
    } else if (score <= 1) {

      strengthBars[0].classList.add('weak');
      strengthLabel.textContent = 'Weak password (add numbers/letters)';
      strengthLabel.style.color = '#ff6b6b';
    } else if (score === 2) {

      strengthBars[0].classList.add('medium');
      strengthBars[1].classList.add('medium');
      strengthLabel.textContent = 'Medium password (add uppercase/special characters)';
      strengthLabel.style.color = '#ffd166';
    } else if (score === 3) {

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


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^[0-9+\s-]{7,}$/;

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


  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();


      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isPasswordValid = validatePassword();
      const isConfirmValid = validateConfirmPassword();

      if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmValid) {

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-spinner"></span> Creating Account...';

        setTimeout(() => {
          if (window.triggerToast) {
            window.triggerToast('Account successfully created! Welcoming you to the Shelf community...');
          }

          setTimeout(() => {

            window.location.href = './dashboard.html';
          }, 1200);

        }, 1500);
      } else {
        if (window.triggerToast) {
          window.triggerToast('Please correct the validation errors in the registration form.');
        }
      }
    });
  }

});
