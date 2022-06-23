const fs = require('fs');
var colors = require('colors');

const crearArchivoAwait = async (multiplicando, listExit, multTo) => {
    try {

        let cadena = '';

        for (let mult = 0; mult <= multTo; mult++) {
            cadena += `${multiplicando} X ${mult} = ${multiplicando * mult}\n`;
        }
        if (listExit) {
            console.log('============================='.green);
            console.log('   Tabla de Multiplicar', multiplicando);
            console.log('=============================');
            console.log(cadena);
        }

        fs.writeFileSync(`tabla-${multiplicando}.txt`, cadena);
        console.log(`tabla-${multiplicando}.txt creado`);
        return `tabla-${multiplicando}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivoAwait
}
