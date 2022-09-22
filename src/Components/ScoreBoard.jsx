import React, { useEffect } from "react";
import { useContext } from "react";
import { contextApi } from "../Context/Contex-api";
import classes from './ScoreBoard.module.scss'
const ScoreBoard = () => {
  
  const { hostScore, hostOption, compOption, gamePointHandler } =
    useContext(contextApi);


  useEffect(() => {
    gamePointHandler();
  }, [hostOption, compOption]);

  return (
    <div className={classes.container}>
      <h2>ROCK PAPER SCISSORS</h2>
      <div className={classes.scoreContainer}>
        <p>SCORE</p>
        <p>{hostScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
