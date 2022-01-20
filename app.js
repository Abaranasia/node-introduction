require('colors');
const argv = require('./config/yargs');

const { nWriteFile } = require('./helpers/fileFunctions');

const { b, l } = argv;

console.clear();

nWriteFile(b, l)
    .then(filename => console.log(`The file ${filename} has been succesfully created`.green))
    .catch(err => console.log(`Ah error happened ${err} :(`.red))
