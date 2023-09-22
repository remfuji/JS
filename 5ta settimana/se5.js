// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

// ciclare sulla stringa
// dividere la stringa in parole 
// TODO gestire punteggiatura
// se a = ra
// se e = re
// se i = ri
// se o = ro
// se u = ru

function alfabetoStrambo(stringa) {
 let parola = ''
 let newString = ''
  for (let i = 0; i < stringa.length; i++) {
      
      if(stringa[i] == " " || i == stringa.length -1) {
        // siamo su uno spazio o siamo alla fine della stringa

        let ultimoIndiceParola = parola.length-1
        let ultimaLettera = parola[ultimoIndiceParola]
        if (i == stringa.length -1) {
          ultimaLettera = stringa[i]
          parola += ultimaLettera
        }

        if(ultimaLettera == 'a') {
          parola += 'ra'
        }
        if(ultimaLettera == 'e') {
          parola += 're'
        }
        if(ultimaLettera == 'i') {
          parola += 'ri'
        }
        if(ultimaLettera == 'o') {
          parola += 'ro'
        }
        if(ultimaLettera == 'u') {
          parola += 'ru'
        }
        newString += parola + ' '
        parola = ''

      }else {
        parola += stringa[i]
      }
    
  }
  return newString
}
//console.log(alfabetoStrambo("ciao come stai"))

// scrivere una funzione chiamata largestSwap
// che prende in ingresso un numero di due cifre,
// ritorna true se e' il piu' grande dei due possibili scambi di
// cifre, false altrimenti

// ad esempio per 27 deve ritornare false perche' posso invertire 
// le due cifre per ottere 72
// ad esempio per 43 deve ritornare true perche' 34 sarebbe minore

function largestSwap(n1,n2) {
  //trasformare in stringa n1 n2
  //estrarre sN[1] e sN[0]
  //metterli nelle posizioni invertite rispetto all'originale
  //trasformare sN in numero
  //confrontare se e' maggiore o minore dell' originale e ritorno true o false


  let sN1 = n1 + ''
  let sN2 = n2 + ''

  let sN1invertito = sN1[1] + sN1[0]
  let n1Invertito = Number(sN1invertito)
  
  
  let sN2invertito = sN2[1] + sN2[0]
  let n2Invertito = Number(sN2invertito)

  return n > n1Invertito 

}





  
