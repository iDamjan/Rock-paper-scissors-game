import { createContext, useState } from "react";

import Rock from "../static/icon-rock.svg";
import Paper from "../static/icon-paper.svg";
import Scissors from "../static/icon-scissors.svg";

export const contextApi = createContext();

export const ContextProvider = ({ children }) => {
  const options = [
    {
      name: "scissors",
      id: 1,
      img: Scissors,
      rule: "beats paper",
    },
    {
      name: "paper",
      id: 2,
      img: Paper,
      rule: "beats rock",
    },
    {
      name: "rock",
      id: 3,
      img: Rock,
      rule: "beats scissors",
    },
  ];

  const [hostOption, setHostOption] = useState("");
  const [compOption, setCompOption] = useState("");
  const [hostScore, setHostScore] = useState(0);

  const gamePointHandler = () => {
    if (hostOption && compOption !== "") {
      if (hostOption.rule.includes(compOption.name)) {
        setHostScore(hostScore + 1);
      } else if (compOption.name === hostOption.name) {
        setHostScore(hostScore + 0);
      } else {
        setHostScore(hostScore - 1);
      }
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
        // compScore,
        // setCompScore,
        gamePointHandler,
        options,
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
