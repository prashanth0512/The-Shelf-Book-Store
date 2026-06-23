document.addEventListener('DOMContentLoaded', () => {

  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const mobileBtn  = document.querySelector('.mobile-menu-btn');
  const navLinks   = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  const dropdownLinks = document.querySelectorAll('.nav-dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        const menu = link.nextElementSibling;
        if (menu && menu.classList.contains('dropdown-menu')) {
          e.preventDefault(); // Stop redirection
          const isVisible = menu.style.display === 'flex';
          menu.style.display = isVisible ? 'none' : 'flex';
          menu.style.flexDirection = 'column';
        }
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        if (window.innerWidth <= 768 && navLinks) {
          navLinks.style.display = 'none';
        }
      }
    });
  });

  const themeBtn  = document.getElementById('theme-toggle');
  const body      = document.body;

  if (localStorage.getItem('aroma-theme') === 'dark') {
    body.classList.add('dark-mode');
    if (themeBtn) themeBtn.textContent = '🌙';
  } else {
    if (themeBtn) themeBtn.textContent = '☀️';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = body.classList.toggle('dark-mode');
      themeBtn.textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('aroma-theme', isDark ? 'dark' : 'light');
    });
  }

  const rtlBtn = document.getElementById('rtl-toggle');
  const htmlElement = document.documentElement;

  if (localStorage.getItem('aroma-dir') === 'rtl') {
    htmlElement.setAttribute('dir', 'rtl');
  } else {
    htmlElement.removeAttribute('dir');
  }

  if (rtlBtn) {
    rtlBtn.addEventListener('click', () => {
      if (htmlElement.getAttribute('dir') === 'rtl') {
        htmlElement.removeAttribute('dir');
        localStorage.setItem('aroma-dir', 'ltr');
      } else {
        htmlElement.setAttribute('dir', 'rtl');
        localStorage.setItem('aroma-dir', 'rtl');
      }
    });
  }

  if (navLinks) {
    const navActions = document.querySelector('.nav-actions');
    if (navActions) {
      const authBtns = navActions.querySelectorAll('.btn');
      if (authBtns.length > 0) {
        const mobileAuth = document.createElement('div');
        mobileAuth.className = 'mobile-auth-buttons';
        authBtns.forEach(btn => mobileAuth.appendChild(btn.cloneNode(true)));
        navLinks.appendChild(mobileAuth);
      }
    }
  }

});



{
  const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('#nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
}

const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});