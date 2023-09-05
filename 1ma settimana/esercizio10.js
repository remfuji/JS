let input = 3
let xToDraw = 1

for(let row = 0; row < input; row++) {
    let carattere = ""
    for (let i = 0; i < xToDraw ; i++) {
        carattere += "X"
   }
    console.log(carattere)
    xToDraw++
}
xToDraw -= 2
for(let row = input; row >= 0; row--) {
    let carattere = ""
    for (let i = 0; i < xToDraw ; i++) {
        carattere += "X"
   }
    console.log(carattere)
    xToDraw--
}


function drawXs (howMany) {
    
}

