import React from "react";
import { useContext, useState } from "react";
import { contextApi } from "../Context/ContextApi";
import classes from "./Game.module.scss";
import ScoreBoard from "./ScoreBoard";
import GameResult from "./GameResult";

export default function Game() {
  const [playAgain, setPlayAgain] = useState(false);
  const { options, gamePointHandler } = useContext(contextApi);

  const optionHandler = (option) => {
    const hostOption = options.find((x) => x.id === option.id);

    // Chose a random id for the computer.
    const randomId = Math.floor(Math.random() * 3);
    const compOption = options[randomId];

    if (!hostOption || !compOption) return;

    gamePointHandler(hostOption, compOption);
    setPlayAgain(true);
  };

  return (
    <div>
      <ScoreBoard />
      {playAgain && <GameResult setPlayAgain={setPlayAgain} />}
      {!playAgain &&
        options.map((option) => {
          return (
            <div
              className={classes.options}
              key={option.id}
              onClick={() => optionHandler(option)}
            >
              <img src={option.img} alt={option.id} />
            </div>
          );
        })}
    </div>
  );
}
