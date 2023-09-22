let newString = []
function iterateAnArray (str) {

    //ciclo sulla stringa
    //faccio un altro ciclo che parte dall'elemento ciclato e aggiungo per ogni iterazione il risultato su una variabile 
    //che andro' a pushare sul nuovo array
    for(let i =0; i < str.length; i++) {
        let newSubstring = []
        for( let j = i; j < str.length; j++) {
            newSubstring += str[j]
            newString.push(newSubstring)
        }
    }
    return newString
 }

//console.log(iterateAnArray("ciao"))


function nomeStringa(stringa) {
    let arr = []
    for (let i = 0; i < stringa.length;i++) {
        for(let j = i; j < stringa.length;j++) {
            arr.push(estraiSottostringa(stringa,i,j))
        }
    }
    return arr
}

function estraiSottostringa(stringa1,i,j) {
    let stringa2 = ''
    for(let y = i; y <= j; y++) {
        stringa2 += stringa1[y]
        
    }
    return stringa2
}
console.log(nomeStringa('ciao'))
