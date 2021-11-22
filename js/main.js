$(document).ready(function(){
    $('.features_slider_wrap_block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
  });

  $(document).ready(function(){
    $('.testimonials_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="testimonials_slider_arrow testimonials_slider_arrow_left">&#8592;</div>',
        nextArrow: '<div class="testimonials_slider_arrow testimonials_slider_arrow_right">&#8594;</div>'
    });
  });