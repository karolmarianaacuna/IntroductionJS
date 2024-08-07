/* //Destructuring ->La desestructuración es una expresión de JavaScript que hace posible extraer
 valores de los arreglos, o propiedades de objetos, en otras variables. */

const Producto = {
    nombreProducto: "Jabon de loza",
    precio: 2.500,
    disponibilidad: true
}

const {precio, disponibiliad} = Producto;

const nombreNuevo = Producto.nombreProducto

console.log(nombreNuevo)