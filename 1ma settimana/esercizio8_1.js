let max = 5;
let min = 1;
let num = "";
let numf = "";
let k = max;
for (let i = min; i <= max; i++) {
    if (i == min) {
        for (let start = min; start <= max; start++) {
            num = num + start
        }
        console.log(num)
    }
    if (i > min && i < max) {
        let row = "" + i;
        for (let j = 0; j < (max -2); j++) {
            row = row + " ";
        }
        k = k - 1;
        row = row + k;
        console.log(row)
    }
    if (i == max) {
        for (let z = max; z >= min; z--) {
            numf = numf + z;
        }
        console.log(numf)
    }
}