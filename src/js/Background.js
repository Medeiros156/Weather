
function createBackground(description) {

    if (!ls.getItem(`imagesUrl-${description}`)){

        catchImage(description);
    }
    console.log(description);
    

    /* LOGICA PARA SELECIONAR QUAL BACKGROUND */
    
    let dataClimate = ls.getItem(`imagesUrl-${description}`)
    let urlBackground = dataClimate.split(",")
    let random = Math.round(Math.random()*100);
    $(".container").css(`background-image`, `url(${urlBackground[random]})`)

}

