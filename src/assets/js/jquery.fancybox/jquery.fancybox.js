$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    animationEffect: "fade",
    transitionEffect: "circular", //
    keyboard: true, // flipping through the keyboard
    idleTime: false, // disappearance time toolbar
    infobar: false, // image 1 / 80
    lang: "ru",

    i18n: {
      ru: {
        CLOSE: "Закрыть слайдер",
        NEXT: "Следующий слайд",
        PREV: "Предыдущий слайд",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Запустить слайд-шоу",
        PLAY_STOP: "Остановить слайд-шоу",
        FULL_SCREEN: "Открыть на полный экран",
        THUMBS: "Открыть эскизы",
        DOWNLOAD: "Скачать",
        SHARE: "Поделиться",
        ZOOM: "Увеличить"
      }
    },
    btnTpl: {
      // Arrows
      arrowLeft:
        '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
        '<div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M20.3619 15.399C20.7262 15.0219 21.3326 15.0219 21.7097 15.399C22.074 15.7634 22.074 16.3698 21.7097 16.7333L14.8754 23.5675H37.4275C37.9532 23.5684 38.3711 23.9862 38.3711 24.5119C38.3711 25.0376 37.9532 25.4691 37.4275 25.4691H14.8754L21.7097 32.2906C22.074 32.6677 22.074 33.2749 21.7097 33.6384C21.3326 34.0155 20.7254 34.0155 20.3619 33.6384L11.9097 25.1863C11.5326 24.8219 11.5326 24.2155 11.9097 23.852L20.3619 15.399Z" fill="#C5A47E"/>' +
        '<circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke="#C5A47E"/>' +
        '</svg></div>' +
        "</button>",

      arrowRight:
        '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
        '<div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M29.6383 15.399C29.2739 15.0219 28.6675 15.0219 28.2904 15.399C27.9261 15.7634 27.9261 16.3698 28.2904 16.7333L35.1247 23.5675H12.5726C12.0469 23.5684 11.629 23.9862 11.629 24.5119C11.629 25.0376 12.0469 25.4691 12.5726 25.4691H35.1247L28.2904 32.2906C27.9261 32.6677 27.9261 33.2749 28.2904 33.6384C28.6675 34.0155 29.2748 34.0155 29.6383 33.6384L38.0904 25.1863C38.4675 24.8219 38.4675 24.2155 38.0904 23.852L29.6383 15.399Z" fill="#C5A47E"/>' +
        '<circle cx="25" cy="25" r="24.5" stroke="#C5A47E"/>' +
        '</svg></div>' +
        "</button>",
      close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
        '<div><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M25 0C11.2154 0 0 11.2144 0 25C0 38.7856 11.2154 50 25 50C38.7846 50 50 38.7856 50 25C50 11.2144 38.7846 0 25 0ZM25 48.0769C12.276 48.0769 1.92308 37.724 1.92308 25C1.92308 12.276 12.276 1.92308 25 1.92308C37.724 1.92308 48.0769 12.276 48.0769 25C48.0769 37.724 37.724 48.0769 25 48.0769Z" fill="#C5A47E"/>' +
        '<path d="M34.3336 15.6662C33.9576 15.2903 33.3499 15.2903 32.9739 15.6662L24.9999 23.6403L17.0259 15.6662C16.6499 15.2903 16.0422 15.2903 15.6662 15.6662C15.2903 16.0422 15.2903 16.6499 15.6662 17.0259L23.6403 24.9999L15.6662 32.9739C15.2903 33.3499 15.2903 33.9576 15.6662 34.3336C15.8537 34.5211 16.0999 34.6153 16.3461 34.6153C16.5922 34.6153 16.8384 34.5211 17.0259 34.3336L24.9999 26.3595L32.9739 34.3336C33.1614 34.5211 33.4076 34.6153 33.6537 34.6153C33.8999 34.6153 34.1461 34.5211 34.3336 34.3336C34.7095 33.9576 34.7095 33.3499 34.3336 32.9739L26.3595 24.9999L34.3336 17.0259C34.7095 16.6499 34.7095 16.0422 34.3336 15.6662Z" fill="#C5A47E"/>' +
        '</svg></div>' +
        "</button>"
    }
  });
});
