const gameBoard = (function() {
  let gameSquares = [
    " ", " ", " ", 
    " ", " ", " ", 
    " ", " ", " "
  ];


  const printGameSquares = () => { 
    for (let i = 0; i < siteSquares.length; i++) {
      let square = siteSquares[i];
      square.textContent = gameSquares[i];
    }
  };

  const placeToken = (square, token) => {
    gameSquares[square] = token;
    siteSquares[square].classList.remove('active-square');
  };

  const isSquareEmpty = (square) => {
    return gameSquares[square] === " ";
  };

  const isBoardFull = () => {
    fullBoard = true;
    gameSquares.forEach(square => {
      if (square === " ") {
        fullBoard = false;
      }
    });
    return fullBoard;
  };

  const hasWonGame = (token) => {

    if (victoryCondition(token, 0, 1, 2) == true) {
      return true;
    } else if  (victoryCondition(token, 3, 4, 5) == true){
      return true;
    } else if  (victoryCondition(token, 6, 7, 8) == true){
      return true;
    } else if  (victoryCondition(token, 0, 4, 8) == true){
      return true;
    } else if  (victoryCondition(token, 2, 4, 6) == true){
      return true;
    } else if  (victoryCondition(token, 0, 3, 6) == true){
      return true;
    } else if  (victoryCondition(token, 2, 5, 8) == true){
      return true;
    } else
      return false;
    };

    const victoryCondition = (token, var1, var2, var3) => {
      return  gameSquares[var1] === token && gameSquares[var2] === token && gameSquares[var3] === token;
    }
  
    const resetGameBoard = () => {
      gameSquares = [
        " ", " ", " ", 
        " ", " ", " ", 
        " ", " ", " "
      ];
      siteSquares.forEach(square => square.classList.add('active-square'));
      printGameSquares();
    }

  return {
    printGameSquares,
    placeToken,
    isSquareEmpty,
    hasWonGame,
    resetGameBoard,
    isBoardFull,
  };

})(); 