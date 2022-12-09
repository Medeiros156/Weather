function catchForecastData(lat, lon) {
  const settingsForecast = {
    async: true,
    crossDomain: true,
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ca481617449db955b575c8299b9ec9e2&units=metric&lang=pt`,
    method: "GET",
  };
  /* api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ca481617449db955b575c8299b9ec9e2&units=metric&lang=pt */

  $.ajax(settingsForecast).done(function (response) {
    const data = response;
    console.log(data);
    /* createForecastData(data, 8)
		createForecastData(data, 16)
		createForecastData(data, 24) */

    averageForecast(data);
    return data;
  });
}
function averageForecast(data) {
  let arr = data.list;

  var sumTemp1 = 0;
  var sumTemp2 = 0;
  var sumTemp3 = 0;
  var sumHumidity1 = 0;
  var sumHumidity2 = 0;
  var sumHumidity3 = 0;
  var n1 = 0;
  var n2 = 0;
  var n3 = 0;
  let today = new Date().getDay();
  arr.forEach(function callback(e, i) {
    let day = new Date(e.dt_txt).getDay();
	console.log(day);
	console.log(today);
    if ( day == today + 1 || today + 1 == 8) {
      n1 = i;
      let temp = e.main.temp;
      sumTemp1 = sumTemp1 + temp;
      let hum = e.main.humidity;
      sumHumidity1 = sumHumidity1 + hum;
    } else if (day == today + 2 || today + 2 == 9 || today + 2 == 8) {
      n2 = i;
      let temp = e.main.temp;
      sumTemp2 = sumTemp2 + temp;
      let hum = e.main.humidity;
      sumHumidity2 = sumHumidity2 + hum;
    } else if (day == today + 3 || today + 3 == 10 || today + 3 ==  9 || today + 3 ==  8) {
      n3 = i;
      let temp = e.main.temp;
      sumTemp3 = sumTemp3 + temp;
      let hum = e.main.humidity;
      sumHumidity3 = sumHumidity3 + hum;
    }
  });
  
  createForecastData(data, n1, sumTemp1, sumHumidity1, 1);
  createForecastData(data, n2, sumTemp2, sumHumidity2, 2);
  createForecastData(data, n3, sumTemp3, sumHumidity3, 3);
}

function createForecastData(data, n, temp, humi, i) {
  console.log(data);
  let forecast1 = data.list[n];
  let temperature = Math.round(temp / 8);
  let humidity = Math.round(humi / 8);
  let description = toUpperCase(forecast1.weather[0].description);
  let dateString = forecast1.dt_txt;
  let icon = data.list[(n)].weather[0].icon
  createDateData(dateString, i);
  createTemp(temperature, i);
  createHumidity(humidity, i);
  createDescription(description, i);
  createIcon(icon, i)

  ls.setItem(`temp-${i}`, temperature);
  ls.setItem(`humidity-${i}`, humidity);
  ls.setItem(`description-${i}`, description);
}
