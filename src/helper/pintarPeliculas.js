export function pintarPeliculas(peliculas){
   
    let fila=document.getElementById("fila")

    peliculas.forEach(function(pelicula){
       
    
    
        //traversing (crear etiquetas de html desde js)
        
        //1. creamaos una columbna para cada pelicula
        let columbna=document.createElement("div")
        columbna.classList.add("col")
    
        //2 creamaos una targeta para cada pelicula
    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")
    
        //3 creamos una foto para cada pelicula
        let poster=document.createElement("img")
        poster.classList.add("card-img-top")
        poster.src=pelicula.poster
    
        //4. creamaos el nombre de la palicula 
        let nombre=document.createElement("h3")
        nombre.classList.add("card-title","text-center")
        nombre.textContent=pelicula.nombre
    
        //5. creamos el genero de cada pelicula
        let genero=document.createElement("h5")
        genero.classList.add("text-center")
        genero.textContent= "genero: "+pelicula.genero
        //6 creamamo el idioma de cada palicula
    
        let idioma=document.createElement("h6")
        idioma.classList.add("fw-bold","text-center")
        idioma.textContent= "idioma: "+pelicula.idioma
    
        //7 creamos la sinopsis
        let sinopsis=document.createElement("p") 
        sinopsis.classList.add("d-none","text-center")   
        sinopsis.textContent=pelicula.sinopsis
    
        //8 creamos la clasificacion
    
        let clasificacion=document.createElement("h7")
        clasificacion.classList.add("fw-bold","text-center")
        clasificacion.textContent= "clas: "+pelicula.clasificacion
    
        //9 creamos el director
        let director=document.createElement("h2")
        director.classList.add("fw-bold","text-center")
        director.textContent="Director: "+pelicula.director
    
    
        //9 creamos el actores
        let actores=document.createElement("h1")
        actores.classList.add("fw-bold","text_center")
        actores.textContent="Actores: "+pelicula.actores
    
    
        
    
        // padres e hijos
    
        tarjeta.appendChild(poster)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(genero)     
        tarjeta.appendChild(clasificacion)
        tarjeta.appendChild(idioma)
        tarjeta.appendChild(sinopsis)    
        columbna.appendChild(tarjeta)
        fila.appendChild(columbna)
        tarjeta.appendChild(director)
        tarjeta.appendChild(actores)
        
    })
}