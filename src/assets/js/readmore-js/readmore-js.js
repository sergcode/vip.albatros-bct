$(function () {
  var activeFrameParentText = $('.activity__fotorama_text p.text');

  activeFrameParentText.readmore({
    speed: 500,
    lessLink: '<a href="#">Свернуть</a>',
    moreLink: '<a href="#">Читать полностью</a>',
    beforeToggle: function (evt) {
      console.log(evt);
      $(evt).prev().toggleClass('active')
    },
  });
});

