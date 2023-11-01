const medicamentos = [
    {droga: "Paracetamol", nombre: "Paracetamor", indicacion: "Analgésico", dosis: 500, cantidad: 40, precio: 1700}, 
    {droga: "Ibuprofeno", nombre: "Ibupofreno", indicacion: "Analgésico", dosis: 600, cantidad: 40, precio: 2000},
    {droga: "Amoxicilina", nombre: "Mosicilina", indicacion: "Antibiótico", dosis: 500, cantidad: 21, precio: 1200},
    {droga: "Cefalexina", nombre: "Cefaselina", indicacion: "Antibiótico", dosis: 500, cantidad: 28, precio: 1400},
    {droga: "Diclofenac", nombre: "Diclofená", indicacion: "Analgésico",  dosis: 75, cantidad: 20, precio: 1300},
  ];
  const medicamentosJSON = JSON.stringify(medicamentos);
  localStorage.setItem("medicamentos", medicamentosJSON);
  
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
  
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("apellido", apellido);
    sessionStorage.setItem("correo", correo);
    sessionStorage.setItem("direccion", direccion);

  function realizarBusqueda() {
    let buscar = document.getElementById("busqueda").value.toLowerCase();
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
    let medicamentosFiltrados = medicamentos.filter(function(medicamento) {
      return medicamento.droga.toLowerCase().includes(buscar);
    });
    medicamentosFiltrados.forEach(function(medicamento) {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>${medicamento.nombre}</h2>
        <p>Droga: ${medicamento.droga}</p>
        <p>Indicación: ${medicamento.indicacion}</p>
        <p>Dosis: ${medicamento.dosis}mg</p>
        <p>Cantidad por caja: ${medicamento.cantidad}comp</p>
        <p>Precio: $${medicamento.precio}</p>
        <hr>
      `;
      resultados.appendChild(div);
    });
  }
  
  document.getElementById("busqueda").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      realizarBusqueda();
    }
  });
  
  document.getElementById("botonBuscar").addEventListener("click", function() {
    realizarBusqueda();
  });
let carrito = []
function comprar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correo = document.getElementById("correo").value;
    let direccion = document.getElementById("direccion").value;
    
if (nombre !== "" && apellido !== "" && correo !== "" && direccion !== "") {
            
            let main = document.getElementById("inicio");
            main.remove();
            
            medicamentos.forEach((item) => {
              let div = document.createElement("div");
              div.innerHTML = `
                <div id="Seleccionador">
                  <h1>Droga: ${item.droga}</h1>
                  <h2>Nombre: ${item.nombre}</h2>
                  <p>Indicación: ${item.indicacion}</p>
                  <p>Dosis: ${item.dosis}mg</p>
                  <p>Cantidad por caja: ${item.cantidad}comp</p>
                  <h1><b>Precio: $${item.precio}</b></h1>
                  <label>Cantidad de cajas que necesite</label>
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <div>
                  <button onclick="agregarAlCarrito("${item.nombre}", ${item.precio})"> Agregar al carrito</button>
                  <hr />
                  </div>
                  <hr />
                  
                </div>
              `;
              
              document.body.append(div);
            });
          } else {
            location.reload()
          }
        } 
      
  submit.addEventListener("click", comprar)


