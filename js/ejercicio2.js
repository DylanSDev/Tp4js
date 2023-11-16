//Objeto cuenta
let cuenta = {
  //Atributos
  titular: "Alex",
  saldo: 0,

  //Metodos
  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
      console.log(`Se ingresaron $${cantidad} a la cuenta.`);
    } else {
      console.log("Ingrese una cantidad mayor a 0.");
    }
  },

  extraer: function (cantidad) {
    if (cantidad > 0) {
      this.saldo -= cantidad;
      console.log(`Se extrajeron $${cantidad} de la cuenta.`);
    } else {
      console.log("Ingrese una cantidad mayor a 0.");
    }
  },

  informar: function () {
    document.write("Titular: " + this.titular);
    document.write(` - Saldo actual: $${this.saldo} <br>`);
  },
};

cuenta.informar();
cuenta.ingresar(1000);
cuenta.informar();
cuenta.extraer(500);
cuenta.informar();
