$(function () {

  var tarifsPolitical = $('.fotorama__tariffs-political');

  tarifsPolitical.fotorama({
    width: '100%',
    maxwidth: '100%',
    ratio: 4 / 3,
    fit: 'cover',
    allowfullscreen: false,
    nav: 'thumbs',
    navwidth: '100%',
    autoplay: true,
    stopautoplayontouch: true,
    loop: true,
    transition: 'crossfade',
    arrows: true
  });

  if(window.innerWidth < 768) {
    $('.tariffs-political__tab-content, .tariffs-political__wrapper').remove();
  }
  if (window.innerWidth < 480) {
    tarifsPolitical.fotorama({
      width: '100%',
      maxwidth: '100%',
      ratio: 4 / 3,
      captions: false,
      fit: 'cover',
      allowfullscreen: false,
      nav: false,
      navwidth: '100%',
      autoplay: true,
      stopautoplayontouch: true,
      loop: true,
      transition: 'slider',
      arrows: false,
      glimpse: 30,
      margin: 15
    });
  }


});

var thumbElemParent = $('.fotorama__tariffs-political');
var handleMatchMedia = function (mediaQuery) {
      if (mediaQuery.matches) {
        thumbElemParent.attr("data-thumbwidth", "90");
        thumbElemParent.attr("data-thumbheight", "90");
        thumbElemParent.attr("data-thumbmargin", "26");
      } else {
        thumbElemParent.attr("data-thumbwidth", "101");
        thumbElemParent.attr("data-thumbheight", "101");
        thumbElemParent.attr("data-thumbmargin", "30");
      }
    },
    mql = window.matchMedia('all and (max-width: 1023.98px)');

handleMatchMedia(mql);
mql.addListener(handleMatchMedia); // запускается каждый раз, когда заданное разрешение медиа запроса достигнуто

