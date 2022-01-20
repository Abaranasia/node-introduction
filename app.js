const fs = require('fs');
const argv = require('yargs').argv;
const { nWriteFile } = require('./helpers/fileFunctions');

const { a, b } = argv;

nWriteFile(a, b)
    .then(filename => console.log(`The file ${filename} has been succesfully created`))
    .catch(err => console.log(`Ah error happened ${err} :(`))
