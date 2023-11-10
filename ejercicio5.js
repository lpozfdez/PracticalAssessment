/*Ejercicio 5: Dado un array de ciudades, sacar en un nuevo array las ciudades 
no capitales con unos nuevos parámetros que sean city y isSpain. 
El valor de isSpain será un booleano indicando si es una ciudad de España.
*/

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
]

const noCapital=arrCities
                    .filter(item=>!item.capital)/*
                    .map(function(item){
                        let isSpain=true;
                        if(item.country!=='Spain'){
                            isSpain=false;
                        }
                        return({  
                            city: item.city,
                            isSpain:isSpain
                        })
                    });*/

                    .map((item)=>{
                        return({  
                            city: item.city,
                            isSpain:item.country==='Spain' //? true : false
                        })
                    })
                        

console.log(noCapital);