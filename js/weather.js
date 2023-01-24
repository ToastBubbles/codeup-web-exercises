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
      //   resturant.coords = coordinates;
      //   placeMarkerAndPopup(resturant, myKey, resturant.coords, map);
      //   checkVal++;
      //   if (checkVal === 1) {
      marker.setLngLat(coordinates);
      callWeather(coordinates);
      flyToHere(coordinates);
      //map.setCenter(coordinates); //set camera to first straunt
      //   } else if (checkVal === favResturants.length - 1) {
      // console.log("done");

      // var group = new L.featureGroup(markerGroup);
      //map.fitBounds(group.getBounds());
      // console.log(markerGroup);
      // map.fitBounds(markerGroup, { padding: 100 });
      //   }
    });
    //
  }
});
// userSearch.addEventListener("")
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
    // map.setZoom(18);
    // map.setCenter(coordinates);
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

  //   console.log([lngLat[0].toFixed(7), lngLat[1].toFixed(7)]);
  //   callWeather([lngLat[0].toFixed(7), lngLat[1].toFixed(7)]);
  console.log(lngLat);
  callWeather([lngLat.lng, lngLat.lat]);
  //   coordinates.style.display = "block";
  //   coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on("dragend", onDragEnd);

// map.addControl(new mapboxgl.NavigationControl());
