
let medicamentos = [];
let carrito = [];
let total = 0;


const carritoContenido = document.getElementById("carritoContenido");
const carritoTotal = document.getElementById("carritoTotal");
const resultados = document.getElementById("resultados");
const busquedaInput = document.getElementById("busqueda");
const botonBuscar = document.getElementById("botonBuscar");
const botonBorrar = document.getElementById("botonBorrar");


function realizarBusqueda() {
    let buscar = busquedaInput.value.toLowerCase();
    resultados.textContent = "";

    
    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            medicamentos = data;

            
            let medicamentosFiltrados = medicamentos.filter(medicamento =>
                medicamento.droga.toLowerCase().includes(buscar)
            );

            
            medicamentosFiltrados.forEach(medicamento => {
                let div = document.createElement("div");
                div.classList.add("medicamento");
                div.innerHTML = `
                    <h2>${medicamento.nombre}</h2>
                    <p>Droga: ${medicamento.droga}</p>
                    <p>Indicación: ${medicamento.indicacion}</p>
                    <p>Dosis: ${medicamento.dosis}mg</p>
                    <p>Cantidad por caja: ${medicamento.cantidad}comp</p>
                    <p>Precio: $${medicamento.precio}</p>
                    <label for="cantidad-${medicamento.droga}">Cantidad:</label>
                    <input type="number" id="cantidad-${medicamento.droga}" min="1" max="5" value="1">
                    <button onclick="agregarAlCarrito(${medicamento.precio}, '${medicamento.droga}')">Agregar al Carrito</button>
                    <hr>
                `;
                resultados.appendChild(div);
            });
        });
}


function agregarAlCarrito(precio, droga) {
    const cantidadInput = document.getElementById(`cantidad-${droga}`);
    const cantidad = parseInt(cantidadInput.value);

    const medicamentoEnCarrito = carrito.find(item => item.droga === droga);
    if (medicamentoEnCarrito) {
        medicamentoEnCarrito.cantidad += cantidad;
    } else {
        carrito.push({ precio, droga, cantidad });
    }

    actualizarTotal();
}


function actualizarTotal() {
    carritoContenido.innerHTML = "";
    carrito.forEach(item => {
        let div = document.createElement("div");
        div.innerHTML = `<p>${item.droga} - Cantidad: ${item.cantidad} - $${(item.precio * item.cantidad).toFixed(2)}</p>`;
        carritoContenido.appendChild(div);
    });

    total = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
    carritoTotal.innerText = `Total: $${total.toFixed(2)}`;

   
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
}


function borrarCarrito() {
    carrito.length = 0;
    localStorage.removeItem("carrito");
    actualizarTotal();
}


function validarCompra() {
    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
    const direccionUsuario = usuarioActual ? usuarioActual.direccion : "Dirección no disponible";
    const apellidoUsuario = usuarioActual ? usuarioActual.apellido : "Apellido no disponible";
    const nombreUsuario = usuarioActual ? usuarioActual.nombre : "Nombre no disponible";

    const mensajeCompra = document.getElementById("mensajeCompra");

    if (carrito.length > 0) {
        mensajeCompra.innerText = `¡Compra validada! El pedido será enviado a la siguiente dirección: ${direccionUsuario}, a Nombre de: ${apellidoUsuario}, ${nombreUsuario}`;
        mensajeCompra.classList.remove("texto-rojo");
        mensajeCompra.classList.add("texto-verde");
        carrito.length = 0;
        localStorage.removeItem("carrito");
        actualizarTotal();

        setTimeout(function () {
            mensajeCompra.innerText = "";
        }, 2000);
    } else {
        mensajeCompra.innerText = "El carrito se encuentra vacío.";
        mensajeCompra.classList.remove("texto-verde");
        mensajeCompra.classList.add("texto-rojo");
        setTimeout(function () {
            mensajeCompra.innerText = "";
        }, 2000);
    }

    const carritoContenedor = document.getElementById("carritoContenedor");
    carritoContenedor.style.display = "none";
}


busquedaInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        realizarBusqueda();
    }
});

botonBuscar.addEventListener("click", realizarBusqueda);

botonBorrar.addEventListener("click", function () {
    busquedaInput.value = "";
    resultados.textContent = "";
});


document.addEventListener("DOMContentLoaded", function () {
    realizarBusqueda();

    
    const carritoAlmacenado = localStorage.getItem("carrito");

   
    if (carritoAlmacenado) {
        carrito = JSON.parse(carritoAlmacenado);
        actualizarTotal();
    }
});