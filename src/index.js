const data = {
    chuva: 20,
    vento: 20,
    temp: 21
}

$(function () {
    criaChuva();
    criaVento();
    criaTemp();
    update();
});

function criaChuva() {
    $(".info-chuva__data").text(data.chuva + "mm")
}
function criaVento() {
    $(".info-vento__data").text(data.vento + "Km")
}
function criaTemp() {
    $(".temp").text(data.temp + "°")
}


function update() {
    $(".update").on("click", () => {
        data.chuva += 1,
            data.vento += 1,
            data.temp += 1,
            $(".info-chuva__data").text(data.chuva + 1 + "mm"),
            $(".info-vento__data").text(data.vento + 1 + "Km"),
            $(".temp").text(data.temp + 1 + "°"),
            achaTema()
        /* toggleClass() */
    })
}

/* function toggleClass () {
    if (data.chuva > 25 ) {
        console.log("chuva")
        $(".container").toggleClass("chuva")   ;     
    } if (data.vento > 30)  {
        console.log("temp")
        $(".container").toggleClass("tempestade");
    }
} */