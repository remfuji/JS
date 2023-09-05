//dato un array dire se e' omogeneo (elementi tutti dello stesso tipo) o no 

//ciclare sull array
//  controllare se ogni elemento e' dello stesso tipo
//  controllo l'array se l'elemento che sta ciclando e' uguale al primo elemento dell arr 




let arr = ['ciao','due','tre']
let checkNumber = typeof arr[0]
let typeCheck = true

for (let i = 0; i < arr.length; i++) {
    let key = arr[i]

    if (typeof key != checkNumber) {
        typeCheck= false  
        break
    }
}


if (typeCheck) {
    console.log("L'array è omogeneo")
} else {
    console.log("L'array non è omogeneo")
}


