export const botonCerrarSesion = {

    template: //html
    `
    <button class="btn btn-secondary ms-2" id="cerrarBoton">CERRAR SESION</button>
    `,
    script:()=>{
    
    if(document.querySelector('#cerrarBoton')){
        document.querySelector('#cerrarBoton').addEventListener('click',()=>{
            document.querySelector('main').innerHTML = ''
            document.querySelector('#cerrarBoton').style.display = 'none'
        })
    }
    }

}