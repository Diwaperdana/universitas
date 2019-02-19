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

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  (function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
        videoSRC = $(this).attr("data-theVideo"),
        videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
      $('#videoModal').on('hidden.bs.modal', function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      })
    });
  })();

  $(function () {
    $('.first-button').on('click', function () {
      $('.first-content').animate({
        width: "toggle"
      }, 800);
      $('.second-content').delay(800).animate({
        width: "toggle"
      });
    });

    $('.second-content').on('click', function () {
      $('.second-content').animate({
        width: "toggle"
      });
      $('.first-content').delay(800).animate({
        width: "toggle"
      }, 800);
    });

  });
  
});
