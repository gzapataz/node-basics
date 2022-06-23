const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'Base de la multiplicacion'
        },
        l: {
            alias: 'list',
            demandOption: true,
            default: false,
            type: 'boolean',
            describe: 'Presentar la tabla en consola'
        },
        h: {
            alias: 'hasta',
            demandOption: true,
            default: 10,
            type: 'number',
            describe: 'Hasta donde se calcula la tabla'
        }
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'Base needs to be a number';
        }
        if (isNaN(argv.h)) {
            throw 'Hasta needs to be a number';
        }
        return true;
    })
    .argv;

module.exports = argv;
