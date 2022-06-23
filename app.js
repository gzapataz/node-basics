
const { crearArchivo } = require('./helpers/multiplicar')
const { crearArchivoAwait } = require('./helpers/multiplicarAwait');
const argv = require('./config/yargs');

console.clear();

const promiseType = 1;

if (promiseType === 1) {

    crearArchivo(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo))
        .catch(err => console.log(err));
}
else {
    crearArchivoAwait(argv.b, argv.l, argv.h)
        .then(nombreArchivo => console.log(nombreArchivo))
        .catch(err => console.log(err));
}

