const login = document.getElementById("login");
const registro = document.getElementById("seccionRegistro");
const estadoRegistro = document.getElementById("estadoRegistro");
const estadoSesion = document.getElementById("estadoSesion");
const bienvenido = document.getElementById("bienvenido");

const usuarios = obtenerUsuarios() || [];

function obtenerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios")) || [];
}

function registrarUsuario() {
  const nuevoUsuario = {
    nombre: document.getElementById("nuevoNombre").value,
    apellido: document.getElementById("nuevoApellido").value,
    correo: document.getElementById("correo").value,
    direccion: document.getElementById("direccion").value,
    contraseña: document.getElementById("nuevaContraseña").value,
  };

  if (!nuevoUsuario.nombre || !nuevoUsuario.apellido  || !nuevoUsuario.correo || !nuevoUsuario.direccion || !nuevoUsuario.contraseña) {
    estadoRegistro.innerText = "Por favor, complete todos los campos.";
    estadoRegistro.classList.add("texto-rojo");
    estadoRegistro.classList.remove("texto-verde");
    return;
  }

  if (nuevoUsuario.nombre.length < 4 || nuevoUsuario.nombre.length > 11) {
    estadoRegistro.innerText = "El nombre debe tener entre 4 y 11 caracteres.";
    estadoRegistro.classList("texto-rojo");
    estadoRegistro.classList.remove("texto-verde");
    return;
  }

  if (nuevoUsuario.contraseña.length < 8) {
    estadoRegistro.innerText = "La contraseña debe tener al menos 8 caracteres.";
    estadoRegistro.classList.add("texto-rojo");
    estadoRegistro.classList.remove("texto-verde");
    return;
  }

  const usuarioExistente = usuarios.find(user => user.usuario === nuevoUsuario.nombre);
  if (usuarioExistente) {
    estadoRegistro.innerText = "El usuario ya existe.";
    estadoRegistro.classList.add("texto-rojo");
    estadoRegistro.classList.remove("texto-verde");
  } else {
    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    estadoRegistro.innerText = `Usuario Registrado: Nombre: ${nuevoUsuario.nombre} / Correo: ${nuevoUsuario.correo} / Direccion: ${nuevoUsuario.direccion} / Contraseña: ${nuevoUsuario.contraseña}`;
    estadoRegistro.classList.add("texto-verde");
    estadoRegistro.classList.remove("texto-rojo");
  }
}

const btnRegistro = document.getElementById("btnRegistro");

btnRegistro.addEventListener("click", function() {
  registro.style.display = "block";
  login.style.display = "none";
});

const btnSesionMostrar = document.getElementById("btnSesionInicio");

btnSesionMostrar.addEventListener("click", function() {
  login.style.display = "block";
  registro.style.display = "none";
});

function iniciarSesionPromise(correo, contra) {
  return new Promise((resolve, reject) => {
    const usuarioValido = usuarios.find(user => user.correo === correo && user.contraseña === contra);

    if (usuarioValido) {
      localStorage.setItem("usuarioActual", JSON.stringify(usuarioValido));
      localStorage.setItem("usuarioAutenticado", true);

      setTimeout(() => {
        resolve(`Inicio de sesión exitoso. ¡Bienvenido ${usuarioValido.apellido}, ${usuarioValido.nombre}!`);
      }, 2000);
    } else {
      reject("Usuario incorrecto. Inténtelo de nuevo");
    }
  });
}

const correoInput = document.getElementById("usuario");
const contraInput = document.getElementById("contraseña");

function iniciarSesion() {
  const correo = correoInput.value;
  const contra = contraInput.value;

  iniciarSesionPromise(correo, contra)
    .then(mensaje => {
      estadoSesion.innerText = mensaje;
      estadoSesion.classList.add("texto-verde");
      estadoSesion.classList.remove("texto-rojo");

      setTimeout(() => {
        window.location.href = 'medicamentos.html';
      }, 2000);
    })
    .catch(error => {
      estadoSesion.innerText = error;
      estadoSesion.classList.add("texto-rojo");
      estadoSesion.classList.remove("texto-verde");
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const usuarioAutenticado = JSON.parse(localStorage.getItem("usuarioAutenticado")) || false;
  const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

  if (usuarioAutenticado && usuarioActual) {
    bienvenido.innerText = `¡Bienvenido ${usuarioActual.apellido}, ${usuarioActual.nombre} ! Espere unos segundos y sera dirigido a la pagina de compra`;
    bienvenido.classList.add("texto-verde");
    bienvenido.style.display = "block";
    login.style.display = "none";
    registro.style.display = "none";
    setTimeout(() => {
      window.location.href = 'medicamentos.html';
    }, 3000);
  } else {
    login.style.display = "block";
  }
});