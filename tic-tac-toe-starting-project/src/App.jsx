import { useState, useSyncExternalStore } from "react"
import Player from "./components/Player"
import GameBoard from "./components/Gameboard"
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { use } from "react";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns){
  let currentplayer = "X";
      if(gameTurns.length > 0 && gameTurns[0].player === "X"){
        currentplayer = "O"
      }

      return currentplayer;
}

function deriveWinner(gameBoard, playername){

  let winner

for(const combinations of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column]
  const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column]
  const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column]

  if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol){
    winner = playername[firstSquareSymbol]
  }

}

return winner
}

function App() {
  let [playername, setPlayerName] = useState({
    "X" : "Player 1",
    "O" : "Player 2",
  })

  let [gameTurns, setGameTurns] = useState([])
  // let [activePlayer, setActivePlayer] = useState("X");

  let activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])];

    for(const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }


const winner = deriveWinner(gameBoard, playername)
const hasDraw = gameTurns.length == 9 && !winner

  function handleSelectSquare(rowIndex, colIndex){
    // setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      let currentplayer = deriveActivePlayer(prevTurns)

      const updateTurns = [
        {square : {row : rowIndex, col : colIndex}, player: currentplayer}, ...prevTurns
      ];

      return updateTurns
    });
  }

  function handleRematch(){
    setGameTurns([])
  }

  function handlePlayerName(symbol, newName){
    setPlayerName(prevPlayer => { 
      return{
        ...prevPlayer,
        [symbol] : newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol= "X" isActive={activePlayer === "X"} onChangeName={handlePlayerName} />
          <Player initialName="Player 2" symbol= "O" isActive={activePlayer === "O"} onChangeName={handlePlayerName}/>
        </ol>   
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>} 
      <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
