// declarando arreglos en js
// un arreglo es una variable especial que 
//permite almacenar muchos datos en una sola variable


/*let numeros=[5,8,12,10]
console.log(numeros[0])

let nombres=Array("juan","sara",5,"laura")
console.log(nombres[2])

let personasConViruelasDelMono=[true,true,false,false,"Jonathan"]
console.log(personasConViruelasDelMono)


//un objeto es una variable espacial almacena
// multiples datos en una sola variable


/let persona={
    nombre:"juan",
    profesion:"ingeniero",
    edad:33,
    hinchaDelMejor: true,
    materiasDictadas:["web","avanzadas","nuevas tecnologias"],
    equiposFavoritos:["nacional","medellin"],
    comida:{
        nombre:"bandeja paisa",
        precio:25000
    }
}
console.log(persona.materiasDictadas[0])
console.log(persona.equiposFavoritos[1])
console.log(persona.comida.precio)*/

//arreglos peliculas

let peliculas=[
    {
        nombre:"Bestia",
        genero:"ciencia ficcion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/Bestia.jpg?alt=media&token=58ffddfb-7fed-4108-bb4f-906b39ea3963",
        sinopsis:"A veces el susurro en los arbustos es en realidad un monstruo. Idris Elba (Rápidos y Furiosos: Hobbs & Shaw, El Escuadrón Suicida) protagoniza un nuevo y emocionante thriller sobre un padre y sus dos hijas adolescentes que se ven perseguidos por un enorme león que intenta demostrar que la selva sólo tiene un máximo depredador",
        clasificacion:"+18",
        idioma:"ES"
    },
    {
        nombre:"Demonio ",
        genero:"Terror",
        duracion:250,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/demonioenelespejo.jpg?alt=media&token=f3590527-bfa1-4595-af1e-7361ac666b5b",
        sinopsis:"Dos jóvenes hermanas, enviadas a vivir con su tía, descubren que todos los espejos de su casa están ocultos o cubiertos de una tela. Cuando una de las hermanas se encuentra con un espejo en el sótano, sin saberlo, libera a un demonio malicioso que había perseguido a su madre y a su tía años atrás.",
        clasificacion:"+18",
        idioma:"EN subtitulado"
    },
    {
        nombre:"Dragon boll",
        genero:"Ciencia ficcion",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/dragonball.jpg?alt=media&token=846ea795-586f-4f7a-b1b6-6b3643b2027f",
        sinopsis:"Son Goku destruyó en su momento a la Patrulla Roja. Ahora, ciertos individuos han decidido continuar con su legado y han creado a los androides definitivos: Gamma 1 y Gamma 2. Estos dos androides se autoproclaman y deciden atacar a Piccolo y a Gohan. ¿Cuál es el objetivo de la nueva Patrulla Roja? Ante un peligro inminente, ¡llega el momento del despertar del Superhéroe! La película, que cuenta con el compromiso e intervención del creador original de Dragon Ball, Akira Toriyama, tiene al legendario creador de manga detrás de la historia original, el guión y el diseño de personajes del filme",
        clasificacion:"General",
        idioma:"ES"
    },
    {
        nombre:"Nop",
        genero:"Drama",
        duracion:190,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/nop.jpg?alt=media&token=15ea4486-70c6-471d-b75d-9b1f7a5e6d6a",
        sinopsis:"¿Qué es un mal milagro?” El ganador del Oscar® Jordan Peele redefinió el género del horror moderno, primero con ¡Huye! y luego con Nosotros. Y ahora reinventa la película del verano con una nueva pesadilla pop expansiva pop de horror, la épica película ¡Nop! El proyecto reúne a Peele con el ganador del Oscar® Daniel Kaluuya (¡Huye!, Judas y el mesías negro), a quienes se les une Keke Palmer (Estafadoras de Wall Street, Alice) y el nominado al Oscar® Steven Yeun (Minari, historia de mi familia, Okja)",
        clasificacion:"General",
        idioma:"ES"
    },
    {
        nombre:"Perros samurai",
        genero:"Infatil",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/perrosamuari.jpg?alt=media&token=71d94ff8-220f-4426-b6cf-88a5846e8f7e",
        sinopsis:"Hank, un sabueso con mala suerte, se encuentra en un pueblo lleno de gatos que necesitan un héroe que los defienda de un despiadado villano que quiere borrar a su aldea del mapa. Con la ayuda de un maestro que no quiere entrenarlo, nuestro desvalido héroe debe asumir el papel del samurái del pueblo y unirse a los aldeanos para salvar el día. El Perro Samurái: La leyenda de Kakamucho, próximamente en cines. Con las voces de Juanpa Zurita como Hank, Faisy como Ika Chu y Karla Díaz como Emiko.",
        clasificacion:"Infantil",
        idioma:"EN subtitulada"
    },
    {
        nombre:"Top Gun",
        genero:"Comedia",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/TopGun.jpg?alt=media&token=932e7859-e7ab-4003-a90f-92829ce77874",
        sinopsis:"Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete  Mitchell (Tom Cruise) está en donde pertenece, sobresaliendo como un valiente piloto de pruebas y evitando subir de rango en la armada, que evitaría que pudiera seguir volando.",
        clasificacion:"General",
        idioma:"ES"
    },
    {
        nombre:"Super mascota",


        genero:"Infantil",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/supermascotas.jpg?alt=media&token=4dee0b79-412d-438c-b08b-8cd6f66f5d3a",
        sinopsis:"Cuando la Liga de la Justicia es capturada por Lex Luthor, el perro de Superman, Krypto, forma un equipo de mascotas de refugio a las que se les otorgan superpoderes: Un sabueso llamado Ace, que se vuelve superfuerte, un cerdo llamado PB, que puede crecer hasta alcanzar un tamaño gigante, una tortuga llamada Merton, que se vuelve superrápida, y una ardilla llamada Chip, adquiere poderes eléctricos.",
        clasificacion:"Infantil",
        idioma:"ES"
    },
    {
        nombre:"Tren bala",
        genero:"accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/trenbala.jpg?alt=media&token=15c7baff-6631-4b77-bb5f-604e43f7e148",
        sinopsis:"En Tren bala, Brad Pitt protagoniza la película en el papel de Ladybug, un asesino con poca suerte determinado a hacer su trabajo en paz después de que más de una de sus asignaciones se le han salido control. Sin embargo, el destino puede tener otros planes mientras que la última misión de Ladybug lo pone en un camino accidentado con adversarios mortales de diversas partes del planeta -todos conectados pero con objetivos en conflicto- en el tren más rápido del mundo…y tiene que descubrir como bajarse. Del director de Deadpool 2, David Leitch, el final del camino es sólo el comienzo de un viaje extremo sin parar a través de un Japón Moderno.",
        clasificacion:"+18",
        idioma:"ES"
    },
    {
        nombre:"Una madre",
        genero:"Terror",
        duracion:230,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/unamadre.jpg?alt=media&token=02b18558-1567-4750-a878-3efdd68cc5da",
        sinopsis:"Después de la muerte de su padre, Alejandro decide rescatar a su madre. Ella está internada en un manicomio rural y él cree que fue recluida injustamente. Ahora, junto a esa hermosa mujer, Alejandro emprende un viaje largo y extenuante; ellos dos juntos y solos, estarán desafiados emocional y físicamente mientras atraviesan las inhóspitas montañas de Antioquia en un viaje de amor y locura.",
        clasificacion:"+18",
        idioma:"ES"
    },
    {
        nombre:"Vertigo",
        genero:"Suspenso",
        duracion:200,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejv-2b20d.appspot.com/o/vertigo.jpg?alt=media&token=3b5189be-f918-46ee-b57a-37da09109e7d",
        sinopsis:"Para las mejores amigas Becky (Grace Caroline Currey) y Hunter (Virginia Gardner), la vida consiste en conquistar los miedos y superar los límites. Pero después de escalar 600 metros hasta la cima de una remota torre de radio abandonada, se encuentran atrapadas e incomunicadas. Ahora, las habilidades de escalada de Becky y Hunter serán puestas a prueba mientras luchan desesperadamente por sobrevivir. Thriller cargado de adrenalina, coprotagonizado por Jeffrey Dean Morgan (The Walking Dead / Rampage / Watchmen). De los mismos productores de Terror a 47 metros y dirigida por Scott Mann (Final Score).",
        clasificacion:"+18",
        idioma:"ES"
    }

]

// recorriendo un arreglo en js

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)


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
    genero.classList.add("text-start")
    genero.textContent= "genero: "+pelicula.genero
    //6 creamamo el idioma de cada palicula

    let idioma=document.createElement("h6")
    idioma.classList.add("fw-bold")
    idioma.textContent= "idioma: "+pelicula.idioma

    //7 creamos la sinopsis
    let sinopsis=document.createElement("p") 
    sinopsis.classList.add("d-none")   
    sinopsis.textContent=pelicula.sinopsis

    //8 creamos la clasificacion

    let clasificacion=document.createElement("h7")
    clasificacion.classList.add("fw-bold")
    clasificacion.textContent= "clas: "+pelicula.clasificacion


    

    // padres e hijos

    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)     
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)    
    columbna.appendChild(tarjeta)
    fila.appendChild(columbna)
    
})

// detectando seleccion de una pelicula 
fila.addEventListener("click",function(){
    alert("Esta seleccinando una palicula")
})





