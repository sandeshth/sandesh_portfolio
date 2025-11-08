// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  lastScroll = currentScroll;
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
    } else {
      document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', scrollActive);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .skill-category, .timeline-item, .contact-item, .certification-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Skill bar animation
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.getAttribute('data-width');
      entry.target.style.setProperty('--width', `${width}%`);
      entry.target.classList.add('animate');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let index = 0;
  
  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Uncomment to enable typing effect
  // setTimeout(typeWriter, 500);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Form validation (if contact form is added later)
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Console message
console.log('%c👋 Hello! Interested in my work?', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to reach out!', 'color: #b8b8b8; font-size: 14px;');
