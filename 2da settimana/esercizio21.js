//data una mappa creata a piacere creare una nuova mappa che 
// non abbia undefined o null come valori


let map = {
    1 : '1',
    2 : '2',
    4 : null,
    5 : undefined,
    3 : 34
}

let result = {};
let keys = Object.keys(map)


for (let i = 0; i < keys.length; i++){
  let key = keys[i]
  let value = map[key];
  
  if (value != null) {
    result[key] = value
}
}

console.log(result)