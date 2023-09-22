// Scrivere una funzione che sia in grado di dire se una data stringa in ingresso sia o meno
// “pazza”.
// Una stringa e’ “pazza” se:
// ● non ha un soggetto, un soggetto puo’ essere solo: “Lui”, “Lei”, “Egli”, “Ella”
// ● finisce con “?!?”
// ● contiene la stringa “Cthulhu”
// ● inizia e finisce con una parola che finisce in “are”, o “ere”, o “ire”
// ● inizia con della punteggiatura, quindi con uno tra “,.!?:;-~”
// Basta uno dei suddetti “requisiti di pazzia” per rendere una frase “pazza”; a meno che la
// stringa contenga una di queste stringhe, in quel caso la stringa non e’ mai “pazza”:
// ● Church
// ● mare
// Esempi di stringhe pazze:
// ● .Quando guardi a lungo nell’abisso, l’abisso ti guarda dentro.
// ● Andare a rimirare
// Esempi di stringhe non pazze:
// ● Lui e’ pazzo.
// ● ~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo
// amano ~
// ● ~ Papa’, come sta Church? ~

// pseudocodice
// primo controllo:
// se la stringa contiene 'Church' o 'mare' possiamo dire che NON e' 'pazza'
// quindi passiamo a tutti i controlli per verificare se sia 'pazza'
// controlliamo il primo carattere se e' un carattere di punteggiatura
// etc per tutti gli altri controlli


function crazyString(string) {
  let itIsCrazy = "stringa Pazza!";
  let itIsNot = "stringa NON Pazza!";
  

  if (isNotCrazy(string)) {
    return itIsNot;
  }
  else if (thereIsSubject) {
    return itIsCrazy + "trovato soggetto";
  }
  else if (thereIsPunctuation) {
    return itIsCrazy + "punteggiatura trovata";
  }
 
      else if(parole[i] === 'Cthulhu') {
          return isCrazy + 'trovato Cthulhu'
      }
  

  return itIsCrazy;
}

console.log(crazyString("siamo al mare"));
console.log(crazyString("siamo al Church"));
console.log(crazyString("siamo al Lui"));
console.log(crazyString("siamo al Lui Church"));
console.log(crazyString("?siamo al"));
console.log(crazyString("Lui siamo al"));

function isNotCrazy(string) {
    let parole = string.split(" ");
    for (let i = 0; i < parole.length; i++) {
      if (parole[i] === "mare" || parole[i] === "Church") {
        return true;
      }
    }
    return false;
  }
  
  function thereIsPunctuation(string) {
    let parole = string.split(" ");
    if (
      parole[i][0] == "." || parole[i][0] == "," || parole[i][0] == "!" || parole[i][0] == "?" || parole[i][0] == "-" || parole[i][0] == "~") {
      return true;
    }
    return false;
  }
  function thereIsSubject(string) {
    let parole = string.split(" ");
    for (let i = 0; i < parole.length; i++) {
      if (parole[i] === "Lui" || parole[i] === "Lei" || parole[i] === "Egli" || parole[i] === "Ella") {
        return true
      }
    }
    return false
  }
