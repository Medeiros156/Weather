const ls = localStorage

$(function () {
    update();
    createCity();
    createRain(ls.getItem('chuva'));
    createWind(ls.getItem('vento'));
    createTemp(ls.getItem('temp'));
});

function update() {
    $(".update").on("click", () => {
        console.log("click");
        catchData(ls.getItem('city'));
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

function createCity() {
    $("#form").on("submit", (event) => {
        event.preventDefault();
        let cityName = $(".input").first().val();
        catchData(cityName);
        $(".input").val("")
       })
    }

function backChange() {
    $("#toggleBackground").on("click", () => {
        achaTema(Math.random(),Math.random(),Math.random(),)
    })
}




