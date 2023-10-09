(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  // owlCarousel
  $(".feedback_slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fal fa-arrow-left"></i>',
      '<i class="fal fa-arrow-right"></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });
 


})(jQuery);
