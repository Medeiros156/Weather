
function catchData(city) {
	var cityName = city
	const settingsCity = {
		"async": true,
		"crossDomain": true,
		"url": `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ca481617449db955b575c8299b9ec9e2&units=metric&lang=pt`,
		"method": "GET",
	};

	$.ajax(settingsCity).done(function (response) {
		const data = response;
		showCity(data)
		console.log(data);
		createData(data)
		return data
	});
}

function createData(data) {
	let chuva = data.rain ? data.rain["1h"] : 0;
	let vento = Math.round((data.wind.speed) * 3.6)
	let temp = Math.round(data.main.temp)
	let city = data.name
	let lat = data.coord.lat
	let lon = data.coord.lon
	let ls = localStorage
	$("#city").text(city)
	createRain(chuva);
	createWind(vento);
	createTemp(temp);
	
	ls.setItem('chuva', chuva);
	ls.setItem('vento', vento);
	ls.setItem('temp', temp);
	ls.setItem('city', city);
	ls.setItem('lat', lat);
	ls.setItem('lon', lon);

	

};

/* function createForecastData(lat, lon) {
	console.log(lat,lon);
	console.log("forecast");
} */


function showCity(data) {
	const v = data.id
	console.log(v);
}

