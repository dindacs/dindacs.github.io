// navbar scroll
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 20) {
    $(".navbar").addClass("active");
  } else {
    $(".navbar").removeClass("active");
  }
});

// smooth scroll
$(document).ready(function () {
  $(".navbar ul a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 60 }, 800)
  });

  $(".footer-copy a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 60 }, 800)
  });
});

// slick carrosel
$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2500
});