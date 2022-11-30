import React from "react";
import { useContext } from "react";
import { contextApi } from "../../Context/ContextApi";
import classes from "./GameResult.module.scss";

export default function GameResult({ setPlayAgain }) {
  const { hostOption, compOption } = useContext(contextApi);

  return (
    <div className={classes.container}>
      <div className={classes.picked}>
        <p>You picked</p>
        <div
          className={classes.option}
          style={{ border: `20px solid ${hostOption.color}` }}
        >
          <img src={hostOption.img} alt="housePicked" />
        </div>
      </div>
      <div className={classes.button} onClick={() => setPlayAgain(false)}>
        Play Again
      </div>
      <div className={classes.picked}>
        <p>The House picked</p>
        <div
          className={classes.option}
          style={{ border: `20px solid ${compOption.color}` }}
        >
          <img src={compOption.img} alt="housePicked" />
        </div>
      </div>
    </div>
  );
}
