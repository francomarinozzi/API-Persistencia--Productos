const {initialProducts,initialFabricantes} = require('./seeders')

async function crearDatosIniciales() {
    //Crea datos de ejemplo para hacer pruebas
    try{
        await initialFabricantes();
        await initialProducts();
    }
    catch(error){
        console.log('Error', error)
    }
} 

module.exports = {crearDatosIniciales}