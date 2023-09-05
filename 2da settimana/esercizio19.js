//dati 2 array produrre un singolo array che abbia solo
// gli elementi che compaiono solo in uno dei due

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let result = [];



//ciclo arr1 dentro arr3
for (let i = 0; i < arr1.length; i++) {
   let current = arr1[i]
   let check1 = arr2.indexOf(current)
   if (check1 == -1) {
    result.push(current)
   }
}
for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i]
    let check2 = arr1.indexOf(current)
    if (check2 == -1) {
     result.push(current)
    }
 }





// confronto arr2 su arr3 per vedere se ci sono elementi uguali

// se ci sono elementi uguali non li stampo a schermo,
// se ci sono li metto in arr3

console.log(result);
