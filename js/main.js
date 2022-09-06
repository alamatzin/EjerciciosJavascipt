
//Ej. 2

let arreglo2 = ["-1","3","4","2","6"];
let long = arreglo2.length;
let menor = arreglo2[long-1]

function menorNum(arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
        let element = arreglo[index];
        if (element < menor) {
            menor = element
        }
    }
console.log(menor)
}

menorNum(arreglo2)