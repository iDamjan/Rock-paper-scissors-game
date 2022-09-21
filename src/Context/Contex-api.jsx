import { createContext, useState } from "react";

import Rock from "../static/icon-rock.svg";
import Paper from "../static/icon-paper.svg";
import Scissors from "../static/icon-scissors.svg";

export const contextApi = createContext();

export const ContextProvider = ({children}) => {
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
  

  const gamePointHandler = () => {
    if (hostOption.name === "rock" && compOption.name === "paper") {
      setCompScore(compScore + 1);
    } else if (hostOption.name === "paper" && compOption.name === "rock") {
      setHostScore(hostScore + 1);
    } else if (hostOption.name === "scissors" && compOption.name === "paper") {
      setHostScore(hostScore + 1);
    } else if (hostOption.name === "paper" && compOption.name === "scissors") {
      setCompScore(compScore + 1);
    } else if (hostOption.name === "rock" && compOption.name === "scissors") {
      setHostScore(hostScore + 1);
    } else if (hostOption.name === "scissors" && compOption.name === "rock") {
      setCompScore(compScore + 1);
    }
  };
  return (
    <contextApi.Provider
      value={{
        hostOption,
        setHostOption,
        compOption,
        setCompOption,
        hostScore,
        setHostScore,
        compScore,
        setCompScore,
        gamePointHandler,
        options
      }}
    >{children}</contextApi.Provider>
  );
};
