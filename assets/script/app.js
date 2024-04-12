'use strict';

import { selectAll, select } from './utils.js'

/*----------------------------*/
/*          SERVICES          */
/*----------------------------*/

const boxes = selectAll('.image');
const opacityTargets = selectAll('.services .box');


// INITIALL APPEARANCE
boxes.forEach(box => {
  if (box !== boxes[1]) { // Exclude the second box which is initially visible
    adjustAppearance(box);
  }
});
adjustAppearance(boxes[1]);

opacityTargets.forEach(target => target.style.opacity = '0');
opacityTargets[1].style.opacity = '1'; // second box initially visible
// END INITIALL APPEARANCE

// ADJUST OPACITY
function setOpacity(exceptThisOne) {
  opacityTargets.forEach(target => {
    target.style.opacity = (target === exceptThisOne) ? '1' : '0';
  });
}

// ADJUST APPEARANCE OF BOX AND BOX-INFO
function adjustAppearance(target) {
  boxes.forEach(box => {
    if (box !== target) {
      box.style.backdropFilter = 'blur(3px)';
      box.style.background = 'rgba(0, 0, 0, 0.4)';
    } else {
      box.style.backdropFilter = 'blur(0px)';
      box.style.background = 'rgba(0, 0, 0, 0)';
      setOpacity(document.querySelector(`.${box.dataset.target}`));
      darkenInfoBox(box);
    }
  });
}

// DARKEN INFO-BOX
function darkenInfoBox(activeBox) {
  const infos = selectAll('.info');
  infos.forEach(info => {
    info.classList.toggle('darken', info.parentElement === activeBox);
  });
}

boxes.forEach(box => {
  box.addEventListener('mouseover', function() {
    adjustAppearance(this);
  });
});




/*----------------------------*/
/*          CONTACT           */
/*----------------------------*/

const button = select('.map button')

mapboxgl.accessToken =
'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw'
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-97.138451, 49.895077],
    zoom: 11,
    interactive: false
  });

  const options = {enableHighAccuracy: true}

  /*---GEOLOCATION---*/

function getGeoLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      getUserLocation
    );
  } else {
    console.log("Geolocation is not supported by your browser")
  }
}

function getUserLocation(position) {
  let { latitude, longitude } = position.coords
  let userLocation = [longitude, latitude];

  const marker = new mapboxgl.Marker({
    color: '#ff0000'}).setLngLat(userLocation).addTo(map);
  map.flyTo({ center: userLocation, zoom: 12});
  map.setStyle('mapbox://styles/mapbox/streets-v12');
  return marker;
}

button.addEventListener('click', () => {
  getGeoLocation();
})