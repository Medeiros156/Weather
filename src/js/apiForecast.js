function catchForecastData(lat, lon) {
  const settingsForecast = {
    async: true,
    crossDomain: true,
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPID}&units=metric&lang=pt`,
    method: "GET",
  };

  $.ajax(settingsForecast)
    .done(function (response) {
      const data = response;
      averageForecast(data);
      return data;
    })
    .fail(() => console.log("error fetch"));
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
  arr.forEach(function (e, i) {
    let day = new Date(e.dt_txt).getDay();
    if (day == today + 1 || (today === 6 && day === 0)) {
      n1 = i;
      let temp = e.main.temp;
      sumTemp1 = sumTemp1 + temp;
      let hum = e.main.humidity;
      sumHumidity1 = sumHumidity1 + hum;
    } else if (
      day == today + 2 ||
      (today === 5 && day === 0) ||
      (today === 6 && day === 1)
    ) {
      // console.log(e);
      n2 = i;
      let temp = e.main.temp;
      sumTemp2 = sumTemp2 + temp;
      let hum = e.main.humidity;
      sumHumidity2 = sumHumidity2 + hum;
    } else if (
      day == today + 3 ||
      (today === 4 && day === 0) ||
      (today === 5 && day === 1) ||
      (today === 6 && day === 2)
    ) {
      console.log(e);
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
  let forecast1 = data.list[n];
  let temperature = Math.round(temp / 8);
  let humidity = Math.round(humi / 8);
  let description = toUpperCase(forecast1.weather[0].description);
  let dateString = forecast1.dt_txt;
  let icon = data.list[n].weather[0].icon;
  createDateData(dateString, i);
  createTemp(temperature, i);
  createHumidity(humidity, i);
  createDescription(description, i);
  createIcon(icon, i);

  ls.setItem(`temp-${i}`, temperature);
  ls.setItem(`humidity-${i}`, humidity);
  ls.setItem(`description-${i}`, description);
}
