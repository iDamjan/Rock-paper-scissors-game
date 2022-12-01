import { createContext, useState, useMemo } from "react";

import Rock from "../static/icon-rock.svg";
import Paper from "../static/icon-paper.svg";
import Scissors from "../static/icon-scissors.svg";
import { useEffect } from "react";

const gameOptions = [
  {
    id: "scissors",
    img: Scissors,
    winsAgainst: ["paper"],
    color: "#ECA823",
  },
  {
    id: "paper",
    img: Paper,
    winsAgainst: ["rock"],
    color: "#5472F7",
  },
  {
    id: "rock",
    img: Rock,
    winsAgainst: ["scissors"],
    color: "#DF3F61",
  },
];

export const contextApi = createContext({});

export const ContextProvider = ({ children }) => {
  const options = useMemo(() => gameOptions, []);

  const [hostOption, setHostOption] = useState("");
  const [compOption, setCompOption] = useState("");
  const [hostScore, setHostScore] = useState(0);

  useEffect(() => {
    const score = JSON.parse(localStorage.getItem("score"));
    if (score > 0) setHostScore(score);
  }, []);

  const gamePointHandler = (hostOption, compOption) => {
    setHostOption(hostOption);
    setCompOption(compOption);

    // Algorithm that determines which hand wins.

    if (hostOption.winsAgainst.includes(compOption.id)) {
      setHostScore(hostScore + 1);
    } else if (compOption.id === hostOption.id) {
      setHostScore(hostScore);
    } else {
      if (hostScore > 0) {
        setHostScore(hostScore - 1);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(hostScore));
  }, [hostScore]);

  return (
    <contextApi.Provider
      value={{
        hostOption,
        compOption,
        hostScore,
        gamePointHandler,
        options,
        setHostScore
      }}
    >
      {children}
    </contextApi.Provider>
  );
};
