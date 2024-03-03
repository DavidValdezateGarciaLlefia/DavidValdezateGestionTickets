(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();let a=[{codigo:"123456",fecha:"01/04/2023",fechaResuelto:"01/12/2023",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Error de pantalla",alumno:"Ejemplo Ejemplin",estado:"resuelto"},{codigo:"234245",fecha:"06/06/2033",fechaResuelto:"21/11/2025",aula:"T1",grupo:"DAW2",ordenador:"PC1",descripcion:"Pantallazo azul",alumno:"Michael Myers",estado:"resuelto"},{codigo:"435367",fecha:"12/07/2012",fechaResuelto:"11/02/2054",aula:"T3",grupo:"DAW2",ordenador:"PC13",descripcion:"Pc explota lol",alumno:"Freddy Krueger",estado:"resuelto"},{codigo:"765436",fecha:"01/06/2026",aula:"T111",grupo:"DAW1",ordenador:"PC65",descripcion:"El pc ha dejado de existir",alumno:"Pendiente Pendientin",estado:"pendiente"},{codigo:"165467",fecha:"01/04/2026",aula:"T7",grupo:"DAW1",ordenador:"PC4",descripcion:"Camara del pc no funciona",alumno:"The singularity",estado:"pendiente"}],v=[];const L={template:`
    <button class="btn btn-secondary ms-2" id="cerrarBoton">CERRAR SESION</button>
    `,script:()=>{document.querySelector("#cerrarBoton")&&document.querySelector("#cerrarBoton").addEventListener("click",()=>{document.querySelector("main").innerHTML="",document.querySelector("#cerrarBoton").style.display="none"})}},c={template:`
  <div class="d-flex">
    <h1>Comentarios</h1><button class="btn btn-link ms-auto" id="volver"> < Volver</button>
  </div>
  <div id="input">
   
  </div>
  <div id="comentarios" class="mt-4">
    
  </div>
  `,inputComentarios:()=>{let o=`
      <h2 class="my-4">Código ticket: <span>${s.codigo}</span></h2>
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
    `;document.querySelector("#input").innerHTML=o,document.querySelector("#inputComentario").addEventListener("click",c.añadirComentario)},añadirComentario:()=>{const o=document.querySelector("#comentarioInput"),n=document.querySelector("#fechaInput");let t={codigo:s.codigo,comentario:o.value,fecha:n.value};v.push(t),c.insertaComentarios(),o.value="",n.value=""},insertaComentarios:()=>{let o="";v.filter(t=>t.codigo===s.codigo).forEach(t=>{const i=a.find(e=>e.codigo===t.codigo);i&&(o+=`<div class="card p-3">
                <h5 class="text-end"><span class="autor">${i.alumno}</span><span class="fecha ms-4">${t.fecha}</span></h5>
                <p class="comentarioTexto">${t.comentario}</p>
            </div>`)}),document.querySelector("#comentarios").innerHTML=o}},s={insertTabla:()=>{let o="",n="";const t=document.querySelector("#tablaPendiente"),i=document.querySelector("#tablaResuelto");if(t.innerHTML="",i.innerHTML="",!t||!i){console.log("Elementos de tabla no encontrados, posiblemente debido a un cambio en el DOM.");return}for(let e=0;e<a.length;e++)a[e].estado=="pendiente"?o+=`
    <tr>
          <td>${a[e].codigo}</td>
          <td>${a[e].fecha}</td>
          <td>${a[e].aula}</td>
          <td>${a[e].grupo}</td>
          <td>${a[e].ordenador}</td>
          <td>${a[e].descripcion}</td>
          <td>${a[e].alumno}</td>
          <th>${a[e].estado}</th>
          <td><button data-value="${a[e].codigo}" class="btn btn-success resolver" title="Resolver ticket">Resolver</button></td>
          <td><button data-value="${a[e].codigo}" class="btn btn-warning" title="Añadir comentario"><i class="bi  bi-pencil" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
          </button>
          </td>
          <td><button data-value="${a[e].codigo}" class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${a[e].codigo}" class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
    `:n+=`
      <tr>
          <td>${a[e].codigo}</td>
          <td>${a[e].fecha}</td>
          <td>${a[e].fechaResuelto}</td>
          <td>${a[e].aula}</td>
          <td>${a[e].grupo}</td>
          <td>${a[e].ordenador}</td>
          <td>${a[e].descripcion}</td>
          <td>${a[e].alumno}</td>
          <td>${a[e].estado}</td>
          <td><button data-value="${a[e].codigo}"  class="btn btn-info" title="Ver comentarios"><i class="bi bi-chat-left-text"></i>
          </button></td>
          <td><button data-value="${a[e].codigo}"  class="btn btn-danger" title="Eliminar ticket"><i class="bi bi-trash3"></i>
          </i>
          </button></td>
        </tr>
      `;t.innerHTML=o,i.innerHTML=n,s.tablaBotones()},codigo:null,tablaBotones:()=>{document.querySelector("body").addEventListener("click",o=>{if(o.target.classList.contains("resolver")){console.log("click a resolver");const t=o.target.closest(".resolver").dataset.value;console.log(t),a.filter(i=>{i.codigo==t&&(i.estado="resuelto")}),s.insertTabla()}}),document.querySelector("body").addEventListener("click",o=>{if(o.target.classList.contains("btn-warning")){console.log("click a boton de añadir");const t=o.target.closest(".btn-warning").dataset.value;console.log(t),s.codigo=t,document.querySelector("main").innerHTML=c.template,c.inputComentarios()}}),document.querySelector("body").addEventListener("click",o=>{if(o.target.classList.contains("btn-info")){console.log("click a ver comentario"),document.querySelector("main").innerHTML=c.template;const t=o.target.closest(".btn-info").dataset.value;s.codigo=t,c.insertaComentarios()}}),document.querySelector("body").addEventListener("click",o=>{if(o.target.classList.contains("btn-danger")){console.log("click a resolver");const t=o.target.closest(".btn-danger").dataset.value;console.log(t),a.filter(i=>i.codigo!=t),s.insertTabla()}})}},h={template:`
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
    `,script:()=>{let o="",n="";a.forEach(t=>{t.estado=="pendiente"?o+=s(t.codigo,t.fecha,t.fechaResuelto,t.aula,t.grupo,t.ordenador,t.descripcion,t.alumno,t.estado):n+=s(t.codigo,t.fecha,t.fechaResuelto,t.aula,t.grupo,t.ordenador,t.descripcion,t.alumno,t.estado)}),document.querySelector("#tablaPendiente").innerHTML=o,document.querySelector("#tablaResuelto").innerHTML=n}},m={template:`
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
  `,script:()=>{p.script();const o=document.querySelector("form");o.addEventListener("submit",n=>{if(!o.checkValidity())n.preventDefault(),n.stopPropagation(),console.log("El formulario no es válido"),o.classList.add("was-validated");else if(n.preventDefault(),o.checkValidity()){let g=function(){for(let d=0;d<l.length;d++){const u=l[d],b=u.email,S=u.pass;if(i===b&&e===S)return!0}return!1};var t=g;const i=document.querySelector("#email").value,e=document.querySelector("#pass").value,r=localStorage.getItem("usuarios"),l=JSON.parse(r);if(g()){alert("Login realizado correctamente!");const d=document.querySelector("#headerUserEmail");d.innerText=i;const u=document.querySelector("#panel");u.style.display="inline",document.querySelector("main").innerHTML=h.template,s.insertTabla();const b=document.querySelector("#cerrarBoton");b.style.display="inline",document.querySelector("#cerrarSesionDiv").innerHTML=vista,L.script(),h.script()}else document.querySelector("#loginIncorrecto").innerHTML="Credenciales incorrectas, inténtalo de nuevo"}})}},f=[{}],y={template:`
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
    `,script:()=>{p.script();const o=document.querySelector("form");o.addEventListener("submit",n=>{if(!o.checkValidity())n.preventDefault(),n.stopPropagation(),console.log("El formulario no es válido"),o.classList.add("was-validated");else{n.preventDefault(),L.script();const t=document.querySelector("#email").value,i=document.querySelector("#pass").value;localStorage.setItem("usuarios",JSON.stringify(f));try{const e={email:t,pass:i};f.push(e),localStorage.setItem("usuarios",JSON.stringify(f)),document.querySelector("#valorRegistro").innerHTML="Registro Exitoso! Pasando a la pantalla de Login",console.log("Registro exitoso"),alert("Registro Exitoso!")}catch(e){console.error("Error al acceder a la base de datos:",e),document.querySelector("#valorRegistro").innerHTML="Registro Fallido! Intentalo de nuevo",mensajeUsuario.innerText="Ha ocurrido un problema al acceder a la base de datos. Por favor, intenta de nuevo más tarde."}document.querySelector("main").innerHTML=m.template,m.script()}})}},p={template:`
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
    `,script:()=>{const o=document.querySelector("#panel");o.style.display="none",document.querySelector("#panel").addEventListener("click",()=>{document.querySelector("main").innerHTML=h.template,s.insertTabla()}),document.querySelector("#login").addEventListener("click",()=>{document.querySelector("main").innerHTML=m.template,m.script()}),document.querySelector("#registro").addEventListener("click",()=>{document.querySelector("main").innerHTML=y.template,y.script()})}};document.querySelector("header").innerHTML=p.template;p.script();
