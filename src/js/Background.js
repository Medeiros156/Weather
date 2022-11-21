function createBackground(description) {
  if (!ls.getItem(`imagesUrl-${description}`)) {
    catchImage(description);
  }
  console.log(description);
  changeBackground()

  /* LOGICA PARA SELECIONAR QUAL BACKGROUND */
}

function changeBackground() {
  let dataClimate = ls.getItem(`imagesUrl-sun`);
  console.log(dataClimate);
  let urlBackground = dataClimate.split(",");
  /* console.log(urlBackground); */
  let random = Math.round(Math.random() * 100);
  $(".container").css(`background-image`, `url(${urlBackground[random]})`);
}
