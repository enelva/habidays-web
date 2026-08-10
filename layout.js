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

  var footer =
    '<footer>' +
      '<div class="foot-inner"><div class="foot-links">' +
        '<div class="foot-col">' +
          '<a href="/">Home</a>' +
          '<a href="/support">Support</a>' +
        '</div>' +
        '<div class="foot-col">' +
          '<a href="/privacy">Privacy policy</a>' +
          '<a href="/terms">Terms of service</a>' +
        '</div>' +
      '</div></div>' +
      '<div class="foot-legal">© ' + year + ' Habidays</div>' +
      '<div class="foot-mark"><img src="/logotype-light.svg" alt=""></div>' +
    '</footer>';

  document.body.insertAdjacentHTML('afterbegin', nav);
  document.body.insertAdjacentHTML('beforeend', footer);
})();
