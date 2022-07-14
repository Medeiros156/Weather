const axios = require("axios");
const fs = require('fs');

const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: {lon: '-22.908333', lat: '-43.196388', units: 'metric', lang: 'pt'},
    headers: {
      'X-RapidAPI-Key': '2dba2fe63emsh7ea7002236d7713p1c7fc3jsnbbcf026c7dc8',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };

axios.request(options).then(function (response) {

    console.log(response.data)
    let dataJson = JSON.stringify(response.data)
    /* console.log(dataJson); */
    fs.writeFile("data.json", dataJson, (err) => { })
   
}).catch(function (error) {
	console.error(error);
});
