$( document ).ready(function() {
  $(".navbar-menu").click(function () {
    $(".navbar").toggleClass("change-left");
    $(".navbar").removeClass("change-right");
  });
  $(".navbar-top").click(function () {
    $(".navbar").toggleClass("change-right");
    $(".navbar").removeClass("change-left");
  });
  $('.slider').slick({
    dots: true,
    arrows: true,
    nextArrow: '<i class="next"></i>',
    prevArrow: '<i class="prev"></i>'
  });
});
