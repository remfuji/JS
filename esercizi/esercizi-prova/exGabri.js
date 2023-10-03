const list = [
{
    key: 20,
    key: 38
    
    
},
{
    key: 15,
    key: 22,
    key : 348
    
}
];

function evenValue(lista) {
    let newList = [];
    for (let i = 0; i < lista.length; i++) {
        let objKey = Object.values(lista[i])
        for(let j = 0; j < objKey; j ++){
            if (objKey[j] % 2 === 0) {
                newList.push(lista[i]);
            }
        }
       
      
    }
    return newList;
}

console.log(evenValue(list));
