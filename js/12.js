/* arreglos */

const numeros = [1,5,15,20,25,30];
console.table(numeros);

const meses = ["Enero","febrero","Marzo","Abril","Mayo","Junio","Julio","Agosti ","septiembre","octubre","Noviembre","Diciembre"];
console.table(meses);

/* Los arreglos no tiene la limitacion de ser unica y exclusivamnete de un tipo de dato */
const cosas = [ 12, "muñeca","oso", 123.0971]
console.table(cosas);



/* para aceder a los valores de un arreglo normalmente se hace mediante el indice o la posicion en la que esten */ 
console.log(numeros[4]);
console.log(numeros[5]);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);

console.log(numeros.length);

meses.forEach (function(numeros){
    console.log(numeros);

})

