
// scrivere una funzione che accetta un 
// array arr e una funzione fn, la funzione
//  applica fn a ogni elemento avente indice
//   pari di arr e pusha 
// il risultato dentro un nuovo array

//definisco la funzione indexEven
// ciclo sull'array
//controllo se l'indice e' pari
//allora
//metto in una variabile l'indice corrente elaborato dalla funzione fn
//pusho l'elemento nella variabile che ritorna la funzione

function indexEven(arr, fn) {
    const res = []
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) { 
        let getArrI = fn(arr[i])
        res.push(getArrI)
      }
    }
  
    return res
  }
  function sum (n) {
  
    return n + n
  }
  
  
  
  console.log(indexEven([1,2,3,4,5,6,7,8,9,10], sum))