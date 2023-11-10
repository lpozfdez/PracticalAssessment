/**Ejercicio8: 
 * Crea una función que convierta un número de bytes en un formato con valores legibles 
 * ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
⦁	Primer parámetro debe ser el número de bytes
⦁	Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar 

el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe 
de tener un valor de 3.
 */
function fromBytesToFormattedSizeUnits(numBytes, numTrunc=3){
    const data={
        'YB': Math.pow(2, 80),
        'ZB': Math.pow(2, 70),
        'EB': Math.pow(2, 60),
        'PB': Math.pow(2, 50),
        'TB': Math.pow(2, 40),
        'GB': Math.pow(2, 30),
        'MB': Math.pow(2, 20),
        'KB': Math.pow(2, 10)-24,
        'B': Math.pow(2, 0)
    }
   // console.log(data);
    let result = '';
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
        if (Math.abs (numBytes) >= data[keys[i]]) {
            
            numBytes = numBytes / 1000;
            result = numBytes + keys[i];
            break;
        }
    }
    
    return result;
}

/*
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB
*/
const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB
/*
const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
*/