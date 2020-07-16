$(document).ready(function(){
  $('.fade').slick({
    slidesToShow: 1,

    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.carousel').slick({
    slidesToShow: 3,
    dots:true,
    centerMode: true,
  });
  
  $('.slider1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    fade: true,
    speed: 500
  });
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true,
    cssEase: 'linear'
  });
  $('.slider1-fade').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    fade: true,

    speed: 500
  });
  
  $('.slider-center').slick({
    centerMode: true,
    // centerPadding: '60px',
    variableWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    cssEase: 'linear',
    speed: 500
  });
  // $('[data-toggle="popover"]').popover() 
  
  // $('[data-toggle="tooltip"]').tooltip(); 
});