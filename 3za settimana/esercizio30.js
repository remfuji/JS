function loop (n) {
  if (n == 0) {
    return
  }
  console.log(n)
  n--
  loop(n)
}
console.log(10)


function sum (arr, i) {
    if (i == arr.length) {
        return 0
    }
    return arr[i] + sum(arr, i + 1)
}
console.log(sum[1,2,3,4,5], 0)