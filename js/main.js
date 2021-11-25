$(document).ready(function(){
    $('.features_slider_wrap_block').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });
    $('.testimonials_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="testimonials_slider_arrow testimonials_slider_arrow_left">&#8592;</div>',
        nextArrow: '<div class="testimonials_slider_arrow testimonials_slider_arrow_right">&#8594;</div>'
    });
    jQuery("a.header_menu_contacts_left_link").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top - 20;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
    $('.popup_btn').on('click', function (events) {
      event.preventDefault();
      $('.popup').fadeIn();
    });
    $('.popup_close').on('click', function (events) {
      event.preventDefault();
      $('.popup').fadeOut();
    });
    $('.popup').on('click', function (events) {
      event.preventDefault();
      $('.popup').fadeOut();
    });
  });