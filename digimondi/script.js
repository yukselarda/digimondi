function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
  $("body, html").toggleClass("hidden_time")
  $("body, html, header").toggleClass("mobile_menu")
  // document.body.style.overflow = 'hidden';
}

// $("#hamburger-icon").css("overflow", "hidden");


$('.cards').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1425,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1325,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});
$('.blog-cards').slick({
  arrows: true,
  dots: false,
  infinity: true,
  slidesToShow: 1,
  centerPadding: "0",
  slidesToScroll: 1,
  centerMode: true,  
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});


if ($(window).width() > 600) {
  $(".card").on("click", function () {
    $(this).addClass("tam tam-yazi").siblings().removeClass("tam tam-yazi golge")
  });
}