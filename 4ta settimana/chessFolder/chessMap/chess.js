let chessboard = {
 
 a8 : 'nT' , b8 : 'nC', c8 : 'nA', d8 : 'nR', e8 : 'nRe', f8 : 'nA', g8 : 'nC', h8 : 'nT',
 a7 : 'nP' , b7 : 'nP', c7 : 'nP', d7 : 'nP', e7 : 'nP', f7 : 'nP', g7 : 'nP', h7 : 'nP',
 a6 : '' ,   b6 : '',   c6 : '',   d6 : '',   e6 : '',    f6 : '',   g6 : '',   h6 : '',
 a5 : '' ,   b5 : '',   c5 : '',   d5 : '',   e5 : '',    f5 : '',   g5 : '',   h5 : '',
 a4 : '' ,   b4 : '',   c4 : '',   d4 : '',   e4 : '',    f4 : '',   g4 : '',   h4 : '',
 a3 : '' ,   b3 : '',   c3 : '',   d3 : '',   e3 : '',    f3 : '',   g3 : '',   h3 : '',
 a2 : 'bP' , b2 : 'bP', c2 : 'bP', d2 : 'bP', e2 : 'bP', f2 : 'bP', g2 : 'bP', h2 : 'bP',
 a1 : 'bT' , b1 : 'bC', c1 : 'bA', d1 : 'bR', e1 : 'bRe', f1 : 'bA', g1 : 'bC', h1 : 'bT',
 
};




function lookDown(pos) {
    return lookVertically(pos, -1)
}
function lookuP(pos) {
   return lookVertically(pos, 1)
}

function lookVertically (pos, direction) {
    let sx = pos[0]
    let dx = pos[1]
    dx = Number(dx) + direction
    return  sx + dx  
}

function isOutsideBoundaries (start, end) {
// se la direzione verticale va a 9 o -1 
    // return false
//  se la direzione orizzontale e' compreso tra il charCode di a e h
//  return false





}

function lookRight(pos) {
    return lookOrizzontaly(pos, 1)
  }
  
  function lookLeft(pos) {
   return lookOrizzontaly(pos, -1)
  }
  function lookOrizzontaly (pos, direction) {
    let sx = pos[0]
    let dx = pos[1]
    let sxCharCode = sx.charCodeAt(0)
    sx = String.fromCharCode(sxCharCode, direction)
    return sx + dx
  }
  // assumiamo pos = 'a1'
  function getColor(chessboard,pos) {
    return chessboard[pos][0]
  }
  // assumiamo che chiamiamo sempre isWhite su un pezzo e mai sullo spazio vuoto
  function isWhite(chessboard, pos) {
    let color = getColor(chessboard, pos)
    return color === 'b'
  }

  function isEmpty (chessboard, pos) {
    return chessboard[pos] === ''
  }
  //pseudocodice
  //se il pezzo e' bianco
  // ritorno se il risultato di  lookUp e' occupabile
  //se il pezzo e' nero
  // ritorno se il risultato di  lookDown e' occupabile
  
  function isOneStepFowardBlocked (chessboard, pos) {
    if (isWhite(chessboard, pos)) {
        let up = lookuP(pos)
        return isEmpty(chessboard, up)
    }else {
        let down = lookDown(pos)
        return isEmpty(chessboard, down)
    }
  }
  // obiettivo e' far muovere il pedone secondo le sue regole:
  // * avanti di uno
  // * avanti di due se e' alla riga di partenza
  // * diagonale di uno a sx se li c'e' un nemico
  // * diagonale di uno a dx se li c'e' un nemico
  // * promozione
  function legalPawnMoves(chessboard, pos) {
    // se nella casella avanti di uno e' libera,  
        //avanti di uno, 
        //se c'e' nemico o amico stai fermo
    // se nella casella avanti di due e' libera, 
      //se si avanti di due solo se siamo nella pos di partenza, 
       //se c'e' nemico o amico stai fermo
    //guardare a destra/avanti di uno o sinistra/avanti di uno : 
        //se c'e' un nemico mangia , 
        //se e' amico stai fermo , 
        //se e' vuoto stai fermo
   // se il pedone raggiunge qualsiasi ultima  casella prima della fine 
   //della scacchiera 
        // allora scegliamo casualmente uno tra cavallo, alfiere, torre o regina
        // e sostituiamo il pedone con uno tra quelli
    let legalMoves = []
    if (!isOneStepFowardBlocked(chessboard, pos)) {

    }

   
  
  }
  console.log(legalPawnMoves())


  //
 
