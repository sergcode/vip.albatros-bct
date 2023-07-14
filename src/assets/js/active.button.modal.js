$(function () {
  $('.button').on('click', function () {
    $('.header').addClass('width')
  })
  $('.modal, .close').on('click', function () {
    setTimeout(function () {
      $('.header').removeClass('width');
      $('body').removeClass('modal-open').removeAttr('style');
    }, 0)

  })
})

