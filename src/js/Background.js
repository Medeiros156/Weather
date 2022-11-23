function createBackground(description) {
  console.log(description);
  if (!ls.getItem(`imagesUrl-${description}`)) {
    catchImage(description);
  }
  console.log(description);
  changeBackground(description)

  /* LOGICA PARA SELECIONAR QUAL BACKGROUND */
}

function changeBackground(description) {
  let dataClimate = JSON.parse(ls.getItem(`imagesUrl-${description}`));
  console.log(dataClimate);
  let random = Math.round(Math.random() * 10);
  
  $(".container").css(`background-image`, `url(${dataClimate[random]}&w=1500&dpr=2)`);
  
}
