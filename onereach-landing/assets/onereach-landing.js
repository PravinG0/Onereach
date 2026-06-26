/* OneReach Landing Page — JavaScript */
(function () {
  'use strict';

  /* ── Elementor Popup helper ─────────────────────────────────────────
     Called by inline onclick on every CTA button.
     Waits for elementorProFrontend to be ready before opening.
  ─────────────────────────────────────────────────────────────────── */
  window.orOpenPopup = function (popupId, event) {
    if (event) { event.preventDefault(); }

    function doOpen() {
      elementorProFrontend.modules.popup.showPopup({ id: popupId });
    }

    if (typeof elementorProFrontend !== 'undefined' &&
        elementorProFrontend.modules &&
        elementorProFrontend.modules.popup) {
      doOpen();
    } else {
      // Elementor hasn't finished init yet — wait for it
      window.addEventListener('elementor/frontend/init', doOpen, { once: true });
      // Fallback: also try jQuery trigger used by older Elementor versions
      if (typeof jQuery !== 'undefined') {
        jQuery(document).trigger('elementor/popup/show', [popupId]);
      }
    }
    return false;
  };

  var wrap = document.querySelector('.or-wrap');
  if (!wrap) return;

  /* ── Fade-up on scroll ── */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
      }
    });
  }, { threshold: 0.12 });

  wrap.querySelectorAll('.fu').forEach(function (el) {
    observer.observe(el);
  });

  /* ── Smooth scroll for anchor links ── */
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

  /* ── Billing toggle ── */
  var monthlyBtn = wrap.querySelector('.bt-monthly');
  var annualBtn  = wrap.querySelector('.bt-annual');
  var priceEls   = wrap.querySelectorAll('[data-monthly][data-annual]');
  var noteEls    = wrap.querySelectorAll('[data-note-monthly][data-note-annual]');
  var billing    = 'monthly';

  function setBilling(mode) {
    billing = mode;
    if (monthlyBtn) monthlyBtn.classList.toggle('on', mode === 'monthly');
    if (annualBtn)  annualBtn.classList.toggle('on', mode === 'annual');
    priceEls.forEach(function (el) {
      el.textContent = mode === 'annual' ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
    });
    noteEls.forEach(function (el) {
      el.textContent = mode === 'annual' ? el.getAttribute('data-note-annual') : el.getAttribute('data-note-monthly');
    });
    updateSeats();
  }

  if (monthlyBtn) monthlyBtn.addEventListener('click', function () { setBilling('monthly'); });
  if (annualBtn)  annualBtn.addEventListener('click', function () { setBilling('annual'); });

  /* ── Seat picker ── */
  var seats = 1;
  var seatVal   = wrap.querySelector('.sr-val');
  var seatMinus = wrap.querySelector('.sr-minus');
  var seatPlus  = wrap.querySelector('.sr-plus');
  var seatTotal = wrap.querySelector('[data-seat-total]');
  var seatCredits = wrap.querySelector('[data-seat-credits]');
  var seatNote  = wrap.querySelector('[data-seat-note]');

  function updateSeats() {
    if (seatVal) seatVal.textContent = seats;
    var price = billing === 'annual' ? 80 : 100;
    if (seatTotal) seatTotal.textContent = '$' + (price * seats) + '/month \u00b7 ' + seats + ' user' + (seats > 1 ? 's' : '') + ' \u00b7 billed ' + (billing === 'annual' ? 'annually' : 'monthly');
    if (seatCredits) seatCredits.textContent = (2500 * seats).toLocaleString();
    if (seatNote) seatNote.textContent = seats > 1 ? seats + ' users' : '3\u201325 users';
  }

  if (seatMinus) seatMinus.addEventListener('click', function () { if (seats > 1) { seats--; updateSeats(); } });
  if (seatPlus)  seatPlus.addEventListener('click', function () { if (seats < 25) { seats++; updateSeats(); } });

  /* ── FAQ accordion ── */
  wrap.querySelectorAll('.faq-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var isOpen = card.classList.contains('open');
      wrap.querySelectorAll('.faq-card.open').forEach(function (c) { c.classList.remove('open'); });
      if (!isOpen) card.classList.add('open');
    });
  });

})();
