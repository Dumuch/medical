$(document).ready(function() {
  let indexArrCoords = 0;
  const arrCoords = [];
  let myGeoObject;
  let myMap;

  let offsetX = 0;
  let offsetY = 0;
  const WIDTH_MOBILE = 765;
  const sectionMapInfoList = $('._section-map__info__list li');

  if ($(document).width() > WIDTH_MOBILE) {
    offsetX = 0.0007;
    offsetY = 0.0002;
  }

  $('._section-map__list input').each(function(index, el) {
    const str = el.value;
    const arr = str.split(',');
    arrCoords.push({
      y: arr[0],
      x: arr[1]
    })
  });


  $('._section-map__list input').click(function() {
    const coords = this.value.split(',');
    myMap.setCenter([coords[0], coords[1]]);

    $('._section-map__list label').removeClass('active')
    $(this).parent().toggleClass('active');

    sectionMapInfoList.removeClass('active')
    $(sectionMapInfoList[$(this).attr('data-loopId')]).addClass('active')
  })

  function init() {
    myMap = new ymaps.Map("map", {
      center: [arrCoords[indexArrCoords].y - offsetY, arrCoords[indexArrCoords].x - offsetX],
      zoom: 17,
      controls: ['smallMapDefaultSet']
    }, {
      searchControlProvider: 'yandex#search'
    });

    arrCoords.forEach((item, i) => {
      myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point",
          coordinates: [item.y, item.x]
        }
      }, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: 'themes/prime/assets/img/icons/placemark.png',
        iconImageSize: [46, 49],
        // iconImageoffsetX: [0, 0]
      });

      myMap.geoObjects.add(myGeoObject);
    });

    myMap.behaviors
      .disable('scrollZoom');

  }
  ymaps.ready(init);

})