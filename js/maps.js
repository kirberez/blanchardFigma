// Yandex-map
ymaps.ready(init);
function init() {
  // Создание карт
  var myMap = new ymaps.Map("map", {
    center: [55.75876009281495,37.6136515367438],
    zoom: 14,
    controls: ['zoomControl'],
    scroll: false,
  });

  // Создание геообъекта.
  const myMark = new ymaps.Placemark([55.758,37.613], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [20, 8]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myMark);
  // Отключение зума колесом мыши
  myMap.behaviors.disable('scrollZoom');
}
console.log('mapper')