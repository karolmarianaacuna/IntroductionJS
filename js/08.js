//objetos 

const Producto = {
    nombreProducto: "Jabon de loza",
    precio: 2.500,
    disponibilidad: true
}


//agredar atributos a la clase producto 
Producto.color = "verde";

//eliminar atributos de la clase 
delete Producto.disponibilidad;



/* console.log(Producto.nombreProducto);
console.log(Producto["precio"]); */
console.log(Producto)
