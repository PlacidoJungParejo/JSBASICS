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

//3 - Funciones ARROW (Flecha) --> Expresiones LAMBDA
//console.log(cuadrado(4))
const cuadrado = (x) => {return x*x}
// const cuadrado = function(x){
//     return x*x
// }
// function cuadrado(x){
//     return x*X
// }
console.log(cuadrado(4))

const suma = (x,y) => {console.log(x+y)}
console.log(suma(2,4))

const suma2 = (x,y) => x+y //Return implicito
console.log(suma2(2,4)) 

const suma3 = (x,y) => {x+y}
console.log(suma3(2,4)) 

//RESUMEN
//1 - Declaracion
console.log(esPar(7))
function esPar(num){return num%2 == 0}
console.log(esPar(2))

//2 - Expresion
const esPar2 = function(num){return num%2 == 0}
console.log(esPar2(2))

//3 - Arrow LAMBDA
const espar3 = (num) => num%2 == 0
console.log(espar3(2))

//Funciones ANONIMAS
// function(){} las funciones declarativas no pueden ser anonimas
const digoHola = function(){return "Hola"}
const digoHola2 = () => "Hola"
console.log(digoHola())
console.log(digoHola2())

//Más funciones con ARRAYS y LAMBDA
const nombres2 = ["Juan","Pepa","Manolo","Maria"]
const buscar = nombres2.find(function(item){
    /**/ 
})
const buscarLAMBDA = nombres2.find(item => item.indexOf("M") === 0) // return implicito
console.log(buscarLAMBDA)

const funcBuscar = item => item.indexOf("M") === 0
const funcBuscar2 = nombres2.find(funcBuscar)
console.log(funcBuscar2)

/*
    const aMayusculas = nombres.map(function(e){
        return e.toUpperCase()
    })
*/

const aMayusculas2 = nombres.map(e => e.toUpperCase())
console.log(aMayusculas2)

//filter --> Obtener TODAs las ocurrencias que incluyen la "M"
const funcBuscar3 = nombres2.filter(funcBuscar)
console.log(funcBuscar3)

const funcBuscar4 = item => item.includes('M')
const funcBuscar5 = nombres2.filter(funcBuscar4)
console.log(funcBuscar2)

const everyName = nombres2.every(item => item.includes("a"))
console.log(everyName)

const someName = nombres2.some(item => item.includes("J"))
console.log(someName)

//Operador ternario