function isPalindrome (arr, sx, dx) {
    if (sx >= dx) {
        return true

    }
    // if (arr[sx] != arr[dx]) {
    //     return false
    // }
    return arr[sx] == arr[dx] && isPalindrome(arr, sx + 1, dx - 1)


    
}

console.log(isPalindrome([1, 2, 3, 2, 1] ,0,4))
console.log(isPalindrome([1, 2, 2, 1] ,0,3)) 