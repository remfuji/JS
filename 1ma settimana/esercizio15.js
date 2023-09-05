let arr = [1, 2, 4, 5, 3, 6, 7, 8, 9, 89, 56, 43, 65, 23, 45]
let arrPari = []
let arrDispari = []




for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
        
        
        arrPari.push(arr[i])
        
    }else {
        arrDispari.push(arr[i])
    }
}
console.log(arrPari, arrDispari)