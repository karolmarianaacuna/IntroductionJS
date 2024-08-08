/* En javaScript s epuede hacer la union de dos objetos */ 

const Producto = {
    nombre: 'Computadora',
    precio: 1000

}

const medidas = {
    ancho: 20,
    alto: 30

}


const unionObjetos = { ...Producto, ...medidas}

console.log(unionObjetos);
