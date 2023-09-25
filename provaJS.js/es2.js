// Vi viene fornita una stringa che rappresenta le spese di ogni 
//reparto della vostra societa’,
//  larichiesta e’ che troviate il nome del reparto che spende 
//di più e quello che spende meno,
// con i relativi importi totali.
// Una stringa racchiusa da backtick (`) puo’ estendersi su piu’ righe, 
//ogni riga e’ separata dalle
// altre dal carattere di a capo (\n), se avete difficolta’ a 
//suddividere la stringa, consideratela un
// array, dove i reparti sono separati da un elemento che sara’
// sempre il carattere spazio (“ “).
// Segue un esempio di questa stringa:
// Dovete scrivere quindi una funzione che data in ingresso una stringa simile a quella data sia
// in grado di sommare tutti gli importi e ritornare quanto richiesto, cio’ che puo’ cambiare sono
// i nomi e il numero dei reparti e gli importi, la struttura rimarra’ la stessa.
// In questo esempio andrebbe ritornato un risultato di questo tipo:

let string = `
Cancelleria
500
40
60

Servizi igenici
1000
1
200

Vendite
0
`

//data questa stringa devo ritornare un oggetto con il reparto che spende di piu e quello che spende di meno
// come faccio a suddividere la stringa per reparti?
// sapendo che dove ci sono le lettere e' sicuramente il nome di un reparto,
//e tutti i numeri che seguno sono le cifre di quel reparto
// che dovro' sommare?
// dovrei dire se l'elemento corrente inizia con una lettera
//  se si metto quel valore come nome nell'oggetto
//  se no lo aggiungo a count 
//   e vado a sommare tutti i numeri che trovo fino a quando non incontro una altro valore che 
//   inizia con una lettera

function departmentData (dataString) {
    let splitString = dataString.trim().split('\n')
    let count = 0
    let object ={name : '', totale : count}
    let currentType = typeof(current)


    for(let i = 0; i < splitString.length; i++) {
        let current = splitString[i]
        if (current == 'C') {
            object.name(current)
        }
        if (current == 'numero') {
            count += current
        }
    }

    return object
   
}
console.log(departmentData(string))
