import { useState } from "react";
import Options from "./Components/Options";
import ScoreBoard from "./Components/ScoreBoard";
import PlayAgain from "./Components/PlayAgain";
import { ContextProvider } from "./Context/Contex-api";

function App() {
  const [playAgain, setPlayAgain] = useState(false);

  return (
    
    <ContextProvider>
      <ScoreBoard />
      {!playAgain ? (
        <Options setPlayAgain={setPlayAgain} />
      ) : (
        <PlayAgain setPlayAgain={setPlayAgain} />
      )}
    </ContextProvider>
  );
}

export default App;
