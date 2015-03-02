jQuery(document).ready(function($){
  $('.mobile-nav-trigger').on('click', function(event){
    event.preventDefault();
    $(".navigation-wrap").toggleClass('navigation-open');
  });
  $('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top }, 1000);
    }
  });
});