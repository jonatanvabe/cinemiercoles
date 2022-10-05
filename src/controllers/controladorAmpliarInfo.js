//preguntando por un dato que esta almacenado en la memoria

let datosPeliculasSeleccionadas=JSON.parse(localStorage.getItem("peliculaSeleccionada"))

console.log(datosPeliculasSeleccionadas)
let poster=datosPeliculasSeleccionadas.poster
let nombre=datosPeliculasSeleccionadas.nombre
let genero=datosPeliculasSeleccionadas.genero
let idioma=datosPeliculasSeleccionadas.idioma
let sinopsis=datosPeliculasSeleccionadas.sinopsis
let director=datosPeliculasSeleccionadas.director
let actores=datosPeliculasSeleccionadas.actores


// cargando datos
let foto=document.getElementById("foto")
foto.src=poster

let titulo=document.getElementById("titulo")
titulo.textContent=nombre

let gen=document.getElementById("gen")
gen.textContent=genero

let Lengueje=document.getElementById("Lengueje")
Lengueje.textContent=idioma

let trama=document.getElementById("trama")
trama.textContent=sinopsis

let dir=document.getElementById("dir")
dir.textContent=director

let act=document.getElementById("act")
act.textContent=actores

