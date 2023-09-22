//data una parola (sequenza non vuota di caratteri scelti tra A e Z solo lettere maiuscole)
//e una sequenza di parole al cui interno possono esserci uno a piu #
//dato un array di parole
//far ritornare solo le parole che matchano i pattern

//pattern P#ZZO

//array [PAZZO, PEZZO, CANE]

// ritorna [PAZZO, PEZZO]

// quando incontro una parola  la controllo con il pattern
// faccio un ciclo sull arr
// e all'interno del ciclo confronto carattere per carattere
// quando incontro il cancelletto quella va sempre bene

let arr = ['PAZZO', 'PEZZO', 'CANE']

let pat = ['P#ZZO']
let newArr = []
function checkPattern (array, pattern) {
   
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < pat.length; j++) {

            if (array[i] == pattern[j]) {
                newArr.push(array[i])
              }
        }
    
    }
    return newArr

}

//console.log(checkPattern(arr, pat))

//A -Z
// pattern
// candidati

// filtrare i candidati in base al pattern

//sfruttare le espressioni regolari

// # -> .

function hashToDot(s) {
    let res = ''
    for(let i =0; i < s.length; i++) {
        // if (s[i] === '#') {
        //     res += '.'
        // }else {
        //     res += s[i]
        // }
        res += s[i] === '#' ? '.' : s[i]
    }
    return res
}

function hashToDotRealWorld (s) {
    return s.replaceAll('#', '.')
}
console.log(hashToDot('P#ZZO'))
console.log(hashToDotRealWorld('P#ZZO'))

function filter(strings, pattern) {
    let res =[]
    for(let i =0; i < strings.length; i++) {
        let string = strings[i]
        if ( string.match(pattern)) {
            res.push(string)
        }
    }
    return res
}
console.log(filter(['PAZZO', 'PEZZO', 'CANE'], hashToDot('P#ZZO')))

function filterRealWorld ( strings, pattern) {
    return strings.filter(string => string.match(pattern))
}

console.log(filterRealWorld(['PAZZO', 'PEZZO', 'CANE'], hashToDot('P#ZZO')))

