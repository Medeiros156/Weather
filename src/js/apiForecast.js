
function catchForecastData(lat, lon) {
	
	const settingsForecast = {
		"async": true,
		"crossDomain": true,
		"url": `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ca481617449db955b575c8299b9ec9e2&units=metric&lang=pt`,
		"method": "GET",
	};
    /* api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=ca481617449db955b575c8299b9ec9e2&units=metric&lang=pt */

	$.ajax(settingsForecast).done(function (response) {
		const data = response;
		
		createForecastData(data, 8)
		createForecastData(data, 16)
		createForecastData(data, 24)

		return data
	});
}

function createForecastData(data, n) {
    console.log(data);
	let forecast1 = data.list[n]
    let tempMax = forecast1.main.temp_max
    let tempMin = forecast1.main.temp_min
    let humidity = forecast1.main.humidity
    let description = forecast1.weather[0].description
    let dateString= forecast1.dt_txt
	createDateData(dateString, n)
	
    /* console.log(date); */
    console.log(description);
	createTempMax(Math.round(tempMax), n);
	createTempMin(Math.round(tempMin), n);
	createHumidity(humidity, n);
	createDescription(description, n);

	ls.setItem(`tempMax-${n}`, tempMax);
	ls.setItem(`tempMin-${n}`, tempMin);
	ls.setItem(`humidity-${n}`, humidity);
	ls.setItem(`description-${n}`, description);
    

};



