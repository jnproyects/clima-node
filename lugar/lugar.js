

const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encondedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encondedUrl}&key=AIzaSyAu2rb0mobiznVJnJd6bVb5Bn2WsuXP2QI`)
    
    if ( resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para el lugar ingresado ${ direccion }`);   
    }
    
    let location = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;

    return {
        direccion: location, 
        lat, 
        lng
    }
}

module.exports = {
    getLugarLatLng
}