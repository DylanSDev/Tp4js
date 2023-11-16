class Libro {
  //Declaramos los atributos como privados
  #isbn;
  #titulo;
  #autor;
  #numPaginas;

  //Constructor
  constructor(isbn, titulo, autor, numPaginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numPaginas = numPaginas;
  }

  //Getters y Setters
  //ISBN
  get isbn() {
    return this.#isbn;
  }

  set isbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }

  //Titulo
  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }

  //Autor
  get autor() {
    return this.#autor;
  }

  set autor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }

  //Número de Páginas
  get numPaginas() {
    return this.#numPaginas;
  }

  set numPaginas(nuevoNumPaginas) {
    this.#numPaginas = nuevoNumPaginas;
  }

  //Metodo para mostrar libros
  mostrarLibro() {
    document.write(
      `El libro "${this.#titulo}" con ISBN ${this.#isbn} creado por el autor ${
        this.#autor
      } , tiene  ${this.#numPaginas} páginas. <br>`
    );
  }
}

const libro1 = new Libro("1234567890", "Mi libro", "Autor 1", 150);
const libro2 = new Libro("0987654321", "Luna de Plutón", "Autor 2", 200);

// Mostrar la información de los libros
libro1.mostrarLibro();
libro2.mostrarLibro();

// Comparar el número de páginas de los dos libros
if (libro1.numPaginas > libro2.numPaginas) {
  document.write("El libro 1 tiene más páginas. <br>");
} else if (libro1.numPaginas < libro2.numPaginas) {
  document.write("El libro 2 tiene más páginas. <br>");
} else {
  document.write("Ambos libros tienen la misma cantidad de páginas. <br>");
}
