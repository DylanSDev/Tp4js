class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = this.generaDNI();
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  calcularGeneracion() {
    if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
      return "Silent Generation";
    } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
      return "Baby Boom";
    } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
      return "X";
    } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
      return "Millennials";
    } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
      return "Z";
    } else {
      return "No definida";
    }
  }

  mostrarGeneracion() {
    const generacion = this.calcularGeneracion();
    document.write(
      `${this.nombre} pertenece a la Generación ${generacion}. <br>`
    );
  }

  esMayorDeEdad() {
    if (2023 - this.anioNacimiento >= 18) {
      document.write(`${this.nombre} es mayor de edad. <br>`);
    } else {
      document.write(`${this.nombre} es menor de edad. <br>`);
    }
  }

  mostrarDatos() {
    document.write(` 
    Nombre: ${this.nombre}.<br> 
    Edad: ${this.edad}.<br>
    DNI: ${this.dni}.<br>
    Sexo: ${this.sexo}.<br>
    Peso: ${this.peso}kg.<br> 
    Altura: ${this.altura}m.<br>
    Año de Nacimiento: ${this.anioNacimiento}.<br>
    `);
  }

  generaDNI() {
    return Math.floor(Math.random() * 90000000) + 10000000;
  }
}

let persona1 = new Persona("Juan", 45, "H", 80, 1.8, 2000);
persona1.mostrarDatos();
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
