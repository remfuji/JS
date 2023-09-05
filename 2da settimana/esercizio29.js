// produrre un nuovo array formato dall asomma del primo e ultimo, secondo e penultimo, 


//ciclare l'array
//prendere i e sommare con l'ultimo ele dell arr



let arr = ["a", "b", "c", "d", "e", "f"]
let ris = []

for (let i = 0, j = arr.length - 1; i <= j; i++, j--) { // ciclo contemporaneamente da sx a dx e da dx a sx
    let sx = arr[i]
    let dx = arr[j]
    if (i != j) {
        ris.push(sx + dx)
    }else {
        ris.push(sx)
    }
}
console.log(ris)
 



