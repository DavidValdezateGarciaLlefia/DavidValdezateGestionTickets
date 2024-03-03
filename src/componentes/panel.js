import { objetosBD } from "../../bd/bd"
import { vistaComentario } from "../vistas/vistaComentario"
import { vistaHome } from "../vistas/vistaHome"
import { header } from "../componentes/header"

export const panel =  {
    
  insertTabla: ()=>{
    let templatePendiente = ''
    let templateResuelto = ''
    const pendienteHTML = document.querySelector('#tablaPendiente')
    const resueltoHTML = document.querySelector('#tablaResuelto')
    pendienteHTML.innerHTML = ''
    resueltoHTML.innerHTML = ''
    if (!pendienteHTML || !resueltoHTML) {
      console.log('Elementos de tabla no encontrados, posiblemente debido a un cambio en el DOM.')
      return
  }
    for(let x=0;x<objetosBD.length;x++){
      if(objetosBD[x].estado=='pendiente'){
        templatePendiente += //html
    `
    <tr>
          <td>${objetosBD[x].codigo}</td>
          <td>${objetosBD[x].fecha}</td>
          <td>${objetosBD[x].aula}</td>
          <td>${objetosBD[x].grupo}</td>
          <td>${objetosBD[x].ordenador}</td>
          <td>${objetosBD[x].descripcion}</td>
          <td>${objetosBD[x].alumno}</td>
          <th>${objetosBD[x].estado}</th>
          <td><button data-value="${objetosBD[x].codigo}" class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
          <td><button data-value="${objetosBD[x].codigo}" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button data-value="${objetosBD[x].codigo}" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${objetosBD[x].codigo}" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
    `
    }else{
      templateResuelto += //html
      `
      <tr>
          <td>${objetosBD[x].codigo}</td>
          <td>${objetosBD[x].fecha}</td>
          <td>${objetosBD[x].fechaResuelto}</td>
          <td>${objetosBD[x].aula}</td>
          <td>${objetosBD[x].grupo}</td>
          <td>${objetosBD[x].ordenador}</td>
          <td>${objetosBD[x].descripcion}</td>
          <td>${objetosBD[x].alumno}</td>
          <td>${objetosBD[x].estado}</td>
          <td><button data-value="${objetosBD[x].codigo}"  class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${objetosBD[x].codigo}"  class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      `  
    }
    }
    pendienteHTML.innerHTML = templatePendiente
    resueltoHTML.innerHTML = templateResuelto

    panel.tablaBotones()



  },
  
  codigo:null,
  
   tablaBotones:()=>{
    document.querySelector('body').addEventListener('click',(e)=>{
      if (e.target.classList.contains('resolver')){
        console.log('click a resolver')
        const filaClick = e.target.closest('.resolver')
        const incidenciaCodigo = filaClick.dataset.value
        console.log(incidenciaCodigo)
        objetosBD.filter((item)=>{
          if(item.codigo == incidenciaCodigo){
            item.estado = 'resuelto'
          }
        }
        
        
        
        
        )
        panel.insertTabla() 
      }
    })
    document.querySelector('body').addEventListener('click',(e)=>{
      
      if (e.target.classList.contains('btn-warning')){
        
        console.log('click a boton de añadir')
        const filaClick = e.target.closest('.btn-warning')
        const incidenciaCodigo = filaClick.dataset.value
        console.log(incidenciaCodigo)
        panel.codigo = incidenciaCodigo
        document.querySelector('main').innerHTML = vistaComentario.template
        vistaComentario.inputComentarios()
        
      }
    })
    document.querySelector('body').addEventListener('click',(e)=>{
      if (e.target.classList.contains('btn-info')){
        console.log('click a ver comentario')
        document.querySelector('main').innerHTML = vistaComentario.template
        const filaClick = e.target.closest('.btn-info')
        const incidenciaCodigo = filaClick.dataset.value
        panel.codigo = incidenciaCodigo
       
        
        vistaComentario.insertaComentarios()
      }
    })
    document.querySelector('body').addEventListener('click',(e)=>{
        if (e.target.classList.contains('btn-danger')){
          console.log('click a resolver')
          const filaClick = e.target.closest('.btn-danger')
          const incienciaCodigo = filaClick.dataset.value
          console.log(incienciaCodigo)
          const bdElementoBorrado = objetosBD.filter((item)=>
              item.codigo != incienciaCodigo
          )
          panel.insertTabla()
        //  objetosBD = bdElementoBorrado
        }
        
      }
    
   )}
    
}