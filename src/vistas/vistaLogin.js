import { botonCerrarSesion } from "../componentes/cerrar"
import { header } from "../componentes/header"
import { panel } from "../componentes/panel"
import { vistaHome } from "./vistaHome"

vistaHome
export const vistaLogin = {
  template: //html
  `
  <h1>Logeate</h1>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div id="loginIncorrecto" class="danger"></div>
        <form novalidate action="procesaa.php" method="get" class="form border p-3 shadow w-25 ">
            <label for="email" class="label-control">Usuario:</label>
            <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
            <div class="invalid-feedback small">Esta mal</div>
            <div class="valid-feedback">Esta bien</div>
            <label for="pass" class="label-control">Contraseña:</label>
            <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
            <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
            <button class="btn btn-success mt-3 w-100">Enviar</button>
        </form>

    </div>
  `,
  script: () => {
    header.script()
    const formulario = document.querySelector('form')
    formulario.addEventListener('submit', (event) => {
        if (!formulario.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          console.log('El formulario no es válido');
          formulario.classList.add('was-validated');
        } else {
          event.preventDefault();
          

          if (formulario.checkValidity()) {
           
            const email = document.querySelector('#email').value;
const pass = document.querySelector('#pass').value;

const usuarioString = localStorage.getItem('usuarios');
const usuariosArray = JSON.parse(usuarioString);

function verificarCredenciales() {
  for (let i = 0; i < usuariosArray.length; i++) {
    const usuarioObjeto = usuariosArray[i];
    const emailLocal = usuarioObjeto.email;
    const passLocal = usuarioObjeto.pass;

    
    if (email === emailLocal && pass === passLocal) {
      return true; 
    }
  }

  return false; 
}

if (verificarCredenciales()) {
    alert('Login realizado correctamente!');
    const headerUserEmail = document.querySelector('#headerUserEmail');
    headerUserEmail.innerText = email;
    const botonPanel = document.querySelector('#panel');
    botonPanel.style.display = 'inline';
    document.querySelector('main').innerHTML = vistaHome.template
    panel.insertTabla()
    const botonCerrar = document.querySelector('#cerrarBoton')
    botonCerrar.style.display = 'inline'
    document.querySelector('#cerrarSesionDiv').innerHTML = vista
    botonCerrarSesion.script()
    vistaHome.script()
    
  } else {
    document.querySelector('#loginIncorrecto').innerHTML = 'Credenciales incorrectas, inténtalo de nuevo'
  }
          }
        }
      });
      
}

  
}