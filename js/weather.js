let mapKey = keys.mapbox;
mapboxgl.accessToken = mapKey;
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/jeffneal11/cld4tjaah000c01o2ruyc3sq2",
  zoom: 10,

  center: [-98.4914, 29.4253],
});

function callWeather(pos) {
  $.get("http://api.openweathermap.org/data/2.5/forecast", {
    lat: pos[1],
    lon: pos[0],
    appid: keys.openweather,
    units: "imperial",
  }).done(function (data) {
    console.log(data);
    updateCards(data.list);
    setCurrentWeatherInfo(data);
    generateForecastCards(data.list);
  });
}

let userSearch = document.getElementById("locSearch");
let userSearchBtn = document.getElementById("searchButton");

userSearchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newLocation = userSearch.value;
  userSearch.value = "";

  console.log(newLocation);
  if (newLocation.length > 1) {
    geocode(newLocation, mapKey).then(function (coordinates) {
      console.log(coordinates, "new location", newLocation);

      marker.setLngLat(coordinates);
      callWeather(coordinates);
      flyToHere(coordinates);
    });
  }
});

function flyToHere(coords) {
  map.flyTo({
    center: coords,
    zoom: 18,
    pitch: 60,
    essential: true,
  });
}
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    let coordinates = [position.coords.longitude, position.coords.latitude];
    callWeather(coordinates);
    flyToHere(coordinates);

    marker.setLngLat(coordinates).addTo(map);
    console.log(coordinates);
  });
} else {
  console.log("No Live Location Data");
}

const marker = new mapboxgl.Marker({
  draggable: true,
});

function onDragEnd() {
  let lngLat = marker.getLngLat();
  console.log(lngLat);
  callWeather([lngLat.lng, lngLat.lat]);
}

marker.on("dragend", onDragEnd);

// map.addControl(new mapboxgl.NavigationControl());
