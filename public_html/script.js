/* global ymaps */

var myMap;
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [52.90, 40.04],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94882167142658, 40.03169885318141],
                    [52.94832090671271, 40.03165210629939],
                    [52.948263088801546, 40.03608385440367],
                    [52.94876422834133, 40.03610180110676],
                    [52.94882167142658, 40.03169885318141]
                ],
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №1"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 5,
        // Стиль обводки.
    });
    myMap.geoObjects.add(myGeoObject);
 }
