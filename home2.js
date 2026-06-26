document.addEventListener('DOMContentLoaded', () => {

  const statElements = document.querySelectorAll('.stat-card');
  const revealCounters = () => {
    const triggerBottom = window.innerHeight * 0.85;
    statElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < triggerBottom && !el.classList.contains('counted')) {
        el.classList.add('counted');
        const counterEl = el.querySelector('.stat-value');
        if (!counterEl) return;
        const target = parseInt(counterEl.getAttribute('data-target'), 10) || 0;
        
        const duration = 1500; // ms
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
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
        };
        requestAnimationFrame(updateCounter);
      }
    });
  };
  window.addEventListener('scroll', revealCounters);
  revealCounters();
});
