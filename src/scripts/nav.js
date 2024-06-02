document.addEventListener(
  'click',
  function (e) {
    // NAV
    if (document.getElementById('nav-open').checked) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }
    // SUB NAV
    if (e.target.matches('.has-sub > .i-down')) {
      e.target.parentNode.classList.toggle('active');
    }
  },
  false
);
