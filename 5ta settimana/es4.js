let frase = 'ciaoatutticomestate'
// let fraseWithNoSpaces = ''
let firstString = ''
let secondString = '.'
let thirdString = '..'
let arr = [
    [],
    [],
    []
]
function firstStringFunction(str){
    for( let i = 0; i < str.length; i += 4) {
        firstString += str[i] + "." + "." + "."
    }
    return arr[0].push(firstString)
}
function secondStringFunction(str) {
    for( let i = 1; i < str.length; i += 2){
        secondString += str[i] + '.'
    }
    return arr[1].push(secondString)
}
function thirdStringFunction(str) {
    for( let i = 2; i < str.length; i += 4) {
        thirdString += str[i] + '.' + '.' + '.'
    }
    return arr[2].push(thirdString)
}

// function noSpaces(str) {
//     for(i = 0; i < str.length; i++) {
//         if(str[i] !== ' ') {
//             fraseWithNoSpaces += str[i]
//         }
//     }
// }

firstStringFunction(frase)
secondStringFunction(frase)
thirdStringFunction(frase)
console.log(arr)
