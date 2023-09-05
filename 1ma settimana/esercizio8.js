let max = 5;
let min = 1;
let num ="";

for (let i = min; i <= max; i++) {
    if(i == min) {
        for (let start = min; start <= max; start++) {
            num = num + start;  
        }
        console.log(num)
    }
    if(i > min && i < max) {     //i dove e inizializzata?
        let row = "" + i;
       
        for(let j = 0; j < (max - 2); j++) {
            row = row + " ";
            
        }
        //row = "" + ;
        console.log(row)
    }
}