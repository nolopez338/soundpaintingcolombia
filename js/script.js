const slides = [
  { title: 'Sobre SoundPaintingColombia', description: 'Contenido provisional sobre el grupo, sus colaboradores y su enfoque artístico actual.' },
  { title: '¿Qué es el Soundpainting?', description: 'Descripción provisional del Soundpainting como lenguaje de señas para componer en vivo y orientar a los intérpretes.' },
  { title: 'Creación escénica en vivo', description: 'Notas provisionales sobre creación escénica, presencia, dramaturgia y práctica colectiva.' },
  { title: 'Teatro, música y movimiento', description: 'Texto provisional sobre la relación entre sonido, gesto, movimiento y espacio.' },
  { title: 'Improvisación colectiva', description: 'Descripción provisional de la improvisación grupal como proceso escénico compartido.' },
  { title: 'Talleres de formación', description: 'Información provisional para futuras clases, laboratorios y sesiones de iniciación.' },
  { title: 'Funciones y muestras', description: 'Descripción provisional para obras escénicas, ensayos abiertos y encuentros de composición en vivo.' },
  { title: 'Procesos comunitarios', description: 'Texto provisional para colaboraciones locales, encuentros comunitarios y programas públicos.' },
  { title: 'Laboratorio de creación', description: 'Contenido provisional para laboratorios temporales de creación y exploración interdisciplinar.' },
  { title: 'Investigación artística', description: 'Notas provisionales sobre investigación, documentación y experimentación.' },
  { title: 'Ensamble interdisciplinar', description: 'Contenido provisional sobre el trabajo entre artistas de distintas disciplinas y lenguajes escénicos.' },
  { title: 'Lenguaje de señas para la escena', description: 'Descripción provisional para guías, materiales de aprendizaje y recursos pedagógicos futuros.' },
  { title: 'Composición en tiempo real', description: 'Área provisional para explicar prácticas de composición escénica en vivo.' },
  { title: 'Dirección escénica en vivo', description: 'Información provisional sobre la orientación de acciones, materiales y decisiones durante la escena.' },
  { title: 'Procesos pedagógicos', description: 'Texto provisional para metodologías de formación, conversaciones con públicos y espacios de aprendizaje.' },
  { title: 'Circulación artística', description: 'Área provisional para agenda, eventos, funciones y anuncios de talleres.' },
  { title: 'Encuentros y colaboraciones', description: 'Espacio provisional para artistas, invitados, mentores y organizaciones aliadas.' },
  { title: 'Archivo del proceso', description: 'Área provisional para notas de proceso, fotografías, referencias audiovisuales y documentación.' },
  { title: 'Material audiovisual', description: 'Contenido provisional para videos, registros, piezas sonoras y recursos de prensa.' },
  { title: 'Próximos pasos', description: 'Diapositiva provisional reservada para la siguiente área de información cuando el sitio crezca.' }
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
