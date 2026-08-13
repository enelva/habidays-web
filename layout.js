/* Injects the shared navbar and footer into every page.
   Mark the current page with e.g. <body data-page="support">. */
(function () {
  var page = document.body.getAttribute('data-page') || '';
  var on = function (name) { return page === name ? ' class="active"' : ''; };
  var year = new Date().getFullYear();

  var nav =
    '<div class="nav-outer"><nav class="nav">' +
      '<a class="nav-logo" href="/"><img src="/logotype.png" alt="Habidays"></a>' +
      '<div class="nav-links">' +
        '<a href="/"' + on('home') + '>Home</a>' +
        '<a href="/support"' + on('support') + '>Support</a>' +
      '</div>' +
    '</nav></div>';

var social = [
    ['Instagram', 'https://www.instagram.com/habidaysapp/', 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.9a4.3 4.3 0 110-8.6 4.3 4.3 0 010 8.6zm8.4-11.2a1.5 1.5 0 11-3.1 0 1.5 1.5 0 013.1 0z'],
    ['LinkedIn', 'https://www.linkedin.com/company/habidays-app/home/', 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9z'],
    ['Facebook', 'https://www.facebook.com/profile.php?id=61593290814130', 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.02 1.46-4.02 4.13V9.9H7.5V13h2.77v8h3.23z'],
    ['X', 'https://x.com/habidays', 'M17.53 3h3.06l-6.69 7.64L21.75 21h-5.98l-4.7-6.13L5.69 21H2.63l7.15-8.17L2.25 3h6.13l4.25 5.62L17.53 3zm-1.07 16.2h1.7L7.62 4.71H5.8l10.66 14.49z'],
  ];

  var icons = social.map(function (s) {
    return '<a href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">' +
      '<path d="' + s[2] + '"/></svg></a>';
  }).join('');

  var footer =
    '<footer>' +
      '<div class="foot-inner"><div class="foot-links">' +
        '<div class="foot-col">' +
          '<a href="/">Home</a>' +
          '<a href="/support">Support</a>' +
        '</div>' +
        '<div class="foot-social">' + icons + '</div>' +
      '</div></div>' +
      '<div class="foot-mark"><img src="/logotype-light.svg" alt=""></div>' +
      '<div class="foot-legal">' +
        '<span>© ' + year + ' Habidays</span>' +
        '<a href="/privacy">Privacy policy</a>' +
        '<a href="/terms">Terms of service</a>' +
      '</div>' +
    '</footer>';

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
