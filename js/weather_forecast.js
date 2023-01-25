let currentWeatherSection = document.getElementById("currentWeather");
let forecast = document.getElementById("forecastContainer");

// ****************************** HTML Display for Current Weather at given Location ************************************ \\
function setCurrentWeatherInfo(data) {
  currentWeatherSection.innerHTML = "";
  let wData = data.list[0];
  let locationName = "";
  let fontClass = "";
  if (data.city.name == "") {
    locationName = `lat ${data.city.coord.lat}\nlon ${data.city.coord.lon}`;
    fontClass = "currentCoords";
  } else {
    locationName = data.city.name;
    fontClass = "currentCity";
  }
  let weatherDataHTMLString = `<div class='dflexCenter'><svg id="locationPin" fill="#eee" viewBox="0 0 16 16">
  <path
    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
  />
</svg><div class="${fontClass}">${locationName}</div></div>
<div class="dflex">
  <img id="currentWeatherIcon" src="http://openweathermap.org/img/wn/${wData.weather[0].icon.slice(
    0,
    -1
  )}n@2x.png"/>
  <div class="currentWText inline">${wData.weather[0].description}</div>
</div>
<div class="dflexCenter">
<svg fill="#eee" id="sunset-icon" viewBox="0 0 16 16">
  <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM8 7a3 3 0 0 1 2.599 4.5H5.4A3 3 0 0 1 8 7zm3.71 4.5a4 4 0 1 0-7.418 0H.499a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
</svg>
   <div>${dateConversion(data.city.sunset)}</div>
</div>

<div class="currentWText fontMd">${Math.round(
    wData.main.temp
  )}°F</div><div class="currentWText">Feels Like ${Math.round(
    wData.main.feels_like
  )}°F</div><div class="currentWText">${wData.main.humidity}% Humidity</div>`;

  currentWeatherSection.innerHTML += weatherDataHTMLString;
}

// ****************************** Checks if Day of Time Increments ************************************ \\
function checkTime(str) {
  if (str === "12:00AM") {
    return true;
  }
}

// ****************************** Numerical to English Month Translation ************************************ \\
function translateMonth(int) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];
  return months[int - 1];
}

// ****************************** Formats timestamp as 'DD MMM' ************************************ \\
function getDate(timestamp) {
  var date = new Date(timestamp * 1000);

  return `${date.toLocaleDateString("en-GB").split("/")[0]} ${translateMonth(
    date.toLocaleDateString("en-GB").split("/")[1]
  )}`;
}
// ****************************** Generates Forcast card HTML ************************************ \\
function generateForecastHTML(dataObj, index) {
  return `<div class="forecastCard">
    <img id="forecastWeatherIcon" src="http://openweathermap.org/img/wn/${
      dataObj[index].iconDay
    }@2x.png"/>
    
    <div class='forecastTextDate'>${getDate(dataObj[index].date)}</div>
    <div class="forecastCardText">${dataObj[index].weatherDay}</div>
    <div class="forecastCardText forecastCardTempText">${dataObj[
      index
    ].high.toFixed(0)}°F</div>
    <div class="foreMoist">
    <div>${dataObj[index].moisture}%</div>
    <svg  fill="#eee" id="moisture" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
    <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
  </svg>
    </div>
   
    <div  class='hr-line'></div>
    <div class="dflexCenter">
    <img class="forecastWeatherIconNight" src="http://openweathermap.org/img/wn/${
      dataObj[index].iconNight
    }n@2x.png"/>
    <div class="forecastNightText">${dataObj[index].weatherNight}</div>
    </div>
    <div class="forecastCardText ">${dataObj[index].low.toFixed(0)}°F</div>
    </div>`;
}
// ****************************** Generates Forecast Card Data ************************************ \\
function generateForecastCards(data) {
  let cardDataObj = [];

  let high = data[0].main.temp;
  let low = data[0].main.temp;

  data.forEach((segment, index) => {
    if (checkTime(dateConversion(segment.dt))) {
      if (index + 6 < data.length) {
        cardDataObj.push({
          high: high,
          low: low,
          date: data[index].dt,
          moisture: data[index + 3].main.humidity,
          weatherDay: data[index + 3].weather[0].description,
          weatherNight: data[index + 6].weather[0].description,
          iconDay: data[index + 3].weather[0].icon,
          iconNight: data[index + 6].weather[0].icon.slice(0, -1),
        });
      } else {
        cardDataObj.push({
          high: high,
          low: low,
          date: data[index].dt,
          moisture: segment.main.humidity,
          weatherDay: data[index].weather[0].description,
          weatherNight: data[index].weather[0].description,
          iconDay: data[index].weather[0].icon.slice(0, -1) + "d",
          iconNight: data[index].weather[0].icon.slice(0, -1),
        });
      }

      high = segment.main.temp;
      low = segment.main.temp;
    } else {
      if (segment.main.temp > high) {
        high = segment.main.temp;
      } else if (segment.main.temp < low) {
        low = segment.main.temp;
      }
    }
  });
  let numberOfCards = 4;
  forecast.innerHTML = "";
  for (let i = 0; i < numberOfCards; i++) {
    forecast.innerHTML += generateForecastHTML(cardDataObj, i);
  }
}
