import { useState } from "react";
import "./App.css";
import Options from "./Components/Options";
import ScoreBoard from "./Components/ScoreBoard";
import Rock from "./static/icon-rock.svg";
import Paper from "./static/icon-paper.svg";
import Scissors from "./static/icon-scissors.svg";

function App() {
  const options = [
    {
      name: "scissors",
      id: 1,
      img: Scissors,
    },
    {
      name: "paper",
      id: 2,
      img: Paper,
    },
    {
      name: "rock",
      id: 3,
      img: Rock,
    },
  ];

  const [hostOption, setHostOption] = useState("");
  const [compOption, setCompOption] = useState("");
  const [hostScore, setHostScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  return (
    <>
      <ScoreBoard
        host={hostOption}
        comp={compOption}
        hostScore={hostScore}
        
        compScore={compScore}
        
      />
      <Options
        options={options}
        hostOption={hostOption}
        setHostOption={setHostOption}
        compOption={compOption}
        setCompOption={setCompOption}
        setHostScore={setHostScore}
        setCompScore={setCompScore}
      />
    </>
  );
}

export default App;
