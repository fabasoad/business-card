'use strict';

$('a.page-scroll').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - 40
      }, 900);
      return false;
    }
  }
});

$(document).ready(function () {

  $("#testimonial").owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });
});

$('#nav').affix({
  offset: {
    top: $('header').height()
  }
});