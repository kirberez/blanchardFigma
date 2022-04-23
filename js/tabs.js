// TABS
const tabsBtn = document.querySelectorAll('.catalog-content-inner-item__btn')

tabsBtn.forEach(function(elem) {
  elem.addEventListener('click', function(clickedBtn) {
    const path = clickedBtn.currentTarget.dataset.path;
    console.log(path)
    // Сначала убираем класс эктив у всех
    tabsBtn.forEach(function(activeBtn) {
      activeBtn.classList.remove('catalog-content-inner-item__btn--active');
      console.log(activeBtn.classList, 'done')
    });
    // Потом добавляем класс эктив нажатому
    clickedBtn.currentTarget.classList.add('catalog-content-inner-item__btn--active');
    // Убираем класс эктив всем карточкам
    document.querySelector('.catalog__card-pattern').classList.remove('catalog__card-pattern--active');
    document.querySelectorAll('.catalog__card').forEach(function(tabsCard) {
      tabsCard.classList.remove('catalog__card--active');
    });
    console.log(document.querySelectorAll(`[data-target="${path}"`).length)
    if (document.querySelectorAll(`[data-target="${path}"`).length === 0) {
      document.querySelector('.catalog__card-pattern').classList.add('catalog__card-pattern--active');
    } else document.querySelector(`[data-target="${path}"`).classList.add('catalog__card--active');
  });
});

