
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async (direccion)=> {

    try {
        
        let coords = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lng);
    
        return  `El clima en ${ coords.direccion } es de ${temperatura.temperatura}`;
        
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}


// para no anidar el llamado a las funciones hacemos lo de arriba.
// lugar.getLugarLatLng(argv.direccion).then( resp => {
//     console.log(resp);
    
// })
// .catch( e => console.log(e));

// clima.getClima('6.244203', '-75.5812119')
//     .then( temp => console.log(temp))
//     .catch( e => console.log(e));


getInfo(argv.direccion)
    .then(info => console.log(info))
    .catch(e => console.log(e));




