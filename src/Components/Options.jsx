import React from "react";

export default function Options({
  options,
  hostOption,
  setHostOption,
  compOption,
  setCompOption,
  setCompScore,
  setHostScore
}) {

  const optionHandler = (e) => {
    const hostNameArray = options.find(
      (option) => e.target.alt === option.name
    );
    setHostOption(hostNameArray.name);
  

    const randomId = Math.floor(Math.random() * 3);
    setCompOption(options[randomId].name);

    if(hostOption === "rock" || compOption === "paper"){
      setCompScore(prev => prev + 1)
    } else if(hostOption === "paper" || compOption === "rock") {
      setHostScore( prev => prev + 1)
    } else if (hostOption === "scissors" || compOption === "paper"){
      setHostScore(prev => prev + 1)
    }else if (hostOption === "paper" || compOption === "scissors"){
      setCompScore(prev => prev + 1)
    } else if (hostOption === "rock" || compOption === "scissors"){
      setHostScore(prev => prev + 1)
    } else if (hostOption === "scissors" || compOption === "paper"){
      setCompScore(prev => prev + 1)
    }
    
  };

  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={index} onClick={optionHandler}>
            <img src={option.img} alt={option.name} />
          </div>
        );
      })}
    </div>
  );
}
