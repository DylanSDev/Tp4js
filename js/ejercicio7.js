class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}

class Agenda {
  constructor(tamano = 10) {
    this.contactos = [];
    this.tamanoMaximo = tamano;
  }

  aniadirContacto(contacto) {
    if (this.contactos.length < this.tamanoMaximo) {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
    } else {
      console.log("La agenda está llena. No se pueden añadir más contactos.");
    }
  }

  existeContacto(contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === contacto.nombre) {
        console.log("Se encontro al contacto: " + contacto);
        return 1;
      }
    }
    console.log("No se encontro al contacto: " + contacto);
    return 0;
  }
  listarContactos() {
    console.log("Lista de contactos:");
    this.contactos.forEach((c) => console.log(`${c.nombre}: ${c.telefono}`));
  }

  buscarContacto(nombre) {
    const contacto = this.contactos.find((c) => c.nombre === nombre);
    if (contacto) {
      console.log(`Teléfono de ${nombre}: ${contacto.telefono}`);
    } else {
      console.log(`No se encontró un contacto con el nombre ${nombre}.`);
    }
  }

  eliminarContacto(contacto) {
    const indice = this.contactos.findIndex(
      (c) => c.nombre === contacto.nombre
    );
    if (indice !== -1) {
      this.contactos.splice(indice, 1);
      console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
    } else {
      console.log(
        `No se encontró un contacto con el nombre ${contacto.nombre}. No se pudo eliminar.`
      );
    }
  }

  agendaLlena() {
    if (this.contactos.length >= this.tamanoMaximo) {
      console.log("La Agenda está llena.");
    } else console.log("La Agenda no está llena.");
  }

  huecosLibres() {
    console.log(
      "Huecos Libres: " + (this.tamanoMaximo - this.contactos.length)
    );
  }
}

// Función para mostrar el menú y procesar las operaciones
function mostrarMenu(agenda) {
  while (true) {
    const opcion = prompt(`
        Menú de Agenda:
        1. Añadir Contacto
        2. Comprobar Existencia de Contacto
        3. Listar Contactos
        4. Buscar Contacto por Nombre
        5. Eliminar Contacto
        6. Agenda Llena
        7. Huecos Libres
        8. Salir
      `);

    switch (opcion) {
      case "1":
        const nombre = prompt("Ingrese el nombre del contacto:");
        const telefono = prompt("Ingrese el teléfono del contacto:");
        const nuevoContacto = new Contacto(nombre, telefono);
        agenda.aniadirContacto(nuevoContacto);
        break;
      case "2":
        const nombreExistencia = prompt(
          "Ingrese el nombre del contacto a verificar:"
        );
        console.log(agenda.existeContacto(new Contacto(nombreExistencia)));
        break;
      case "3":
        agenda.listarContactos();
        break;
      case "4":
        const nombreBusqueda = prompt(
          "Ingrese el nombre del contacto a buscar:"
        );
        agenda.buscarContacto(nombreBusqueda);
        break;
      case "5":
        const nombreEliminar = prompt(
          "Ingrese el nombre del contacto a eliminar:"
        );
        agenda.eliminarContacto(new Contacto(nombreEliminar));
        break;
      case "6":
        agenda.agendaLlena();
        break;
      case "7":
        agenda.huecosLibres();
        break;
      case "8":
        return;
      default:
        console.log(
          "Opción no válida. Por favor, elija una opción del 1 al 8."
        );
    }
  }
}

// Uso de la agenda y el menú
const tamanoAgenda = prompt(
  "Ingrese el tamaño de la agenda (por defecto es 10):"
);
const agenda = new Agenda(tamanoAgenda || 10);

mostrarMenu(agenda);
