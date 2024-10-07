console.log("hola".toUpperCase())

String.prototype.toUpperCase = function(){
    return "Lo siento, no funciona"
}

console.log("hola".toUpperCase())

String.prototype.holaTodos = () => "Hola a todos"

console.log("hola".holaTodos())

// console.log(String)

Array.prototype.pop = function(){
    console.log(this.length)
}

const num = [6,7,8,9]
console.log(num)
num.pop() 

//Distintas formas de crear Objetos JS
//1-Constantes (const) y Variables (let)
//Creación inicial, que luego te puede varias...
const equipo = {
    nombre:"Villena CF",
    anyo:1920,
    diasActivo: function(){ return ""}
}
equipo.estadio = "La Solana"
console.log(equipo)
//2 - Factory Funtion - Necesitamos un objeto a retornar siempre ( siempre tendreis un REUTURN )
function crearColor(r,g,b){
    //Parecido a un CONSTRUCTOR parametrizado
    const color = {}
    color.r = r
    color.b = b
    color.g = g
    color.imprimirColor = function(){
        console.log(`rgb(${this.r},${this.b},${this.g})`)
    }
    //siempre tendreis un return
    return color
}

let rojo = crearColor(255,0,0)
let verde = crearColor(0,255,0)
let azul = crearColor(0,0,255)

rojo.imprimirColor()
verde.imprimirColor()
azul.imprimirColor()

//3 - Function Constructor - No implica retornar un objeto, se puede modificar a partir del prototype, la utilizamos con la palabra new

function colorNuevo(r,g,b){
    this.r = r
    this.b = b
    this.g = g
    this.imprimirColor = function(){
        console.log(`rgb2(${this.r},${this.b},${this.g})`)
    }
    //No necesita retornar nada
}

let colorRojo = new colorNuevo(255,0,0)
colorRojo.imprimirColor()
colorNuevo.prototype.imprimirColor = function(){
    console.log("No hay color")
}
colorRojo.imprimirColor()

//4 - P.O.O JS
class Animal{
    //Constructor parametrizado
    //Atributos
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }
    //Comportamiento - Metodos
    dormir(){
        return `El animal ${this.nombre} esta durmiendo`
    }
    comer(){
        return `El animal ${this.nombre} esta comiendo`
    }
    hacerSonido(){
        return `El animal ${this.nombre} esta haciendo sonido`
    }
}
const a1 = new Animal("buitre",10)
console.log(a1.comer())
console.log(a1.dormir())
console.log(a1.hacerSonido())

class Perro extends Animal{ //Herencia
    constructor(nombre,edad,raza,edadMedia = 13){
        super(nombre,edad)
        this.raza = raza
        this.edadMedia = edadMedia
    }
    //Sobrecarga de funciones - Polimorfismo
    hacerSonido(){
        return `${this.nombre} esta ladrando !!`
    }
}

const laika = new Perro("Laika",7,"Mestiza")
console.log(laika.comer())
console.log(laika.dormir())
console.log(laika.hacerSonido())