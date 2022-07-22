var turn = 0;

var table = {
  tl: document.getElementById('tl'),
  tm: document.getElementById('tm'),
  tr: document.getElementById('tr'),
  ml: document.getElementById('ml'),
  mm: document.getElementById('mm'),
  mr: document.getElementById('mr'),
  bl: document.getElementById('bl'),
  bm: document.getElementById('bm'),
  br: document.getElementById('br')
};

var gameResults = [null, null, null, null, null, null, null, null, null];

var verticalWin = function() {
  var winner = 0;
  if (gameResults[0] === 1 && gameResults[0] === gameResults[1] && gameResults[1] === gameResults[2]) {
    winner = 1;
    return winner;
  } else if (gameResults[3] === 1 && gameResults[3] === gameResults[4] && gameResults[4] === gameResults[5]) {
    winner = 1;
    return winner;
  } else if (gameResults[6] === 1 && gameResults[6] === gameResults[7] && gameResults[7] === gameResults[8]) {
    winner = 1;
    return winner;
  } else if (gameResults[0] !== null && gameResults[0] === gameResults[1] && gameResults[1] === gameResults[2]) {
    winner = 2;
    return winner;
  } else if (gameResults[3] !== null && gameResults[3] === gameResults[4] && gameResults[4] === gameResults[5]) {
    winner = 2;
    return winner;
  } else if (gameResults[6] !== null && gameResults[6] === gameResults[7] && gameResults[7] === gameResults[8]) {
    winner = 2;
    return winner;
  } else {
    return winner;
  }
};

var horizontalWin = function() {
  var winner = 0;
  if (gameResults[0] === 1 && gameResults[0] === gameResults[3] && gameResults[3] === gameResults[6]) {
    winner = 1;
    return winner;
  } else if (gameResults[1] === 1 && gameResults[1] === gameResults[4] && gameResults[4] === gameResults[7]) {
    winner = 1;
    return winner;
  } else if (gameResults[2] === 1 && gameResults[2] === gameResults[5] && gameResults[5] === gameResults[8]) {
    winner = 1;
    return winner;
  } else if (gameResults[0] === 2 && gameResults[0] === gameResults[3] && gameResults[3] === gameResults[6]) {
    winner = 2;
    return winner;
  } else if (gameResults[1] === 2 && gameResults[1] === gameResults[4] && gameResults[4] === gameResults[7]) {
    winner = 2;
    return winner;
  } else if (gameResults[2] === 2 && gameResults[2] === gameResults[5] && gameResults[5] === gameResults[8]) {
    winner = 2;
    return winner;
  } else {
    return winner;
  }
};

var diagonalWin = function() {
  var winner = 0;
  if (gameResults[0] === 1 && gameResults[0] === gameResults[4] && gameResults[4] === gameResults[8]) {
    winner = 1;
    return winner;
  } else if (gameResults[2] === 1 && gameResults[2] === gameResults[4] && gameResults[4] === gameResults[6]) {
    winner = 1;
    return winner;
  } else if (gameResults[0] === 2 && gameResults[0] === gameResults[4] && gameResults[4] === gameResults[8]) {
    winner = 2;
    return winner;
  } else if (gameResults[2] === 2 && gameResults[2] === gameResults[4] && gameResults[4] === gameResults[6]) {
    winner = 2;
    return winner;
  }
}

var win = function () {
  var finalWinner = 0;
  var vertWin = verticalWin();
  var horWin = horizontalWin();
  var diagWin = diagonalWin();
  if (vertWin === 1 || horWin === 1 || diagWin === 1) {
    finalWinner = 1;
    return finalWinner;
  } else if (vertWin === 2 || horWin === 2 || diagWin === 2) {
    finalWinner = 2;
    return finalWinner;
  } else {
    return finalWinner;
  }
}

var play = function(location, node) {
  if (turn === 0) {
    turn += 1;
    node.innerText = 'X';
    gameResults[location] = 1;
    let xWinner = win();
    if (xWinner === 0) {
      document.getElementById('turn').innerText = 'O turn to play';
    } else if (xWinner === 1) {
      document.getElementById('turn').innerText = 'Player X wins!';
      window.addEventListener('click', function(event) {
        event.stopImmediatePropagation();
        }, true);
      }
  } else if (turn === 1) {
    turn -= 1;
    node.innerText = 'O';
    gameResults[location] = 2;
    let oWinner = win();
    if (oWinner === 0) {
      document.getElementById('turn').innerText = 'X turn to play';;
    } else if (oWinner === 2) {
      document.getElementById('turn').innerText = 'Player O wins!';
      window.addEventListener('click', function(event) {
        event.stopImmediatePropagation();
        }, true);
    }
  }
};

table.tl.addEventListener('click', function fnClick(event){
  play(0, table.tl);
  table.tl.removeEventListener('click', fnClick);
});
table.tm.addEventListener('click', function fnClick(event){
  play(1, table.tm);
  table.tm.removeEventListener('click', fnClick);
});
table.tr.addEventListener('click', function fnClick(event){
  play(2, table.tr);
  table.tr.removeEventListener('click', fnClick);
});
table.ml.addEventListener('click', function fnClick(event){
  play(3, table.ml);
  table.ml.removeEventListener('click', fnClick);
});
table.mm.addEventListener('click', function fnClick(event){
  play(4, table.mm);
  table.mm.removeEventListener('click', fnClick);
});
table.mr.addEventListener('click', function fnClick(event){
  play(5, table.mr);
  table.mr.removeEventListener('click', fnClick);
});
table.bl.addEventListener('click', function fnClick(event){
  play(6, table.bl);
  table.bl.removeEventListener('click', fnClick);
});
table.bm.addEventListener('click', function fnClick(event){
  play(7, table.bm);
  table.bm.removeEventListener('click', fnClick);
});
table.br.addEventListener('click', function fnClick(event){
  play(8, table.br);
  table.br.removeEventListener('click', fnClick);
});








