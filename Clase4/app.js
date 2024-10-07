//CALL STACK (Pila de llamadas en JS)
//JS SINGLE-THREAD (NO MULTI-THREAD)
//JS utiliza solo un hilo de ejecución, NO ES multihilo
const multiplicacion = (x,y) => x*y
const calcularCuadrado = (num) => multiplicacion(num,num)
const esRectanguloRecto = (a,b,c) => calcularCuadrado(a) + calcularCuadrado(b) == calcularCuadrado(c)

console.log(esRectanguloRecto(3,4,5))
console.log(esRectanguloRecto(5,1,5))

//CALLBACK
console.log("Primero")
setTimeout(function(){
    console.log("Segundo")
},3000) //ejecuta la función cada 1 seg (1000ms)
console.log("Tercero")

/******************************/
//AHAX --> Asynchronous JS and XML
//AJAJ --> Asynchronous JS and JSON
//REQUEST --> Petición
//XHTMttpRequest --> NO suporta PROMISES... Peticiones SOAP(XML)
//FETCH --> Soporta PROMISES --> Nativo JS EJ6 --> Trabaja con XML y JSON (API REST)
//AXIOS --> Soporta PROMISES --> Libreria externa que trabaja directamente con un objeto "data", que es JSON


const url = "http://api.tvmaze.com/search/shows?q="

const consultarPeliSerie = (nombre) => {
    //fetch es una funcion callback de JS (nativo) JS6 que devuelve en texto plano los resultados obtenidos es una url, esos resultados son devueltos mediante promise, resolve o reject
    fetch(url+nombre)
    //RESOLVE
    .then(function(datos){
        console.log("RESOLVE")
        //console.log(datos)
        //Convertimos el formato plano por defecto devuelto por fetch a formato JSON
        return datos.json()
    })
    .then(function(datosJSON){
        console.log(datosJSON)
    })
    //REJECT
    .catch(function(error){
        console.log("REJECT")
        console.log(error)
    })
}

consultarPeliSerie("Breaking")

//PROMISE EJ: FETCH
const fetchDummy = async(url) => {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const randNum = Math.random() //Entre 0 y 0.99999999
            if(randNum > 0.5){
                return resolve({
                    data:"ARRAY PELICULAS",
                    status:200 // 200 (Success-action)
                })
            }else{
                return reject({
                    data:"ERROR",
                    status:500 // 500 (Error generico)
                })
            }
        },500)
    })
}

const fetchDummyAsync = async(url) => {
    const randNum = Math.random() //Entre 0 y 0.99999999
    if(randNum > 0.5){
        //resolve
        return `${randNum} OK`
    }else{
        //reject
        throw new Error(`${randNum} KO`)
    }
}

function peticionFetchDummy(){
    fetchDummy(url)
    .then(function(datos){
        console.log(datos)
    })
    .catch(function(error){
        console.log(error)
    })
}

peticionFetchDummy()

console.log("INICIO Funcion hola asincrona")
//Las funciones asincronas siempre devuelven una promesa
async function Hola(){
    return "Hola a todos"
}
console.log("Fin Funcion hola asincrona")
console.log(Hola())

async function Adios(){
    throw new Error("La promesa es rechazada")
    
}
console.log(Adios())

console.log("------------------------------")
console.log(fetchDummyAsync())
console.log("------------------------------")

const consultarPeliSerieAxios = async(nombre) => {
    //fetch es una funcion callback de JS (nativo) JS6 que devuelve en texto plano los resultados obtenidos es una url, esos resultados son devueltos mediante promise, resolve o reject
    await axios.get(url+nombre)
    //RESOLVE
    .then(function(datos){
        console.log("RESOLVE")
        //console.log(datos)
        console.log(datos.data)
    })
    //REJECT
    .catch(function(error){
        console.log("REJECT")
        console.log(error)
    })
}

consultarPeliSerieAxios("friends")