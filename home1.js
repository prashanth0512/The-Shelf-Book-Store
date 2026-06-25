document.addEventListener('DOMContentLoaded', () => {

  const statElements = document.querySelectorAll('.stat-card');
  const revealCounters = () => {
    const triggerBottom = (window.innerHeight   duration, 1);

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
  if (acquisitionForm) {
    acquisitionForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = acquisitionForm.querySelector('button[type="submit"]');
      const origText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="btn-text">Sending Inquiry...</span>';

      setTimeout(() => {
        if (window.triggerToast) {
          window.triggerToast('Private inquiry submitted. Our curator will contact you shortly.');
        }
        acquisitionForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
      }, 1500);
    });
  }
});
