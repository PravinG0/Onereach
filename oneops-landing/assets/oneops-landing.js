/* OneOps Landing Page — JavaScript */
(function () {
  'use strict';

  // Smooth scroll for anchor links inside the shortcode wrapper
  var wrap = document.querySelector('.oneops-wrap');
  if (wrap) {
    wrap.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
})();
