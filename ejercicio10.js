/**Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro.
*/
function removeHTMLTags(stringWithTags){
    let result=stringWithTags.replace(/<[^>]*>/g, "");
    return result;
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
console.log(result); // lorem ipsum
