//Ejercicio 4: Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 
const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const intersection=arrNumber1.filter(item=>arrNumber2.includes(item))
                            .filter(item=>arrNumber3.includes(item));

console.log(intersection);
