

function isNotMad(string) {
  return string.includes("mare") || string.includes("Church");
}
function endsWith(string) {
  return string.endsWith("!?!");
}
function thereIsWord(string) {
  return string.includes("Cthulhu");
}
function noSobject(string) {
  return (
    string.includes("Lui") ||
    string.includes("Lei") ||
    string.includes("Egli") ||
    string.includes("Esso")
  );
}
function thereIsPunctuation(string) {
  let punteggiatura = [".", ",", "!", "?", "~"];
  for (let i = 0; i < punteggiatura.length; i++) {
    return string[0] == punteggiatura[i];
  }
}

function startEnd(string) {
  let word = string.split(" ");
  let firstWord = word[0];
  let lastWord = word[word.length - 1];
  return areEreIreCheck(firstWord) && areEreIreCheck(lastWord);
}

function areEreIreCheck(word) {
  return word.endsWith("are") || word.endsWith("ere") || word.endsWith("ire");
}

function checkCrazyness(string) {
  if (isNotMad(string)) {
    return "is Not Mad";
  } else if (
    endsWith(string) ||
    thereIsWord(string) ||
    noSobject(string) ||
    startEnd(string) ||
    thereIsPunctuation(string)
  ) {
    return "is Mad";
  }
  return "is Mad but is not in check";
}

console.log(checkCrazyness('.Quando guardi a lungo nell abisso, l abisso ti guarda dentro.'));
console.log(checkCrazyness('Andare a rimirare'));
console.log(checkCrazyness('Lui e pazzo.'));
console.log(checkCrazyness('~ Pensava sempre al mare come a la mar, come lo chiamano in spagnolo quando lo amano ~'));
console.log(checkCrazyness('Papa, come sta Church?'));
