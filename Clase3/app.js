//1 - Función DECLARACION  -SE PUEDE LLAMAR ANTES Y DESPUES DE SU DECLARACION
sumar(2,3)
sumar(2,5)
sumar(8,7)
sumar(152,84)
function sumar(a,b){
    let suma = a+b
    console.log(suma)
    //return undefined implicito
    // return suma
}
sumar(15,2)
console.log(sumar(3,4))

console.log(saludar("Plácido","Jung"))
function saludar(nombre,apellidos){
    return `Hola ${nombre} ${apellidos}`
}
console.log(saludar("Jhonny", "Walker"))

//Ámbito (Scope)
let nombre = "Mike" //Ámbito global
function saludarMike(){
    let nombre = "Paco" //Ambito local a la función
    console.log(nombre)
    if(nombre === "Paco"){
        let nombre = "Juan" //Ámbito local al if
        console.log(nombre)
        nombre = "AAA"
    }
}
saludarMike()
console.log(nombre)

//2 - Función EXPRESION - Sólo se pueden utilizar una vez inicializadas
/*
    function cuadradoNum(num){
        return num**2
    }
*/
//console.log(cuadradoNum(7))
const cuadradoNum = function(num){
    return num**2
}
console.log(cuadradoNum(7))

//Operadores entre funciones
//Funciones son, como los arrays, objetos...
//Podemos pasar una funcion como parametro de otra funcion
const decirHola = function(num){
    console.log("Hola! " + num)
}
function holaVariasVeces(f){
    for(let i = 0;i<10;i++){
        f(i)
    }
}
holaVariasVeces(decirHola)

//Devolver una funcion dentro de otra funcion
function multiplicar(x,y){
    //return x*y
    return(function(res){
        return res = x*y
    })
}

let resultado = multiplicar(2,4)
console.log(resultado())

function makeBetweenFunc(min,max){
    return(function(val){
        return val>=min && val<=max
    })
}
const enRango = makeBetweenFunc(18,100)
console.log(enRango(17))
console.log(enRango(21))

//Objetos y funciones
const equipo = {
    nombre:"Madrid",
    anyoFundacion:1895,
    vida(){
        return new Date().getFullYear() - this.anyoFundacion
    },
    anyosVida:function(){
        return new Date().getFullYear() - this.anyoFundacion
    }
}
console.log(equipo)
console.log(equipo.vida())
console.log(equipo.anyosVida())

//Operaciones function con arrays
//funciones CALLBACK
//Función anonima que se pasa por parámetro y que se ejecuta una vez por cada elemento del array
const numeros = [1,2,3,4,5]
const numerosNegativos = numeros.forEach(function(item){
    console.log(item*-1)
    //return item*-1
})

// console.log(numerosNegativos)

const nombres = ["Juan", "Paco", "Antonio"]
const aMayusculas = nombres.map(function(e){
    return e.toUpperCase()
})
console.log(aMayusculas)