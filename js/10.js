//acesso  de modificacion a los objetos 

"use strict"

const Producto = {
    nombreProducto: "Jabon de loza",
    precio: 2.500,
    disponibilidad: true
}




/* 
Object.freeze(Producto);
Producto.image = "imagen.jpg";
console.log(Producto)


Object.freeze() -> Este metodo sirve para cuando queremos que el objeto no acepte y sea extriction 
en la eliminacion modificacion de los atributos de la clase



 */

Object.seal(Producto); /* > Este metodo permite la edicion de los atributos pero le da una seguridad a el objeto   */
Producto.nombreProducto = "imagen.jpg";

console.log(Producto.nombreProducto)


