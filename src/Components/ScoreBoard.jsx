import React, { useContext } from "react";
import { contextApi } from "../Context/ContextApi";
import classes from "./ScoreBoard.module.scss";

const ScoreBoard = () => {
  const { hostScore } = useContext(contextApi);

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
