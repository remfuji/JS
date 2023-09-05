let mapUno = {
    name : "paolo",
    surname : "rossi"
}

let mapDue = {
    name : "mario",
    surname : "rosa",
    age : "30",
    height : "180"
}

let mapTre = {}
let keys = Object.keys(mapUno)

// travaso di relazioni da mapUno a mapTre
for (let i = 0; i < keys.length; i++){
  let key = keys[i]
  mapTre[key] = [mapUno[key]]
}

let keysDue = Object.keys(mapDue)
let keysTre = Object.keys(mapTre)

for (let i = 0; i < keysDue.length; i++ ){
    let currentMapDueKey = keysDue[i]

    // currentMapDueKey e' dentro l'array delle chiavi di mapDue?
    let found = false
    for (let j = 0; j < keysTre.length; j++) {
        let currentMapTreKey = keysTre[j]
        if (currentMapDueKey === currentMapTreKey) {
            found = true
            break
        }
    }

    if (found) {
        mapTre[currentMapDueKey].push(mapDue[currentMapDueKey])
    } else {
        mapTre[currentMapDueKey] = mapDue[currentMapDueKey]
    }
    console.log(mapTre)
}

