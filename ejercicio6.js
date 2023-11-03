/**Ejercicio6: Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
⦁	Primer parámetro es un número float con x decimales
⦁	Según parámetro es un int que indique el número de decimales al que redondear
⦁	Evitar usar el método toFixed()
 */
function redondear(num, numDecimales){
    let numEntero=Math.trunc(Math.pow(10,numDecimales)*num);
    return numEntero/Math.pow(10,numDecimales);
}

let resultado=redondear(1.123456789, 6);

console.log(resultado);