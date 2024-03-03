import { comentariosBD, objetosBD } from "../../bd/bd";
import { panel } from "../componentes/panel";

export const vistaComentario = {
  template: //html
  `
  <div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto" id="volver"> < Volver</button>
  </div>
  <div id="input">
   
  </div>
  <div id="comentarios" class="mt-4">
    
  </div>
  `,
  inputComentarios: () => {
    let inputHTML = `
      <h2 class="my-4">Código ticket: <span>${panel.codigo}</span></h2>
      <form id="formComentario" class="form card p-3 shadow">
        <div class="">
          <label for="comentario" class="form-label">Comentario: </label>
          <textarea id="comentarioInput" class="form-control" cols="3"></textarea>
          <label for="fecha" class="form-label me-2 mt-3">Fecha: </label>
          <div class="d-flex align-items-center">
            <input id="fechaInput" type="datetime-local" class="form-control w-25">
            <button type="button" id="inputComentario" class="btn btn-success ms-auto">Añadir comentario</button>
          </div>
        </div>
      </form>
    `;
    document.querySelector('#input').innerHTML = inputHTML;

   
    document.querySelector('#inputComentario').addEventListener('click', vistaComentario.añadirComentario);
  },
  añadirComentario: () => {
    const comentarioInput = document.querySelector('#comentarioInput');
    const fechaInput = document.querySelector('#fechaInput');
    let comentarioObjeto = {
        codigo: panel.codigo,
        comentario: comentarioInput.value,
        fecha: fechaInput.value
    }; 
    comentariosBD.push(comentarioObjeto);
    vistaComentario.insertaComentarios();
    comentarioInput.value = '';
    fechaInput.value = ''; 
  },
  insertaComentarios: () => {
    let comentarioHTML = '';
    const comentariosFiltrados = comentariosBD.filter(comentario => comentario.codigo === panel.codigo);
    
    comentariosFiltrados.forEach(comentario => {
        const objeto = objetosBD.find(objeto => objeto.codigo === comentario.codigo);
        if (objeto) {
            comentarioHTML += `<div class="card p-3">
                <h5 class="text-end"><span class="autor">${objeto.alumno}</span><span class="fecha ms-4">${comentario.fecha}</span></h5>
                <p class="comentarioTexto">${comentario.comentario}</p>
            </div>`;
        }
    });
    document.querySelector('#comentarios').innerHTML = comentarioHTML;
}
  
}
