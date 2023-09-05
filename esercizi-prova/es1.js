//scrivere una funzione che prende in ingresso due array a e b, 
//la funzione deve ritornare un array che contenga gli elementi 
// che sono solo in a e solo in b

let a = [1,2,3,4,5]
let b = [2,7,4,9]

function checkNum( a, b) {
    let res =[]
    for (let i = 0; i < a.length; i++) {
        let current = a[i]
        let check1 = b.indexOf(current)
        if (check1 == -1) {
         res.push(current)
        }
     }
     for (let i = 0; i < b.length; i++) {
         let current = b[i]
         let check2 = a.indexOf(current)
         if (check2 == -1) {
          res.push(current)
         }
      }
    return res
}

console.log(checkNum(a,b))