var sun = ['sun-1.jpg', 'sun-2.jpg', 'sun-3.jpg'];
var rain = ['rain-1.jpg', 'rain-2.jpg'];
var temp = ['temp-1.jpg', 'temp-2.jpg', 'temp-3.jpg'];
var cloudy = ['cloudy-1.jpg', 'cloudy-2.jpg'];

var tema = []
function achaTema() {
    if (data.vento < 35 && data.chuva > 23) { tema = rain, console.log("rain") } else if (data.temp < 50 && data.vento > 35) { tema = temp, console.log("temp")} 
    else if (data.temp > 50) { tema = sun, console.log("sun") }
    $('.container').css({ 'background-image': 'url(../Assets/' + tema[Math.floor(Math.random() * tema.length)] + ')' });
}


