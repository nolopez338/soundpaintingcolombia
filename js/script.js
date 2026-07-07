const slides = [
  {
    title: '¿Qué es el Soundpainting?',
    description: 'Un lenguaje de señas para componer en tiempo real. La dirección propone entradas, silencios, repeticiones, variaciones y relaciones escénicas que los intérpretes responden de inmediato.'
  },
  {
    title: 'Sinopsis del espectáculo',
    description: 'Una función interdisciplinar donde sonido, cuerpo, voz, texto, imagen y acción física se organizan frente al público mediante improvisación dirigida.'
  },
  {
    title: 'Disciplinas involucradas',
    description: 'La propuesta integra música, danza, teatro, circo, literatura, artes visuales, medios audiovisuales, voz, movimiento y performance.'
  },
  {
    title: 'Formación, ensamble y presentación',
    description: 'Tres líneas de trabajo permiten compartir el lenguaje, construir prácticas colectivas y presentar composiciones escénicas en tiempo real.'
  },
  {
    title: 'Trayectoria',
    description: 'El Ensamble Liminal reúne artistas de distintas disciplinas que trabajan desde la escucha colectiva, la improvisación escénica y la composición en tiempo real.'
  },
  {
    title: 'Práctica de ensamble',
    description: 'El trabajo colectivo organiza entradas, salidas, pausas, transiciones y relaciones escénicas entre intérpretes de distintas disciplinas.'
  },
  {
    title: 'Materiales creativos',
    description: 'Sonido, cuerpo, voz, texto, imagen, movimiento y acción física pueden convertirse en detonantes para nuevas composiciones en vivo.'
  },
  {
    title: 'Ideas escénicas',
    description: 'Topics, paletas y texturas funcionan como recursos abiertos: no cierran la obra, sino que alimentan decisiones instantáneas durante la presentación.'
  },
  {
    title: 'Adaptación al contexto',
    description: 'La metodología puede ajustarse a procesos educativos, culturales, comunitarios y escénicos sin perder el eje de la creación interdisciplinar.'
  },
  {
    title: 'Formatos posibles',
    description: 'Puede realizarse como taller, laboratorio de creación, ensamble interdisciplinar, muestra final o función pública de composición en tiempo real.'
  }
];

const track = document.querySelector('#slider-track');
const dotsContainer = document.querySelector('#slider-dots');
const counter = document.querySelector('#slide-counter');
const previousButton = document.querySelector('#prev-slide');
const nextButton = document.querySelector('#next-slide');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('#main-menu');
const currentYear = document.querySelector('#current-year');

let currentSlide = 0;

function createSlides() {
  slides.forEach((slide, index) => {
    const slideElement = document.createElement('article');
    slideElement.className = 'slide';
    slideElement.setAttribute('aria-roledescription', 'diapositiva');
    slideElement.setAttribute('aria-label', `${index + 1} de ${slides.length}`);
    slideElement.innerHTML = `
      <p class="slide__number">Diapositiva ${index + 1}</p>
      <h3>${slide.title}</h3>
      <p>${slide.description}</p>
    `;
    track.appendChild(slideElement);

    const dot = document.createElement('button');
    dot.className = 'slider__dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Ir a la diapositiva ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  counter.textContent = `Diapositiva ${currentSlide + 1} de ${slides.length}`;

  document.querySelectorAll('.slider__dot').forEach((dot, index) => {
    dot.setAttribute('aria-current', index === currentSlide ? 'true' : 'false');
  });
}

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  updateSlider();
}

function showPreviousSlide() {
  goToSlide(currentSlide - 1);
}

function showNextSlide() {
  goToSlide(currentSlide + 1);
}

function toggleMenu() {
  const isOpen = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
  navMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

createSlides();
updateSlider();
currentYear.textContent = new Date().getFullYear();

previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
menuToggle.addEventListener('click', toggleMenu);

navMenu.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    closeMenu();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    showPreviousSlide();
  }

  if (event.key === 'ArrowRight') {
    showNextSlide();
  }
});
