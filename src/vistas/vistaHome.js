import { objetosBD } from "../../bd/bd"
import { botonCerrarSesion } from "../componentes/cerrar"
import { panel } from "../componentes/panel"

export const vistaHome = {
    template: //html
    `
    <h1>Administración de incidencias</h1>
    <h2 class="mt-5">Tickets pendientes</h2>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
          
        </tr>
      </thead>
      <tbody id="tablaPendiente">
      </tbody>
    </table>
    <h2 class="mt-5">Tickets resueltos</h2>
    <table class="table mt-4" >
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody id="tablaResuelto">
       
       
      </tbody>
    </table>
    `,
    script:()=>{
      let htmlPendiente = ''
      let htmlResuelto = ''
      objetosBD.forEach(element =>{
        if(element.estado=='pendiente'){
          htmlPendiente += panel(element.codigo,element.fecha,element.fechaResuelto,element.aula,element.grupo,element.ordenador,element.descripcion,element.alumno,element.estado)
          
        }else{
          htmlResuelto += panel(element.codigo,element.fecha,element.fechaResuelto,element.aula,element.grupo,element.ordenador,element.descripcion,element.alumno,element.estado)
          
        }
        
      })
      document.querySelector('#tablaPendiente').innerHTML = htmlPendiente
      document.querySelector('#tablaResuelto').innerHTML = htmlResuelto
      
    }
    
}