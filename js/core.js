jQuery(document).ready(function($){
  $('.mobile-nav-trigger').on('click', function(event){
    event.preventDefault();
    $(".navigation-wrap").toggleClass('navigation-open');
  });
});
