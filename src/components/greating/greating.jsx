import React from "react";
import "./greating.css";
// new Date(year,month,day,hours,minutes)
const Greating = () => {
  //   let CurrDate = new Date().toLocaleTimeString();
  let CurrDate = new Date();

  CurrDate = CurrDate.getHours();
  let CurrTime = new Date();
  CurrTime = CurrTime.getMinutes();
  let currSecond = new Date();
  currSecond = currSecond.getSeconds();
  let greeting = "";
  const cssStyle = {};

  if (CurrDate >= 1 && CurrDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (CurrDate >= 12 && CurrDate < 17) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (CurrDate >= 9 && CurrDate < 19) {
    greeting = "Good Evening";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <>
      <section className="greating-container">
        <h1>
          hello! everyone 👋👋
          <span style={cssStyle}>
            <br />
            {greeting}
            <br />
          </span>
          Time Is {CurrDate}:{CurrTime}:{currSecond}
        </h1>
      </section>
    </>
  );
};
export default Greating;