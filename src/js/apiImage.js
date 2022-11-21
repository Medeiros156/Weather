
function catchImage(keyWord) {

    const settingsImage = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.unsplash.com/search/photos?query=sun`,
        "method": "GET",
        "headers": {
            "Authorization": "Client-ID lt01JJdVhTVWIrFUryd22BhAf7x99UZtMfWpPFt_joU"
        }
    }


    $.ajax(settingsImage).done(function (response) {
        console.log(response);

        const data = response.results;
        console.log(data);
        createImage(data, keyWord)
        

        return data
    });
}

function createImage(data, keyWord) {
    const listaUrl = []
    console.log(data);
    for (let n = 0; n < data.length; n++) {
        let url = data[n].links.html
        listaUrl.push(url);
        
    }
    console.log(typeof(listaUrl));

    ls.setItem(`imagesUrl-${keyWord}`, listaUrl)
       

    
    createBackground(keyWord) 
     
}