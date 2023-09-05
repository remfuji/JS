let m1 = {
    color: 'blue',
    name: 'puffetta',
    sex: 'female'
  }
  
  let m2 = {
    color: 'pink',
    name: 'gargamella',
    evil: false
  }
  
  // voglio creare una mappa result tale che
  // * deve avere tutte le chiavi di tutte e due le mappe
  // * eventuali duplicati vengono sovrascritti dalla seconda mappa
  
  let res = {}
  let keys = Object.keys(m1)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    res[key] = m1[key]
  }
  
  console.log(res)
  
  // per ogni chiave di m2
  // prendo quella chiave e sovrascrivo / creo una relazione dentro res
  keys = Object.keys(m2)
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    // che ci sia o no una relazione identificata dalla chiave key
    // a questo punto sovrascriviamo o meno (quindi creiamo)
    res[key] = m2[key]
  }
  
  console.log(res)

  // Esercizio per domani 29/08: fare in modo che quando ci sono duplicati venga creato un array che contiene tutti i valori visti per quella chiave
  







