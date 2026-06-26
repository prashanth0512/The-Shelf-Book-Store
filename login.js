document.addEventListener('DOMContentLoaded', () => {


  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');
  const emailGroup = emailInput ? emailInput.closest('.input-group') : null;
  const passwordGroup = passwordInput ? passwordInput.closest('.input-group') : null;

  const passwordToggleBtn = document.getElementById('passwordToggleBtn');
  const passwordEyeIcon = document.getElementById('passwordEyeIcon');
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


  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();


      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();

      if (isEmailValid && isPasswordValid) {

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-spinner"></span> Verifying Shelf...';

        setTimeout(() => {
          if (window.triggerToast) {
            window.triggerToast('Sign-in authorized! Synchronizing your shelf...');
          }

          setTimeout(() => {

            window.location.href = './dashboard.html';
          }, 1200);

        }, 1500);
      } else {
        if (window.triggerToast) {
          window.triggerToast('Please correct the validation errors in the login form.');
        }
      }
    });
  }

});
