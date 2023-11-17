
document.getElementById("btnRegistro").addEventListener("click", function() {
  const login = document.getElementById("login");
  const registro = document.getElementById("seccionRegistro");

  if (login && registro) {
    login.style.display = "none";
    registro.style.display = "block";
  }
});

const usuario = [];

function registrarUsuario() {
  const nuevoUsuario = {
    usuario: document.getElementById("nuevoUsuario").value,
    correo: document.getElementById("correo").value,
    direccion: document.getElementById("direccion").value,
    contraseña: document.getElementById("nuevaContraseña").value,
  };

 
  if (!nuevoUsuario.usuario || !nuevoUsuario.correo || !nuevoUsuario.direccion || !nuevoUsuario.contraseña) {
    document.getElementById("estadoRegistro").innerText = "Por favor, complete todos los campos.";
    return; 
  }

  const usuarioExistente = usuario.find(user => user.usuario === nuevoUsuario.usuario);
  if (usuarioExistente) {
    document.getElementById("estadoRegistro").innerText = "El usuario ya existe.";
  } else {
    usuario.push(nuevoUsuario);
    document.getElementById("estadoRegistro").innerText = `Usuario Registrado: Nombre: ${nuevoUsuario.usuario} / Correo: ${nuevoUsuario.correo} / Direccion: ${nuevoUsuario.direccion} / Contraseña: ${nuevoUsuario.contraseña}`;
  }
}

function iniciarSesion() {
  document.getElementById("seccionRegistro").style.display = "none";
  document.getElementById("login").style.display = "block";
}

function login() {
  const usuar = document.getElementById("usuario").value
  const contra = document.getElementById("contraseña").value
  const usuarioValido = usuario.find(user => user.usuario === usuar && user.contraseña === contra);

  if (usuarioValido) {
    document.getElementById("estadoSesion").innerText = `Inicio de sesión existoso. ¡Bienvenido!`;
    setTimeout(function(){

      window.location.href = 'medicamentos.html';

    }, 2000);

    
  } else {
    document.getElementById("estadoSesion").innerText = `Usuario incorrecto. Intentelo de nuevo`;
  }
}