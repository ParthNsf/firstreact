import React, { useState, useEffect } from "react";
import style from "./Timer.module.css";

function FunTimer(props) {
  const [time, setTime] = useState(new Date());

  // click for updating new time
  const click = () => {
    setTime(new Date());
  };

  //  Mount  This block of code utilizes the useEffect hook. It runs a function on component mount and cleans up when the component unmounts.

  useEffect(() => {
    const timeRef = setInterval(click, 1000);

    return () => {
      clearInterval(timeRef);
    };
  }, []);
  

  //render and updating state value

  return (
    <div className={style.container}>
      <h1 className={style.card}>Time</h1>
      <h1 className={style.card}>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default FunTimer;
