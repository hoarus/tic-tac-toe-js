
// Global Variables
let siteBoard = document.querySelector(".gameBoard");
let siteRows = document.querySelectorAll(".gameboard-row");
let siteSquares = document.querySelectorAll('.gamesquare');





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
  };

  const isSquareEmpty = (square) => {
    return gameSquares[square] === " ";
  };


  return {
    printGameSquares,
    placeToken,
    isSquareEmpty,
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
  const playerTwo = player("player Two", "O");
  let currentPlayer = playerOne;

  function alternatePlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
  }
  console.log(playerOne.name);
  console.log(playerOne.token);
  gameBoard.printGameSquares();

  for (const siteSquare of siteSquares ) {
  siteSquare.addEventListener('click', function(event) {
    let squareId = siteSquare.id;
    let squareNumber = parseInt(squareId.charAt(squareId.length -1));
    // NEED TO CHECK IF SQUARE IS FULL (LOGIC SHOULD BE IN GAMEBOARD)
    if (gameBoard.isSquareEmpty(squareNumber)) {
      gameBoard.placeToken(squareNumber, currentPlayer.token);
      gameBoard.printGameSquares();
      alternatePlayer();
    }
  })
}
})();



