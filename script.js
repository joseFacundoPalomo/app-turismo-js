import {barcelona,roma,paris,londres} from "./ciudades.js"; 

let paises = [barcelona,roma,paris,londres];

const itemsMenu = document.querySelectorAll("a");
const titulo = document.querySelector("h2");
const subtitulo = document.querySelector("h3");
const parrafo = document.querySelector("p");
let pais;


itemsMenu.forEach(itemMenu => {   
    itemMenu.addEventListener("click",function(){ 
        itemsMenu.forEach(itemMenu =>{
            itemMenu.classList.remove("active")
        })        
        this.classList.add("active")

        let nombrePais = this.innerHTML;

        let contenido = obtenerContenido(nombrePais);

        titulo.innerHTML = contenido.titulo;
        subtitulo.innerHTML = contenido.subtitulo;
        parrafo.innerHTML = contenido.parrafo;

        
    });
});

function obtenerContenido (nombrePais){
     for(let i=0; i < paises.length ; i++){
       if(nombrePais == paises[i].nombre){
            pais= {
                titulo:  paises[i].titulo,
                subtitulo:  paises[i].subtitulo,
                parrafo: paises[i].parrafo
            }
            return pais
       }
     }

}



