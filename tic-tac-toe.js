
let siteBoard = document.querySelector(".gameBoard");
let siteRows = document.querySelectorAll(".gameboard-row");
let siteSquares = document.querySelectorAll('.gamesquare');





const gameBoard = (function() {
  let gameSquares = [
    " ", "X", " ", 
    " ", "O", " ", 
    " ", " ", " "
  ];
  const printGameSquares = () => { 
    console.log(gameSquares); 
    console.log(siteSquares.length);
    for (let i = 0; i < siteSquares.length; i++) {
      let square = siteSquares[i];
      square.textContent = gameSquares[i];
    }
  };


  
  let test="yest";
  return {
    printGameSquares,
    test
  };

})(); 


const player = (name) => {
  return {
    name
  }
}


const displayController = (() => {
  const playerOne = player("Player One");
  const playerTwo = player("player Two");
  console.log(playerOne.name);
  gameBoard.printGameSquares();
})();



