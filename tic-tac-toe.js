
// Global Variables
let playGameButton = document.querySelector(".play-game");
let siteBoard = document.querySelector(".gameboard");
let siteRows = document.querySelectorAll(".gameboard-row");
let siteSquares = document.querySelectorAll('.gamesquare');
let instructions = document.querySelector(".instructions");
let playAgainButton = document.querySelector('.play-again');
let playerNamesInput = document.querySelector(".player-names-input");


// Gameflow

const displayController = (() => {

  // Initialiase Variables
  const playerOne = player("Player One", "X");
  const playerTwo = player("Player Two", "O");
  let currentPlayer = playerOne;
  let isGameOver = false;

  // Start Game

  playGameButton.addEventListener('click', function(event) {
    siteBoard.classList.remove('hidden');
    playGameButton.classList.add('hidden');
    playerNamesInput.classList.add('hidden');
    player1Name = document.querySelector('#player1-name').value;
    if (player1Name != "") {
      playerOne.name = player1Name;
    };
    player2Name = document.querySelector('#player2-name').value;
    if (player2Name != "") {
      playerTwo.name = player2Name;
    };
    promptPlayerTurn();
  });

  // Place Token
  for (const siteSquare of siteSquares ) {
    siteSquare.addEventListener('click', function(event) {
      
      let squareId = siteSquare.id;
      let squareNumber = parseInt(squareId.charAt(squareId.length -1));
      if (isGameOver === false) {
        playRound(squareNumber);
      };
    })
  };

  function playRound(squareNumber){
    if (gameBoard.isSquareEmpty(squareNumber)) {
      gameBoard.placeToken(squareNumber, currentPlayer.token);
      gameBoard.printGameSquares();
      hasPlayerWon();
      isGameADraw();
      if (isGameOver === false) {
        alternatePlayer(); 
      }; 
    }
  };

  function promptPlayerTurn() {
    instructions.textContent = `${currentPlayer.name}'s turn.`
  }

  function alternatePlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
      promptPlayerTurn();
    } else {
      currentPlayer = playerOne;
      promptPlayerTurn();
    }
  };


  // Game Ending

  function hasPlayerWon() {
    if (gameBoard.hasWonGame(currentPlayer.token)) {
      let message = `${currentPlayer.name} has won the game. Congratulations!`;
      instructions.textContent = message;
      gameOver();
    }
  };

  function isGameADraw() {
    if (gameBoard.isBoardFull()) {
      let message = `Oh no - it's a draw!`;
      instructions.textContent = message;
      gameOver();
    };
  };

  function gameOver() {
    isGameOver = true;
    instructions.classList.add("instructions-won");
    siteSquares.forEach(square => square.classList.remove("active-square"));
    playAgainButton.classList.remove("hidden");
  };


  // Play again

  playAgainButton.addEventListener('click', function(event) {
    gameBoard.resetGameBoard();
    playAgainButton.classList.add('hidden');
    currentPlayer = playerOne;
    isGameOver = false;
    instructions.textContent = `${currentPlayer.name}'s turn.`;
    instructions.classList.remove('instructions-won');
  });

})();



