$(function () {
  $('.class-auto__carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 0,
    center: false,
    autoWidth: false,
    mouseDrag: true,
    autoplay: false,
    autoplayHoverPause: true,
    smartSpeed: 600,
    touchDrag: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 10,
        dots: true,
      },
      300: {
        items: 1,
        stagePadding: 40
      },
      321: {
        items: 1,
        stagePadding: 50
      },
      361: {
        items: 1,
        stagePadding: 70
      },
      401: {
        items: 1,
        stagePadding: 80
      },
      440: {
        items: 1,
        stagePadding: 100
      },
      500: {
        items: 1,
        stagePadding: 110
      },
      521: {
        items: 1,
        stagePadding: 130
      },
      601: {
        items: 1,
        stagePadding: 150
      },
      641: {
        items: 1,
        stagePadding: 160
      },
      681: {
        items: 1,
        stagePadding: 170
      },
      721: {
        items: 1,
        stagePadding: 180
      }
    }
  })
});

