/* global $ */
$(function () {


  // Calculate Slider Height

  var winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();

  $('.slider, .carousel-item').height(winH - (upperH + navH));

  $(window).resize(function () {
    var winH = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH - (upperH + navH));

  })

  // Triiger MixitUp
  $('.shuffle-imgs').mixItUp();

  // Scroll To Section
  $('.navbar li a').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 1500)

  })

  $(window).on('load', function () {
    $('.loading-overlay .spinner').delay(600).fadeOut(600, function () {
      $('body').css('overflow', 'auto')
      $(this).parent().fadeOut(600, function () {
        $(this).remove();
        $('body').css('overflow', 'auto')
      })
    })
  });


});