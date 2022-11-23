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
	 
	var averageTemp1 = 0
	var averageTemp2 = 0
	var averageTemp3 = 0
	var averageHumidity1 = 0
	var averageHumidity2 = 0
	var averageHumidity3 = 0
	var n1 = 0
	var n2 = 0
	var n3 = 0
	let today = (new Date()).getDay()
	arr.forEach(function callback(e, i) {
		let day = (new Date(e.dt_txt)).getDay()
		if (day == (today + 1)) {
			n1 = i
			console.log(n1);
			let temp = e.main.temp
			averageTemp1 = averageTemp1 +  temp
			let hum = e.main.humidity
			averageHumidity1 = averageHumidity1 + hum
		} else 
		if (day == (today + 2)) {
			n2 = i
			let temp = e.main.temp
			averageTemp2 = averageTemp2 +  temp
			let hum = e.main.humidity
			averageHumidity2 = averageHumidity2 + hum
		} else 
		if (day == (today + 3)) {
			n3 = i
			let temp = e.main.temp
			averageTemp3 = averageTemp3 +  temp
			let hum = e.main.humidity
			averageHumidity3 = averageHumidity3 + hum
		}
	});


	createForecastData(data, n1, averageTemp1, averageHumidity1,1)
	createForecastData(data, n2, averageTemp2, averageHumidity2,2)
	createForecastData(data, n3, averageTemp3, averageHumidity3,3)
	
	
}

function createForecastData(data, n, temp, humi, i) {
  let forecast1 = data.list[n];
  let temperature = Math.round((temp/8))
  let humidity = Math.round((humi/8))
  let description = forecast1.weather[0].description;
  let dateString = forecast1.dt_txt;
  createDateData(dateString, i); 
  createTemp(temperature, i);
  createHumidity(humidity, i);
  createDescription(description, i);

  ls.setItem(`temp-${i}`, temperature);
  ls.setItem(`humidity-${i}`, humidity);
  ls.setItem(`description-${i}`, description);
}
