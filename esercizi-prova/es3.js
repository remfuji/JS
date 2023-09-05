//scrivere una funzione che prende in ingresso un array di numeri e 
//ritorna un array che alla posizione 0 ha il numero piu' piccolo 
//presente nell'array, e alla posizione 1 il numero piu' grande presente 
//nell'array


//dichiarare l'array
//dichiarare la funzione
//dichiarare variabile risultato
//dichiarare variabile numero piu' piccolo con il primo elemento dell'arr
//dichiarare variabile numero piu' grande con il primo elemento dell'arr
//ciclo for sull ' array
// controllare indice arr e quando trova il numero piu' piccolo, push sulla
//var numero piu' piccolo
// controllare indice arr e quando trova il numero piu' grande, push sulla
//var numero piu' grande
//return variabile risultato


let arr = [94,2,3,-10,5,6,7]

function minMax(arr) {
    let res = []
    let min = arr[0]
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        current = arr[i]
        if (current < min) {
            min = current
        }
        if (current > max) {
            max = current
        }

      
    }
    res[0] = 'numero piu piccolo: ' + min
    res[1] = 'numero piu grande: ' + max
    return res
}
console.log(minMax(arr))