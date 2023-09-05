// 2 arrey diversi ordinati in modo crescente
// crea un solo array risultato dei due ordinato

let arr1 = [5, 7, 8]
let arr2 = [1, 2, 6, 10]
let ris = []
let i = 0
let j = 0


for (; i < arr1.length && j < arr2.length;) {
    let element = arr1[i];
    let element2 = arr2[j];
    if (element < element2) {
        ris.push(element)
        i++
    }
    else {
        ris.push(element2)
        j++
    }
}

for (; i < arr1.length; i++) {
    ris.push(arr1[i])
}
for (; j < arr2.length; j++) {
    ris.push(arr2[j])
}
console.log(ris)