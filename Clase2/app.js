let  div = 0/0
console.log(div) // NaN = Not a Number

if(isNaN(div)){
    console.log("Error al dividir por 0")
}else{
    console.log("OK!")
}

//null vs undefined

let user
console.log(user)

if(user == undefined){
    console.log("Variable no definida")
}else{
    console.log("OK!")
}

let userLogeado = null
if(userLogeado == null){
    console.log("Abrir la pantalla de LOGIN")
    //Simulamos proceso login
    userLogeado = "Manolito"
}else{  
    console.log("Bienvenido "+userLogeado)
}

if(userLogeado){ //userLogeado == null || userLogeado == undefined
    console.log("Abrir la pantalla de LOGIN")
    userLogeado = "Manolito"
}else{  
    console.log("Bienvenido "+userLogeado)
}

if(userLogeado){ //userLogeado == null || userLogeado == undefined
    console.log("Bienvenido "+userLogeado)
}

/*let num3 = prompt("Introduzca un numero por favor")
console.log(num3) //"12" o "52"
console.log(parseInt(num3))*/

/*let condition = false

do{
    let num3 = prompt("Introduzca un numero por favor")
    if(isNaN(parseInt(num3))){
        //condition = false
        console.log("Por favor, introduce un numero valido")
    }else{
        console.log(`Tu número es el ${num3}`)
        condition = true
    }
}while(condition == false)*/

let aa = 2
let bb = '2'

if(aa == bb){
    console.log("Iguales")
}else{
    console.log("Diferentes")
}

if(aa === bb){
    console.log("Iguales")
}else{
    console.log("Diferentes")
}

let cc = 3
if(aa = cc){ //Tipico error (Utilizar la asignación dentro de una condicion)
    console.log("Iguales")
}else{
    console.log("Diferentes")
}

let puntuacion = 7
if(puntuacion < 5){
    console.log("Insuficiente")
}else if(puntuacion >= 5 && puntuacion <= 8){
    console.log("Notable")
}else{
    console.log("Sobresaliente")
}

switch(puntuacion){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("INSUFICIENTE")
        break
    case 5:
        console.log("SUFICIENTE")
        break
    case 6:
    case 7:
    case 8:
        console.log("NOTABLE")
        break
    default:
        console.log("SOBRESALIENTE")
}

//Condicion AND (aa == bb && aa == cc)
//Condicion OR (aa == bb || aa == cc)


//ARRAYS
let array1 = []
console.log(array1)
let colores = ["rojo","azul",'verde']
console.log(colores)
console.log(colores[1])
let numeros = [15,8,51,6,95,7]
console.log(numeros)
console.log(numeros[2])
let varios = ["rojo",19,true,false,18.66,'verde']
console.log(varios)
varios.push("Manolito") // Arraylist add (añade al final del array)
console.log(varios)
varios.unshift("Rachel")
console.log(varios) // añade al principio del array
varios.pop() //elimina por el final
console.log(varios)
varios.shift()//elimina por el principio
console.log(varios)

console.log(numeros.sort())
console.log(varios.sort())

const tablero = [[1,2,3],[4,5,6],[7,8,9]]
console.log(tablero[1][2])
console.log(tablero)
tablero[1][2] = 33
console.log(tablero)
tablero[2][2] = "Manolito"
console.log(tablero)

let arr = [1,2,3]
console.log(arr)
arr = [333,222,111]
console.log(arr)

const aConstante = [1,2,3]
console.log(aConstante)
//aConstante = [33,22,11]
aConstante[2] = "verde"
console.log(aConstante)

const equipos = ["Barcelona","Madrid","Betis"]
console.log(equipos.length) //Lengrh es proiedad, no funcion, no poner length()
console.log(equipos[2])

const equipos2 = new Array(3)
console.log(equipos2)
equipos2[1] = "Caudetano"
console.log(equipos2)

//OBJETOS - JSOn (Javascript Object Notation)
const equipoFutbol = {
    nombre:"Sevilla CF",
    ciudad:"Sevilla (España)",
    añoFundacion:1900,
    esPrimera:true,
    presupuesto:15500000.79,
    jugadores:[
        {
            nombreJugador:"Navas",
            edad:35
        },
        {
            nombreJugador:"Romeu",
            edad:20
        }
    ],
    palmares:{
        ligas:7,
        copas:10,
        uefas:12,
        champions:null
    }
}
console.log(equipoFutbol)
console.log(equipoFutbol.ciudad)
console.log(equipoFutbol.jugadores[1])
console.log(equipoFutbol.jugadores[1].nombreJugador)
console.log(equipoFutbol.palmares.uefas)
equipoFutbol.palmares.uefas = 13
console.log(equipoFutbol.palmares.uefas)

const equiposPrimera = [
    {
        nombre:"Real Madrid CF",
        champions:15,
        jugadores:["Vinicius","Mbappe","Gil Manzana"]
    },
    {
        nombre:"FC Barcelona",
        champions:5,
        estadio:"Camp Nou"
    },
    {
        nombre:"Atletico del Madrid",
        champions:0
    }
]

console.log(equiposPrimera)

for(let i=0;i<equiposPrimera.length;i++){
    console.log(equiposPrimera[i])
}

equiposPrimera[2].estadio = "Metropolitano"
//for each
for(let equipo of equiposPrimera){ //of, acceso al contenido
    if(equipo.jugadores){ //equipo jugadores != null && equipo jugadores != undefined
        console.log(equipo.jugadores)
    }
    if(equipo.estadio){
        console.log(equipo.estadio)
    }
    equipo.ligas = null
}

console.log(equiposPrimera)

for(let equipo in equiposPrimera){ //in, acceso al indice
    console.log(equipo)
}

const matriz = [[1,2,3],[5,6,7],[21,22,"a"]]
for(let fila of matriz){
    for(let col of fila){
        console.log(col)
    }
}