var sun = ["sun-1.jpg", "sun-2.jpg", "sun-3.jpg"];
var rain = ["rain-1.jpg", "rain-2.jpg"];
var storm = ["storm-1.jpg", "storm-2.jpg", "storm-3.jpg"];
var cloudy = ["cloudy-1.jpg", "cloudy-2.jpg"];

var tema = []
function achaTema(vento, chuva, temp) {
    console.log("achaOTema");
    if (chuva > 0) {
        tema = rain; console.log("rain")
    }
    else if (vento > 20 && chuva != 0) {
        tema = storm, console.log("temp")
    }
    else if (temp > 20 && chuva == 0) {
        tema = sun, console.log("sun")
    }
    $('.container').css({ 'background-image': `url(../../Assets/${tema[Math.floor(Math.random() * tema.length)]})` });
}


