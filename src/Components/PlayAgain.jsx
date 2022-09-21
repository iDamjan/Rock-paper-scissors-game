import React from "react";
import { useContext } from "react";
import { contextApi } from "../Context/Contex-api";
import classes from './PlayAgain.module.scss'
export default function PlayAgain({setPlayAgain}) {

  const {hostOption, compOption } = useContext(contextApi);

  return (

    <div>
      <div className="house">
        <p>You picked</p>
        <img src={hostOption.img} alt="housePicked" />
      </div>
      <div className={classes.button} onClick={() => setPlayAgain(false)}>
        Play Again
      </div>
      <div className="quest">
        <p>The House picked</p>
        <img src={compOption.img} alt="housePicked" />
      </div>
    </div>
  );
}
