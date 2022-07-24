const ls = localStorage
const key = "ca481617449db955b575c8299b9ec9e2"

$(function () {
    update();
    formUpdate();
    toggleBackground()
    createRain(ls.getItem('chuva'));
    createWind(ls.getItem('vento'));
    createTemp(ls.getItem('temp'));
});

function update() {
    $(".update").on("click", () => {
        console.log("click");
        catchData(ls.getItem('city'));
        catchForecastData(ls.getItem('lat'), ls.getItem('lon'))
        createBackground();
    })
}

function createRain(precip) {
    $("#info-chuva__data").text(precip + " mm")
}
function createWind(wind_spd) {
    $("#info-vento__data").text(wind_spd + " Km/h")
}
function createTemp(temp) {
    $("#temp").text(temp + " °")
}
function createTempMax(tempMax, n) {
    $(`#tempMax-${n}`).text("Max: " + tempMax + " °")
}
function createTempMin(tempMin, n) {
    $(`#tempMin-${n}`).text("Min: " + tempMin + " °")
}
function createHumidity(humidity, n) {
    $(`#humidity-${n}`).text(humidity + "%")
}
function createDescription(description, n) {
    $(`#description-${n}`).text(description)
}

function formUpdate() {
    $("#form").on("submit", (event) => {
        event.preventDefault();
        let cityName = $(".input").first().val();
        catchData(cityName);
        catchForecastData(ls.getItem('lat'), ls.getItem('lon'))
        createBackground();
        $(".input").val("")
    })
}


function createDate(date, n) {
    $(`#date-${n}`).text(date)

}

function toggleBackground() {
    $("#toggleBackground").on("click", () => {

        catchImage("céu limpo");
        catchImage("nuvens quebradas");
        catchImage("nuvens dispersas");
        catchImage("nublado");
        catchImage("chuva fraca");
        catchImage("céu pouco nublado");
       
    })
}

function createBackground() {

    /* LOGICA PARA SELECIONAR QUAL BACKGROUND */
    
    let dataClimate = ls.getItem("imagesUrl-sun")
    let urlBackground = dataClimate.split(",")
    let random = Math.round(Math.random()*100);
    $(".container").css(`background-image`, `url(${urlBackground[random]})`)

}



