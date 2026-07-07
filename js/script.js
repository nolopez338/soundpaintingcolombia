const slides = [
  { title: 'About the group', description: 'Placeholder summary of the collective, its collaborators, and its current artistic focus.' },
  { title: 'Soundpainting language', description: 'Placeholder description of the live composing language and how it guides performers.' },
  { title: 'Theater creation', description: 'Placeholder notes about theater-making, stage presence, dramaturgy, and collective practice.' },
  { title: 'Music and movement', description: 'Placeholder text about the relationship between sound, gesture, movement, and space.' },
  { title: 'Collective improvisation', description: 'Placeholder description of group improvisation as a shared performance process.' },
  { title: 'Workshops', description: 'Placeholder information for future classes, laboratories, and introductory sessions.' },
  { title: 'Performances', description: 'Placeholder description for staged works, open rehearsals, and live composition events.' },
  { title: 'Community projects', description: 'Placeholder text for local collaborations, community encounters, and public programs.' },
  { title: 'Training process', description: 'Placeholder overview of practice routines, ensemble training, and skill development.' },
  { title: 'Artistic research', description: 'Placeholder notes about investigation, documentation, and experimentation.' },
  { title: 'Creative laboratories', description: 'Placeholder content for temporary creation labs and interdisciplinary exploration.' },
  { title: 'Educational resources', description: 'Placeholder description for guides, learning materials, and future downloads.' },
  { title: 'Collaborators', description: 'Placeholder area for artists, invited guests, mentors, and partner organizations.' },
  { title: 'Residencies', description: 'Placeholder information for creation residencies and long-form research periods.' },
  { title: 'Public talks', description: 'Placeholder text for conferences, artist talks, and audience conversations.' },
  { title: 'Documentation', description: 'Placeholder area for archives, process notes, photographs, and video references.' },
  { title: 'Upcoming agenda', description: 'Placeholder agenda for dates, events, performances, and workshop announcements.' },
  { title: 'Press kit', description: 'Placeholder content for short bios, technical notes, contact details, and media resources.' },
  { title: 'Support the group', description: 'Placeholder description for partnerships, sponsorships, donations, and shared resources.' },
  { title: 'Future content', description: 'Placeholder slide reserved for the next information area as the website grows.' }
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
    slideElement.setAttribute('aria-roledescription', 'slide');
    slideElement.setAttribute('aria-label', `${index + 1} of ${slides.length}`);
    slideElement.innerHTML = `
      <p class="slide__number">Slide ${index + 1}</p>
      <h3>${slide.title}</h3>
      <p>${slide.description}</p>
    `;
    track.appendChild(slideElement);

    const dot = document.createElement('button');
    dot.className = 'slider__dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
}

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  counter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;

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
