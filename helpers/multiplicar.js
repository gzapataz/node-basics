const fs = require('fs');
var colors = require('colors');

const crearArchivo = (multiplicando, listExit, multTo) => {
    let cadena = '';
    let consola = '';

    for (let mult = 0; mult <= multTo; mult++) {
        cadena += `${multiplicando} X ${mult} = ${multiplicando * mult}\n`;
        consola += `${multiplicando}` + colors.green(' X ') + `${mult}` + colors.green(' = ') +  `${multiplicando * mult}\n`;
    }

    if (listExit) {
        console.log('============================='.green);
        console.log('   Tabla de Multiplicar'.red, colors.magenta(multiplicando));
        console.log('============================='.green);
        console.log(consola);
    }

    let myPromise = new Promise((resolve, reject) => {
        try {
            fs.writeFileSync(`./salida/tabla-${multiplicando}.txt`, cadena);
            console.log(`tabla-${multiplicando}.txt`.rainbow + ` creado`);
            resolve(`tabla-${multiplicando}.txt`);
        } catch (err) {
            reject(err);
        }
    });
    return myPromise;
};

module.exports = {
    crearArchivo
}
