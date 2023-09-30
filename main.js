let parac;
let ibu;
let amoxi;
let cefa;
let diclo;
let paracPrecio = 1000;
let ibuPrecio = 2000;
let amoxiPrecio = 1000;
let cefaPrecio = 800;
let dicloPrecio = 1300;
let med1;
let med2;
let med3;
let med4;
let med5;
let resultado1;
let resultado2;
let resultado3;
let resultado4;
let resultado5;
let sumaTotal = 0;
let aceptaCompra;
for (let numero = 1; numero <= 5; numero++) {
  function pedirDatos() {
    let saludo = "Bienvenido";
    let nombre = prompt("Ingrese su nombre");
    if (nombre !== "") {
      let apellido = prompt("Ingrese su apellido");
      if (apellido !== "") {
        let direccion = prompt("Ingrese su direccion");
        if (direccion !== "") {
          alert(`${saludo} ${nombre} ${apellido}`);

          parac = prompt("Ingrese si quiere Paracetamol (si/no)").toLowerCase();
          if (parac === "si") {
            med1 = parseInt(
              prompt("Ingrese la cantidad de cajas de Paracetamol que necesita")
            );
            if (med1 < 0) {
              resultado1 = 0;
              alert(`No ingresaste cantidad`);
            } else if (med1 > 5) {
              resultado1 = 0;
              alert(`No hay esa cantidad`);
            } else {
              resultado1 = med1 * paracPrecio;
              alert(`$${resultado1}`);
            }
          } else if (parac === "no") {
            resultado1 = 0;
            alert("Usted no quiere Paracetamol");
          } else {
            resultado1 = 0;
            alert("No ingresaste si/no");
          }
          ibu = prompt("Ingrese si quiere Ibuprofeno (si/no)").toLowerCase();

          if (ibu === "si") {
            med2 = parseInt(
              prompt("Ingrese la cantidad de cajas de Ibuprofeno que necesita")
            );
            if (med2 < 0) {
              resultado2 = 0;
              alert(`No ingresaste cantidad`);
            } else if (med2 > 5) {
              resultado2 = 0;
              alert(`No hay esa cantidad`);
            } else {
              resultado2 = med2 * ibuPrecio;
              alert(`$${resultado2}`);
            }
          } else if (ibu === "no") {
            resultado2 = 0;
            alert("Usted no quiere Ibuprofeno");
          } else {
            resultado2 = 0;
            alert("No ingresaste si/no");
          }
          amoxi = prompt("Ingrese si quiere Amoxicilina (si/no)").toLowerCase();

          if (amoxi === "si") {
            med3 = parseInt(
              prompt("Ingrese la cantidad de cajas de Amoxicilina que necesita")
            );
            if (med3 < 0) {
              resultado3 = 0;
              alert(`No ingresaste cantidad`);
            } else if (med3 > 5) {
              resultado3 = 0;
              alert(`No hay esa cantidad`);
            } else {
              resultado3 = med3 * amoxiPrecio;
              alert(`$${resultado3}`);
            }
          } else if (amoxi === "no") {
            resultado3 = 0;
            alert("Usted no quiere Amoxicilina");
          } else {
            resultado3 = 0;
            alert("No ingresaste si/no");
          }
          cefa = prompt("Ingrese si quiere Cefalexina (si/no)").toLowerCase();

          if (cefa === "si") {
            med4 = parseInt(
              prompt("Ingrese la cantidad de cajas de Cefalexina que necesita")
            );
            if (med4 < 0) {
              resultado4 = 0;
              alert(`No ingresaste cantidad`);
            } else if (med4 > 5) {
              resultado4 = 0;
              alert(`No hay esa cantidad`);
            } else {
              resultado4 = med4 * cefaPrecio;
              alert(`$${resultado4}`);
            }
          } else if (cefa === "no") {
            resultado4 = 0;
            alert("Usted no quiere Cefalexina");
          } else {
            resultado4 = 0;
            alert("No ingresaste si/no");
          }
          diclo = prompt("Ingrese si quiere Diclofenac (si/no)").toLowerCase();

          if (diclo === "si") {
            med5 = parseInt(
              prompt("Ingrese la cantidad de cajas de Diclofenac que necesita")
            );
            if (med5 < 0) {
              resultado5 = 0;
              alert(`No ingresaste cantidad`);
            } else if (med5 > 5) {
              resultado5 = 0;
              alert(`No hay esa cantidad`);
            } else {
              resultado5 = med5 * dicloPrecio;
              alert(`$${resultado5}`);
            }
          } else if (diclo === "no") {
            resultado5 = 0;
            alert("Usted no quiere Diclofenac");
          } else {
            resultado5 = 0;
            alert("No ingresaste si/no");
          }
          sumaTotal =
            resultado1 + resultado2 + resultado3 + resultado4 + resultado5;

          if (sumaTotal > 0) {
            aceptaCompra = prompt(
              `El total es: $${sumaTotal}. ¿Acepta la compra? (si/no)`
            );
            if (aceptaCompra !== "si") {
              alert(`Pedido Cancelado`).toLowerCase();
            } else {
              alert(
                `PEDIDO: #${numero} NOMBRE Y APELLIDO: ${nombre} ${apellido} DIRECCION: ${direccion}`
              );
            }
          } else {
            alert(`Pedido Cancelado!!`);
          }
        } else {
          alert("No ingresaste ninguna Direccion");
        }
      } else {
        alert("No ingresaste tu Apellido");
      }
    } else {
      alert(`Nombre se debe ingresar`);
    }
  }
  pedirDatos();
}
alert("No disponemos de cadete de momento, intente mas tarde. Muchas Gracias");
