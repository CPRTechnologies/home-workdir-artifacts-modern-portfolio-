/* ============================================
   Modern Portfolio - Vanilla JS
============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Theme Toggle ----------
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Load saved theme or prefer system
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (!prefersDark) {
    html.setAttribute('data-theme', 'light');
  }

  themeToggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // ---------- Mobile Navigation ----------
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');
  const navClose = document.getElementById('nav-close');
  const navLinks = document.querySelectorAll('.nav__link');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  }

  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  // ---------- Header scroll effect ----------
  const header = document.getElementById('header');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ---------- Active link on scroll ----------
  const sections = document.querySelectorAll('section[id]');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNav);

  // ---------- Typing effect ----------
  const typedText = document.querySelector('.typed-text');
  const phrases = [
    'Frontend Developer',
    'UI Engineer',
    'Creative Coder',
    'Problem Solver'
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800; // pause at end
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  if (typedText) {
    setTimeout(type, 800);
  }

  // ---------- Intersection Observer for animations ----------
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe skill cards and project cards
  document.querySelectorAll('.skill-card, .project-card').forEach(el => {
    observer.observe(el);
  });

  // Stagger skill cards slightly
  document.querySelectorAll('.skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.12}s`;
  });

  // ---------- Contact form ----------
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = toast.querySelector('.toast__message');

  function showToast(message, isSuccess = true) {
    toastMessage.textContent = message;
    toast.classList.toggle('success', isSuccess);
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all fields.', false);
        return;
      }

      // Simulate form submission (replace with real backend / Formspree / etc.)
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';

      setTimeout(() => {
        showToast('Message sent successfully! I\'ll get back to you soon.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
      }, 1200);
    });
  }

  // ---------- Current year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Smooth reveal for section titles (optional polish) ----------
  const sectionTitles = document.querySelectorAll('.section__title, .section__subtitle');
  sectionTitles.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
