function catchImage(keyWord) {
  console.log(keyWord);
  const settingsImage = {
    async: true,
    crossDomain: true,
    url: `https://api.unsplash.com/search/photos?page=10&query=${keyWord}+Sky`,
    method: "GET",
    headers: {
      Authorization: IMAGEAUTH,
    },
  };

  $.ajax(settingsImage)
    .done(function (response) {
      console.log(response);

      const data = response.results;
      console.log(data);
      createImageList(data, keyWord);

      return data;
    })
    .fail(() => console.log("error fetch"));
}

function createImageList(data, keyWord) {
  const listaUrl = [];
  console.log(data);
  for (let n = 0; n < data.length; n++) {
    let url = data[n].urls.raw;
    listaUrl.push(url);
  }

  ls.setItem(`imagesUrl-${keyWord}`, JSON.stringify(listaUrl));

  createBackground(keyWord);
}

function createBackground(description) {
  console.log(description);
  if (!ls.getItem(`imagesUrl-${description}`)) {
    catchImage(description);
  }
  let dataClimate = JSON.parse(ls.getItem(`imagesUrl-${description}`));
  console.log(dataClimate);
  let random = Math.floor(Math.random() * 10);
  console.log(random);
  $("body").css(`background-image`, `url(${dataClimate[random]}&w=1500&dpr=2)`);
}
