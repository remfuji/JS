// Scrivere del codice che data una stringa, 
//stampi a video la sottostringa piu' lunga che non ha ripetizioni


//creo una var che mi tenga traccia della sottostringa

// ciclare sulla stringa

// mettere in relazione 

// fermarmi quando la sottostringa ha una ripetizione al suo interno



let string = "abcabcdab"
let longest = ""
let current = ""
for (let i = 0; i < string.length; i++) {
  if (current.indexOf(string[i]) == -1) {
    current += string[i]
  } else {
    if (current.length > longest.length) {
      longest = current
      current = ""
      i = string.lastIndexOf(string[i]) + 1
    }
  }
}
if (current.length > longest.length) {
  longest = current
}
   


console.log(longest)


