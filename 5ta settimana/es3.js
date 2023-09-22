function flower (n) {
    let gambo = ''
    let testa = '@'
    let fiore = ''
    for( let i = 0; i < n; i++) {
        gambo += '-'
       
    }
    fiore += gambo + testa
    return fiore
}
//console.log(flower(5))

//funzione per la prima riga:
//stampare solo i valori partendo da 1 e saltare di 3
//2 riga : stampare i valori partendo da 2 e saltarne uno
// riga tre: stampare i valori saltando di tre partendo da 3

let string ='ci hanno scoperti, fuggiamo!'

function zigzag(str) {
    let newString = ''
    for(let i = 0; i < str.length; i++) {
        newString += str[i]
    }
    return newString
}

function removeSpacesAndPunctuation(str) {
    // Rimuovi spazi e punteggiatura con espressione regolare
    return str.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
  }

  console.log(zigzag(string))