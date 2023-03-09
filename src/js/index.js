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
});

$(".update").on("click", () => {
  update();
});

$(".navbarIcon").click(() => {
  $(".navbar").toggleClass("show");
  window.scrollTo(0, 0);
});

function update() {
  catchData(ls.getItem("city"));
  catchForecastData(ls.getItem("lat"), ls.getItem("lon"));
}

function formUpdate() {
  $("#form").on("submit", (event) => {
    event.preventDefault();
    let cityName = $(".input").first().val();

    ls.setItem("city", cityName);

    update();
    $(".input").val("");
  });
}

function createTitle(desc) {
  $(".titulo").text(desc);
}

function createRain(precip) {
  $("#info-chuva__data").text(precip + "mm");
}
function createWind(wind_spd) {
  $("#info-vento__data").text(wind_spd + "Km/h");
}

function createTemp(temp, n) {
  $(`#temp-${n}`).text(temp + "°C");
}

function createHumidity(humidity, n) {
  $(`#humidity-${n}`).text(humidity + "%");
}
function createDescription(description, n) {
  $(`#description-${n}`).text(description);
}

function createDate(date, i) {
  $(`#date-${i}`).text(date);
}

function createIconMain(icon, n) {
  $(`#icon-${n}`).attr(
    "src",
    `http://openweathermap.org/img/wn/${icon}@4x.png`
  );
}
function createIcon(icon, n) {
  $(`#icon-${n}`).attr("src", `http://openweathermap.org/img/wn/${icon}.png`);
}

function rotateArrow(deg) {
  console.log("rotate" + deg);
  $("#arrow").css("transform", `rotate(${180 + deg}deg)`);
}
function toUpperCase(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  words.join(" ");
  let sen = words.toString();
  return sen.replaceAll(",", " ");
}

function createDateData(dateString, n) {
  let week = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  let dateObj = new Date(dateString);
  let date = week[dateObj.getDay()];
  createDate(date, n);
}
