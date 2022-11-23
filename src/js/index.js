const ls = localStorage
const key = "ca481617449db955b575c8299b9ec9e2"

$(function () {
    update();
    formUpdate();
    createRain(ls.getItem('chuva'));
    createWind(ls.getItem('vento'));
    createTemp(ls.getItem('temp'));

    /* catchForecastData22() */
});

function update() {
    $(".update").on("click", () => {
        catchData(ls.getItem('city'));
        catchForecastData(ls.getItem('lat'), ls.getItem('lon'));
        createBackground(ls.getItem('descriptionMain'));
    })
}

function createRain(precip) {
    $("#info-chuva__data").text(precip + " mm")
}
function createWind(wind_spd) {
    $("#info-vento__data").text(wind_spd + " Km/h")
}

function createTemp(temp, n) {
    $(`#temp-${n}`).text(temp + " °")
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
        
        createBackground(dataWeather[ls.getItem('descriptionMain')]);
        
        $(".input").val("")
    })
}

function catchForecastData22() {
    $("#changeBackground").on("click", () => {
        catchForecastData2(-22.9028, -43.2075)
    })
}
function createDate(date, i) {
    console.log(date);
    $(`#date-${i}`).text(date)

}




