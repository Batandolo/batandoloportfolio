/* ==========================================================================
   Portfolio behaviour
   - theme switch (saved in localStorage)
   - mobile navigation
   - active navigation link
   - scroll reveal + header state
   - contact form that opens the visitor's email app
   ========================================================================== */

(function () {
  'use strict';

  // Update this if the contact address changes (also update contact.html).
  var CONTACT_EMAIL = 'batandoloj@gmail.com';

  document.documentElement.classList.add('js');

  /* ---------------------------------------------------------------- theme */
  var themeButton = document.querySelector('.theme-toggle');
  var root = document.documentElement;

  function setTheme(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch (e) {}
    if (themeButton) {
      themeButton.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    }
  }

  if (themeButton) {
    // Sync the accessible label with the theme applied by the inline head script.
    themeButton.setAttribute(
      'aria-label',
      root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );

    themeButton.addEventListener('click', function () {
      setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  /* ------------------------------------------------------ mobile menu */
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  }

  function openNav() {
    document.body.classList.add('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Close menu');
    }
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      if (document.body.classList.contains('nav-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeNav();
        navToggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* --------------------------------------------------- active nav link */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === current) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ------------------------------------------------- header + reveal */
  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var revealItems = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    revealItems.forEach(function (item, index) {
      item.style.transitionDelay = Math.min(index % 3, 3) * 60 + 'ms';
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------- footer year */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ------------------------------------------------------ contact form */
  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('form-status');

  function fieldError(field, message) {
    field.setAttribute('aria-invalid', 'true');
    if (status) status.textContent = message;
    field.focus();
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.elements.name;
    var email = form.elements.email;
    var subject = form.elements.subject;
    var message = form.elements.message;

    [name, email, message].forEach(function (field) {
      field.removeAttribute('aria-invalid');
    });

    if (!name.value.trim()) {
      fieldError(name, 'Please add your name before sending.');
      return;
    }
    if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
      fieldError(email, 'Please add a valid email address so I can reply.');
      return;
    }
    if (!message.value.trim()) {
      fieldError(message, 'Please write a short message before sending.');
      return;
    }

    var subjectLine = '[Portfolio] ' + (subject.value || 'Message') + ' from ' + name.value.trim();
    var body =
      'Name: ' + name.value.trim() + '\n' +
      'Email: ' + email.value.trim() + '\n\n' +
      message.value.trim();

    var href =
      'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subjectLine) +
      '&body=' + encodeURIComponent(body);

    if (status) {
      status.textContent = 'Opening your email app… If nothing happens, email me directly at ' + CONTACT_EMAIL + '.';
    }

    window.location.href = href;
  });
})();
