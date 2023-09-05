let str = [1,3,4,0,6,8,12]

let pari = 0
let dispari= 0
for (let i = 0; i < str.length; i++) {
   
    
    if (str[i] % 2 == 0){
        pari++
        
    } else {
        dispari++
        
    }
    
}
str.push('w')
console.log(str)
console.log('pari ' + pari + ' ' + 'dispari ' + dispari)
  