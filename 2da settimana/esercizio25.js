//dato un array bisogna calcolare le occorrenze di ogni singolo tipo di dato

// ciclare sull'array
// tenere traccia dell' elemento nel ciclo e del suo tipo
// verificare a quale tipo di dato e' associato quell'elemento
// controllare se esioste gia quell 'tipo di dato sul array di raggruppamento e aggiungerlo se e' gia presente o crearlo se non  c'e'


let arr = ['ciao', 1, 2, null, 'ciaio']
let occorrenze = {}   //mappa e' una struttura dati che serve per ottenere relazioni
 for (i = 0; i < arr.length; i++) {
    type = typeof arr[i]

  if (occorrenze[type]) {
         occorrenze[type] += 1
  }else {
     occorrenze[type] = 1
  }


 // occorrenze[type] = occorrenze[type] ? occorrenze[type] += 1 : 1  Operatori ternari
}

    console.log(occorrenze)