//scrivere una funzione che prende in ingresso un array di stringhe a,
//la funzione deve ritornare una mappa dove ogni chiave corrisponde ad
//ogni stringa in a e il valore corrisponde alla lunghezza della stringa

// dichiarare l'array di stringhe
// dichiarare la mappa
// dichiarare la funzione
// mediante ciclo for associare  le chiavi della mappa all'elemento
// degli indici dell'array
// e per il valore della mappa associare la lunghezza dell'elemento
//dell'indice dell'array

let string = ["ciao", "io", "annibale", "settantanove"]
let res = {}

function crazy(str) {
  for (i = 0; i < str.length; i++) {
    let current = str[i]
    res[current] = current.length
  }

  return res
}
console.log(crazy(string))
