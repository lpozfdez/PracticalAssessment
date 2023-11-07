/**Ejercicio6: Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
⦁	Primer parámetro es un número float con x decimales
⦁	Según parámetro es un int que indique el número de decimales al que redondear
⦁	Evitar usar el método toFixed()
 */
function round(num, numDouble){
    let numInt=Math.trunc(Math.pow(10,numDouble)*num);
    return numInt/Math.pow(10,numDouble);
}

let result=round(1.123456789, 6);

console.log(result);