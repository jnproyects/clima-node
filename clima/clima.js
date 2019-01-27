

const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b3cd85d859aeacbef8fd5fb5d7468fe8`);

    if ( resp === undefined ) {
        throw new Error(`No hay información disponible`);   
    }

    let temp = resp.data.main.temp;
    let tempMin = resp.data.main.temp_min;
    let tempMax = resp.data.main.temp_max;

    return {
        temperatura: temp, 
        tempmin: tempMin, 
        tempmax: tempMax
    }
}


module.exports = {
    getClima
}