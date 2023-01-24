let chartTimes = document.getElementById("timeContainer");
let svgPath = document.getElementById("path1");
let svgPathHum = document.getElementById("path2");
let svgParent = document.getElementById("mainSVG");
let chartbg = document.getElementById("chartbg");
function updateCards(forecast3) {
  let lowTemp = 0;
  let highTemp = 0;
  let setTemp = false;

  forecast3.forEach((increment3) => {
    //set high/low for five days
    if (!setTemp) {
      lowTemp = increment3.main.temp;
      highTemp = increment3.main.temp;

      setTemp = true;
    } else {
      if (increment3.main.temp > highTemp) {
        highTemp = increment3.main.temp;
      }
      if (increment3.main.temp < lowTemp) {
        lowTemp = increment3.main.temp;
      }
    }

    // console.log(increment3.dt_txt, increment3.main.temp);
  });
  drawChart(forecast3, highTemp, lowTemp);
}

function calcPoint(temp, index, temps, high, low, type) {
  let showPeaksOnly = true;

  //   console.log(temp, high, low, (temp - low) / (high - low));

  if (type === "line" && high !== "none") {
    if (index + 1 == temps.length) {
      return ` 100 ${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}`;
    } else {
      //   console.log(index, temps.length);
      return ` ${Math.round((index / temps.length) * 100)} ${(
        100 -
        ((temp - low) / (high - low)) * 100
      ).toFixed(2)}`;
    }
  } else if (type === "line" && high === "none") {
    if (index + 1 == temps.length) {
      return ` 100 ${100 - temp.toFixed(2)}`;
    } else {
      //   console.log(index, temps.length);
      return ` ${Math.round((index / temps.length) * 100)} ${
        100 - temp.toFixed(2)
      }`;
    }
  } else if (!showPeaksOnly) {
    return `<text 
    x="${Math.round((index / temps.length) * 100)}" 
    y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
    fill="#222"
 
    class="chartText">${temp.toFixed(1)}</text>`;
  } else if (showPeaksOnly) {
    //console.log(temps[index + 1].main.temp);
    if (index != 0 && index != temps.length - 1) {
      //   console.log("index", index);
      if (
        (temp > temps[index + 1].main.temp &&
          temp > temps[index - 1].main.temp) ||
        (temp < temps[index + 1].main.temp && temp < temps[index - 1].main.temp)
      ) {
        return `<text 
                x="${Math.round((index / temps.length) * 100)}" 
                y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
                
             
                class="chartText">${Math.round(temp)}°F</text>`;
      } else {
        return ``;
      }
    } else if (index == temps.length - 1) {
      return `<text 
        x="${Math.round((index / temps.length) * 100) - 7}" 
        y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
 
     
        class="chartText">${Math.round(temp)}°F</text>`;
    } else {
      return `<text 
        x="${Math.round((index / temps.length) * 100)}" 
        y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
    
     
        class="chartText">${Math.round(temp)}°F</text>`;
    }
  }
}

function dateConversion(timestamp) {
  let date = new Date(timestamp * 1000);
  let dateString = date.toLocaleTimeString("default");
  //dateString = dateString.substring(0, dateString.length - 6);
  dateString = dateString.replace(":00 ", "");

  //   console.log(date.toLocaleTimeString("default"));
  return dateString;
}
let dayToggle = false;
function generateChartbg(time) {
  if (time === "12:00AM") {
    // console.log("its high noon");
    dayToggle = !dayToggle;
  }
  if (dayToggle) {
    return `<div class="chartCol-bg chartCol-bg1"></div>`;
  }
  return `<div class="chartCol-bg chartCol-bg2"></div>`;
}

function drawChart(temps, high, low) {
  //   console.log(high, low);
  high *= 1.1;
  low *= 0.9;
  let alternator = 0;
  //   console.log(high - low);
  let pointString = "";
  let humPointString = "";
  let pointTextString = "";
  let timestampString = "";
  //   generateChartTimes(temps);
  temps.forEach((inc, index) => {
    alternator++;
    let dt_str = dateConversion(inc.dt);
    if (alternator % 3 == 0) {
      timestampString += `<div class='chartTimestampContainer'><div class="chartTimestamp">${dt_str}</div></div>`;
    }
    chartbg.innerHTML += generateChartbg(dt_str);
    // console.log(index);
    // inc.main.temp;
    if (index === 0) {
      pointString += `M `;
      humPointString += `M `;
    } else {
      pointString += ` L`;
      humPointString += ` L`;
    }

    pointTextString += calcPoint(
      inc.main.temp,
      index,
      temps,
      high,
      low,
      "text"
    );

    pointString += calcPoint(inc.main.temp, index, temps, high, low, "line");
    // console.log(inc[`rain`][`3h`]);
    // console.log(inc.main.humidity);
    humPointString += calcPoint(
      inc.main.humidity,
      index,
      temps,
      "none",
      "none",
      "line"
    );
  });
  pointString += ` L 100 100 L 0 100 Z`;
  //   console.log(pointString);
  svgPathHum.setAttribute("d", humPointString);
  svgPath.setAttribute("d", pointString);
  svgParent.innerHTML += pointTextString;
  chartTimes.innerHTML += timestampString;
}
