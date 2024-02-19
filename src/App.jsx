import { useState } from "react"

import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"

function App() {

  const [activePalyer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    console.log(activePalyer);
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="Player1" symbol="X" isActive={activePalyer === 'X'} />
          <Player intialName="Player2" symbol="O" isActive={activePalyer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePalyer} />
      </div>
      LOG
    </main>
  )
}
export default App
