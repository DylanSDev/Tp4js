class rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificarAlto(nuevoAlto) {
    this.alto = nuevoAlto;
  }

  modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }

  mostrarPropiedades() {
    console.log(`Alto: ${this.alto}, Ancho: ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}

const rectangulo1 = new rectangulo(10, 20);
rectangulo1.mostrarPropiedades();
rectangulo1.modificarAlto(15);
rectangulo1.modificarAncho(25);
console.log("Se han modificado las propiedades del Rectangulo 1.");
rectangulo1.mostrarPropiedades();

console.log("Area del rectangulo: " + rectangulo1.calcularArea());
console.log("Perimetro del rectangulo: " + rectangulo1.calcularPerimetro());
