
function catchImage(keyWord) {

    const settingsImage = {
        "async": true,
        "crossDomain": true,
        "url": `https://google-image-search1.p.rapidapi.com/v2/?q=${keyWord}&hl=en`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "2dba2fe63emsh7ea7002236d7713p1c7fc3jsnbbcf026c7dc8",
            "X-RapidAPI-Host": "google-image-search1.p.rapidapi.com"
        }
    }


    $.ajax(settingsImage).done(function (response) {
        console.log(response);

        const data = response.response;
        createImage(data, keyWord)
        

        return data
    });
}

function createImage(data, keyWord) {
    let listaObj = data.images
    const listaUrl = []
    for (let n = 0; n < listaObj.length; n++) {
        let url = listaObj[n].image.url
        listaUrl.push(url);
        
    }
    console.log(listaUrl);

    ls.setItem(`imagesUrl-${keyWord}`, listaUrl)
    

    

    /* let urlImage = data.images[random].image.url */
    /* createBackground(urlImage) */
    /* criar Json com array de url no ls  */
}