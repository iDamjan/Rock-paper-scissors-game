import React from "react";
import { useContext, useState } from "react";
import { contextApi } from "../../Context/ContextApi";
import classes from "./Game.module.scss";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import GameResult from "../GameResult/GameResult";

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
    <div className={classes.container}>
      <ScoreBoard />
      {playAgain && <GameResult setPlayAgain={setPlayAgain} />}
      <div className={classes.options}>
        {!playAgain &&
          options.map((option) => {
            return (
              <div
                className={classes.option}
                style={{ border: `20px solid ${option.color}` }}
                key={option.id}
                onClick={() => optionHandler(option)}
              >
                <img src={option.img} alt={option.id} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
