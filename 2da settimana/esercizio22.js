// scegliere un array di oggetti o mappe, ogni singola mappa
// deve avere un lato di destra della relazione un numero, il codice deve fornire la somma di tutti i numeri del lato destro della relazione

let arr = [
  {
    a: 1,
    b: 2,
    c: 4,
  },
  {
    a: 2,
    b: 3,
    c: 5,
  },
];

let res = 0



for(let i = 0; i < arr.length;i++) {//per ogni mappa di arr
    let current = arr[i]//prendo una delle due mappe
    let values = Object.values(current)//prendo i valori della mappa corrente
    for(let j = 0; j < values.length; j++) {//per ogni valore della mappa corrente
        res = res + values[j]//faccio la somma
    }
}
console.log(res)