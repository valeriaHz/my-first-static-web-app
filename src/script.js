// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Botón Explorar
document.querySelector('.btn-explore').addEventListener('click', function () {
  const planetsSection = document.getElementById('planetas');
  planetsSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Efecto hover en las tarjetas
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', x + 'px');
    this.style.setProperty('--mouse-y', y + 'px');
  });
});

// Animación de aparición al scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animar tarjetas y elementos al entrar en vista
document.querySelectorAll('.card, .timeline-item, .info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Efecto de brillo en el fondo
const createGlowEffect = () => {
  const hero = document.querySelector('.hero');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    hero.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
  });
};

createGlowEffect();

console.log('¡Bienvenido a la Exploración del Espacio! 🚀');
