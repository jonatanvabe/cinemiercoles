// consumo datos de la api spotify


//1. URI=ARL+EP

const URI="https://api.spotify.com/v1/albums/3wzrKpVf1i1ef4HxabBU83/tracks?market=us&limit=10&offset=5"


// TOKEN

const TOKEN="Bearer BQCUhwowRfJ6UoiMd3y1GY_XHFFlCcJ_Hi2jmXROpMHq34tpnWuneFYEiPmygeLbaHulGNk1sHSN-X9yxSNKCHBsF739_i8ktk9GEE71YwPdGTuLzuiZZfrUyaxTAroyss8y1gO6IJmU8kTgZM4UKxsAqb0y4LAmjT9MZ6IfBjFSKw075jmSHe4Ty-F7ylc"

// PETICION 

const PETICION={
    method: "GET",
    headers:{Authorization:TOKEN},
    
}

//4. usamos la proesa FETCH PARA CONSUMIR EL API

fetch(URI,PETICION)
.then(function(respuesta){
    console.log(respuesta)
}
)
.catch(function(error){
    console.log(error)
})
