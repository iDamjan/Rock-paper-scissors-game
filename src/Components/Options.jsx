import React from "react";
import { useContext } from "react";
import { contextApi } from "../Context/Contex-api";
import classes from "./Options.module.scss";

export default function Options({setPlayAgain}) {

  const { options, setHostOption, setCompOption } =
    useContext(contextApi);

  const optionHandler = (e) => {
    setHostOption(options.find((option) => e.target.alt === option.name));

    const randomId = Math.floor(Math.random() * 3);
    
    setCompOption(options[randomId]);
    setPlayAgain(true);
  };

  return (
    <div>
      {options.map((option, index) => {
        return (
          <div className={classes.options} key={index} onClick={optionHandler}>
            <img src={option.img} alt={option.name} />
          </div>
        );
      })}
    </div>
  );
}
