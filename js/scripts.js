// burger
document.querySelector('.header__burger-open').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.toggle('active');
  document.body.classList.toggle('lock');
});

document.querySelector('.header-nav__burger-close').addEventListener('click', function () {
  document.querySelector('.header__nav').classList.toggle('active');
  document.body.classList.toggle('lock');
});

// Search
document.querySelector('.header__search-open').addEventListener('click', function () {
  document.querySelector('.header__search-wrapper').classList.toggle('active');
});

document.querySelector('.header__search-close').addEventListener('click', function () {
  document.querySelector('.header__search-wrapper').classList.toggle('active');
});

// Simplebar
document.querySelectorAll(".simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

const btn = document.querySelectorAll('.header-down__btn');
const dropdown = document.querySelectorAll('.header-down__container-dropdown');

btn.forEach(item => {
  item.addEventListener('click', function() {
    let dropThis = this.parentElement.querySelector('.header-down__container-dropdown');
    dropdown.forEach(elem => {
      if (elem != dropThis) {
        elem.classList.remove('active')
      }
    });

    btn.forEach(elem => {
      if (elem != this) {
        elem.classList.remove('active')
      }
    });
    dropThis.classList.toggle('active')
    this.classList.toggle('active')
  })
})

document.addEventListener('click', function(elem) {
  const target = elem.target;

  if(!(target.closest('.header-down__item'))) {
    document.querySelectorAll('.header-down__container-dropdown').forEach(elem => {
      elem.classList.remove('active');
    });
    document.querySelectorAll('.header-down__btn').forEach(elem => {
      elem.classList.remove('active');
    });
  }
})

// CHOICE
const element = document.querySelector('.gallery__selector');
const choices = new Choices(element, {
  searchEnabled: false,
  duplicateItemsAllowed: false,
  classNames: {
    containerInner: 'gallery-selector__inner',
    listDropdown: 'gallery__list-dropdown',
  },
});


// ACCORDION
$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
  });
});

// CHANGE CONTENT
const contactsBtn = document.querySelector('.contacts-form__btn');
const projectsLink = document.querySelector('.projects-descr__link');
const changeContent = function(element, content) {
  element.innerHTML=content;
};

if (window.innerWidth >= 768) {
  changeContent(contactsBtn, 'Заказать обратный звонок');
};
if (window.innerWidth >= 1024) {
  changeContent(projectsLink, 'blanchard-art.ru/projects');
};
