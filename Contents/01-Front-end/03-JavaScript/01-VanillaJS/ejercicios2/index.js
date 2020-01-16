// Ejercicio 1

// let numeros = [];
//     for (let i = 1; i <= 100; i++){
//     numeros.push(i);
// }
// alert(numeros);

// Ejercicio 2

// let numeros = [];
//     for (let i = 1; i <= 100; i++){
//     numeros.push(i);
// }

// let impares = [];
// for (let i = 0; i < numeros.length; i++){
//         if(numeros[i] % 2 != 0){
//         impares.push(numeros[i]);
//         }
//     }
// alert(impares);
// Ejercicio 3

// const animales = ["elefante", "perro", "ballena"];
// const peso = [5000, 50, 20000];

// for (let i = 0; i < animales.length-1; i++){
//     if(animales[i] === "perro"){
//         alert(`El ${animales[i]} pesa ${peso[i]} kg`);
//     }
// }

// Ejercicio 4

// const animales = ["elefante", "perro", "ballena"];
// const peso = [5000, 50, 20000];
// document.write(`<h1>Animales grandes</h1>`)
// for (let i = 0; i < animales.length; i++){
//     if(peso[i] > 1000 ){
//        document.write(`<p>${animales[i]} pesa ${peso[i]} kg<p>`);
//     }
// }

// Ejercicio 5

// let letras = [];
// let pizarra = "pizarra"
// for (let i = 0; i < pizarra.length-1; i++){
//         if(i % 2 === 0){
//         letras.push(pizarra[i]);
//     }

// }

// Ejercicio 6

// let naranjas = "naranjas"

// switch (naranjas){
//     case "naranjas":
//     console.log("2€");
//     break;
// }
// Ejercicio 7

// const max_number = 12;
//     for(let i = 0; i < max_number; i++){
//     console.log(`${i+1} ovejita...`);
// }

// Ejercicio 8

// let lista_compra = [];
// const tacos = ["carne", "frijoles", "pimiento verde", "brocoli"];
// const sopa = ["fideos", "brocoli", "caldo", "pollo"];
// const pizza = ["masa", "base de tomate", "brocoli", "bacon", "queso"];

// for(let i = 0; i < tacos.length; i++){
//     if(tacos[i] != "brocoli"){
//     lista_compra.push(tacos[i]);
//     }
// }
// for(let i = 0; i < sopa.length; i++){
//     if(sopa[i] != "brocoli"){
//     lista_compra.push(sopa[i]);
//     }
// }
// for(let i = 0; i < pizza.length; i++){
//     if(pizza[i] != "brocoli"){
//     lista_compra.push(pizza[i]);
//     }
// }
// console.log(lista_compra)

// Ejercicio 9

// let numero10 = 10;
// let resultado = 1;
// for(i = 0; i <= numero10-1; i++){
//     resultado = (numero10-i) * resultado;
// }
// console.log(resultado);

// Ejercicio 10

const poblaciones = {
    "españa": 47000000,
    "italia": 61000000,
    "francia": 67000000,
}

let keys = Object.keys(poblaciones); // ["españa","italia","francia"]


for (let i = 0; i < keys.length; i++) {
    let clave = keys[i];
    let poblacion = poblaciones[clave];
    if (poblacion > 60000000) {
        console.log(clave);
    }
}




