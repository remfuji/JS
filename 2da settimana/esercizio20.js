// dato un array togliere tutti i duplicati



// ciclo sull array e controllo le posizioni per vedere se gli 
// elementi all'interno si ripetono in altre posizioni 
let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8,8,8,8,9,9,9,9,9];
let result = [];

for (let i = 0; i < arr.length;i++) {
    if (result.indexOf(arr[i]) == -1) {
        result.push(arr[i]);
    }
}

console.log(result); 
