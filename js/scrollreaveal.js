$(document).ready(function(){


  window.sr = ScrollReveal();
  sr.reveal('h1', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('.icons', {
    duration: 3000,
    origin: 'bottom'
  });

  sr.reveal('#email-link1', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('#cv-link', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('#tel-link', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('p', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('h2', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('h3', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('.back-to-top', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('.email-link2', {
    duration: 1000,
    origin: 'bottom'
  });

  sr.reveal('.tel-link2', {
    duration: 1000,
    origin: 'bottom'
  });


$('.icons' ).hover(makeBigger, returnToOriginalSize);

    function makeBigger() {
      $(this).css({height: '+=3%', width: '+=3%'});
    }
    function returnToOriginalSize() {
      $(this).css({height: "", width: ""});
    }

});
