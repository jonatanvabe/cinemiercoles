

import  {peliculas} from "../helper/baseDatos.js"
//import  {estrenos} from "../helper/baseDatosNueva.js"
import {pintarPeliculas} from "../helper/pintarPeliculas.js"

// recorriendo un arreglo en js

let fila=document.getElementById("fila")
//let fila2=document.getElementById("fila2")


// llamo a la funcion pintar peliculas

pintarPeliculas(peliculas)



// detectando seleccion de una pelicula 

let peliculaSeleccionada={}

fila.addEventListener("click",function(evento){
    
    peliculaSeleccionada.poster=(evento.target.parentElement.querySelector("img").src)
    peliculaSeleccionada.nombre=(evento.target.parentElement.querySelector("h3").textContent)//nombre
    peliculaSeleccionada.sinopsis=(evento.target.parentElement.querySelector("p").textContent)//sinopsis
    peliculaSeleccionada.genero=(evento.target.parentElement.querySelector("h5").textContent)//genero
    peliculaSeleccionada.idioma=(evento.target.parentElement.querySelector("h6").textContent)//idioma
    peliculaSeleccionada.clas=(evento.target.parentElement.querySelector("h7").textContent)//clas
    peliculaSeleccionada.actores=(evento.target.parentElement.querySelector("h1").textContent)//actores
    peliculaSeleccionada.director=(evento.target.parentElement.querySelector("h2").textContent)//director

    console.log(peliculaSeleccionada)

    //llamando a la memoria de navegador
    localStorage.setItem("peliculaSeleccionada",JSON.stringify(peliculaSeleccionada))


    //redericiona a otra vista
    window.location.href="./src/views/ampliarInfoPelicula.html"

})















    
    
