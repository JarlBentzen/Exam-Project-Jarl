//mapbox setup and marker placement
mapboxgl.accessToken = 'pk.eyJ1IjoiamFybGJlbnR6ZW4iLCJhIjoiY2w5Z3E2bjd0MmFpdzNvcXRkZGdrcHZ4dyJ9.Ef1MXxNxyzlPZ44IIKa_aA';
const monument = [10.201, 56.158];
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jarlbentzen/clbm8cr14000v15pamthnhahe',
    center: monument,
    zoom: 15
});

// // popup
// const popup = new mapboxgl.Popup({ offset: 25 }).setText(
//     'boat'
// );

// // DOM element for the marker
// const el = document.createElement('div');
// el.id = 'marker';

// //the marker
// new mapboxgl.Marker(el)
//     .setLngLat(monument)
//     .setPopup(popup) // sets a popup on this marker
//     .addTo(map);



const geojson = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.200682404134806, 56.157551223819475]
            },
            properties: {
                title: 'Hvidhajen',
                description: '<style> .mapboxgl-popup-content {background-image:url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/059/492/original/Mask_Group_2.png?1671392820" ); }</style><p>"The Great White Shark" is a mural painted by Eske Touborg, one of many painted by him in Aarhus.This is one is a part of his underwater collection.<br><br> Vestergade 62, 8000 Aarhus, Danmark</p><br><h2>Eske Touborg</h2><br><p>Eske Touborg has painted graffiti and art since he was 11 years old. He is a strong believer that his best ideas come from good conversation and tries to make art that is meaningful to people. </p><br><div class="SoMe"><a href="https://www.facebook.com/EskeTM/"><i class="fa fa-facebook"></i></a><a href="https://www.esketoub.org/"><i class="fa fa-globe"></i></a><a href="https://www.instagram.com/esketouborg/?hl=en"><i class="fa fa-instagram"></i></a><a href="https://goo.gl/maps/U7ZEZjNWpHUQT1gY8"><i class="fa fa-map"></i></a></div>'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.206877262657745, 56.1596496654898]
            },
            properties: {
                title: 'DONTLOOKBACKINANGER',
                description: '<style> .mapboxgl-popup-content {background-image:url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/059/605/original/Mask_Group_4.png?1671443414"); }</style><p>The Mural "DONTLOOKBACKINANGER" is named after the song with the same name by the indie band "Oasis". Not much is known about this piece. While visiting here be sure to check out the delicatessen just across the street of the entrance to the courtyard. <br><br>Klosterport 4t, 8000 Aarhus, Denmark</p><br><h2>Hendrik Beikirch</h2><br><p>Born In 1974, Hendrik Beikirch is a artist from Germany. His works are mostly black and white prominently Hendrik paints faces of older people. He has halso painted Asia\'s Tallest Mural in Busan, South Korea.</p><br><div class="SoMe"> <a href="https://www.facebook.com/ecbhendrikbeikirch/"><i class="fa fa-facebook"></i></a><a href="https://hendrikbeikirch.com/"><i class="fa fa-globe"></i></a><a href="https://www.instagram.com/explore/tags/hendrikbeikirch/?hl=en"><i class="fa fa-instagram"></i></a><a href="https://goo.gl/maps/gp9BC6Zg5GMGREGB6"><i class="fa fa-map"></i></a></div>'
            }
        },
        {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [10.209718711753943, 56.1542601114365]
            },
            properties: {
                title: 'Faust',
                description: '<style> .mapboxgl-popup-content {background-image:url("https://s3.amazonaws.com/shecodesio-production/uploads/files/000/059/606/original/Mask_Group_5.png?1671443422"); }</style><p>"Faust" was a painting during The 2008 "Icons for Now" exhibition. The artist of this mural is unknown but the mural is actually supposed to depict a "drooling vagina". Wile in the area make sure to see some of the thrift stores in the area like  red cross, visit the Salling rooftop, or go down the water/harbor area by Dokk1 <br><br>Fredens Torv 6, 8000 Aarhus, Denmark </p><br><div class="SoMe"><a href="https://goo.gl/maps/qiaXTnejPGdvwHiu7"><i class="fa fa-map"></i></a></div>'

            }
        }
    ]
};

// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({ offset: 20 }) // add popups 
                .setHTML(
                    `<div class="popupContent"><h2>${feature.properties.title}</h2><br><p>${feature.properties.description}</p></div>`
                )
        )
        .addTo(map);
}



// upload popup

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
}


// Congrats popup

let popupAlt = document.getElementById("popupAlt");

function openPopupAlt() {
    popupAlt.classList.add("open-popupAlt");
}

function closePopupAlt() {
    popupAlt.classList.remove("open-popupAlt");
}




var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


// Mobile burger menu toggle

let burger = document.getElementById("hideburger");

function openhideburger() {
    burger.classList.toggle("openhideburger");
}

function closehideburger() {
    burger.classList.remove("openhideburger");
}


// const popup = document.getElementsByClassName('popup');

// const marker = document.getElementsByClassName('marker');

// marker.addEventListener('click', function handleClick() {
//     if (popup.style.display === 'none') {
//         popup.style.display = 'block';

//         popup.textContent = 'Hide div';
//     } else {
//         popup.style.display = 'none';

//         popup.textContent = 'Show div';
//     }
// });