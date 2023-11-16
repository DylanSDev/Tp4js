// Clase Producto
class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarPropiedades() {
    console.log(
      `Codigo: ${this.codigo} - Nombre: ${this.nombre} - Precio: ${this.precio}`
    );
  }
}

// Instancias del Producto
const producto1 = new Producto(1001, "Producto 1", 20.5);
const producto2 = new Producto(1002, "Producto 2", 15.75);
const producto3 = new Producto(1003, "Producto 3", 30.0);

// Array para almacenar las instancias creadas
const arrayProductos = [producto1, producto2, producto3];

//Imprimir datos
console.log("Datos de los productos: ");
arrayProductos.forEach((producto) => {
  producto.mostrarPropiedades();
});
