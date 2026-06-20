/* THE BEAUTY — Modern JS */

// ======= PRELOADER =======
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('done');
    // Trigger hero reveals after preloader
    setTimeout(() => triggerHeroReveals(), 300);
  }, 1600);
});

function triggerHeroReveals() {
  document.querySelectorAll('.hero .reveal-up').forEach(el => {
    el.classList.add('visible');
  });
}

// ======= CUSTOM CURSOR =======
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor scale on hover
document.querySelectorAll('a, button, .col-card, .contact-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    cursor.style.background = 'rgba(209,81,128,0.5)';
    follower.style.width = '60px';
    follower.style.height = '60px';
    follower.style.borderColor = 'rgba(209,81,128,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    cursor.style.background = '#D15180';
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.borderColor = 'rgba(209,81,128,0.5)';
  });
});

// ======= NAVBAR SCROLL =======
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ======= HAMBURGER MENU =======
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMobileMenu() {
  mobileMenu.style.display = 'flex';
  setTimeout(() => mobileMenu.classList.add('open'), 10);
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  setTimeout(() => { mobileMenu.style.display = 'none'; }, 400);
}

hamburger.addEventListener('click', () => {
  openMobileMenu();
  hamburger.setAttribute('aria-expanded', 'true');
});
mobileClose.addEventListener('click', () => {
  closeMobileMenu();
  hamburger.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// ======= PARTICLES =======
const particlesContainer = document.getElementById('particles');
function createParticles() {
  const count = window.innerWidth < 768 ? 15 : 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width  = (Math.random() * 3 + 1) + 'px';
    p.style.height = p.style.width;
    p.style.animationDuration = (Math.random() * 15 + 10) + 's';
    p.style.animationDelay   = (Math.random() * 10) + 's';
    p.style.opacity = Math.random() * 0.7 + 0.2;
    particlesContainer.appendChild(p);
  }
}
createParticles();

// ======= SCROLL REVEAL =======
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.scroll-reveal, .about-grid, .about-content, .about-visual, .collection-header, .col-card, .contact-card, .contact-title, .partenaires-inner').forEach(el => {
  el.classList.add('scroll-reveal');
  revealObserver.observe(el);
});

// ======= ANIMATED COUNTER =======
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        animateCounter(el, target);
      });
      statObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) statObserver.observe(statsSection);

// ======= TRAILER MODAL =======
const modal = document.getElementById('trailerModal');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

['openTrailer', 'openTrailerBtn', 'openTrailerMob'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', openModal);
});

document.getElementById('closeModal').addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ======= SMOOTH REVEAL: Nav links active on scroll =======
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--white)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ======= PARALLAX HERO =======
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
  }
});

// ======= TILT EFFECT on collection cards =======
document.querySelectorAll('.col-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => card.style.transition = '', 500);
  });
});

// Init circular gallery sur mobile/tablette
if (window.innerWidth <= 1024) {
  initCircularGallery();
}

console.log('%c✦ DON GENIAL', 'color: #D15180; font-size: 2rem; font-weight: bold;');
console.log('%cAtelier de couture — Built with passion - Prince Koucheme', 'color: #8a8590; font-size: 1rem;');
