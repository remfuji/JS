
// let arr = [
//     {
//         "maggiorenne": null,
//         "type": "Boolean"
//     }, {
//         "nome": null,
//         "type": "String"
//     }, {
//         "età": null,
//         "type": "Number"
//     }
// ]


// function cambiaValore(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
//         let keys = Object.keys(current)
//         for (let k = 0; k < keys.length; k++) {
//             let key = keys[k];
//             if (current[key] == "Boolean") {
//                 current[key] = true
//             }
//             if (current[key] == "String") {
//                 current[key] = ""
//             }
//             if (current[key] == "Number") {
//                 current[key] = 0
//             }
//             if (current[key] == "array") {
//                 current[key] = []
//             }
//             if (current[key] == "object") {
//                 current[key] = {}
//             }
//         }
//     }
//     return arr
// }

// console.log(cambiaValore(arr))











// Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
// sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
// regole:
// ● se il type e’ “boolean” deve aggiornare usando false
// ● se il type e’ “string” deve aggiornare usando stringa vuota
// ● se il type e’ “number” deve aggiornare usando 0
// ● se il type e’ “array” deve aggiornare usando array vuoto
// ● se il type e’ “object” deve aggiornare usando oggetto vuoto
// Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
// sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
// La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.


let arr = [
    {
        "maggiorenne": null,
        "type": "Boolean"
    }, 
    {
        "nome": null,
        "type": "String"
    }, 
    {
        "età": null,
        "type": "Number"
    },
    {
        "età": null,
        "type": "Array"
    },
    {
        "età": null,
        "type": "Object"
    }
]

// cicliamo all' interno dell array
//  ciclare all'interno degli oggetti e prendere la chiave 'type'
//  cambiare il valore della chiave type in base alla consegna

function changeType (arr) {
let newObject = {
    "Boolean" : false,
    'String' : '',
    'Number' : 0,
    'Array' : [],
    'Object' : {}
}
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        
        //quando prendo la chiave di un oggetto avro' il suo valore, e posso riassegnare il suo valore con =
        current['type'] = newObject[current['type']]       //qui sto prendendo la chiave type della prima mappa e riassegnando il suo valore 
                                                            // con il valore corrispondente della mappa alla chiave (della seconda mappa)  uguale al valore della prima
    }

return arr
}

console.log(changeType(arr))


//nel caso non sappiamo la chiave modifica il codice se dio vuole