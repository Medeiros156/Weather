const ls = localStorage;
const key = "ca481617449db955b575c8299b9ec9e2";

$(function () {
  if (!ls.getItem("city")) {
    ls.setItem("city", "Rio de Janeiro");
    update();
  }
  formUpdate();
  createRain(ls.getItem("chuva"));
  createWind(ls.getItem("vento"));
  createTemp(ls.getItem("temp"));
  
  update();
  /* catchForecastData22() */
});

$(".update").on("click", () => {
  update();
});

$(".navbarIcon").click(()=>{
  $(".navbar form").toggleClass("none")
  window.scrollTo(0,0)
})

function update() {
  catchData(ls.getItem("city"));
  catchForecastData(ls.getItem("lat"), ls.getItem("lon"));
  createBackground(ls.getItem("descriptionMain"));
  createTitle(ls.getItem("descriptionMain"));
}

function createTitle(desc) {
  $(".titulo").text(desc);
}

function createRain(precip) {
  $("#info-chuva__data").text(precip + " mm");
}
function createWind(wind_spd) {
  $("#info-vento__data").text(wind_spd + " Km/h");
}

function createTemp(temp, n) {
  $(`#temp-${n}`).text(temp + " °");
}

function createHumidity(humidity, n) {
  $(`#humidity-${n}`).text(humidity + "%");
}
function createDescription(description, n) {
  $(`#description-${n}`).text(description);
}

function formUpdate() {
  $("#form").on("submit", (event) => {
    event.preventDefault();
    let cityName = $(".input").first().val();
    catchData(cityName);

    catchForecastData(ls.getItem("lat"), ls.getItem("lon"));

    createBackground(dataWeather[ls.getItem("descriptionMain")]);

    $(".input").val("");
  });
}

function catchForecastData22() {
  $("#changeBackground").on("click", () => {
    catchForecastData2(-22.9028, -43.2075);
  });
}
function createDate(date, i) {
  console.log(date);
  $(`#date-${i}`).text(date);
}

function createIcon(icon, n){
  $(`#icon-${n}`).attr('src',`http://openweathermap.org/img/w/${icon}.png`)
}





function toUpperCase(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  words.join(" ")
  let sen = words.toString()

  return sen.replace(',', ' ');
}

