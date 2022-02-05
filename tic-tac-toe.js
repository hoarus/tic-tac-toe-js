



const gameBoard = (function() {
  let gameSquares = [[" ", "X", " "], [" ", "O", " "], [" ", " ", " "]];
  const printGameSquares = () => { console.log(gameSquares) };
  
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
})();