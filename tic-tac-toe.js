
// Global Variables
let siteBoard = document.querySelector(".gameBoard");
let siteRows = document.querySelectorAll(".gameboard-row");
let siteSquares = document.querySelectorAll('.gamesquare');
let instructions = document.querySelector(".instructions");
let playAgainButton = document.querySelector('.play-again');


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
  };

})(); 


const player = (name, token) => {
  return {
    name,
    token,
  }
}


// Gameflow

const displayController = (() => {
  const playerOne = player("Player One", "X");
  const playerTwo = player("Player Two", "O");
  let currentPlayer = playerOne;
  let isGameOver = false;

  playAgainButton.addEventListener('click', function(event) {
    gameBoard.resetGameBoard();
    playAgainButton.classList.add('hidden');
    currentPlayer = playerOne;
    isGameOver = false;
    instructions.textContent = `${currentPlayer.name}'s turn.`;
    instructions.classList.remove('instructions-won');
  });

  function alternatePlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
      instructions.textContent = `${currentPlayer.name}'s turn.`
    } else {
      currentPlayer = playerOne;
      instructions.textContent = `${currentPlayer.name}'s turn.`
    }
  };

  function hasPlayerWon() {
    if (gameBoard.hasWonGame(currentPlayer.token)) {
      isGameOver = true;
      let message = `${currentPlayer.name} has won the game. Congratulations!`;
      instructions.textContent = message;
      instructions.classList.add("instructions-won");
      siteSquares.forEach(square => square.classList.remove("active-square"));
      playAgainButton.classList.remove("hidden");
    }
  };

  function playRound(squareNumber){
    if (gameBoard.isSquareEmpty(squareNumber)) {
      gameBoard.placeToken(squareNumber, currentPlayer.token);
      gameBoard.printGameSquares();
      hasPlayerWon();
      alternatePlayer();  
    }
    
  };
  gameBoard.printGameSquares();

  for (const siteSquare of siteSquares ) {
  siteSquare.addEventListener('click', function(event) {
    
    let squareId = siteSquare.id;
    let squareNumber = parseInt(squareId.charAt(squareId.length -1));
    if (isGameOver === false) {
      playRound(squareNumber);
    };
  })
}
})();



