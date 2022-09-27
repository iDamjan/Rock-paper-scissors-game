import { createContext, useState, useMemo } from "react";

import Rock from "../static/icon-rock.svg";
import Paper from "../static/icon-paper.svg";
import Scissors from "../static/icon-scissors.svg";

const gameOptions = [
  {
    id: "scissors",
    img: Scissors,
    winsAgainst: ["paper"],
  },
  {
    id: "paper",
    img: Paper,
    winsAgainst: ["rock"],
  },
  {
    id: "rock",
    img: Rock,
    winsAgainst: ["scissors"],
  },
];

export const contextApi = createContext({});

export const ContextProvider = ({ children }) => {
  const options = useMemo(() => gameOptions, []);

  const [hostOption, setHostOption] = useState("");
  const [compOption, setCompOption] = useState("");
  const [hostScore, setHostScore] = useState(0);

  const gamePointHandler = (hostOption, compOption) => {
    setHostOption(hostOption);
    setCompOption(compOption);

    // Algorithm that determines which hand wins.
    if (hostOption.winsAgainst.includes(compOption.id)) {
      setHostScore(hostScore + 1);
    } else if (compOption.id === hostOption.id) {
      setHostScore(hostScore);
    } else {
      setHostScore(hostScore - 1);
    }
  };

  return (
    <contextApi.Provider
      value={{
        hostOption,
        compOption,
        hostScore,
        gamePointHandler,
        options,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
