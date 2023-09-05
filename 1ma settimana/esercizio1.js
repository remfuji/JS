// creare una nuova var che contiene il numero 
// generato da math.random() e stampare a video se il 
// numero e' > di 0,5 
// o > 0,8 e se e' minore di 0,2 

let random = Math.random()

if (random > 0.8) {
    console.log(random + " maggiore di 0.8")

} 
else if (random > 0.5) {
    console.log(random + " maggiore di 0.5")
} 
else if(random < 0.2) {
    console.log(random + " minore di 0.2")
}