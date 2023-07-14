"use strict";

window.addEventListener('DOMContentLoaded', () => {
  const activityFotoramaTexts = document.querySelectorAll('.activity__fotorama_text p.text');

  const readMoreBtnOptions = {
    moreLink: 'Читать полностью',
    lessLink: 'Свернуть',
  }

  function createBtnReadMore() {
    const createBtn = document.createElement('a');
    createBtn.classList.add('readmore-btn');
    createBtn.setAttribute('href', '#')
    createBtn.textContent = readMoreBtnOptions.moreLink;
    return createBtn;
  }

  /** Ограничить блок по высоте */
  function limitHeightBlock(selector) {
    if (selector.length > 1) {
      for (let element of selector) {
        if (element.scrollHeight > 200) {
          element.style.maxHeight = '200px';
        }
      }
    } else {
      if (element.scrollHeight > 200) {
        element.style.maxHeight = '200px';
      }
    }
  }

  /** Добавить кнопку для каждого указанного селектора, для которого нужна кнопка */
  function addReadMoreBtnInBlockContentHide(selector) {
    if (selector.length > 1) {
      for (let element of selector ) {
        element.after(createBtnReadMore())
      }
    } else {
      selector.after(createBtnReadMore())
    }
  }

  /** Действия при нажатии кнопки ReadMore */
  function btnReadMoreActions() {
    document.addEventListener('click', (e) => {
      const target = e.target;

      if (target && target.classList.contains('readmore-btn')) {
        e.preventDefault();

        console.log(target);

        const blockText = target.previousElementSibling;

        if (target.classList.contains('less-link') && blockText.style.maxHeight) {
          target.classList.remove('less-link')
          target.textContent = readMoreBtnOptions.moreLink
          blockText.classList.remove('active')
          blockText.style.maxHeight = null;

        } else {
          target.classList.add('less-link')
          target.textContent = readMoreBtnOptions.lessLink
          blockText.classList.add('active')
          blockText.style.maxHeight = `${blockText.scrollHeight}px`
        }
      }
    });
  }

  addReadMoreBtnInBlockContentHide(activityFotoramaTexts)
  btnReadMoreActions()
})
