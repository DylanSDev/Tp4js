let auto = {
  //Atributos
  color: "rojo",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  // Método para encender el auto
  encender: function () {
    if (!this.encendido) {
      this.encendido = true;
      console.log("Auto encendido");
    } else {
      console.log("El auto ya está encendido");
    }
  },

  // Método para apagar el auto
  apagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("El auto se apagó");
    } else {
      console.log("El auto ya está apagado");
    }
  },
};

auto.encender();
auto.apagar();
