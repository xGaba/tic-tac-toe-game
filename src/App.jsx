import Player from "./Components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="PLAYER 1" symbol= "X"/>
          <Player initialName="PLAYER 2" symbol= "O"/>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
