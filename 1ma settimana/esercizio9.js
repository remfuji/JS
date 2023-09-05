
// let primo = 1
// let s = 0
// let righe = 5
// let x = righe

// for (let h = 0; h < righe; h++) {
//     let stringa = ""
//     for (let j = 0; j < s; j++) {
//         stringa += " ";
//     }
//     s += 1
   
//     for(let i = 0; i < x; i++){
//         stringa += "x"
//     }
//     x -= 2;
//     console.log(stringa)
// }

let input = 10
let rows = (2 * input) -1
let turningPoint = input

let xsToDraw = 1
let crossedHalfway = false

while (rows > 0) {
  let xs = "-"
  for (let i = 0; i < xsToDraw; i++) {
    xs += "x"
  }
  console.log(xs)

  if (xsToDraw < turningPoint && !crossedHalfway) {
    xsToDraw++
  } else {
    crossedHalfway = true
    xsToDraw--
  }
  rows--
}
