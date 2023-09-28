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

          let parac = prompt(
            "Ingrese si quiere Paracetamol (si/no)"
          ).toLowerCase();
          let paracprecio = 1000;
          if (parac === "si") {
            let med1 = parseInt(
              prompt("Ingrese la cantidad de cajas de Paracetamol que necesita")
            );
            if (med1 < 1) {
              alert(`No ingresaste cantidad`);
            } else if (med1 > 5) {
              alert(`No hay esa cantidad`);
            } else {
             let resultado1 = alert(med1 * paracprecio);
            }

          } else if (parac === "no") {
            alert("Usted no quiere Paracetamol");
          } else {
            alert("No ingresaste si/no");
          }
          let ibu = prompt(
            "Ingrese si quiere Ibuprofeno (si/no)"
          ).toLowerCase();
          let ibuprecio = 2000
          if (ibu === "si") {
            let med2 = parseInt(
              prompt("Ingrese la cantidad de cajas de Ibuprofeno que necesita")
            );
            if (med2 < 1) {
              alert(`No ingresaste cantidad`);
            } else if (med2 > 5) {
              alert(`No hay esa cantidad`);
            } else {
              let resultado2 = alert(med2 * ibuprecio);
              
            }

          } else if (ibu === "no") {
            alert("Usted no quiere Ibuprofeno");
          } else {
            alert("No ingresaste si/no");
          }
          let amoxi = prompt(
            "Ingrese si quiere Amoxicilina (si/no)"
          ).toLowerCase();
          let amoxiprecio = 1000
          if (amoxi === "si") {
            let med3 = parseInt(
              prompt("Ingrese la cantidad de cajas de Amoxicilina que necesita")
            );
            if (med3 < 1) {
              alert(`No ingresaste cantidad`);
            } else if (med3 > 5) {
              alert(`No hay esa cantidad`);
            } else {
              let resultado3 = alert(med3 * amoxiprecio);
            }
          } else if (amoxi === "no") {
            alert("Usted no quiere Amoxicilina");
          } else {
            alert("No ingresaste si/no");
          }
          let cefa = prompt(
            "Ingrese si quiere Cefalexina (si/no)"
          ).toLowerCase();
          let cefaprecio = 800
          if (cefa === "si") {
            let med4 = parseInt(
              prompt("Ingrese la cantidad de cajas de Cefalexina que necesita")
            );
            if (med4 < 1) {
              alert(`No ingresaste cantidad`);
            } else if (med4 > 5) {
              alert(`No hay esa cantidad`);
            } else {
              let resultado4 = alert(med4 * cefaprecio);
              
            }
          } else if (cefa === "no") {
            alert("Usted no quiere Cefalexina");
          } else {
            alert("No ingresaste si/no");
          }
          let diclo = prompt(
            "Ingrese si quiere Diclofenac (si/no)"
          ).toLowerCase();
          let dicloprecio = 1300
          if (diclo === "si") {
            let med5 = parseInt(
              prompt("Ingrese la cantidad de cajas de Diclofenac que necesita")
            );
            if (med5 < 1) {
              alert(`No ingresaste cantidad`);
            } else if (med5 > 5) {
              alert(`No hay esa cantidad`);
            } else {
              let resultado5 = alert(med5 * dicloprecio);
            }
          } else if (diclo === "no") {
            alert("Usted no quiere Diclofenac");
          } else {
            alert("No ingresaste si/no");
          }

          function total(resultado1, resultado2, resultado3, resultado4, resultado5, suma){
            
            switch (suma) {
              case "+":
                return resultado1 + resultado2 + resultado3 + resultado4 + resultado5;
                break
            }
          }
          let resultado1 = (med1 * paracprecio)
          let resultado2 = (med2 * ibuprecio)
          let resultado3 = (med3 * amoxiprecio)
          let resultado4 = (med4 * cefaprecio)
          let resultado5 = (med5 * dicloprecio) 
          let resultadoTotal = total(resultado1, resultado2, resultado3, resultado4, resultado5, suma)
          alert(`${resultado1} ${suma} ${resultado2} ${suma} ${resultado3} ${suma} ${resultado4} ${suma} ${resultado5} = ${resultadoTotal}`)

          alert(
            `PEDIDO: #${numero} NOMBRE Y APELLIDO: ${nombre} ${apellido} DIRECCION: ${direccion}`
          );
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
// (MEDICACION === "amoxicilina") {
//     prompt(`Ingrese la cantidad de cajas de ${MEDICACION} que necesita`);
// }else if (MEDICACION === "cefalexina") {
//     prompt(`Ingrese la cantidad de cajas de ${MEDICACION} que necesita`);
// }else if (MEDICACION === "diclofenac") {
//     prompt(`Ingrese la cantidad de cajas de ${MEDICACION} que necesita`);
// }
// else{
//     prompt(`Ingrese la cantidad de cajas de ${MEDICACION} que necesita`);
// }
// }else {
//     alert("No ingresaste ninguna Direccion");
// }
// }else {
//     alert("No ingresaste tu Apellido");
// }
// }else {
//     alert(`Nombre se debe ingresar`);
// }
