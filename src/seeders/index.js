const {initialProducts,initialFabricantes,initialComponentes} = require('./seeders')

async function crearDatosIniciales() {
    //Crea datos de ejemplo para hacer pruebas
    try{
        await initialProducts(); 
        await initialFabricantes();
        await initialComponentes();
    }
    catch(error){
        console.log('Error', error)
    }
} 


module.exports = {crearDatosIniciales}