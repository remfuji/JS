// scrivere una funzione che data una stringa in ingresso ritorna 
// solo i caratteri che al piu' compaiono una volta


// dichiarare la stringa
//dichiarare la funzione
// creare variabili per il risultato e per tenere traccia del conteggio
//di ogni singolo carattere dentro la stringa
// fare un ciclo for per contare ogni carattere della stringa 
// fare un altro ciclo for per controllare solo i caratteri che
//compaiono una sola volta e push sul res

let str = 'aabcdeeffffffrrrrrggggg'

function checkDuplicate (str) {
    let res = []
    let countDuplicate = {}


    for (let i = 0; i < str.length; i++) {
        let current = str[i]
        if (countDuplicate[current]) {
          countDuplicate[current]++
         
        } else {
          countDuplicate[current] = 1
        }
        
      }
      //console.log(countDuplicate)
      
      for (let i = 0; i < str.length; i++) {
        let current = str[i]
        if (countDuplicate[current] === 1) {
          res.push(current)
        }
      }
    
      return res
    }
  
    console.log(checkDuplicate(str))

    
