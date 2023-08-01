require('colors');
const fs = require('fs');

const createFile = async (base = 5, limit = 10) => {
  console.log('-------------------------------------------------------'.yellow);
  console.log(
    `Tabla de multiplicar del ${base} x ${limit} generada con JS & Node`.cyan
  );
  console.log('-------------------------------------------------------'.yellow);

  const filename = `output/tabla-${base}x${limit}.txt`;
  let salida = '';

  try {
    for (i = 1; i <= limit; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFileSync(filename, salida);
    console.log(salida);
    return filename;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  createFile,
};