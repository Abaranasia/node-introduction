require('colors');
const fs = require('fs');

const nWriteFile = async (base = 5, lim = 10) => {
    console.log('----------------------------------------------------------'.yellow);
    console.log(`Tabla de multiplicar del ${base} x ${lim} generada con JS & Node`.cyan);
    console.log('----------------------------------------------------------'.yellow);

    const filename = `output/tabla-${base}x${lim}.txt`
    let salida = '';

    try {
        for (i = 1; i <= lim; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        };

        fs.writeFileSync(filename, salida);
        console.log(salida);
        return filename;
    } catch (err) {
        throw err;
    }
}
module.exports = {
    nWriteFile
}