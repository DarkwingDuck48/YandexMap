/* global ymaps */

var myMap;
ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [52.94, 40.03],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Создаем многоугольник, используя класс GeoObject.
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.95097771887449, 40.02963305659818],
                    [52.950712864123524, 40.02946142493924],
                    [52.95045950803479, 40.029172658866806],
                    [52.9503671845553, 40.029347620889666],
                    [52.94967417952195, 40.030103018068615],
                    [52.9486913142767, 40.0305156555911],
                    [52.94797123614537, 40.03044398693323],
                    [52.947608417084886, 40.03025235262936],
                    [52.947362657064545, 40.04729303695131],
                    [52.94847748076148, 40.0471831228603],
                    [52.94898067769898, 40.04713342478109],
                    [52.949351298283716, 40.047064809077796],
                    [52.94966930733524, 40.04703327800979],
                    [52.95010785019445, 40.0469455352088],
                    [52.95057272411907, 40.046837313987474],
                    [52.95086083541619, 40.04670114117145],
                    [52.95100390463448, 40.04651673499093],
                    [52.95076305268914, 40.0458268698453],
                    [52.95055563359985, 40.0443088404972],
                    [52.95097771887449, 40.02963305659818]
                    ]
            ],
            fillRule: "nonZero"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет обводки.
        strokeColor: '#CC0000',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
        var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.947608417084886, 40.03025235262936],
                    [52.94717946214592, 40.03002563046664],
                    [52.9465053017654, 40.029622790891445],
                    [52.94171559864922, 40.0297129455568],
                    [52.941608268570484, 40.02997748662571],
                    [52.94153570354947, 40.03028447360154],
                    [52.941429305796085, 40.03031162107102],
                    [52.94055822870644, 40.03037263319617],
                    [52.93974747736164, 40.03050080157074],
                    [52.939646039708464, 40.03624526674665],
                    [52.94237973000487, 40.03733229302941],
                    [52.94225542456183, 40.045695731951746],
                    [52.94256040090777, 40.046463939470186],
                    [52.94252893284692, 40.04766706792218],
                    [52.942253823164506, 40.050260984020426],
                    [52.94516157671978, 40.053884886802635],
                    [52.94547168006945, 40.05413892142283],
                    [52.945487231257296, 40.05416581819828],
                    [52.94587035162944, 40.054362098488156],
                    [52.946279681625164, 40.05446560110071],
                    [52.94694807163472, 40.054489819265434],
                    [52.9447820662715, 40.05265327717444],
                    [52.94464600755271, 40.04756104150565],
                    [52.947362657064545, 40.04729303695131],
                    [52.947608417084886, 40.03025235262936]
                    ]
            ],
            fillRule: "nonZero"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет обводки.
        strokeColor: '#CC0000',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
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
                ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №2"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94873716510039, 40.03059019744297],
                    [52.94872681466323, 40.03139193987484],
                    [52.94638715217087, 40.03117406377854],
                    [52.946406886709184, 40.029761663138075],
                    [52.946642908293846, 40.029794034003984],
                    [52.94709003361337, 40.030067818932615],
                    [52.94719969742573, 40.03013496307541],
                    [52.947956557261946, 40.0305291630781],
                    [52.94873716510039, 40.03059019744297]
                ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №1"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94817666249631, 40.03163877230449],
                    [52.948139618184335, 40.03452790003266],
                    [52.946404519134, 40.03437075977907],
                    [52.946442966223465, 40.03147718552731],
                    [52.94817666249631, 40.03163877230449]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №3"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject); 
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94813651231389, 40.03476584530726],
                    [52.94809978818115, 40.03757657054499],
                    [52.94757566951669, 40.03752906835615],
                    [52.9476156240753, 40.03471864144125],
                    [52.94813651231389, 40.03476584530726]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №4"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
        var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.947472544118085, 40.03470563672185],
                    [52.94742211155343, 40.03820722149774],
                    [52.9462930887193, 40.0381667370463],
                    [52.946338848461885, 40.034665076252814],
                    [52.947472544118085, 40.03470563672185]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №5"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject); 
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94626089931178, 40.029854650770176],
                    [52.94624290977583, 40.03116058338944],
                    [52.94349134052046, 40.03090438122025],
                    [52.943506659169586, 40.02967921788679],
                    [52.94425831955772, 40.02966510838959],
                    [52.94626089931178, 40.029854650770176]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №6. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.946238854295736, 40.03145814473559],
                    [52.9461991463224, 40.03435195783138],
                    [52.94530332158369, 40.03427082037251],
                    [52.94534045510927, 40.031374445935086],
                    [52.946238854295736, 40.03145814473559]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №7. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94417528944404, 40.03126605395509],
                    [52.94509949465427, 40.03407845457162],
                    [52.94461780804243, 40.03420881226253],
                    [52.94454537070035, 40.03420220480595],
                    [52.943599322373416, 40.03134903894809],
                    [52.94410509949094, 40.03125938294965],
                    [52.94417528944404, 40.03126605395509]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №9. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject); 
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.946196038941515, 40.034590041187535],
                    [52.94617136484591, 40.036479240728795],
                    [52.94597655556521, 40.03656673710168],
                    [52.945889272317906, 40.03638269715805],
                    [52.94576601402403, 40.03629705035453],
                    [52.945639097016326, 40.03613376036497],
                    [52.94565872389521, 40.03454136174579],
                    [52.946196038941515, 40.034590041187535]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №8. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94336283438229, 40.02968197425364],
                    [52.94334665652094, 40.030924806340046],
                    [52.94127669773085, 40.03085094274311],
                    [52.9412778019887, 40.03032436599838],
                    [52.94142936852442, 40.03031370597842],
                    [52.94153570354947, 40.03028447360154],
                    [52.941608268570484, 40.02997748662571],
                    [52.94171559864922, 40.0297129455568],
                    [52.94336283438229, 40.02968197425364]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №10. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.943272415595814, 40.03116018656202],
                    [52.942726047473585, 40.03270273587578],
                    [52.941860660991054, 40.032671819855615],
                    [52.94133629830667, 40.03109108830963],
                    [52.943272415595814, 40.03116018656202]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №13. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94342493749997, 40.03131767218962],
                    [52.94437634828957, 40.03418693620563],
                    [52.943309079235725, 40.03409015444471],
                    [52.94289006187236, 40.03282641910698],
                    [52.94342493749997, 40.03131767218962]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №12. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94121033755085, 40.031205751044645],
                    [52.94173461085682, 40.032786327419984],
                    [52.94128564324684, 40.034011703939555],
                    [52.9401973354584, 40.0339707108508],
                    [52.94121033755085, 40.031205751044645]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №17. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [52.94092549514626, 40.03034690706125],
                    [52.941130436439416, 40.03096488161658],
                    [52.94060936113959, 40.032387319756644],
                    [52.939729825531636, 40.03150427706226],
                    [52.93974747736164, 40.03050080157074],
                    [52.94055822870644, 40.03037263319617],
                    [52.94092549514626, 40.03034690706125],
                    [52.94092549514626, 40.03034690706125]
                    ]
            ],
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Участок №18. Площадь - м кв."
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#F2F3F4',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 2
    });
    myMap.geoObjects.add(myGeoObject);
 }
