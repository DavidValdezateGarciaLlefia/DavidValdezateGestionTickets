import { vistaHome } from "../vistas/vistaHome"
import { vistaLogin } from "../vistas/vistaLogin"
import { vistaRegistro } from "../vistas/vistaRegistro"
import { panel } from "./panel"

export const header = {
    template: //html
    `
    <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div id="botonesLogin">
          <button class="btn btn-secondary ms-2" id="panel">PANEL</button>
          <button class="btn btn-secondary ms-2" id="login">LOGIN</button>
          <button class="btn btn-secondary ms-2" id="registro">REGISTRO</button>
          
        </div>
        <div id="cerrarSesionDiv">
        
          <span id="headerUserEmail"></span>
          
        </div>
      </div>
    </nav>
  </header>
    `,
    script: ()=> {
      const botonPanel = document.querySelector('#panel')
      botonPanel.style.display = 'none'

        document.querySelector('#panel').addEventListener('click',()=>{  
            document.querySelector('main').innerHTML = vistaHome.template     
            panel.insertTabla()
        })
        document.querySelector('#login').addEventListener('click',()=>{
            document.querySelector('main').innerHTML = vistaLogin.template
            vistaLogin.script()    
        })
        document.querySelector('#registro').addEventListener('click',()=>{
            document.querySelector('main').innerHTML = vistaRegistro.template
            
            vistaRegistro.script()
            
        })
    }

}