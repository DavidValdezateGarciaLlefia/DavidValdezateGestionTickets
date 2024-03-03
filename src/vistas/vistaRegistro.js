import { usuarios } from "../../bd/usuarios"
import { botonCerrarSesion } from "../componentes/cerrar"
import { header } from "../componentes/header"
import { vistaLogin } from "./vistaLogin"


export const vistaRegistro = {
    template: //html
    `
    <h1>Registrate</h1>

    <div class="container d-flex justify-content-center align-items-center vh-100">
          <form novalidate action="procesa.php" method="get" class="form border p-3 shadow w-25 ">
              <div id="valorRegistro"></div>
              <label for="email" class="label-control">Usuario:</label>
              <input required id="email" name="email" type="email" placeholder="tuemail@ejemplo.com" class="form-control">
              <div class="invalid-feedback small">Esta mal</div>
              <div class="valid-feedback">Esta bien</div>
              <label for="pass" class="label-control">Contraseña:</label>
              <input required minlength="4" id="pass"  name="pass" type="password" class="form-control">
              <div class="invalid-feedback">La contraseña debe tener mínimo 3 carácteres</div>
              <button id="registros" class="btn btn-success mt-3 w-100" >Enviar</button>
          </form>
  
      </div>
    `,
    script:()=>{
      header.script()
      const formulario = document.querySelector('form')
      formulario.addEventListener('submit', (event) => {
          if (!formulario.checkValidity()) {
              // Detenemos la propagación del evento  
              event.preventDefault()
              event.stopPropagation()
              // Añadimos al formulario la clase was-validated
              console.log('El formulario no es válido');
              
              formulario.classList.add('was-validated')
          } else {
              event.preventDefault()
              botonCerrarSesion.script()
              //pillamos valores pass y email para registrarlos en el local storage convirtiendolo en un array json
              const email = document.querySelector('#email').value
              const pass = document.querySelector('#pass').value
              localStorage.setItem('usuarios',JSON.stringify(usuarios))
              try {
                const loginInfo = {
                  email: email,
                  pass: pass
                };
                usuarios.push(loginInfo);
            
                // Actualizamos el array 'usuarios' en el localStorage
                localStorage.setItem('usuarios', JSON.stringify(usuarios));
            
                // Registro exitoso
                document.querySelector('#valorRegistro').innerHTML = 'Registro Exitoso! Pasando a la pantalla de Login'
                console.log('Registro exitoso')
                alert('Registro Exitoso!')
                
                
              } catch (error) {
                console.error('Error al acceder a la base de datos:', error);
                document.querySelector('#valorRegistro').innerHTML = 'Registro Fallido! Intentalo de nuevo'                
              
                mensajeUsuario.innerText = 'Ha ocurrido un problema al acceder a la base de datos. Por favor, intenta de nuevo más tarde.';
              }
              document.querySelector('main').innerHTML = vistaLogin.template
              vistaLogin.script()
              

          }
        })
    }
  
    
  }