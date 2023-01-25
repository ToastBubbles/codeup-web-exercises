// ****************************** Mapbox instantiation ************************************ \\
let mapKey = keys.mapbox;
mapboxgl.accessToken = mapKey;
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jeffneal11/cld4tjaah000c01o2ruyc3sq2",
  zoom: 10,
  center: [-98.4914, 29.4253],
});

// ****************************** OpenWeather GET Request ************************************ \\
function callWeather(pos) {
  $.get("http://api.openweathermap.org/data/2.5/forecast", {
    lat: pos[1],
    lon: pos[0],
    appid: keys.openweather,
    units: "imperial",
  }).done(function (data) {
    updateCards(data.list);
    setCurrentWeatherInfo(data);
    generateForecastCards(data.list);
  });
}

// ******************************* User Search Events ************************************* \\
let userSearch = document.getElementById("locSearch");
let userSearchBtn = document.getElementById("searchButton");

userSearchBtn.onclick = (e) => {
  updateLocation(e);
};
userSearch.onkeydown = (e) => {
  if (e.keyCode === 13) {
    updateLocation(e);
  }
};

// **************************** Update Map when location changes ********************************** \\
function updateLocation(event) {
  event.preventDefault();
  let newLocation = userSearch.value;
  userSearch.value = "";
  if (newLocation.length > 1) {
    geocode(newLocation, mapKey).then(function (coordinates) {
      marker.setLngLat(coordinates);
      callWeather(coordinates);
      flyToHere(coordinates);
    });
  }
}

function flyToHere(coords) {
  map.flyTo({
    center: coords,
    zoom: 18,
    pitch: 60,
    essential: true,
  });
}
// ****************************** GoTo User Location on Startup ************************************ \\

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    let coordinates = [position.coords.longitude, position.coords.latitude];
    callWeather(coordinates);
    flyToHere(coordinates);

    marker.setLngLat(coordinates).addTo(map);
  });
}
// ****************************** GoTo Default on Startup (SA) ************************************ \\
function defaultLocation() {
  let defaultCoord = [-98.4914, 29.4253];
  callWeather(defaultCoord);
  flyToHere(defaultCoord);
  marker.setLngLat(defaultCoord).addTo(map);
}

// ****************************** Marker Instantiation & events ************************************ \\
const marker = new mapboxgl.Marker({
  draggable: true,
});

function onDragEnd() {
  let lngLat = marker.getLngLat();
  callWeather([lngLat.lng, lngLat.lat]);
}
defaultLocation();
marker.on("dragend", onDragEnd);
