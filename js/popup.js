// POPUP
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 300;

// Проверка, есть ли попапы
if (popupLinks.length > 0) { 
  for (let index = 0; index < popupLinks.length; index++) {
    // Переменная - попап
    const popupLink = popupLinks[index];
    // При нажатии на попап - ф-ция popupOpen
    popupLink.addEventListener('click', function (elem) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      // Запрещаем перезапуск страницы
      elem.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll('.popup-close');
// Проверка, есть ли ссылки закрытия попапов
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index ++) {
    // переменная - ссылка закрытия
    const closeLink = popupCloseIcon[index];
    closeLink.addEventListener('click', function (elem) {
      popupClose(closeLink.closest('.gallery__popup'));
      elem.preventDefault();
    });
  }
}

// Попап, который мы откроем
function popupOpen(currentPopup) {
  if (currentPopup && unlock) {
    // Переменная - открытый попап
    const popupActive = document.querySelector('.gallery__popup.open');
    // Если есть открытый попап, то закрываем его
    if (popupActive) {
      popupClose(popupActive, false);
      // Иначе просто блокируем body
    } else {
      bodyLock();
    }
    currentPopup.classList.add('open');
    // При клике на тёмную область попап закроется
    currentPopup.addEventListener('click', function(elem) {
      // Если у нажатого объекта нет в родителях .gallery-popup__card
      if (!elem.target.closest('.gallery-popup__card')) {
        // То попап закроется
        popupClose(elem.target.closest('.gallery__popup'));
      }
    });
  }
}

// Попап, который мы закроем
function popupClose(popupActive) {
  if (unlock) {
    popupActive.classList.remove('open');
    bodyUnlock();
  }
}

function bodyLock() {
  document.body.classList.add('lock');

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
}

function bodyUnlock() {
  setTimeout(function() {
    document.body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function() {
    unlock = true;
  }, timeout);
};

// При нажатии Esc попап закроется
document.addEventListener('keydown', function(keyBtn) {
  if (keyBtn.which === 27) {
    const popupActive = document.querySelector('.gallery__popup.open');
    popupClose(popupActive);
  }
});






