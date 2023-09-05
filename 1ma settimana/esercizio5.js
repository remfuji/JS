// stampare da 0 a 10 tre volte

 
for (let rep = 0; rep < 3; rep ++) {
    for (let num = 0; num <= 10; num++) {
        console.log(num)
        
    }
}
//secondo modo per stampere 3 volte 0 10

let rep = 0;

for (let num = 0; num <= 10; num++) {

    if (num == 10 && rep < 3) {
        num = 0;
        rep++
    }
    
}