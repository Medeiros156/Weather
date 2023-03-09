function catchData(city) {
  var cityName = city;
  const settingsCity = {
    async: true,
    crossDomain: true,
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APPID}&units=metric&lang=pt`,
    method: "GET",
  };

  $.ajax(settingsCity)
    .done(function (response) {
      const data = response;
      showCity(data);

      createData(data);
      return data;
    })
    .fail(() => console.log("error fetch"));
}

function createData(data) {
  console.log(data);
  let ls = localStorage;
  let chuva = data.rain ? data.rain["1h"] : 0;
  let vento = Math.round(data.wind.speed * 3.6);
  let temp = Math.round(data.main.temp);
  let city = data.name;
  let lat = data.coord.lat;
  let lon = data.coord.lon;
  let icon = data.weather[0].icon;
  let descriptionMain = toUpperCase(data.weather[0].description);
  let keyword = data.weather[0].main;
  let degres = data.wind.deg;
  $("#city").text(city);
  createRain(chuva);
  createWind(vento);
  createTemp(temp, 0);
  createIconMain(icon, 0);
  createTitle(descriptionMain);
  createBackground(keyword);
  rotateArrow(degres);
  console.log(degres);

  ls.setItem("chuva", chuva);
  ls.setItem("vento", vento);
  ls.setItem("temp", temp);
  ls.setItem("city", city);
  ls.setItem("lat", lat);
  ls.setItem("lon", lon);
  ls.setItem("descriptionMain", descriptionMain);

  catchForecastData(lat, lon);
}

function showCity(data) {
  const v = data.id;
}
