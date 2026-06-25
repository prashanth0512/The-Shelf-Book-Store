document.addEventListener('DOMContentLoaded', () => {

  const statElements = document.querySelectorAll('.stat-card');
  const revealCounters = () => {
    const triggerBottom = (window.innerHeight   duration, 1);

      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);

      if (target >= 1000) {
        counterEl.textContent = currentVal.toLocaleString() + '+';
      } else {
        counterEl.textContent = currentVal + '+';
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        if (target >= 1000) {
          counterEl.textContent = target.toLocaleString() + '+';
        } else {
          counterEl.textContent = target + '+';
        }
      }
    }
    requestAnimationFrame(updateCounter);
  }
});
