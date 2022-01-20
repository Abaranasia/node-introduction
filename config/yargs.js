const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base operator of the multiply operation'
    }).option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        describe: 'limit operator of the multiply operation'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'base argument must be a number'
        };
        return true
    })
    .check((argv, options) => {
        if (isNaN(argv.l)) {
            throw 'limit argument must be a number'
        };
        return true
    })
    .argv;

module.exports = argv;