'use strict';

const button = document.querySelector('.map button')

mapboxgl.accessToken =
'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw'
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
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


