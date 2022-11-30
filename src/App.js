import Game from "./Components/Game/Game"
import { ContextProvider } from "./Context/ContextApi";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <Game />
    </ContextProvider>
  );
}

export default App;
