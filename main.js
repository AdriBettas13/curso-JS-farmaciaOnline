let saludo = "Bienvenido";
let parac;
let ibu;


let amoxi;
let cefa;
let diclo;
let paracPrecio = 1700;
let ibuPrecio = 2000;
let amoxiPrecio = 1200;
let cefaPrecio = 1400;
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
let buscar
const medicamento0 = {
  nombre: "Paracetamor",
  droga:  "Paracetamol",
  dosis: 500,
  cantidad: 40,
  precio: 1700,
};
const medicamento1 = {
  nombre: "Bupofreno",
  droga: "Ibuprofeno",
  dosis: 600,
  cantidad: 40,
  precio: 2000,
};
const medicamento2 = {
  nombre: "Mosicilina",
  droga: "Amoxicilina",
  dosis: 500,
  cantidad: 21,
  precio: 1200,
};
const medicamento3 = {
  nombre: "Cefalesina",
  droga: "Cefalexina",
  dosis: 500,
  cantidad: 28,
  precio: 1400,
};
const medicamento4 = {
  nombre: "Diclofená",
  droga: "Diclofenac",
  dosis: 75,
  cantidad: 20,
  precio: 1300,
};

const medicamentos1 = ["paracetamol", "ibuprofeno", "amoxicilina", "cefalexina", "diclofenac"];


const eliminar = (medicamento) => {
  let index = medicamentos1.indexOf(medicamento);

  if (index != -1) {
    medicamentos1.splice(index, 1);
    console.log(medicamentos1);
     }
     
}

eliminar("diclofenac")
eliminar("ibuprofeno")


const medicamentos = [
  {droga: "Paracetamol", nombre: "Paracetamor", indicacion: "Analgésico", dosis: 500, cantidad: 40, precio: 1700}, 
  {droga: "Ibuprofeno", nombre: "Ibupofreno", indicacion: "Analgésico", dosis: 600, cantidad: 40, precio: 2000},
  {droga: "Amoxicilina", nombre: "Mosicilina", indicacion: "Antibiótico", dosis: 500, cantidad: 21, precio: 1200},
  {droga: "Cefalexina", nombre: "Cefaselina", indicacion: "Antibiótico", dosis: 500, cantidad: 28, precio: 1400},
  {droga: "Diclofenac", nombre: "Diclofená", indicacion: "Analgésico",  dosis: 75, cantidad: 20, precio: 1300},
   ];
   let encontrar = medicamentos.find((item) => item.droga === "Amoxicilina");
   console.log(encontrar);
   let filtrar = medicamentos.filter((item) => item.indicacion === "Analgésico")
console.log(filtrar);

const preciosObraSocial = medicamentos.map((item)=>  {
  return {
    DROGA: item.droga,
    NOMBRE: item.nombre,
    INDICACION: item.indicacion, 
    DOSIS: item.dosis,
    CANTIDAD: item.cantidad,
    PRECIO: item.precio - item.precio * 0.40,

  }
})
console.log(preciosObraSocial);
function pedirEmail (email){
  alert (`El comprobante de compra ha sido enviado a ${email}`);
}


for (let numero = 1; numero <= 5; numero++) {
   {
    
    let intro = prompt("Usted quiere saber sobre nuestros productos (si/no)").toLowerCase();
    if (intro === "si") {
      let para1 = prompt(`¿Usted desea saber sobre PARACETAMOL (SI/NO)?`).toLowerCase();
      if (para1=== "si"){
        alert(`NOMBRE: ${medicamento0.nombre} // DROGA: ${medicamento0.droga} // DOSIS: ${medicamento0.dosis}mg // CANTIDAD: ${medicamento0.cantidad}Uni // PRECIO: $${medicamento0.precio}`);
      }else{
        alert(`Usted no quiere saber sobre PARACETAMOL`)
      }
      let ibu1 = prompt(`¿Usted desea saber sobre IBUPROFENO (SI/NO)?`).toLowerCase();
      if (ibu1 === "si"){
        alert(`NOMBRE: ${medicamento1.nombre} // DROGA: ${medicamento1.droga} // DOSIS: ${medicamento1.dosis}mg // CANTIDAD: ${medicamento1.cantidad}Uni // PRECIO: $${medicamento1.precio}`);
      }else{
        alert(`Usted no quiere saber sobre IBUPROFENO`)
      }
      let amox1 = prompt(`¿Usted desea saber sobre AMOXICILINA (SI/NO)?`).toLowerCase();
      if (amox1 === "si"){
        alert(`NOMBRE: ${medicamento2.nombre} // DROGA: ${medicamento2.droga} // DOSIS: ${medicamento2.dosis}mg // CANTIDAD: ${medicamento2.cantidad}Uni // PRECIO: $${medicamento2.precio}`);
      }else{
        alert(`Usted no quiere saber sobre AMOXICILINA`)
      }
      let cefa1 = prompt(`¿Usted desea saber sobre CEFALEXINA (SI/NO)?`).toLowerCase();
      if (cefa1 === "si"){
        alert(`NOMBRE: ${medicamento3.nombre} // DROGA: ${medicamento3.droga} // DOSIS: ${medicamento3.dosis}mg // CANTIDAD: ${medicamento3.cantidad}Uni // PRECIO: $${medicamento3.precio}`);
      }else{
        alert(`Usted no quiere saber sobre CEFALEXINA`)
      }
      let diclo1 = prompt(`¿Usted desea saber sobre DICLOFENAC (SI/NO)?`).toLowerCase();
      if (diclo1 === "si"){
      alert(`NOMBRE: ${medicamento4.nombre} // DROGA: ${medicamento4.droga} // DOSIS: ${medicamento4.dosis}mg // CANTIDAD: ${medicamento4.cantidad}Uni // PRECIO: $${medicamento4.precio}`);
    
    }else {
      alert(`Usted no quiere saber sobre DICLOFENAC`)
    }
  }else {
      alert(`Usted no quiere conocer los productos o bien ya los conoce.`)
    }


   alert(`Ahora procedera a poner sus datos y productos para realizar la compra`)

    let nombre = prompt("Ingrese su nombre");
    if (nombre !== "") {
      let apellido = prompt("Ingrese su apellido");
      if (apellido !== "") {
        let correo = prompt("Ingrese su Email");
        if (correo !=="") {
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
              pedirEmail(correo);
            }
          } else {
            alert(`Pedido Cancelado!!`);
          }
        } else {
          alert("No ingresaste ninguna Direccion");
        }
       } else {
        alert("No ingresaste ningun Email")
       } 
       
       
       
      } else {
        alert("No ingresaste tu Apellido");
      }
    } else {
      alert(`Nombre se debe ingresar`);
    }
  }
  
}
alert("No disponemos de cadete de momento, intente mas tarde. Muchas Gracias");
