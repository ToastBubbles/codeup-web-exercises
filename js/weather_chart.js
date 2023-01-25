let chartTimes = document.getElementById("timeContainer");
let svgPathHum = document.getElementById("path2");
let svgParent = document.getElementById("mainSVG");
let chartbg = document.getElementById("chartbg");

// ****************************** Chart Startup - Re-generates chart when new Weather Data is Recieved ************************************ \\
function updateCards(forecast3) {
  let lowTemp = forecast3[0].main.temp;
  let highTemp = forecast3[0].main.temp;
  let setTemp = false;

  forecast3.forEach((increment3) => {
    // *** Set High / Low ranges for chart *** \\
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
  });
  drawChart(forecast3, highTemp, lowTemp);
}
// ****************************** Calculates Points & Text for SVG Chart || returns HTML ************************************ \\
function calcPoint(temp, index, temps, high, low, type) {
  let showPeaksOnly = true;

  // ********* Calculates unformatted points for SVG chart (high is used to check if temp data is being used vs humidity) ********* \\
  if (type === "line" && high !== "none") {
    // ********* Unformatted chart points for Tempurature ********* \\
    if (index + 1 == temps.length) {
      // *** Round off last point to 100 *** \\
      return ` 100 ${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}`;
    } else {
      return ` ${Math.round((index / temps.length) * 100)} ${(
        100 -
        ((temp - low) / (high - low)) * 100
      ).toFixed(2)}`;
    }
  } else if (type === "line" && high === "none") {
    // ********* Unformatted chart points for Humidity ********* \\
    if (index + 1 == temps.length) {
      // *** Round off last point to 100 *** \\
      return ` 100 ${100 - temp.toFixed(2)}`;
    } else {
      return ` ${Math.round((index / temps.length) * 100)} ${
        100 - temp.toFixed(2)
      }`;
    }
  } else if (!showPeaksOnly) {
    // ********* HTML that shows temps inside SVG chart (All) ********* \\
    return `<text 
    x="${Math.round((index / temps.length) * 100)}" 
    y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
    fill="#222"
 
    class="chartText">${temp.toFixed(1)}</text>`;
  } else if (showPeaksOnly) {
    if (index != 0 && index != temps.length - 1) {
      if (
        (temp > temps[index + 1].main.temp &&
          temp > temps[index - 1].main.temp) ||
        (temp < temps[index + 1].main.temp && temp < temps[index - 1].main.temp)
      ) {
        // ********* HTML that shows temps inside SVG chart (High/Low/First/Last Only)********* \\
        // ***** Generates Temp Text for High/Low each Day ***** \\
        return `<text 
                x="${Math.round((index / temps.length) * 100) - 2}" 
                y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
                
             
                class="chartText">${Math.round(temp)}°F</text>`;
      } else {
        return ``;
      }
    } else if (index == temps.length - 1) {
      // ***** Temp Text for Last Point ***** \\
      return `<text 
        x="${Math.round((index / temps.length) * 100) - 7}" 
        y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
        class="chartText">${Math.round(temp)}°F</text>`;
    } else {
      // ***** Temp Text for First Point ***** \\
      return `<text 
        x="${Math.round((index / temps.length) * 100)}" 
        y="${(100 - ((temp - low) / (high - low)) * 100).toFixed(2)}" 
        class="chartText">${Math.round(temp)}°F</text>`;
    }
  }
}
// ****************************** Converts timestamps to 'HH:MMAM' ************************************ \\
function dateConversion(timestamp) {
  let date = new Date(timestamp * 1000);
  let dateString = date.toLocaleTimeString("default");

  let arr = dateString.split(" ");

  let arr2 = arr[0].split(":");
  arr2.pop();

  return arr2.join(":") + arr[1];
}
// ****************************** Alternates Background Color of Chart to Show Progression of Days ************************************ \\
let dayToggle = false;
function generateChartbg(time) {
  if (time === "12:00AM") {
    dayToggle = !dayToggle;
  }
  if (dayToggle) {
    return `<div class="chartCol-bg chartCol-bg1"></div>`;
  }
  return `<div class="chartCol-bg chartCol-bg2"></div>`;
}

// ****************************** SVG Handler - Formats points into SVG-readable path data ************************************ \\
function drawChart(temps, high, low) {
  svgParent.innerHTML = `<path
  d=""
  id="path1"
  stroke="#49505c"
  stroke-width="0.5"
  fill="none"
  stroke-linejoin="round"
/>`;
  chartTimes.innerHTML = "";
  chartbg.innerHTML = "";

  // **** Add simulated Vertical Padding (flips multiplier to handle negative temps) **** \\
  high >= 0 ? (high *= 1.1) : (high *= 0.9);
  low >= 0 ? (low *= 0.9) : (low *= 1.1);

  let alternator = 0;
  let pointString = "";
  let humPointString = "";
  let pointTextString = "";
  let timestampString = "";

  temps.forEach((inc, index) => {
    alternator++;
    let dt_str = dateConversion(inc.dt);
    if (alternator % 3 == 0) {
      timestampString += `<div class='chartTimestampContainer'><div class="chartTimestamp">${dt_str}</div></div>`;
    }
    chartbg.innerHTML += generateChartbg(dt_str);

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

  svgPathHum.setAttribute("d", humPointString);
  document.getElementById("path1").setAttribute("d", pointString);
  svgParent.innerHTML += pointTextString;
  chartTimes.innerHTML += timestampString;
}
