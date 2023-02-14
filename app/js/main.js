$(function(){

  $('.product__filter-btn').on('click', function () {
    $('.product__filter-btn').removeClass('product__filter-btn--active');
    $(this).addClass('product__filter-btn--active');
  });

  $('.product__filter-btn--list').on('click', function () {
    $('.product__item').addClass('product__item--list');
  });
  
  $('.product__filter-btn--grid').on('click', function () {
    $('.product__item').removeClass('product__item--list');
  });
   
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    step: 0.1,
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },


  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".star").rateYo({
    starWidth: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".product__star").rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "12px",
  });



  

  var containerEl1 = document.querySelector('[data-ref="goods"]');
  var containerEl2 = document.querySelector('[data-ref="new-design"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
});