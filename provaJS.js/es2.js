

let string = `
cancelleria
500
40
60

servizi igenici
1000
1
200

vendite
0
`;


function departmentData(dataString) {
  let departmentList = dataString.trim().split("\n");
  let list = [];
  let object = { name: "", total: 0 };
  for (let i = 0; i < departmentList.length; i++) {
    let current = departmentList[i];
    if (current.match(/[a-z]/)) {
      object.name = current;
    } else if (current.match(/[0-9]/)) {
      object.total += parseInt(current);
    } else if (current == "") {
      list.push(object);
      object = { name: "", total: 0 };
    }
  }
  list.push(object);
  console.log(list)
  
  return checkMinMax(list);
}

function checkMinMax(list){
    let minMaxList = [];
    let objectMax = { name: "", Max: 0 };
    let objectMin = { name: "", Min: 1000 };
    for (let j = 0; j < list.length; j++) {
     let currentj = list[j];
      if (currentj.total > objectMax.Max) {
        objectMax.Max = currentj.total;
        objectMax.name = currentj.name;
      } else if (currentj.total < objectMin.Min) {
        objectMin.Min = currentj.total;
        objectMin.name = currentj.name;
      }
      
    }
    minMaxList.push(objectMax);
    minMaxList.push(objectMin);
    return minMaxList
}

console.log(departmentData(string));
