//1) Data la seguente riga
//console.log(reduce([1,2,3], [], ?)

//Scrivere una funzione anonima al posto di ? 
//che vi consenta di replicare il comportamento di map,
// ad esempio moltiplicando per 2 tutti gli elementi dell'array, 
//quindi in questo caso stamperebbe [2,4,6] 




//dichiaro la funzione reduce
//metto in una variabile il valore accumulato dalla funzione
//ciclo for sull arr
// metto in una var il valore applicato dalla funzione sull elemento corrente dell arr
//pusho il risultato sulla variabile del valore accumulato dalla funzione



function reduce(arr, init, funx) {
  let res = init
  for (let i = 0; i < arr.length; i++) {
    res = funx(res, arr[i])
  }
  return res
}



console.log(reduce([2,5,7], [], function(arr, current) {
  arr.push(current * 2)
  return arr
} ))