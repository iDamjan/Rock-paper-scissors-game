import React from "react";


const ScoreBoard = ({hostScore, compScore}) => {
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
