// Scrivere una funzione che riceva in ingresso tre stringhe:
// ● la prima sara’ un testo
// ● la seconda sara’ una parola che andra’ cercata nel testo
// ● la terza sara’ la parola da sostituire al posto della seconda
// La funzione deve quindi produrre lo stesso effetto che si ottiene quando si fa find and
// replace di una parola in un testo.
// Si assuma che:
// ● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
// non ci saranno spazi
// ● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
// l’algoritmo
// ● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
// caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
// La funzione deve ritornare la nuova stringa aggiornata.



// ciclo sulla prima stringa
// devo controllare se nella prima stringa c'e' la scenda stringa
// se c'e' la prima lettera della seconda stringa nella prima stringa
//      metto il risultato  in una variabile // altrimenti non tengo traccia di quello che sto facendo
//  se le lettere successive sono uguali per entrambe
//      aggiungo il risultato alla variabile
// controllo se la variabile e' uguale a find come lunghezza
//
// allora ho trovato la parola

//SOLUZIONE CON AIUTO 

function findAndReplace(string,find,replace) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        
        if (string[i] === find[0]) {
            let isFind = ''
            for(let j = 0; j < find.length; j++ ){
                if ( string[i + j] == find[j]) {// 
                    isFind += string[i + j]
    
                }else {
                    break
                }
            }
            
            if (isFind.length === find.length ) {
                i += find.length -1  // qui aggiungo su i tutti i controlli effettuati dal secondo for e l'if 
                newString += replace
            }else {
                newString += string[i]
    
            }
    
        }else {
            newString += string[i]
        }
        
    }
    return newString
}
//console.log(findAndReplace('ciao sono mario', 'mario', 'gianni'))

// ALTRA IMPLEMENTAZIONE

function findAndReplace(string, find, replace) {
    let newString = ''
    for (let i = 0; i < string.length; i++) {
        newString += string[i]
        for(let j = 0; j < find.length; j++) {
            if(string[i + j] === find) {
                newString += replace
            }
        }
    }
    return newString
}

//console.log(findAndReplace('ciao sono mario', 'mario', 'gianni'))


// //altra implementazione

// function findAndReplace(string, find, replace) {
//     let newString = ''
//     for (let i = 0; i < string.length; i++) {
//         newString += string[i]
//         for(let j = 0; j < find.length; j++) {
//             if(string[i] === string[i + j]) {
//                 let check = ''
//                 check += string[i +j]
//                 if( check === find) {
//                     newString += replace
//                 }
//             }
//         }
//     }
//     return newString
// }

// //console.log(findAndReplace('ciao sono mario', 'mario', 'gianni'))


// function findAndReplace (string, find, replace) {
//     let match = ''
//    for(let i = 0; i < string.length; i++) {
       
//    }

// //console.log(match)


// }
// //console.log(findAndReplace('ciao sono mario ', 'mario', 'gianni'))



// // metodi per trovare la parola 



function founAndReplace(text, word, newWord) {
    let currentWord = '';
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        currentWord += text[i]
        if (text[i] == ' ') {
            newText += currentWord
            currentWord = ''
        }
        if ( currentWord == word) {
            newText = newText + newWord
            currentWord = ''
        }
    }
    return newText + currentWord
}
let text = "Let's study programming? study programming! programming, programming... programming/react?"
console.log(founAndReplace(text, 'programming', 'JavaScript'))


