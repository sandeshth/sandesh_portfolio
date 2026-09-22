// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  const isActive = navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isActive.toString());
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
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

// Parallax effect for hero background (transforms the absolutely-positioned
// overlay only, so it doesn't drag the hero's layout box — and the content
// after it — out of place while scrolling)
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroOverlay = document.querySelector('.hero-overlay');
  if (heroOverlay) {
    heroOverlay.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Google Analytics Consent Mode: grants analytics_storage and fires an
// explicit page_view once the visitor has consented (default is 'denied',
// set in index.html before gtag config loads).
function grantAnalyticsConsent() {
  if (typeof gtag === 'undefined') return;
  gtag('consent', 'update', {
    'analytics_storage': 'granted'
  });
  gtag('event', 'page_view', {
    'page_title': document.title,
    'page_location': window.location.href
  });
}

// Cookie Banner Functionality
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesBtn = document.getElementById('accept-cookies');
const declineCookiesBtn = document.getElementById('decline-cookies');

function showCookieBanner() {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (cookiesAccepted === null && cookieBanner) {
    cookieBanner.style.display = 'flex';
    setTimeout(() => {
      cookieBanner.classList.add('show');
    }, 100);
  }
}

function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove('show');
    setTimeout(() => {
      cookieBanner.style.display = 'none';
    }, 300);
  }
}

if (acceptCookiesBtn) {
  acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    hideCookieBanner();
    grantAnalyticsConsent();
  });
}

if (declineCookiesBtn) {
  declineCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'false');
    hideCookieBanner();
    // Analytics storage already defaults to 'denied' — nothing to disable.
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  showCookieBanner();

  // Returning visitor who already consented in a previous session: grant
  // consent again for this page load (Consent Mode doesn't persist granted
  // state across page loads on its own).
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    grantAnalyticsConsent();
  }
});

// Console message
console.log('%c👋 Hello! Interested in my work?', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to reach out!', 'color: #b8b8b8; font-size: 14px;');
console.log('%c📊 Analytics: This site uses Google Analytics to track visitor traffic.', 'color: #b8b8b8; font-size: 12px;');
