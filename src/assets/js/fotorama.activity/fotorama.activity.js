$(function () {
  var $activityFotorama = $('.activity__fotorama');

  if(window.innerWidth > 768) {
    $activityFotorama.fotorama({
      width: '100%',
      maxwidth: '100%',
      height: 600,
      fit: 'cover',
      allowfullscreen: false,
      nav: 'thumbs',
      navwidth: 560,
      autoplay: false,
      stopautoplayontouch: true,
      loop: true,
      thumbwidth: 158,
      thumbheight: 232,
      thumbmargin: 30,
      transition: 'crossfade',
      arrows: true,
      click: false,
      swipe: false
    });

  } else if (window.innerWidth > 576) {
    $activityFotorama.fotorama({
      width: '100%',
      maxwidth: '100%',
      height: 1060,
      fit: 'cover',
      allowfullscreen: false,
      nav: 'thumbs',
      navwidth: '100%',
      autoplay: false,
      stopautoplayontouch: true,
      loop: true,
      thumbwidth: 125,
      thumbheight: 85,
      thumbmargin: 15,
      transition: 'crossfade',
      arrows: false,
      click: false,
      swipe: false
    });
  } else if (window.innerWidth > 480) {
    $activityFotorama.fotorama({
      width: '100%',
      maxwidth: '100%',
      height: 1060,
      fit: 'cover',
      allowfullscreen: false,
      nav: 'thumbs',
      navwidth: '100%',
      autoplay: false,
      stopautoplayontouch: true,
      loop: true,
      thumbwidth: 134,
      thumbheight: 91,
      thumbmargin: 15,
      transition: 'crossfade',
      arrows: false,
      click: false,
      swipe: false
    });
  } else {
    $activityFotorama.remove();
  }

});

