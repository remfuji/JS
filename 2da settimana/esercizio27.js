//dato un array e dato un num questo codice deve ritornare la prima coppia di numeri la cui somma e' uguale al num scelto


let arr = [1,2,3,4,5,6,7,8,9]
let num = 5
let sum = 0

for (i = 0; i < arr.length; i ++) {
    let key = arr[i] + arr[i + 1]
    

    if (key  === num) {
      
       console.log('numeri ' + arr[i] + ' e ' + arr[i + 1] + " rispettivamente nell'indice " + [i] + ' e ' + [i + 1])
    }
}
