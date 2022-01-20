const fs = require('fs');

const nWriteFile = async (base = 5, lim = 10) => {

    console.log(`Tabla de multiplicar del ${base} x ${lim} generada con JS & Node`);
    console.log('------------------------------------------------');

    const filename = `tabla-${base}x${lim}.txt`
    let salida = '';

    try {
        for (i = 1; i <= lim; i++) {
            salida += `5 * ${i} = ${5 * i}\n`;
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