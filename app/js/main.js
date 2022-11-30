$(function(){
   
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var containerEl1 = document.querySelector('[data-ref="week-products"]');
  var containerEl2 = document.querySelector('[data-ref="new-design"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});