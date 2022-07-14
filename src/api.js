const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=-22.908333&lat=-43.196388&units=metric&lang=pt",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "2dba2fe63emsh7ea7002236d7713p1c7fc3jsnbbcf026c7dc8",
		"X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"
	}
};
/* https://rapidapi.com/weatherbit/api/weather/ */
function pegaData() {
    return weather = $.ajax(settings).done(function (response) { return response });
}

function todaData() {
    console.log(weather);
    console.log(weather.responseJSON);
    console.log(weather.responseJSON.data);
    console.log(JSON.stringify(weather.responseJSON.data))
}

function umaData(d) {
    console.log(weather.responseJSON.data[d])
    console.log(weather.responseJSON.data[d].app_temp)
}

