/* main.js */

document.addEventListener("DOMContentLoaded", function() {
  /* --- Zobrazenie pri scrollovaní --- */
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  /* --- Karusel referencií --- */
  const carouselItems = document.querySelectorAll('.carousel-item');
  let currentIndex = 0;
  setInterval(() => {
    carouselItems[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % carouselItems.length;
    carouselItems[currentIndex].classList.add('active');
  }, 5000); // Zmena referencie každých 5 sekúnd

  /* --- Odber newslettera --- */
  const newsletterForm = document.getElementById('newsletter-form');
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    // Tu by ste pridali AJAX volanie alebo integráciu s CMS na spracovanie odberu.
    alert(`Ďakujeme za prihlásenie, ${email}!`);
    this.reset();
  });
});