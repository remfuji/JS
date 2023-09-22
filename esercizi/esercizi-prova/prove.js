// scrivere una funzione chiamata arrayNumbersPlusMinus1 che 
// prende in ingresso un array di numeri ed un numero n, 
// la funzione ritorna un nuovo array con tutti i numeri ai quali sommato o 
// sottratto 1 danno n

// ad esempio per [1,2,3] e 2 ritorna [1,3]
// ad esempio per [2,5,8] e 7 ritorna [8]
// ad esempio per [2,6,8] e 7 ritorna [6, 8]


function arrayNumbersPlusMinus1(arr, n) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] + 1 === n || arr[i] - 1 === n ) {
            newArr.push(arr[i])
        }
    }
    return newArr
    }
    //console.log(arrayNumbersPlusMinus1([1,2,3,4,5], 2))


// scrivere una funzione chiamata between che 
// dati due numeri a e b in ingresso
// ritorni un array che contiene tutti i numeri compresi tra a e b, estremi esclusi

function between(a, b) {
    let newArr = []
    for ( let i = a + 1; i < b ; i++) {
        newArr += i
    }
    return newArr
}
  //console.log(between(2, 6))

// scrivere una funzione chiamata biggerString che 
// date due stringhe in ingresso
// ritorni la piu' lunga

function biggerString(a, b) {
    if (a.length > b.length) {
        return 'sono a ' + a
    }else {
        return 'sono b ' + b
    }
}
//console.log(biggerString('ciao come stai', 'ciao '))

// scrivere una funzione chiamata countNoSpaces che 
// data una stringa come parametro
// ritorni un intero n che rappresenti i caratteri presenti nella
// string passata, senza contare gli spazi


function countNoSpaces(string) {
    let count = 0
    for ( let i = 0; i < string.length; i++) {
        if ( string[i] !== ' ') {
            count++
        }
    }
    return count
}
//console.log(countNoSpaces('c i a o'))

// scrivere una funzione chiamata countUndefinedKeys che 
// dato un oggetto come parametro
// ritorni un intero che rappresenti il numero di chiavi, presenti
// nell'oggetto, che hanno valore undefined o null
let object = {
    'a' : 'string',
    'b' : ['a','b','c'],
    'c' : null
}

function countUndefinedKeys(obj) {
    let count = 0
    for(let i = 0; i < object.length; i++) {
        let current = string[i]
        let keys = Object.value(current)
        if(keys === null) {
            count++
        }
        
    }
    return count
}
console.log(countUndefinedKeys(object))

