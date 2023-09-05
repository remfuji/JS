// stampare i numeri tra a e b scelti a piacere, alternando la
// modifica dell'indice: una volta saltando di 1, una volta saltando di 2


let a = 0;
let b = 10;

// for (let i = a; i < b; ) {
//     console.log(i)
//     if (i % 2 === 0) {
//         i += 1
        
//     }else {
//         i += 2
        
//     }
   
    
// }


let jump = 1
for (let sum = a; sum < b;) {
    console.log(sum)
    sum += jump
    if (jump == 1) {
        jump = 2
    } else {
        jump = 1
    }
}