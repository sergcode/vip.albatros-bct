$(function () {
  if(window.innerWidth < 480) {
    $('.activity__owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      margin: 15,
      center: false,
      stagePadding: 60,
      autoWidth: false,
      mouseDrag: true,
      autoplay: false,
      autoplayHoverPause: false,
      smartSpeed: 600,
      touchDrag: true,
      responsive: {
        0: {
          items: 1,
          stagePadding: 60
        }
      }
    })
  }

});

