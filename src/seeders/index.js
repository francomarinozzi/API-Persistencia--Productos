const productosSeeder = require('./productosSeeders')

async function crearDatosIniciales() {
    //Crea datos de ejemplo para hacer pruebas
    try{
        await productosSeeder();
    }
    catch(error){
        console.log('Error', error)
    }
} 

module.exports = {crearDatosIniciales}