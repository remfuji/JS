// scrivere una funzione che accetta due funzioni a e b, 
//queste due funzioni ritornano a loro volta dei numeri,
// non ne conoscete pero' l'implementazione,
// la vostra funziona deve ritornare "a" se il numero
// ritornato da a e' maggiore di di quello ritornano da b, 
//"b" altrimenti

//creare la funzione
// mettere le due funx (con argomento 0? ) nella variabili 
// verificare se a > b
//return 'a' o 'b'
//funzione anonima per verificare la funzione ?


function functionAB(a, b) {
    let resA = a()
    let resB = b()
  
    if (resA > resB) {
      return "a"
    } else {
      return "b"
    }
  }
  
  console.log(functionAB(() => 9, () => 6))