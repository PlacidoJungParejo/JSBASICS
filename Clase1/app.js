//EMAScript 6 (ES6)
let a = 7
let nombre = "Placido"
let apellido = "Jung"

console.log(a)
console.log(nombre)
console.log(apellido)

nombre = "Plácido"
console.log(nombre)

const TAMANYO = 200
console.log(TAMANYO)

var penalti = true //Obsoleto
// TAMANYO = 300 // No se puede - Error por asignación a constante
/*
    Muchas
    lineas
    de
    comentarios
*/

let esvacio = true
console.log(esvacio)
esvacio = false
console.log(esvacio)

console.log(nombre + apellido)
console.log(nombre + " " + apellido)
let nombreyapellido = nombre + " " + apellido
console.log(nombreyapellido)

console.log(`Hola, mi nombre es ${nombre} ${apellido}`)
console.log("Hola, mi nombre es " + nombre + " " + apellido)

let saludo = "Hola"
console.log(saludo.length)
console.log("Hola".length)
console.log(`La longitud de la cadena "Hola como estas" es de ${"Hola como estas".length}`)
console.log(`La longitus de la cadena "Hola" es de ${saludo.length}`)

console.log("Hola".charAt(2))
console.log("Hola".concat(" mundo"))
console.log("Hola".startsWith("Ho"))
console.log("Miguel Angel".split(" "))
let nombrecompleto = "Plácido Jung Parejo"
let n = nombrecompleto.split(" ")[0]
let a1 = nombrecompleto.split(" ")[1]
let a2 = nombrecompleto.split(" ")[2]
console.log(n)
console.log(a1)
console.log(a2)
console.log(`El nombre completo tiene ${nombrecompleto.split(" ").length} palabras`)
console.log("            Adiós, Amigo!!!!            ".trim())
console.log("            Adiós, Amigo!!!!            ".trimStart())
console.log("            Adiós, Amigo!!!!            ".trimEnd())
console.log("            Adiós, Amigo!!!!            ".length)
console.log("            Adiós, Amigo!!!!            ".trim().length)
console.log("Hola".toUpperCase())
console.log("Hola".toLowerCase()) 
console.log("Hola a todos".replace("Hola","Adios"))
console.log("Hola, Hola a todos".replace("Hola","Adios"))
console.log("Hola, Hola a todos".replaceAll("Hola","Adios"))
console.log("Hola a todos".replace("a","o"))
console.log("Hola a todos".replaceAll("a","o"))


console.log("Hola a todos".indexOf("a"))

console.log(" Como mola Javascript ".trimStart().toUpperCase().replace("MOLA","JODER CON LA MOSCA"))

console.log("Hola a todos \n y a todas")
console.log("Hola a \'todos\' ")
console.log(`Hola a \'todos\' `)

let producto = "Manzanas"
let precio = 1.80 // Se utiliza el punto para los decimales, no la coma
let cantidad = 7
console.log(`Has comprado ${cantidad} ${producto}, son ${precio*cantidad}€`)