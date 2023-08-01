require('colors');

const argv = require('./config/yargs');
const { createFile } = require('./helpers/fileFunctions');

const { base, limit } = argv;

console.clear();

createFile(base, limit)
  .then((filename) =>
    console.log(`The file ${filename} has been succesfully created`.green)
  )
  .catch((err) => console.log(`Ah error happened ${err} :(`.red));
