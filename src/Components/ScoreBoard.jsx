import React, { useEffect } from "react";
import { useContext } from "react";
import { contextApi } from "../Context/Contex-api";

const ScoreBoard = () => {
  
  const { hostScore, compScore, hostOption, compOption, gamePointHandler } =
    useContext(contextApi);

  useEffect(() => {
    gamePointHandler();
  }, [hostOption, compOption]);

  return (
    <div>
      <h2>ROCK PAPER SCISSORS</h2>
      <div>
        <p>score</p>
        <p>{hostScore}</p>
        <p>{compScore}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;
